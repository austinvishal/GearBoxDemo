const { SystemDesc, Color, Vec3, EnvMap, Scene, GLRenderer } = window.zeaEngine;

import loadModel from './1-loadModel.js';
import setupMaterials from './2-setupMaterials.js';
import setupCutaway from './3-setupCutaway.js';
import setupGears from './4-setupGears.js';
import setupExplode from './5-setupExplode.js';
import setupStates from './6-setupStates.js';

const domElement = document.getElementById('renderer');

const scene = new Scene();
// scene.setupGrid(1.0, 10);

const renderer = new GLRenderer(domElement, {
  webglOptions: {
    antialias: true,
    canvasPosition: 'relative',
  },
});

if (!SystemDesc.isMobileDevice && renderer.gl.floatTexturesSupported) {
  const envMap = new EnvMap('EnvMap');
  envMap.load('data/StudioG.zenv');
  // envMap.getParameter('HeadLightMode').setValue(true)

  // renderer.gamma = 2.5;
  renderer.exposure = 1.5;
  scene.setEnvMap(envMap);
}

renderer.outlineThickness = 1.0;
renderer.outlineSensitivity = 5.0;
renderer
  .getViewport()
  .getCamera()
  .setPositionAndTarget(new Vec3({ x: 0.56971, y: -0.83733, z: 0.34243 }), new Vec3({ x: 0.03095, y: -0.05395, z: 0 }));

renderer.getViewport().backgroundColorParam.setValue(new Color('#D9EAFA'));

renderer.setScene(scene);

const camera = renderer.getViewport().getCamera();
camera.getTargetPostion = camera.getTargetPosition;

renderer.getViewport().on('pointerDown', (event) => {
  if (event.intersectionData) {
    const intersectionData = event.intersectionData;
    const geomItem = intersectionData.geomItem;
    console.log(geomItem.getPath());
  }
});

////////////////////////////////////
// Load the Model
// Page 1 - load and setup the cad Model.
const asset = loadModel();
scene.getRoot().addChild(asset);
// asset.once('loaded', () => {
//   renderer.frameAll()
// })
window.setRenderingMode = setupMaterials(asset, scene);

setupCutaway(asset);
setupGears(asset);
setupExplode(asset);
const stateMachine = setupStates(asset, renderer);

/*  

// // https://grabcad.com/library/two-speed-gear-box-1

////////////////////////////////////
// Setup the Left side Tree view.
const { SelectionManager, UndoRedoManager } = window.zeaUx;

const appData = {
  scene,
  renderer,
};

// This UndoRedoManager is here to facilitate collaboration changes in the scene.
// Changes are recorded to the UndoRedoManager, which is then synchronized using
// SessionSync below.
appData.undoRedoManager = new UndoRedoManager();
appData.selectionManager = new SelectionManager(appData);

// // Note: the alpha value determines  the fill of the highlight.
const selectionColor = new Color('#00ff00');
selectionColor.a = 0.1;
const subtreeColor = selectionColor.lerp(new Color(1, 1, 1, 0), 0.5);
appData.selectionManager.selectionGroup.getParameter('HighlightColor').setValue(selectionColor);
appData.selectionManager.selectionGroup.getParameter('SubtreeHighlightColor').setValue(subtreeColor);

// const sceneTreeView = document.getElementById('zea-tree-view');
// sceneTreeView.rootItem = scene.getRoot();
// sceneTreeView.appData = appData;

document.addEventListener('keydown', (event) => {
  if (event.key === 'f') {
    renderer.frameAll();
  } else if (event.key === 'w') {
    cadPass.displayWireframes = !cadPass.displayWireframes;
  }
});
*/
// const camera = renderer.getViewport().getCamera();
// renderer.viewChanged.connect(() =>{
//   const xfoParam =  camera.getParameter('GlobalXfo')
//   console.log(xfoParam.getValue().tr.toString(), camera.getTargetPosition().toString())
// })

// ////////////////////////////////////
// // Setup Collaboration
// const { Session, SessionSync } = window.zeaCollab;

// const socketUrl = 'https://websocket-staging.zea.live';

// const urlParams = new URLSearchParams(window.location.search);

// const color = Color.random();
// const firstNames = ['Phil', 'Froilan', 'Alvaro', 'Dan', 'Mike', 'Rob', 'Steve'];
// const lastNames = ['Taylor', 'Smith', 'Haines', 'Moore', 'Elías Pájaro Torreglosa', 'Moreno'];
// const userData = {
//   given_name: firstNames[MathFunctions.randomInt(0, firstNames.length)],
//   family_name: lastNames[MathFunctions.randomInt(0, lastNames.length)],
//   id: Math.random().toString(36).slice(2, 12),
//   color: color.toHex(),
// };

// const session = new Session(userData, socketUrl);

// let roomId = urlParams.get('room-id');
// session.joinRoom(document.location.href + roomId);

// const sessionSync = new SessionSync(session, appData, userData, {});
// sessionSync.syncStateMachines(stateMachine);

// const userChipSet = document.getElementById('zea-user-chip-set');
// userChipSet.session = session;
// userChipSet.showImages = true; //boolean('Show Images', true)

// document.addEventListener(
//   'zeaUserClicked',
//   () => {
//     console.log('user clicked');
//   },
//   false
// );

// const userChip = document.getElementById('zea-user-chip');
// userChip.userData = userData;

////////////////////////////////////
// Display the Fps
const fpsDisplay = document.createElement('zea-fps-display');
fpsDisplay.renderer = renderer;
domElement.appendChild(fpsDisplay);
