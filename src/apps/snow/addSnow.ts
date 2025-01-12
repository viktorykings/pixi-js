import { Application, Container, Graphics, Ticker } from "pixi.js";

export interface SnowGraphics extends Graphics {
  direction: number;
}

export const addSnow = (app: Application, snow: SnowGraphics[]) => {
  const container = new Container();
  const snowFlakesCount = 100;

  for (let i = 0; i < snowFlakesCount; i++) {
    const snowFlake: SnowGraphics = new Graphics() as SnowGraphics;
    snowFlake.star(0, 0, 8, 10, 2).fill({ color: "white" });
    snowFlake.pivot.set(0, 0);
    snowFlake.direction = Math.PI * Math.random() * 2;
    const x = Math.random() * app.screen.width;
    const y = Math.random() * app.screen.height;
    snowFlake.x = x;
    snowFlake.y = y;

    container.addChild(snowFlake);
    snow.push(snowFlake);
  }

  app.stage.addChild(container);
};

export const animateSnow = (
  app: Application,
  snow: SnowGraphics[],
  time: Ticker
) => {
  snow.forEach((s) => {
    s.rotation += time.deltaTime * Math.sin(s.direction) * 0.05;

    s.y += time.deltaTime;
    s.x += Math.sin(s.direction) * time.deltaTime * 0.11;

    if (s.y > app.screen.height) {
      s.y = 0;
    }
  });
};
