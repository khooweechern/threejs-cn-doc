<template>
  <div class="tutorial-page">
    <h1>阴影 (Shadows)</h1>
    
    <div class="content">
      <section>
        <h2>什么是阴影？</h2>
        <p>阴影（Shadows）是 3D 场景中增强真实感的重要元素。它们不仅让物体看起来更立体，还能帮助观察者理解物体之间的空间关系和距离。</p>
        
        <p>Three.js 中的阴影系统包含三个关键要素：</p>
        <ul>
          <li><strong>光源</strong>：投射阴影的光源（DirectionalLight、PointLight、SpotLight）</li>
          <li><strong>投射者</strong>：产生阴影的物体（castShadow = true）</li>
          <li><strong>接收者</strong>：显示阴影的表面（receiveShadow = true）</li>
        </ul>
        
        <div class="shadow-demo">
          <div class="demo-canvas" ref="basicShadowCanvas"></div>
          <div class="demo-explanation">
            <p><strong>基础阴影演示</strong></p>
            <p>立方体投射阴影，平面接收阴影</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2>启用阴影系统</h2>
        <p>要在 Three.js 中使用阴影，需要进行以下设置：</p>
        
        <h3>1. 启用渲染器阴影</h3>
        <pre><code>// 启用阴影渲染
renderer.shadowMap.enabled = true

// 设置阴影类型（可选）
renderer.shadowMap.type = THREE.PCFSoftShadowMap  // 软阴影（默认）
// renderer.shadowMap.type = THREE.BasicShadowMap     // 基础阴影
// renderer.shadowMap.type = THREE.PCFShadowMap       // PCF阴影
// renderer.shadowMap.type = THREE.VSMShadowMap       // VSM阴影</code></pre>
        
        <h3>2. 设置光源投射阴影</h3>
        <pre><code>// 方向光阴影
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(10, 10, 5)
directionalLight.castShadow = true

// 点光源阴影
const pointLight = new THREE.PointLight(0xffffff, 1, 100)
pointLight.position.set(10, 10, 10)
pointLight.castShadow = true

// 聚光灯阴影
const spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4)
spotLight.position.set(10, 10, 10)
spotLight.castShadow = true</code></pre>
        
        <h3>3. 设置物体阴影属性</h3>
        <pre><code>// 物体投射阴影
const cube = new THREE.Mesh(geometry, material)
cube.castShadow = true

// 物体接收阴影
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true</code></pre>
      </section>
      
      <section>
        <h2>阴影类型对比</h2>
        <p>Three.js 提供了多种阴影类型，各有特点：</p>
        
        <div class="shadow-types">
          <div class="shadow-type-item" v-for="shadowType in shadowTypes" :key="shadowType.name">
            <div class="shadow-preview" :ref="el => setShadowRef(shadowType.name, el)"></div>
            <h3>{{ shadowType.name }}</h3>
            <p>{{ shadowType.description }}</p>
            <div class="shadow-features">
              <span v-for="feature in shadowType.features" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>阴影贴图设置</h2>
        <p>阴影质量主要由阴影贴图的分辨率决定：</p>
        
        <h3>阴影贴图尺寸</h3>
        <pre><code>// 设置阴影贴图分辨率
light.shadow.mapSize.width = 2048   // 宽度
light.shadow.mapSize.height = 2048  // 高度

// 常用分辨率：
// 512x512   - 低质量，高性能
// 1024x1024 - 中等质量
// 2048x2048 - 高质量
// 4096x4096 - 超高质量，性能消耗大</code></pre>
        
        <h3>阴影相机设置</h3>
        <p>每个投射阴影的光源都有一个阴影相机，用于渲染阴影贴图：</p>
        
        <pre><code>// 方向光阴影相机（正交相机）
directionalLight.shadow.camera.left = -10
directionalLight.shadow.camera.right = 10
directionalLight.shadow.camera.top = 10
directionalLight.shadow.camera.bottom = -10
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 50

// 点光源阴影相机（透视相机）
pointLight.shadow.camera.near = 0.1
pointLight.shadow.camera.far = 100
pointLight.shadow.camera.fov = 90

