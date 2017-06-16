import * as Phaser from 'phaser-ce';

import {setStageBackgroundColor} from './util';

class Main {
  game: Phaser.Game;
  text: Phaser.Text;

  constructor() {
    this.game = new Phaser.Game(
        800, 600, Phaser.AUTO, 'content', {create: this.create});
  }

  create() {
    const hello = 'Hello World!';
    const style = {
      font: '65px Sans Serif',
      fill: '#d7e7a7',
      boundsAlignH: 'center',
      boundsAlignV: 'middle'
    };
    this.text = this.game.add.text(0, 0, hello, style);
    this.text.setTextBounds(0, 0, 800, 600);

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
