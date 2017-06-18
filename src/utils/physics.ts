import * as Phaser from 'phaser-ce';

export function moveText(game: Phaser.Game, text: Phaser.Text) {
  game.physics.arcade.enable(text);
  text.body.velocity.setTo(200, 200);
  text.body.collideWorldBounds = true;
  text.body.bounce.set(1);
  text.body.moves = true;
}

export function stopText(text: Phaser.Text) {
  text.body.moves = false;
}
