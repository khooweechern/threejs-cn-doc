<template>
  <div class="tutorial-page">
    <h1>光源 (Lights)</h1>
    
    <div class="content">
      <section>
        <h2>什么是光源？</h2>
        <p>光源（Lights）是 3D 场景中用来照亮物体的重要元素。没有光源，使用 Lambert、Phong 或 Standard 材质的物体将完全看不见。光源不仅影响物体的可见性，还决定了物体的明暗、阴影和整体视觉效果。</p>
        
        <p>Three.js 提供了多种光源类型：</p>
        <ul>
          <li><strong>环境光 (AmbientLight)</strong>：均匀照亮所有物体</li>
          <li><strong>方向光 (DirectionalLight)</strong>：模拟太阳光，平行光线</li>
          <li><strong>点光源 (PointLight)</strong>：从一点向四周发光</li>
          <li><strong>聚光灯 (SpotLight)</strong>：锥形光束</li>
          <li><strong>半球光 (HemisphereLight)</strong>：模拟天空和地面的光照</li>
        </ul>
      </section>
      
      <section>
        <h2>光源类型对比</h2>
        <p>不同光源的照明效果：</p>
        
        <div class="lights-grid">
          <div class="light-item" v-for="light in lightTypes" :key="light.name">
            <div class="light-preview" :ref="el => setLightRef(light.name, el)"></div>
            <h3>{{ light.name }}</h3>
            <p>{{ light.description }}</p>
            <div class="light-features">
              <span v-for="feature in light.features" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>环境光 (AmbientLight)</h2>
        <p>环境光均匀地照亮场景中的所有物体，没有方向性，不产生阴影。通常用作基础照明。</p>
        
        <pre><code>// 创建环境光
const ambientLight = new THREE.AmbientLight(
  0x404040,  // 颜色（灰色）
  0.5        // 强度
)

// 添加到场景
scene.add(ambientLight)

// 动态调整
ambientLight.color.setHex(0x404040)  // 改变颜色
ambientLight.intensity = 0.3         // 改变强度</code></pre>
        
        <h3>使用场景</h3>
        <ul>
          <li>提供基础照明，避免物体过暗</li>
          <li>模拟散射光照</li>
          <li>与其他光源配合使用</li>
        </ul>
      </section>
      
      <section>
        <h2>方向光 (DirectionalLight)</h2>
        <p>方向光模拟太阳光，光线平行且有固定方向。可以产生阴影，适合室外场景。</p>
        
        <pre><code>// 创建方向光
const directionalLight = new THREE.DirectionalLight(
  0xffffff,  // 白色光
  1          // 强度
)

// 设置光源位置（实际是方向）
directionalLight.position.set(5, 5, 5)

// 设置目标（光照方向）
directionalLight.target.position.set(0, 0, 0)

// 启用阴影
directionalLight.castShadow = true

// 阴影设置
directionalLight.shadow.mapSize.width = 2048
directionalLight.shadow.mapSize.height = 2048
directionalLight.shadow.camera.near = 0.5
directionalLight.shadow.camera.far = 50

scene.add(directionalLight)</code></pre>
        
        <h3>特点</h3>
        <ul>
          <li>光线平行，不会随距离衰减</li>
          <li>可以产生清晰的阴影</li>
          <li>适合模拟太阳光</li>
          <li>性能较好</li>
        </ul>
      </section>
      
      <section>
        <h2>点光源 (PointLight)</h2>
        <p>点光源从一个点向四周发光，光线会随距离衰减，类似灯泡。</p>
        
        <pre><code>// 创建点光源
const pointLight = new THREE.PointLight(
  0xffffff,  // 颜色
  1,         // 强度
  100,       // 距离（0表示无限远）
  2          // 衰减系数
)

// 设置位置
pointLight.position.set(10, 10, 10)

// 启用阴影
pointLight.castShadow = true

// 阴影设置
pointLight.shadow.mapSize.width = 1024
pointLight.shadow.mapSize.height = 1024
pointLight.shadow.camera.near = 0.1
pointLight.shadow.camera.far = 100

scene.add(pointLight)</code></pre>
        
        <h3>衰减计算</h3>
        <p>点光源的强度会根据距离衰减：</p>
        <pre><code>// 衰减公式
intensity = lightIntensity / (1 + distance * decay)

// 调整衰减
pointLight.decay = 1  // 线性衰减
pointLight.decay = 2  // 物理正确的平方衰减</code></pre>
      </section>
      
      <section>
        <h2>聚光灯 (SpotLight)</h2>
        <p>聚光灯产生锥形光束，可以控制光照范围和边缘柔和度。</p>
        
        <pre><code>// 创建聚光灯