// 聚光灯阴影相机（透视相机）
spotLight.shadow.camera.near = 0.1
spotLight.shadow.camera.far = 100
spotLight.shadow.camera.fov = 45</code></pre>
        
        <div class="interactive-shadow-demo">
          <h3>交互式阴影调节</h3>
          <div class="demo-container">
            <div class="demo-canvas" ref="interactiveShadowCanvas"></div>
            <div class="demo-controls">
              <div class="control-section">
                <h4>阴影设置</h4>
                <div class="control-group">
                  <label>阴影类型:</label>
                  <select v-model="shadowType" @change="updateShadowType">
                    <option value="PCFSoftShadowMap">PCF软阴影</option>
                    <option value="PCFShadowMap">PCF阴影</option>
                    <option value="BasicShadowMap">基础阴影</option>
                  </select>
                </div>
                <div class="control-group">
                  <label>贴图尺寸:</label>
                  <select v-model="mapSize" @change="updateMapSize">
                    <option value="512">512x512</option>
                    <option value="1024">1024x1024</option>
                    <option value="2048">2048x2048</option>
                  </select>
                </div>
              </div>
              
              <div class="control-section">
                <h4>光源位置</h4>
                <div class="control-group">
                  <label>X: <span>{{ lightPosition.x }}</span></label>
                  <input type="range" min="-10" max="10" step="1" v-model="lightPosition.x" @input="updateLightPosition">
                </div>
                <div class="control-group">
                  <label>Y: <span>{{ lightPosition.y }}</span></label>
                  <input type="range" min="2" max="15" step="1" v-model="lightPosition.y" @input="updateLightPosition">
                </div>
                <div class="control-group">
                  <label>Z: <span>{{ lightPosition.z }}</span></label>
                  <input type="range" min="-10" max="10" step="1" v-model="lightPosition.z" @input="updateLightPosition">
                </div>
              </div>
              
              <div class="control-section">
                <h4>阴影相机</h4>
                <div class="control-group">
                  <label>范围: <span>{{ cameraSize }}</span></label>
                  <input type="range" min="5" max="20" step="1" v-model="cameraSize" @input="updateCameraSize">
                </div>
                <div class="control-group">
                  <label>
                    <input type="checkbox" v-model="showHelper" @change="toggleHelper">
                    显示辅助器
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>阴影优化技巧</h2>
        
        <h3>1. 选择合适的阴影类型</h3>
        <ul>
          <li><strong>BasicShadowMap</strong>：性能最好，但边缘锯齿明显</li>
          <li><strong>PCFShadowMap</strong>：中等性能，边缘较平滑</li>
          <li><strong>PCFSoftShadowMap</strong>：性能较低，但阴影最柔和</li>
          <li><strong>VSMShadowMap</strong>：支持半透明阴影，但内存消耗大</li>
        </ul>
        
        <h3>2. 优化阴影贴图尺寸</h3>
        <pre><code>// 根据重要性设置不同的贴图尺寸
mainLight.shadow.mapSize.setScalar(2048)      // 主光源高质量
fillLight.shadow.mapSize.setScalar(1024)      // 补光低质量
decorativeLight.shadow.mapSize.setScalar(512) // 装饰光源最低质量</code></pre>
        
        <h3>3. 限制阴影范围</h3>
        <pre><code>// 优化方向光阴影相机范围
directionalLight.shadow.camera.left = -5
directionalLight.shadow.camera.right = 5
directionalLight.shadow.camera.top = 5
directionalLight.shadow.camera.bottom = -5
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 20  // 不要设置过大

// 更新阴影相机
directionalLight.shadow.camera.updateProjectionMatrix()</code></pre>
        
        <h3>4. 选择性启用阴影</h3>
        <pre><code>// 只对重要物体启用阴影
importantMesh.castShadow = true
importantMesh.receiveShadow = true

// 远距离或小物体可以禁用阴影
distantMesh.castShadow = false
smallMesh.castShadow = false</code></pre>
      </section>
      
      <section>
        <h2>常见问题解决</h2>
        
        <h3>Q: 阴影显示不正确或有锯齿？</h3>
        <p>A: 解决方案：</p>
        <ul>
          <li>增加阴影贴图分辨率</li>
          <li>使用 PCFSoftShadowMap 类型</li>
          <li>调整阴影相机的 near 和 far 值</li>
          <li>优化阴影相机的范围设置</li>
        </ul>
        
        <h3>Q: 阴影出现条纹或闪烁？</h3>
        <pre><code>// 调整阴影偏移
light.shadow.bias = -0.0001

// 或者调整法线偏移
light.shadow.normalBias = 0.02</code></pre>
        
        <h3>Q: 阴影性能太低？</h3>
        <p>A: 优化建议：</p>
        <ul>
          <li>减少投射阴影的光源数量</li>
          <li>降低阴影贴图分辨率</li>
          <li>使用 BasicShadowMap 类型</li>
          <li>限制阴影相机范围</li>
          <li>对远距离物体禁用阴影</li>
        </ul>
        
        <h3>Q: 如何实现软阴影效果？</h3>
        <pre><code>// 使用软阴影类型
