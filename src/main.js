import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// 导入页面组件
import Home from './views/Home.vue'
import ApiDocs from './views/ApiDocs.vue'
import Examples from './views/Examples.vue'
import Tutorial from './views/Tutorial.vue'

// 导入教程子页面
import Installation from './views/tutorial/Installation.vue'
import FirstScene from './views/tutorial/FirstScene.vue'
import ScenePage from './views/tutorial/ScenePage.vue'
import CameraPage from './views/tutorial/CameraPage.vue'
import RendererPage from './views/tutorial/RendererPage.vue'
import GeometryPage from './views/tutorial/GeometryPage.vue'
import MaterialPage from './views/tutorial/MaterialPage.vue'
import MeshPage from './views/tutorial/MeshPage.vue'
import LightsPage from './views/tutorial/LightsPage.vue'
import ShadowsPage from './views/tutorial/ShadowsPage.vue'
import AnimationPage from './views/tutorial/AnimationPage.vue'
import ControlsPage from './views/tutorial/ControlsPage.vue'

// 导入示例页面
import CubeExample from './views/examples/CubeExample.vue'
import SolarSystemExample from './views/examples/SolarSystemExample.vue'
import ParticleSystemExample from './views/examples/ParticleSystemExample.vue'

// 路由配置
const routes = [
  { path: '/', component: Home },
  { path: '/tutorial', component: Tutorial },
  { path: '/tutorial/installation', component: Installation },
  { path: '/tutorial/first-scene', component: FirstScene },
  { path: '/tutorial/scene', component: ScenePage },
  { path: '/tutorial/camera', component: CameraPage },
  { path: '/tutorial/renderer', component: RendererPage },
  { path: '/tutorial/geometry', component: GeometryPage },
  { path: '/tutorial/material', component: MaterialPage },
  { path: '/tutorial/mesh', component: MeshPage },
  { path: '/tutorial/lights', component: LightsPage },
  { path: '/tutorial/shadows', component: ShadowsPage },
  { path: '/tutorial/animation', component: AnimationPage },
  { path: '/tutorial/controls', component: ControlsPage },
  { path: '/api', component: ApiDocs },
  { path: '/examples', component: Examples },
  { path: '/examples/cube', component: CubeExample },
  { path: '/examples/solar-system', component: SolarSystemExample },
  { path: '/examples/particle-system', component: ParticleSystemExample }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')