import { Scene } from "phaser";

import skyBackground from "../assets/sky.png";
import dudeImg from "../assets/dude.png";
import thudMp3 from "../assets/thud.mp3";
import thudOgg from "../assets/thud.ogg";

export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.image("sky", skyBackground);
    this.load.image("dude", dudeImg);
    this.load.audio("thud", [thudMp3, thudOgg]);
  }

  create() {
    this.scene.start("PlayScene");
  }
}
