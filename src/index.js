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

		// M
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

		//A 
		this.add.isoSprite(7*tileHeight, 0, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(6*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(6*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(6*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(6*tileHeight, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(8*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(8*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(8*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(8*tileHeight, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(7*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);

		// N
		this.add.isoSprite(10*tileHeight, 0, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(10*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(10*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(10*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(10*tileHeight, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);

		this.add.isoSprite(11*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(12*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);

		this.add.isoSprite(13*tileHeight, 0, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(13*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(13*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(13*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(13*tileHeight, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);

		//A 
		this.add.isoSprite(16*tileHeight, 0, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(15*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(15*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(15*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(15*tileHeight, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(17*tileHeight, tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(17*tileHeight, 2*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(17*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(17*tileHeight, 4*tileHeight, zTallMargin, "grassTile", this.isoTiles);
		this.add.isoSprite(16*tileHeight, 3*tileHeight, zTallMargin, "grassTile", this.isoTiles);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1200,
  height: 600,
  scene: playGame
};

const game = new Phaser.Game(config);

