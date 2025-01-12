import { Application, Graphics } from "pixi.js";

export const addStars = (app: Application) => {
  const starsCount = 20;
  const graphics = new Graphics();

  for (let i = 0; i < starsCount; i++) {
    const x = (i * 0.78695 * app.screen.width) % app.screen.width;
    const y = (i * 0.9382 * app.screen.height) % app.screen.height;
    const radius = 1 + Math.random() * 5;
    graphics.star(x, y, 5, radius).fill({ color: "yellow" });
  }
  app.stage.addChild(graphics);
};
