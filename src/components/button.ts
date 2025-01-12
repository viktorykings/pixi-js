import { Application, BitmapText, Container, Graphics } from "pixi.js";

export const createButton = (
  app: Application,
  text: string,
  link: string,
  y: number = 200
) => {
  const buttonContainer = new Container();
  const button = new Graphics()
    .moveTo(app.screen.width / 2 - 50, y - 50)
    .rect(app.screen.width / 2 - 50, y + 20, 250, 50)
    .fill({ color: 0xf0a3f0 })
    .stroke({ width: 5, color: "#1099bb" });

  button.eventMode = "static";
  button.cursor = "pointer";
  button.addListener("pointerdown", () => {
    handleGoBack(link);
  });
  const bitmapFontText = new BitmapText({
    text: text,
    style: {
      fontFamily: "Desyrel",
      fontSize: 25,
      align: "left",
    },
  });

  bitmapFontText.x = app.screen.width / 2 - 40;
  bitmapFontText.y = y + 22;
  buttonContainer.addChild(button, bitmapFontText);
  return buttonContainer;
  app.stage.addChild(buttonContainer);
};
function handleGoBack(link: string) {
  window.location.href = link;
}
