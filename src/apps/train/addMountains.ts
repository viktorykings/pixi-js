import { Application, Graphics } from "pixi.js";

const createMountainGroup = (app: Application) => {
  const colorLeft = 0xc1c0c2;
  const colorMiddle = 0x7e818f;
  const colorRight = 0x8c919f;

  const startLeft = 0;
  const startMiddle = app.screen.width * 0.33;
  const startRight = app.screen.width * 0.66;

  const leftX = app.screen.width / 4;
  const middleX = app.screen.width / 2;
  const rightX = (app.screen.width / 4) * 3;

  const middleHeight = 1000;
  const leftHeight = 600;
  const rightHeight = 700;

  const padding = 30;
  const mountainWidth = app.screen.width / 5 + padding * 2;
  const screenBottom = app.screen.height;

  const graphics = new Graphics()
    .moveTo(startMiddle, screenBottom)
    .quadraticCurveTo(
      middleX,
      screenBottom - middleHeight,
      middleX + mountainWidth,
      screenBottom
    )
    .fill({ color: colorMiddle })

    .moveTo(startRight + padding, screenBottom)
    .quadraticCurveTo(
      rightX + padding * 2,
      screenBottom - rightHeight,
      rightX + mountainWidth,
      screenBottom
    )
    .fill({ color: colorRight })

    .moveTo(startLeft, screenBottom)
    .quadraticCurveTo(
      leftX,
      screenBottom - leftHeight,
      leftX + mountainWidth,
      screenBottom
    )
    .fill({ color: colorLeft });

  return graphics;
};

export const addMountains = (app: Application) => {
  const mountains1 = createMountainGroup(app);
  const mountains2 = createMountainGroup(app);

  mountains2.x = app.screen.width;

  app.ticker.add((time) => {
    mountains1.x -= time.deltaTime;
    mountains2.x -= time.deltaTime;
    if (mountains1.x <= -app.screen.width) {
      mountains1.x += app.screen.width * 2;
    }
    if (mountains2.x <= -app.screen.width) {
      mountains2.x += app.screen.width * 2;
    }
  });

  app.stage.addChild(mountains1, mountains2);
};