const spotLight = new THREE.SpotLight(
  0xffffff,     // 颜色
  1,            // 强度
  100,          // 距离
  Math.PI / 4,  // 角度（弧度）
  0.5,          // 边缘柔和度
  2             // 衰减系数
)

// 设置位置和目标
spotLight.position.set(10, 10, 10)
spotLight.target.position.set(0, 0, 0)

// 启用阴影
spotLight.castShadow = true

scene.add(spotLight)
scene.add(spotLight.target)  // 别忘了添加目标</code></pre>
        
        <h3>参数说明</h3>
        <ul>
          <li><strong>angle</strong>：光锥的角度，最大值为 Math.PI/2</li>
          <li><strong>penumbra</strong>：边缘柔和度，0-1之间</li>
          <li><strong>target</strong>：光照目标，决定光的方向</li>
        </ul>
      </section>
      
      <section>
        <h2>半球光 (HemisphereLight)</h2>
        <p>半球光模拟天空和地面的光照，提供更自然的环境光效果。</p>
        
        <pre><code>// 创建半球光
const hemisphereLight = new THREE.HemisphereLight(
  0x87CEEB,  // 天空颜色（天蓝色）
  0x8B4513,  // 地面颜色（棕色）
  0.6        // 强度
)

// 设置位置（通常在上方）
hemisphereLight.position.set(0, 50, 0)

scene.add(hemisphereLight)</code></pre>
        
        <h3>优势</h3>
        <ul>
          <li>更自然的光照效果</li>
          <li>性能比多个光源组合更好</li>
          <li>适合室外场景</li>
          <li>不产生阴影</li>
        </ul>
      </section>
      
      <section>
        <h2>交互式光源演示</h2>
        <div class="interactive-demo">
          <div class="demo-container">
            <div class="demo-canvas" ref="interactiveCanvas"></div>
            <div class="demo-controls">
              <div class="control-section">
                <h4>环境光</h4>
                <div class="control-group">
                  <label>强度: <span>{{ ambientIntensity }}</span></label>
                  <input type="range" min="0" max="1" step="0.1" v-model="ambientIntensity" @input="updateLights">
                </div>
                <div class="control-group">
                  <label>颜色:</label>
                  <input type="color" v-model="ambientColor" @input="updateLights">
                </div>
              </div>
              
              <div class="control-section">
                <h4>方向光</h4>
                <div class="control-group">
                  <label>强度: <span>{{ directionalIntensity }}</span></label>
                  <input type="range" min="0" max="2" step="0.1" v-model="directionalIntensity" @input="updateLights">
                </div>
                <div class="control-group">
                  <label>X位置: <span>{{ directionalPosition.x }}</span></label>
                  <input type="range" min="-10" max="10" step="1" v-model="directionalPosition.x" @input="updateLights">
                </div>
                <div class="control-group">
                  <label>Y位置: <span>{{ directionalPosition.y }}</span></label>
                  <input type="range" min="1" max="10" step="1" v-model="directionalPosition.y" @input="updateLights">
                </div>
              </div>
              
              <div class="control-section">
                <h4>点光源</h4>
                <div class="control-group">
                  <label>强度: <span>{{ pointIntensity }}</span></label>
                  <input type="range" min="0" max="2" step="0.1" v-model="pointIntensity" @input="updateLights">
                </div>
                <div class="control-group">
                  <label>颜色:</label>
                  <input type="color" v-model="pointColor" @input="updateLights">
                </div>
                <div class="control-group">
                  <label>
                    <input type="checkbox" v-model="pointLightMoving" @change="updateLights">
                    自动移动
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>光源优化技巧</h2>
        
        <h3>1. 限制光源数量</h3>
        <p>过多的光源会严重影响性能，特别是移动设备：</p>
        <pre><code>// 检查渲染器支持的最大光源数
console.log('最大方向光数量:', renderer.capabilities.maxDirLights)
console.log('最大点光源数量:', renderer.capabilities.maxPointLights)
console.log('最大聚光灯数量:', renderer.capabilities.maxSpotLights)

// 一般建议：
// - 方向光：1-2个
// - 点光源：2-4个
// - 聚光灯：1-2个</code></pre>
        
        <h3>2. 使用光源辅助器调试</h3>
        <pre><code>// 方向光辅助器
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
scene.add(directionalLightHelper)

// 点光源辅助器
const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
scene.add(pointLightHelper)

// 聚光灯辅助器
const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)</code></pre>
        
        <h3>3. 阴影优化</h3>
        <pre><code>// 只对重要光源启用阴影
directionalLight.castShadow = true
pointLight.castShadow = false  // 禁用不重要的阴影

// 调整阴影贴图尺寸
light.shadow.mapSize.width = 1024   // 降低分辨率提升性能
light.shadow.mapSize.height = 1024

