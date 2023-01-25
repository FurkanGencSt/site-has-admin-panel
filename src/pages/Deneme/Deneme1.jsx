import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import cat from "../../assets/pictures/Parallax/cat.gif";
import p1 from "../../assets/pictures/Parallax/p1.png";
import p2 from "../../assets/pictures/Parallax/p2.webp";
import p3 from "../../assets/pictures/Parallax/p3.png";
import p6 from "../../assets/pictures/Parallax/p6.png";

import "./deneme.css";
export default function Deneme1() {
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
    </Parallax>
  );
}
