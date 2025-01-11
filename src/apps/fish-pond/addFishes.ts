import { Application, Container, Renderer, Sprite, Ticker } from "pixi.js";
import { fishesAssets } from "../../assets/fish-pond-assets";

export interface FishSprite extends Sprite {
  direction: number;
  speed: number;
  turnSpeed: number;
}

export const addFishes = (app: Application<Renderer>, fishes: FishSprite[]) => {
  const container = new Container();

  const fishCount = 20;

  for (let i = 0; i < fishCount; i++) {
    const fishAsset = fishesAssets[i % fishesAssets.length];
    const fish: FishSprite = Sprite.from(fishAsset) as FishSprite;
    fish.anchor.set(0.5);

    fish.direction = Math.random() * Math.PI * 2;
    fish.speed = 2 + Math.random() * 2;
    fish.turnSpeed = Math.random() - 0.8;

    fish.x = Math.random() * app.screen.width;
    fish.y = Math.random() * app.screen.height;

    fish.scale.set(0.5 + Math.random() * 0.5);

    container.addChild(fish);
    fishes.push(fish);
  }

  app.stage.addChild(container);
};

export const animateFishes = (
  app: Application<Renderer>,
  fishes: FishSprite[],
  time: Ticker
) => {
  const delta = time.deltaTime;
  const stagePadding = 100;
  const boundWidth = app.screen.width + stagePadding * 2;
  const boundHeight = app.screen.height + stagePadding * 2;

  fishes.forEach((fish) => {
    fish.direction += delta * 0.01;
    fish.x += Math.sin(fish.direction) * fish.speed;
    fish.y += Math.cos(fish.direction) * fish.speed;
    fish.rotation = -fish.direction - Math.PI / 2;

    if (fish.x < -stagePadding) {
      fish.x += boundWidth;
    }
    if (fish.x > app.screen.width + stagePadding) {
      fish.x -= boundWidth;
    }
    if (fish.y < -stagePadding) {
      fish.y += boundHeight;
    }
    if (fish.y > app.screen.height + stagePadding) {
      fish.y -= boundHeight;
    }
  });
};