renderer.shadowMap.type = THREE.PCFSoftShadowMap

// 调整光源大小（仅对方向光有效）
directionalLight.shadow.radius = 10

// 或者使用面积光源（需要额外库）
import { RectAreaLight } from 'three/examples/jsm/lights/RectAreaLight.js'</code></pre>
      </section>
      
      <section>
        <h2>高级阴影技术</h2>
        
        <h3>1. 级联阴影贴图 (CSM)</h3>
        <p>用于大场景的阴影优化，将阴影分为多个层级：</p>
        <pre><code>// 需要使用额外的CSM库
import { CSM } from 'three/examples/jsm/csm/CSM.js'

const csm = new CSM({
  maxFar: 1000,
  cascades: 4,
  shadowMapSize: 1024,
  lightDirection: new THREE.Vector3(-1, -1, -1).normalize(),
  camera: camera,
  parent: scene
})</code></pre>
        
        <h3>2. 接触阴影</h3>
        <p>模拟物体与地面接触处的柔和阴影：</p>
        <pre><code>// 使用接触阴影后处理
import { ContactShadows } from 'three/examples/jsm/objects/ContactShadows.js'

const contactShadows = new ContactShadows(camera, scene, {
  opacity: 0.4,
  scale: 10,
  blur: 2.5,
  far: 4
})</code></pre>
        
        <h3>3. 体积光和光束</h3>
        <p>创建可见的光束效果：</p>
        <pre><code>// 使用体积光
import { VolumetricLight } from 'three/examples/jsm/objects/VolumetricLight.js'