// 优化阴影相机范围
light.shadow.camera.near = 0.1
light.shadow.camera.far = 25  // 减小范围</code></pre>
      </section>
      
      <section>
        <h2>常见问题解决</h2>
        
        <h3>Q: 为什么物体看起来很暗？</h3>
        <p>A: 可能的原因：</p>
        <ul>
          <li>没有添加环境光作为基础照明</li>
          <li>光源强度太低</li>
          <li>光源位置不合适</li>
          <li>使用了不受光照影响的材质（MeshBasicMaterial）</li>
        </ul>
        
        <h3>Q: 阴影不显示怎么办？</h3>
        <pre><code>// 检查以下设置：
// 1. 启用渲染器阴影
renderer.shadowMap.enabled = true

// 2. 光源投射阴影
light.castShadow = true

// 3. 物体投射阴影
mesh.castShadow = true

// 4. 物体接收阴影
ground.receiveShadow = true</code></pre>
        
        <h3>Q: 如何实现动态光照？</h3>
        <pre><code>// 在动画循环中更新光源
function animate() {
  // 移动光源
  pointLight.position.x = Math.sin(Date.now() * 0.001) * 10
  pointLight.position.z = Math.cos(Date.now() * 0.001) * 10
  
  // 改变光源颜色
  const hue = (Date.now() * 0.001) % 1
  pointLight.color.setHSL(hue, 1, 0.5)
  
  // 改变光源强度
  pointLight.intensity = 0.5 + Math.sin(Date.now() * 0.002) * 0.5
  
  renderer.render(scene, camera)
}</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'LightsPage',
  setup() {
    const lightRefs = ref({})
    const interactiveCanvas = ref(null)
    
    const ambientIntensity = ref(0.3)
    const ambientColor = ref('#404040')
    const directionalIntensity = ref(1)
    const directionalPosition = reactive({ x: 5, y: 5 })
    const pointIntensity = ref(1)
    const pointColor = ref('#ff0000')
    const pointLightMoving = ref(true)
    
    const scenes = {}
    const renderers = {}
    const animationIds = {}
    let interactiveScene, interactiveRenderer, interactiveAmbientLight, interactiveDirectionalLight, interactivePointLight
    
    const lightTypes = [
      {
        name: 'AmbientLight',
        description: '环境光，均匀照亮所有物体',
        features: ['无方向', '无阴影', '基础照明']
      },
      {
        name: 'DirectionalLight',
        description: '方向光，模拟太阳光',
        features: ['平行光线', '产生阴影', '无衰减']
      },
      {
        name: 'PointLight',
        description: '点光源，从一点向四周发光',
        features: ['距离衰减', '产生阴影', '全方向']
      },
      {
        name: 'SpotLight',
        description: '聚光灯，锥形光束',
        features: ['锥形光束', '可调角度', '边缘柔和']
      }
    ]
    
    const setLightRef = (name, el) => {
      if (el) {
        lightRefs.value[name] = el
      }
    }
    
    const initLightDemo = (lightData) => {
      const container = lightRefs.value[lightData.name]
      if (!container) return
      
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 200 / 150, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(200, 150)
      renderer.setClearColor(0x000000, 0)
      renderer.shadowMap.enabled = true
      
      // 创建几何体和材质
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
      const planeGeometry = new THREE.PlaneGeometry(4, 4)
      const material = new THREE.MeshLambertMaterial({ color: 0x42b883 })
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      
      const sphere = new THREE.Mesh(sphereGeometry, material)
      sphere.position.y = 0.5
      sphere.castShadow = true
      
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -Math.PI / 2
      plane.receiveShadow = true
      
      scene.add(sphere, plane)
      
      // 根据光源类型添加不同的光源
      let light
      switch (lightData.name) {
        case 'AmbientLight':
          light = new THREE.AmbientLight(0x404040, 0.8)
          break
        case 'DirectionalLight':
          light = new THREE.DirectionalLight(0xffffff, 1)
          light.position.set(2, 2, 2)
          light.castShadow = true
          light.shadow.mapSize.width = 512
          light.shadow.mapSize.height = 512
          break
        case 'PointLight':
          light = new THREE.PointLight(0xffffff, 1, 10)
          light.position.set(2, 2, 2)
          light.castShadow = true
          break
        case 'SpotLight':
          light = new THREE.SpotLight(0xffffff, 1, 10, Math.PI / 6, 0.3)
          light.position.set(2, 3, 2)
          light.target.position.set(0, 0, 0)
          light.castShadow = true
          scene.add(light.target)
          break
      }
      
      scene.add(light)
      
      camera.position.set(3, 2, 3)
      camera.lookAt(0, 0, 0)
      
      container.appendChild(renderer.domElement)
      
      const animate = () => {
        animationIds[lightData.name] = requestAnimationFrame(animate)
        sphere.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      
      animate()
      
      scenes[lightData.name] = scene
      renderers[lightData.name] = renderer
    }
    
    const initInteractiveDemo = () => {
      if (!interactiveCanvas.value) return
      
      interactiveScene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 500 / 300, 0.1, 1000)
      interactiveRenderer = new THREE.WebGLRenderer({ antialias: true })
      interactiveRenderer.setSize(500, 300)
      interactiveRenderer.shadowMap.enabled = true
      interactiveRenderer.shadowMap.type = THREE.PCFSoftShadowMap
      
      // 创建场景对象
      const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32)
      const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
      const planeGeometry = new THREE.PlaneGeometry(20, 20)
      
      const material = new THREE.MeshLambertMaterial({ color: 0x42b883 })
      const boxMaterial = new THREE.MeshLambertMaterial({ color: 0xff6b6b })
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      
      const sphere = new THREE.Mesh(sphereGeometry, material)
      sphere.position.set(-2, 1, 0)
      sphere.castShadow = true
      
      const box = new THREE.Mesh(boxGeometry, boxMaterial)
      box.position.set(2, 0.5, 0)
      box.castShadow = true
      
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -Math.PI / 2
      plane.receiveShadow = true
      
      interactiveScene.add(sphere, box, plane)
      
      // 创建光源
      interactiveAmbientLight = new THREE.AmbientLight(ambientColor.value, parseFloat(ambientIntensity.value))
      
      interactiveDirectionalLight = new THREE.DirectionalLight(0xffffff, parseFloat(directionalIntensity.value))
      interactiveDirectionalLight.position.set(directionalPosition.x, directionalPosition.y, 5)
      interactiveDirectionalLight.castShadow = true
      interactiveDirectionalLight.shadow.mapSize.width = 1024
      interactiveDirectionalLight.shadow.mapSize.height = 1024
      
      interactivePointLight = new THREE.PointLight(pointColor.value, parseFloat(pointIntensity.value), 20)
      interactivePointLight.position.set(0, 3, 3)
      interactivePointLight.castShadow = true
      
      interactiveScene.add(interactiveAmbientLight, interactiveDirectionalLight, interactivePointLight)
      
      camera.position.set(8, 6, 8)
      camera.lookAt(0, 0, 0)
      
      interactiveCanvas.value.appendChild(interactiveRenderer.domElement)
      
      const animate = () => {
        animationIds['interactive'] = requestAnimationFrame(animate)
        
        sphere.rotation.y += 0.01
        box.rotation.x += 0.01
        box.rotation.z += 0.01
        
        // 移动点光源
        if (pointLightMoving.value) {
          const time = Date.now() * 0.001
          interactivePointLight.position.x = Math.sin(time) * 4
          interactivePointLight.position.z = Math.cos(time) * 4
        }
        
        interactiveRenderer.render(interactiveScene, camera)
      }
      
      animate()
    }
    
    const updateLights = () => {
      if (interactiveAmbientLight) {
        interactiveAmbientLight.color.setHex(ambientColor.value.replace('#', '0x'))
        interactiveAmbientLight.intensity = parseFloat(ambientIntensity.value)
      }
      
      if (interactiveDirectionalLight) {
        interactiveDirectionalLight.intensity = parseFloat(directionalIntensity.value)
        interactiveDirectionalLight.position.set(
          parseFloat(directionalPosition.x),
          parseFloat(directionalPosition.y),
          5
        )
      }
      
      if (interactivePointLight) {
        interactivePointLight.color.setHex(pointColor.value.replace('#', '0x'))
        interactivePointLight.intensity = parseFloat(pointIntensity.value)
      }
    }
    
    onMounted(() => {
      setTimeout(() => {
        lightTypes.forEach(initLightDemo)
        initInteractiveDemo()
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
      lightTypes,
      lightRefs,
      interactiveCanvas,
      ambientIntensity,
      ambientColor,
      directionalIntensity,
      directionalPosition,
      pointIntensity,
      pointColor,
      pointLightMoving,
      setLightRef,
      updateLights
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

.lights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.light-item {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.light-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.light-preview {
  width: 200px;
  height: 150px;
  margin: 0 auto 1rem auto;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  overflow: hidden;
  background: #222;
}

.light-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.light-item p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.light-features {
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

.interactive-demo {
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

.demo-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  background: #222;
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

.control-group input[type="color"] {
  width: 40px;
  height: 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  
  .lights-grid {
    grid-template-columns: 1fr;
  }
  
  .light-preview {
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
  
  .interactive-demo {
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
