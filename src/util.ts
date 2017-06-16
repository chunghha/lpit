import * as Phaser from 'phaser-ce';

export function setStageBackgroundColor(stage: Phaser.Stage) {
  // set stage background color with random color.
  stage.backgroundColor = Phaser.Color.getRandomColor(25, 50, 80);
}
