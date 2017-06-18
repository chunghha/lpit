import * as Phaser from 'phaser-ce';

export function decreaseTextAlpha(text: Phaser.Text) {
  if (text.alpha >= 0.1) {
    text.alpha = text.alpha - 0.1;
  } else {
    text.alpha = 0;
  }
}

export function increaseTextAlpha(text: Phaser.Text) {
  if (text.alpha <= 0.9) {
    text.alpha = text.alpha + 0.1;
  } else {
    text.alpha = 1;
  }
}
