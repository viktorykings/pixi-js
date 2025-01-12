import { Application } from "pixi.js";
import { addStars } from "./addStars";
import { addMoon } from "./addMoon";
import { addMountains } from "./addMountains";
import { addTrees } from "./addTrees";

(async () => {
  const app = new Application();

  await app.init({
    resizeTo: document.getElementById("train-wrapper")!,
    background: "#021f4b",
  });

  document.getElementById("pixi-container--train")!.appendChild(app.canvas);

  addStars(app);
  addMoon(app);
  addMountains(app);
  addTrees(app);
})();
