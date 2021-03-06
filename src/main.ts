import * as Phaser from 'phaser-ce';
import * as WebFont from 'webfontloader';

import {decreaseTextAlpha, increaseTextAlpha} from './utils/alpha';
import {setStageBackgroundColor} from './utils/background';
import {moveText, stopText} from './utils/physics';

class Main {
  game: Phaser.Game;
  text: Phaser.Text;

  constructor() {
    WebFont.load({google: {families: ['Signika']}});

    this.game = new Phaser.Game(
        800, 600, Phaser.AUTO, 'content', {create: this.create});
  }

  create() {
    this.game.time.events.add(Phaser.Timer.SECOND, () => {
      const hello = 'Hello World!';
      const style = {
        font: '96px Signika',
        fill: '#d7e7a7',
        boundsAlignH: 'center',
        boundsAlignV: 'middle'
      };
      this.text = this.game.add.text(0, 0, hello, style);
      this.text.setShadow(-5, 7, 'rgba(0, 0, 0, 0.7)', 0);
      this.text.setTextBounds(0, 0, 800, 600);

      // change alpha of text by J/K keys.
      this.text.alpha = 1;
      this.game.input.keyboard.addKey(Phaser.Keyboard.J)
          .onDown.add(text => decreaseTextAlpha(this.text), this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.K)
          .onDown.add(text => increaseTextAlpha(this.text), this);

      // start/stop moving of text by H/L keys.
      this.game.input.keyboard.addKey(Phaser.Keyboard.H)
          .onDown.add((game, text) => moveText(this.game, this.text), this);
      this.game.input.keyboard.addKey(Phaser.Keyboard.L)
          .onDown.add(text => stopText(this.text), this);
    });

    // initial background color with space cadet.
    this.game.stage.backgroundColor = '#1d2951';
    // add pointer down listener to set stage background color.
    this.game.input.onDown.add(
        stage => setStageBackgroundColor(this.game.stage), this);
  }
}

window.onload = () => {
  const game = new Main();
};
