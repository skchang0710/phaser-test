import Phaser from "phaser";
import IsoPlugin, { IsoPhysics } from "phaser3-plugin-isometric";
import grassTileData from "./assets/grassTile.json";
import grassTileImg from "./assets/grassTile.png";


const tallTight = 38;
const tileHeight = grassTileData.height - tallTight;
const zTallMargin = -10;


class playGame extends Phaser.Scene {
  constructor() {
    const sceneConfig = {
      key: "IsoCollisionExample",
      mapAdd: { isoPlugin: "iso", isoPhysics: "isoPhysics" }
    };
    super(sceneConfig);
  }
  preload() {
		this.load.scenePlugin({
			key: "IsoPlugin",
			url: IsoPlugin,
			sceneKey: "iso"
		});
	
		this.load.scenePlugin({
			key: "IsoPhysics",
			url: IsoPhysics,
			sceneKey: "isoPhysics"
		});

		this.load.spritesheet("grassTile", grassTileImg, {
			frameWidth: grassTileData.width, // from json
			frameHeight: grassTileData.height, // from json
			startFrame: 0 // only using this frame, this could be a this.load.image
		});
  }
  create() {
		// create tile group
		this.isoTiles = this.add.group();
		// set default camera placement
		this.iso.projector.origin.setTo(0.5, 0.1);

		let tile = this.add.isoSprite(0, 0, zTallMargin, "grassTile", this.isoTiles);
		tile.setInteractive();

		this.add.isoSprite(0, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(0, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(0, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(0, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);

		this.add.isoSprite(tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(2*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(3*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);

		this.add.isoSprite(4*tileHeight, 0, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(4*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(4*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(4*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(4*tileHeight, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		console.log(this.isoTiles);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: playGame
};

const game = new Phaser.Game(config);

