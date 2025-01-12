import { Application, Assets, Graphics } from "pixi.js";
import { createButton } from "../../components/button";

(async () => {
  const app = new Application();

  await app.init({
    background: "#1099bb",
    resizeTo: document.getElementById("graphics-wrapper")!,
  });
  await Assets.load("https://pixijs.com/assets/bitmap-font/desyrel.xml");

  document.getElementById("pixi-container--graphics")!.appendChild(app.canvas);

  createButton(app, "Go back", "http://localhost:8080");

  const rectangle = new Graphics()
    .rect(200, 200, 50, 80)
    .fill({ color: "#fff" })
    .stroke({
      width: 6,
      color: "#f4f4f4",
    });

  const star = new Graphics()
    .star(400, 200, 5, 50, 30, 25)
    .fill({ color: "yellow" });

  const roundRectangle = new Graphics()
    .roundRect(600, 200, 100, 50)
    .fill({ color: "pink" });

  const circle = new Graphics().circle(800, 200, 50).fill({ color: "pink" });

  const ellipse = new Graphics()
    .ellipse(1000, 200, 80, 40)
    .fill({ color: "red" });

  const arc = new Graphics()
    .arc(200, 500, 200, Math.PI, 2 * Math.PI)
    .fill({ color: "pink" });

  const bezier = new Graphics()
    .moveTo(400, 500)
    .bezierCurveTo(400, 500, 500, 300, 600, 500)
    .fill({ color: "red" });

  const quadratic = new Graphics()
    .moveTo(600, 500)
    .quadraticCurveTo(700, 300, 800, 500)
    .fill({ color: "green" });

  const chamferRect = new Graphics()
    .chamferRect(800, 400, 100, 100, 5)
    .fill({ color: "yellow" });

  const poly = new Graphics()
    .poly([
      { x: 800, y: 500 },
      { x: 850, y: 450 },
      { x: 920, y: 480 },
      { x: 890, y: 550 },
      { x: 820, y: 570 },
    ])
    .fill({ color: "white" });

  const regularPoly = new Graphics()
    .regularPoly(1050, 500, 100, 8)
    .fill({ color: "white" })
    .stroke({ color: "#f4f4f4" });

  app.stage.addChild(rectangle);
  app.stage.addChild(star);
  app.stage.addChild(roundRectangle);
  app.stage.addChild(circle);
  app.stage.addChild(ellipse);
  app.stage.addChild(arc);
  app.stage.addChild(bezier);
  app.stage.addChild(quadratic);
  app.stage.addChild(chamferRect);
  app.stage.addChild(poly);
  app.stage.addChild(regularPoly);
})();
