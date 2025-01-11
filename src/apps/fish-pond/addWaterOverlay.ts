import { Application, Texture, Ticker, TilingSprite } from "pixi.js";
let overlay: TilingSprite;

export const addWaterOverlay = (app: Application) => {
  const texture = Texture.from("overlay");

  overlay = new TilingSprite({
    texture: texture,
    width: app.screen.width,
    height: app.screen.height,
  });

  app.stage.addChild(overlay);
};

export const animateWaterOverlay = (time: Ticker) => {
  const delta = time.deltaTime;

  overlay.tilePosition.x -= delta;
  overlay.tilePosition.y -= delta;
};
