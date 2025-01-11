import { Application, Assets } from "pixi.js";
import { assets } from "../../assets/fish-pond-assets";
import { addBackground } from "./addBackground";
import { addFishes, animateFishes, FishSprite } from "./addFishes";
import { addWaterOverlay, animateWaterOverlay } from "./addWaterOverlay";
import { addDisplacementEffect } from "./addDisplacementEffect";

const app = new Application();
const fishes: FishSprite[] = [];

const setup = async () => {
  await app.init({
    background: "#1099bb",
    resizeTo: document.getElementById("fish-pond-wrapper")!,
  });

  document.getElementById("pixi-container--fish-pond")!.appendChild(app.canvas);
};

const preload = async () => {
  await Assets.load(assets);
};

(async () => {
  await preload();
  await setup();
  addBackground(app);
  addFishes(app, fishes);
  addWaterOverlay(app);
  addDisplacementEffect(app);

  app.ticker.add((time) => {
    animateFishes(app, fishes, time);
    animateWaterOverlay(time);
  });
})();