const volumetricLight = new VolumetricLight(
  spotLight,
  camera,
  scene,
  renderer
)</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'ShadowsPage',
  setup() {
    const basicShadowCanvas = ref(null)
    const interactiveShadowCanvas = ref(null)
    const shadowRefs = ref({})
    
    const shadowType = ref('PCFSoftShadowMap')
    const mapSize = ref('1024')
    const lightPosition = reactive({ x: 5, y: 8, z: 5 })
    const cameraSize = ref(10)
    const showHelper = ref(false)
    
    const scenes = {}
    const renderers = {}
    const animationIds = {}
    let interactiveScene, interactiveRenderer, interactiveLight, shadowHelper
    
    const shadowTypes = [
      {
        name: 'BasicShadowMap',
        description: '基础阴影，性能最好但边缘锯齿明显',
        features: ['高性能', '硬边缘', '锯齿明显']
      },
      {
        name: 'PCFShadowMap',
        description: 'PCF阴影，中等性能，边缘较平滑',
        features: ['中等性能', '较平滑', '标准质量']
      },
      {
        name: 'PCFSoftShadowMap',
        description: 'PCF软阴影，性能较低但效果最好',
        features: ['低性能', '软边缘', '高质量']
      },
      {
        name: 'VSMShadowMap',
        description: 'VSM阴影，支持半透明但内存消耗大',
        features: ['半透明', '高内存', '特殊效果']
      }
    ]
    
    const setShadowRef = (name, el) => {
      if (el) {
        shadowRefs.value[name] = el
      }
    }
    
    const initBasicShadowDemo = () => {
      if (!basicShadowCanvas.value) return
      
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 400 / 200, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(400, 200)
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      
      // 创建地面
      const planeGeometry = new THREE.PlaneGeometry(10, 10)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -Math.PI / 2
      plane.receiveShadow = true
      scene.add(plane)
      
      // 创建立方体
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x42b883 })
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.y = 0.5
      cube.castShadow = true
      scene.add(cube)
      
      // 创建光源
      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(5, 5, 5)
      light.castShadow = true
      light.shadow.mapSize.width = 1024
      light.shadow.mapSize.height = 1024
      scene.add(light)
      
      // 环境光
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
      scene.add(ambientLight)
      
      camera.position.set(4, 3, 4)
      camera.lookAt(0, 0, 0)
      
      basicShadowCanvas.value.appendChild(renderer.domElement)
      
      const animate = () => {
        animationIds['basic'] = requestAnimationFrame(animate)
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      
      animate()
      
      scenes['basic'] = scene
      renderers['basic'] = renderer
    }
    
    const initShadowTypeDemo = (shadowTypeData) => {
      const container = shadowRefs.value[shadowTypeData.name]
      if (!container) return
      
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 200 / 150, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(200, 150)
      renderer.setClearColor(0x000000, 0)
      renderer.shadowMap.enabled = true
      
      // 设置对应的阴影类型
      switch (shadowTypeData.name) {
        case 'BasicShadowMap':
          renderer.shadowMap.type = THREE.BasicShadowMap
          break
        case 'PCFShadowMap':
          renderer.shadowMap.type = THREE.PCFShadowMap
          break
        case 'PCFSoftShadowMap':
          renderer.shadowMap.type = THREE.PCFSoftShadowMap
          break
        case 'VSMShadowMap':
          renderer.shadowMap.type = THREE.VSMShadowMap
          break
      }
      
      // 创建场景对象
      const planeGeometry = new THREE.PlaneGeometry(4, 4)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -Math.PI / 2
      plane.receiveShadow = true
      scene.add(plane)
      
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x42b883 })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.position.y = 0.5
      sphere.castShadow = true
      scene.add(sphere)
      
      // 光源
      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(2, 3, 2)
      light.castShadow = true
      light.shadow.mapSize.width = 512
      light.shadow.mapSize.height = 512
      scene.add(light)
      
      const ambientLight = new THREE.AmbientLight(0x404040, 0.2)
      scene.add(ambientLight)
      
      camera.position.set(3, 2, 3)
      camera.lookAt(0, 0, 0)
      
      container.appendChild(renderer.domElement)
      
      const animate = () => {
        animationIds[shadowTypeData.name] = requestAnimationFrame(animate)
        sphere.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      
      animate()
      
      scenes[shadowTypeData.name] = scene
      renderers[shadowTypeData.name] = renderer
    }
    
    const initInteractiveShadowDemo = () => {
      if (!interactiveShadowCanvas.value) return
      
      interactiveScene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 500 / 300, 0.1, 1000)
      interactiveRenderer = new THREE.WebGLRenderer({ antialias: true })
      interactiveRenderer.setSize(500, 300)
      interactiveRenderer.shadowMap.enabled = true
      interactiveRenderer.shadowMap.type = THREE.PCFSoftShadowMap
      
      // 创建地面
      const planeGeometry = new THREE.PlaneGeometry(20, 20)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -Math.PI / 2
      plane.receiveShadow = true
      interactiveScene.add(plane)
      
      // 创建多个物体
      const objects = []
      for (let i = 0; i < 5; i++) {
        const geometry = i % 2 === 0 ? 
          new THREE.BoxGeometry(1, 1, 1) : 
          new THREE.SphereGeometry(0.5, 32, 32)
        const material = new THREE.MeshLambertMaterial({ 
          color: new THREE.Color().setHSL(i * 0.2, 0.7, 0.5) 
        })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set((i - 2) * 2, 0.5, 0)
        mesh.castShadow = true
        objects.push(mesh)
        interactiveScene.add(mesh)
      }
      
      // 创建光源
      interactiveLight = new THREE.DirectionalLight(0xffffff, 1)
      interactiveLight.position.set(lightPosition.x, lightPosition.y, lightPosition.z)
      interactiveLight.castShadow = true
      interactiveLight.shadow.mapSize.width = parseInt(mapSize.value)
      interactiveLight.shadow.mapSize.height = parseInt(mapSize.value)
      interactiveLight.shadow.camera.left = -cameraSize.value
      interactiveLight.shadow.camera.right = cameraSize.value
      interactiveLight.shadow.camera.top = cameraSize.value
      interactiveLight.shadow.camera.bottom = -cameraSize.value
      interactiveLight.shadow.camera.near = 0.1
      interactiveLight.shadow.camera.far = 50
      interactiveScene.add(interactiveLight)
      
      // 环境光
      const ambientLight = new THREE.AmbientLight(0x404040, 0.2)
      interactiveScene.add(ambientLight)
      
      camera.position.set(10, 8, 10)
      camera.lookAt(0, 0, 0)
      
      interactiveShadowCanvas.value.appendChild(interactiveRenderer.domElement)
      
      const animate = () => {
        animationIds['interactive'] = requestAnimationFrame(animate)
        
        objects.forEach((obj, index) => {
          obj.rotation.y += 0.01 * (index + 1)
        })
        
        interactiveRenderer.render(interactiveScene, camera)
      }
      
      animate()
    }
    
    const updateShadowType = () => {
      if (interactiveRenderer) {
        switch (shadowType.value) {
          case 'BasicShadowMap':
            interactiveRenderer.shadowMap.type = THREE.BasicShadowMap
            break
          case 'PCFShadowMap':
            interactiveRenderer.shadowMap.type = THREE.PCFShadowMap
            break
          case 'PCFSoftShadowMap':
            interactiveRenderer.shadowMap.type = THREE.PCFSoftShadowMap
            break
        }
        interactiveRenderer.shadowMap.needsUpdate = true
      }
    }
    
    const updateMapSize = () => {
      if (interactiveLight) {
        const size = parseInt(mapSize.value)
        interactiveLight.shadow.mapSize.width = size
        interactiveLight.shadow.mapSize.height = size
        interactiveLight.shadow.map?.dispose()
        interactiveLight.shadow.map = null
      }
    }
    
    const updateLightPosition = () => {
      if (interactiveLight) {
        interactiveLight.position.set(
          parseFloat(lightPosition.x),
          parseFloat(lightPosition.y),
          parseFloat(lightPosition.z)
        )
      }
    }
    
    const updateCameraSize = () => {
      if (interactiveLight) {
        const size = parseFloat(cameraSize.value)
        interactiveLight.shadow.camera.left = -size
        interactiveLight.shadow.camera.right = size
        interactiveLight.shadow.camera.top = size
        interactiveLight.shadow.camera.bottom = -size
        interactiveLight.shadow.camera.updateProjectionMatrix()
      }
    }
    
    const toggleHelper = () => {
      if (!interactiveLight) return
      
      if (showHelper.value) {
        shadowHelper = new THREE.DirectionalLightHelper(interactiveLight, 2)
        interactiveScene.add(shadowHelper)
        
        const cameraHelper = new THREE.CameraHelper(interactiveLight.shadow.camera)
        interactiveScene.add(cameraHelper)
        shadowHelper.cameraHelper = cameraHelper
      } else {
        if (shadowHelper) {
          interactiveScene.remove(shadowHelper)
          if (shadowHelper.cameraHelper) {
            interactiveScene.remove(shadowHelper.cameraHelper)
          }
          shadowHelper = null
        }
      }
    }
    
    onMounted(() => {
      setTimeout(() => {
        initBasicShadowDemo()
        shadowTypes.forEach(initShadowTypeDemo)
        initInteractiveShadowDemo()
      }, 100)
    })
    
    onUnmounted(() => {
      Object.values(animationIds).forEach(id => {
        if (id) cancelAnimationFrame(id)
      })
      Object.values(renderers).forEach(renderer => {
        if (renderer) renderer.dispose()
      })
      if (interactiveRenderer) {
        interactiveRenderer.dispose()
      }
    })
    
    return {
      basicShadowCanvas,
      interactiveShadowCanvas,
      shadowRefs,
      shadowTypes,
      shadowType,
      mapSize,
      lightPosition,
      cameraSize,
      showHelper,
      setShadowRef,
      updateShadowType,
      updateMapSize,
      updateLightPosition,
      updateCameraSize,
      toggleHelper
    }
  }
}
</script>

