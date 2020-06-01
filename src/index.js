import { Color, Vec3, EnvMap, Scene, GLRenderer, PassType } from "../dist/zea-engine/dist/index.esm.js"
import { SelectionManager } from "../dist/zea-ux/dist/index.rawimport.js"
import { GLCADPass, CADAsset } from "../dist/zea-cad/dist/index.rawimport.js"
import { Session, SessionSync } from "../dist/zea-collab/dist/index.rawimport.js"
import loadModel from "./loadModel.js"
import setupGears from "./setupGears.js"
import setupExplode from "./setupExplode.js"
import setupCutaway from "./setupCutaway.js"
import setupStates from "./setupStates.js"

const domElement = document.getElementById("renderer");

const scene = new Scene();
// scene.setupGrid(1.0, 10);

const renderer = new GLRenderer( domElement, {
  webglOptions: {
    antialias: false, 
    canvasPosition: 'relative',
  },
});

renderer.getViewport().getCamera().setPositionAndTarget(new Vec3({"x":0.56971,"y":-0.83733,"z":0.34243}), new Vec3({"x":0.03095,"y":-0.05395,"z":0}))



const envMap = new EnvMap("SmartLocEnv");
envMap.getParameter('FilePath').setUrl("data/HDR_029_Sky_Cloudy_Ref.vlenv");
const backgroundColor = new Color('#e3e3e3');
scene.getSettings().getParameter('EnvMap').setValue(envMap);

const cadPass = new GLCADPass(true)
cadPass.setShaderPreprocessorValue('#define ENABLE_CUTAWAYS');
cadPass.setShaderPreprocessorValue('#define ENABLE_PBR');
renderer.addPass(cadPass, PassType.OPAQUE)


renderer.setScene(scene);
renderer.resumeDrawing();


////////////////////////////////////
// Load the Model
const asset = loadModel();
asset.loaded.connect(()=>{
  renderer.frameAll()
})

setupGears(asset);
setupExplode(asset);
setupCutaway(asset);
setupStates(asset, renderer);

// https://grabcad.com/library/two-speed-gear-box-1

scene.getRoot().addChild(asset)

renderer.getViewport().mouseDownOnGeom.connect((event)=>{
  const intersectionData = event.intersectionData;
  const geomItem = intersectionData.geomItem
  console.log(geomItem.getPath());
});
////////////////////////////////////
// Setup the Left side Tree view.

const appData = {
  scene,
  renderer
}

appData.selectionManager  = new SelectionManager(appData);

// // Note: the alpha value determines  the fill of the highlight.
const selectionColor = new Color("#F9CE03");
selectionColor.a = 0.1
const subtreeColor = selectionColor.lerp(new Color(1, 1, 1, 0), 0.5);
appData.selectionManager.selectionGroup.getParameter('HighlightColor').setValue(selectionColor)
appData.selectionManager.selectionGroup.getParameter('SubtreeHighlightColor').setValue(subtreeColor)

const sceneTreeView = document.getElementById(
  "zea-tree-view"
);
sceneTreeView.appData = appData
sceneTreeView.rootItem  = scene.getRoot()

document.addEventListener("keydown", event => {
  if(event.key==="f"){
    renderer.frameAll()
  }
});

// const camera = renderer.getViewport().getCamera();
// renderer.viewChanged.connect(() =>{
//   const xfoParam =  camera.getParameter('GlobalXfo')
//   console.log(xfoParam.getValue().tr.toString(), camera.getTargetPostion().toString())
// })


////////////////////////////////////
// Setup Collaboration

const socketUrl = 'https://websocket-staging.zea.live';

const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('user-id');
if (!userId) {
  userId = localStorage.getItem('userId');
  if(!userId) {
    userId = Math.random().toString(36).slice(2, 12);
    localStorage.setItem('userId', userId);
  }
} else {
  localStorage.setItem('userId', userId);
}


const color = Color.random();
const firstNames = ["Phil", "Froilan", "Alvaro", "Dan", "Mike", "Rob", "Steve"]
const lastNames = ["Taylor", "Smith", "Haines", "Moore", "Elías Pájaro Torreglosa", "Moreno"]
const userData = {
  given_name: firstNames[Math.randomInt(0, firstNames.length)],
  family_name: lastNames[Math.randomInt(0, lastNames.length)],
  id: userId,
  color: color.toHex()
}

const session = new Session(userData, socketUrl);
session.joinRoom('sassdfghjssasdasd');

const sessionSync = new SessionSync(session, appData, userData, {});


const userChipSet = document.getElementById(
  "zea-user-chip-set"
);
userChipSet.session = session
userChipSet.showImages = true;//boolean('Show Images', true)

document.addEventListener(
  'zeaUserClicked',
  () => {
    console.log('user clicked')
  },
  false
)

const userChip = document.getElementById(
  "zea-user-chip"
);
userChip.userData = userData


////////////////////////////////////
// Display the Fps
const fpsDisplay = document.createElement("zea-fps-display")
fpsDisplay.renderer  = renderer
domElement.appendChild(fpsDisplay)
