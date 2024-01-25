import { v4 as uuidv4 } from "uuid";

export const abstracts = [
  {
    id: uuidv4(),
    path: "like-a-cannonball",
    type: "Digital Abstract Art",
    src: "/ABSTRACTS/1/PaintedSunInAbstract/PaintedSunInAbstract.png",
    wips: [
      "/ABSTRACTS/1/PaintedSunInAbstract/PaintedSunInAbstractBlue.png",
      "/ABSTRACTS/1/PaintedSunInAbstract/PaintedSunInAbstractOrange.png",
      "/ABSTRACTS/1/PaintedSunInAbstract/PaintedSunInAbstractPurple.png",
      "/ABSTRACTS/1/PaintedSunInAbstract/PaintedSunInAbstractRed.png",
      "/ABSTRACTS/1/PaintedSunInAbstract/PaintedSunInAbstractYellow.png",
    ],
    alt: "Digital abstract render image made with Blender",
    description: `3D abstract art made with Blender.`,
    width: 1024,
    height: 1024,
    tools: ["Blender 3D", "Adobe Photoshop"],
  },
];