<style scoped>
.tutorial-page {
  max-width: 800px;
  margin: 0 auto;
}

.tutorial-page h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  border-bottom: 3px solid #42b883;
  padding-bottom: 1rem;
}

.content {
  line-height: 1.8;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  border-left: 4px solid #42b883;
  padding-left: 1rem;
}

section h3 {
  font-size: 1.3rem;
  color: #42b883;
  margin: 1.5rem 0 0.5rem 0;
}

section p {
  color: #666;
  margin-bottom: 1rem;
}

section ul {
  margin-left: 2rem;
  color: #666;
}

section li {
  margin-bottom: 0.5rem;
}

.shadow-demo {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
}

.demo-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto 1rem auto;
}

.demo-explanation p {
  margin: 0.5rem 0;
  color: #2c3e50;
}

.shadow-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.shadow-type-item {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.shadow-type-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.shadow-preview {
  width: 200px;
  height: 150px;
  margin: 0 auto 1rem auto;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  overflow: hidden;
  background: #222;
}

.shadow-type-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.shadow-type-item p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.shadow-features {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.feature-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.interactive-shadow-demo {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
}

.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.demo-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
}

.control-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.control-section h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: center;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.control-group label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.9rem;
}

.control-group input[type="range"] {
  width: 100%;
}

.control-group select {
  padding: 0.5rem;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  background: white;
}

.control-group input[type="checkbox"] {
  margin-right: 0.5rem;
}

pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
  border-left: 4px solid #42b883;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .tutorial-page h1 {
    font-size: 2rem;
  }
  
  section h2 {
    font-size: 1.5rem;
  }
  
  .shadow-types {
    grid-template-columns: 1fr;
  }
  
  .shadow-preview {
    width: 100%;
    max-width: 200px;
  }
  
  .demo-container {
    gap: 1rem;
  }
  
  .demo-canvas {
    width: 100%;
    max-width: 500px;
  }
  
  .demo-controls {
    grid-template-columns: 1fr;
  }
  
  .interactive-shadow-demo {
    padding: 1rem;
  }
  
  .shadow-demo {
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
