import { Application, Graphics } from "pixi.js";

export const addSnowdrifts = (app: Application) => {
  const snowdrifts = createSnowdrifts(app);

  app.stage.addChild(snowdrifts);
};

const createSnowdrifts = (app: Application) => {
  const leftPickX = app.screen.width / 4;
  const middlePickX = app.screen.width / 2;
  const rightPickX = app.screen.width * 0.8;

  const leftPickY = app.screen.height / 2;
  const milldlePickY = app.screen.height * 0.4;
  const rightPickY = app.screen.height * 0.3;

  const grahpics = new Graphics();

  grahpics

    //   middle
    .moveTo(leftPickX - leftPickX / 2, app.screen.height)
    .quadraticCurveTo(
      middlePickX,
      milldlePickY,
      app.screen.width,
      app.screen.height
    )
    .fill({ color: 0xd0d0d0 })

    //   const rightSnowdrift
    .moveTo(middlePickX, app.screen.height)
    .quadraticCurveTo(
      rightPickX,
      rightPickY,
      app.screen.width + 400,
      app.screen.height
    )
    .fill({ color: 0xe0e0e0 })
    //  left snowdrift
    .moveTo(-leftPickX / 2, app.screen.height)
    .quadraticCurveTo(
      leftPickX,
      leftPickY,
      middlePickX + 200,
      app.screen.height
    )
    .fill({ color: "white" });

  return grahpics;
};
