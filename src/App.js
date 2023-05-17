import logo from "./logo.svg";
import "./App.css";
import "./components/Click.js";
import ReactHowler from "react-howler";
import "./components/Ramdom.js";

export const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

function isMatch(media) {
  const query = `(min-width: ${sizes[media]})`;
  return window.matchMedia(query).matches;
}

function findClosest(queries) {
  for (let i = queries.length - 1; i >= 0; i--) {
    if (isMatch(queries[i])) {
      return queries[i];
    }
  }
  return "sm";
}

function App() {
  return (
    <a-scene>
      <a-assets>
        <img id="sky1" src={require("../src/texture/gal2.jpg")} />;
        <img id="meteor" src={require("../src/texture/asteroid1.jpg")} />
        <a-asset-item
          id="cityModel"
          src={require("../src/models/ped.glb")}
        ></a-asset-item>
      </a-assets>
      <a-sky src="#sky1" />

      <a-entity
        class="orbit"
        position="0 0 0"
        rotation="0 0 -45"
        animation="property: rotation; to: 0 -360 0; loop: true; dur: 30000; easing: linear"
      ></a-entity>
      <a-entity
        class="orbit"
        position="0 -3 0"
        rotation="0 0 -90"
        animation="property: rotation; to: 0 360 360; loop: true; dur: 20000; easing: linear"
      ></a-entity>
      <a-entity
        class="orbit"
        position="0 0 0"
        rotation="0 0 -120"
        animation="property: rotation; to: 360 -360 0; loop: true; dur: 50000; easing: linear"
      ></a-entity>
      <a-camera>
        <a-cursor color="red" position="0 0 -1">
          <a-entity
            gltf-model="#cityModel"
            scale="0.6 0.6 0.6"
            position="-0.100 -1 -4"
            rotation="-3 180.66 3"
          ></a-entity>

          <a-entity>
            <a-text
              value="0 meteoritos cazados"
              color="white"
              position="-0.2 -0.6 -0.3"
              width="1"
              aling="center"
            ></a-text>
            <a-entity
              cursor=" fuse: true; fuseTimeout: 100 "
              raycaster="objects: .meteor"
              material="shader: flat"
            ></a-entity>
          </a-entity>
        </a-cursor>
      </a-camera>
    </a-scene>
  );
}

export default App;
<ReactHowler
  src={require("../src/sound/rat.mp3")}
  playing={true}
></ReactHowler>;
