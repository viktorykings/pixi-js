import { Application } from "pixi.js";
import { addSnow, animateSnow, SnowGraphics } from "./addSnow";
import { addSnowdrifts } from "./addSnowDrift";

(async () => {
  const app = new Application();

  await app.init({
    background: "rgb(30, 30, 71)",
    resizeTo: document.getElementById("snow-wrapper")!,
  });
  const snow: SnowGraphics[] = [];
  addSnowdrifts(app);
  addSnow(app, snow);

  app.ticker.add((time) => {
    animateSnow(app, snow, time);
  });

  document.getElementById("pixi-container--snow")?.appendChild(app.canvas);
})();
