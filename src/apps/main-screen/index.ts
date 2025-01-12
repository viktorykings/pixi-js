import { Application, Container } from "pixi.js";
import { createButton } from "../../components/button";
const buttonsNames = [
  { text: "Bunny amination", link: "./src/pages/bunny.html" },
  { text: "Fish pond amination", link: "./src/pages/fish-pond.html" },
  { text: "Graphics", link: "./src/pages/graphics.html" },
  { text: "Snow animation", link: "./src/pages/snow.html" },
  { text: "Train animation", link: "./src/pages/train.html" },
];

(async () => {
  const app = new Application();

  await app.init({
    resizeTo: window,
    background: "#1099bb",
  });

  document.getElementById("app")!.appendChild(app.canvas);

  const container = new Container();
  const btns = buttonsNames.map((el, i) =>
    createButton(app, el.text, el.link, i * 50)
  );

  container.x += app.screen.width / 4;
  container.y = app.screen.height / 4;
  container.addChild(...btns);
  app.stage.addChild(container);
})();
