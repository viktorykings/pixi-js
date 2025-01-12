import { Application, Graphics } from "pixi.js";

const createTree = (width: number, height: number) => {
  const trunkColor = 0x563929;
  const trunkHeight = height / 4;
  const trunkWidth = 30;

  const crownHeight = height - trunkHeight;
  const crownLevels = 4;
  const crownLevelHeight = crownHeight / crownLevels;
  const crownWidthIncrement = width / crownLevels;
  const crownColor = 0x264d3d;

  const graphics = new Graphics()
    .rect(-trunkWidth / 2, -trunkHeight, trunkWidth, trunkHeight)
    .fill({ color: trunkColor });

  for (let i = 0; i < crownLevels; i++) {
    const y = -trunkHeight - crownLevelHeight * i;
    const levelWidth = width - crownWidthIncrement * i;
    const offset = i < crownLevels - 1 ? crownLevelHeight / 2 : 0;

    graphics
      .moveTo(-levelWidth / 2, y)
      .lineTo(0, y - crownLevelHeight - offset)
      .lineTo(levelWidth / 2, y)
      .fill({ color: crownColor });
  }

  return graphics;
};

export const addTrees = (app: Application) => {
  const treeWidth = 200;
  const y = app.screen.height - 20;
  const spacing = 15;
  const count = app.screen.width / (treeWidth + spacing) + 1;
  const trees: Graphics[] = [];

  for (let index = 0; index < count; index++) {
    const treeHeight = 225 + Math.random() * 50;
    const tree = createTree(treeWidth, treeHeight);

    tree.x = index * (treeWidth + spacing);
    tree.y = y;

    app.stage.addChild(tree);
    trees.push(tree);
  }

  app.ticker.add((time) => {
    const dx = time.deltaTime * 3;
    trees.forEach((tree) => {
      tree.x -= dx;

      if (tree.x <= -(treeWidth / 2 + spacing)) {
        tree.x += count * (treeWidth + spacing * 3) + spacing * 3;
      }
    });
  });
};
