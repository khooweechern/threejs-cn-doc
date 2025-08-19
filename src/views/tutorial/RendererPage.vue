<template>
  <div class="tutorial-page">
    <h1>渲染器 (Renderer)</h1>
    
    <div class="content">
      <section>
        <h2>什么是渲染器？</h2>
        <p>渲染器（Renderer）是 Three.js 中负责将 3D 场景转换为 2D 图像并显示在屏幕上的组件。它就像一个摄影师，将相机看到的 3D 世界"拍摄"成 2D 照片显示给用户。</p>
        
        <p>Three.js 提供了多种渲染器类型：</p>
        <ul>
          <li><strong>WebGLRenderer</strong>：最常用，基于 WebGL，性能最好</li>
          <li><strong>CSS3DRenderer</strong>：用于渲染 CSS3D 对象</li>
          <li><strong>SVGRenderer</strong>：基于 SVG，兼容性好但性能较低</li>
        </ul>
      </section>
      
      <section>
        <h2>WebGL 渲染器</h2>
        <p>WebGLRenderer 是最常用的渲染器，它利用 GPU 的强大计算能力来渲染复杂的 3D 场景。</p>
        
        <h3>创建渲染器</h3>
        <pre><code>// 基本创建
const renderer = new THREE.WebGLRenderer()

// 带参数创建
const renderer = new THREE.WebGLRenderer({
  canvas: myCanvas,        // 指定 canvas 元素
  antialias: true,         // 启用抗锯齿
  alpha: true,             // 启用透明背景
  preserveDrawingBuffer: true, // 保留绘图缓冲区
  powerPreference: "high-performance" // 性能偏好
})</code></pre>
        
        <h3>基本设置</h3>
        <pre><code>// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight)

// 设置像素比（用于高DPI屏幕）
renderer.setPixelRatio(window.devicePixelRatio)

// 设置清除颜色（背景色）
renderer.setClearColor(0x000000, 1) // 黑色，不透明

// 将渲染器的 canvas 添加到页面
document.body.appendChild(renderer.domElement)</code></pre>
      </section>
      
      <section>
        <h2>渲染器重要属性</h2>
        
        <h3>1. domElement</h3>
        <p>渲染器创建的 canvas 元素，需要添加到 DOM 中：</p>
        <pre><code>// 获取 canvas 元素
const canvas = renderer.domElement

// 添加到指定容器
document.getElementById('container').appendChild(canvas)</code></pre>
        
        <h3>2. shadowMap - 阴影贴图</h3>
        <p>控制阴影的渲染：</p>
        <pre><code>// 启用阴影
renderer.shadowMap.enabled = true

// 设置阴影类型
renderer.shadowMap.type = THREE.PCFSoftShadowMap // 软阴影</code></pre>
        
        <h3>3. toneMapping - 色调映射</h3>
        <p>控制颜色的显示方式：</p>
        <pre><code>// 设置色调映射
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.0</code></pre>
      </section>
      
      <section>
        <h2>渲染器重要方法</h2>
        
        <h3>1. render() - 渲染场景</h3>
        <pre><code>// 基本渲染
renderer.render(scene, camera)

// 渲染到指定目标
renderer.setRenderTarget(renderTarget)
renderer.render(scene, camera)
renderer.setRenderTarget(null) // 恢复到屏幕</code></pre>
        
        <h3>2. setSize() - 设置尺寸</h3>
        <pre><code>// 设置渲染尺寸
renderer.setSize(width, height)

// 设置尺寸但不更新样式
renderer.setSize(width, height, false)</code></pre>
        
        <h3>3. clear() - 清除缓冲区</h3>
        <pre><code>// 清除所有缓冲区
renderer.clear()

// 只清除颜色缓冲区
renderer.clear(true, false, false)

// 只清除深度缓冲区
renderer.clear(false, true, false)</code></pre>
        
        <div class="demo-container">
          <div class="demo-canvas" ref="canvasContainer"></div>
          <div class="demo-controls">
            <div class="control-group">
              <label>背景颜色:</label>
              <input type="color" v-model="backgroundColor" @input="updateBackgroundColor">
            </div>
            <div class="control-group">
              <label>抗锯齿:</label>
              <input type="checkbox" v-model="antialias" @change="toggleAntialias">
            </div>
            <div class="control-group">
              <label>阴影:</label>
              <input type="checkbox" v-model="shadows" @change="toggleShadows">
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>性能优化</h2>
        
        <h3>1. 像素比设置</h3>
        <pre><code>// 限制像素比，避免在高DPI设备上性能问题
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))</code></pre>
        
        <h3>2. 渲染目标复用</h3>
        <pre><code>// 创建可复用的渲染目标
const renderTarget = new THREE.WebGLRenderTarget(512, 512)

// 使用完后不要忘记释放
renderTarget.dispose()</code></pre>
        
        <h3>3. 条件渲染</h3>
        <pre><code>// 只在需要时渲染
let needsUpdate = true

function animate() {
  if (needsUpdate) {
    renderer.render(scene, camera)
    needsUpdate = false
  }
  requestAnimationFrame(animate)
}

// 当场景改变时标记需要更新
scene.add(newObject)
needsUpdate = true</code></pre>
      </section>
      
      <section>
        <h2>响应式渲染</h2>
        <p>处理窗口大小变化，确保渲染器始终适应屏幕尺寸：</p>
        
        <pre><code>// 响应窗口大小变化
function onWindowResize() {
  // 更新相机宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  
  // 更新渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// 监听窗口大小变化
window.addEventListener('resize', onWindowResize)

// 初始化时也要调用一次
onWindowResize()</code></pre>
      </section>
      
      <section>
        <h2>常见问题解决</h2>
        
        <h3>Q: 为什么渲染出来的图像很模糊？</h3>
        <p>A: 可能的原因和解决方案：</p>
        <ul>
          <li>没有设置正确的像素比：<code>renderer.setPixelRatio(window.devicePixelRatio)</code></li>
          <li>没有启用抗锯齿：<code>new THREE.WebGLRenderer({ antialias: true })</code></li>
          <li>渲染尺寸与显示尺寸不匹配</li>
        </ul>
        
        <h3>Q: 如何截取渲染器的图像？</h3>
        <pre><code>// 渲染后获取图像数据
renderer.render(scene, camera)
const imageData = renderer.domElement.toDataURL('image/png')

// 创建下载链接
const link = document.createElement('a')
link.download = 'screenshot.png'
link.href = imageData
link.click()</code></pre>
        
        <h3>Q: 如何实现透明背景？</h3>
        <pre><code>// 创建支持透明的渲染器
const renderer = new THREE.WebGLRenderer({ 
  alpha: true,
  premultipliedAlpha: false 
})

// 设置透明背景
renderer.setClearColor(0x000000, 0) // 透明度为0</code></pre>
      </section>
      
      <section>
        <h2>最佳实践</h2>
        
        <h3>1. 渲染器初始化</h3>
        <pre><code>function createRenderer() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  
  return renderer
}</code></pre>
        
        <h3>2. 内存管理</h3>
        <pre><code>// 组件销毁时清理渲染器
function cleanup() {
  renderer.dispose()
  renderer.forceContextLoss()
  renderer.domElement.remove()
}</code></pre>
        
        <h3>3. 错误处理</h3>
        <pre><code>// 检查 WebGL 支持
if (!THREE.WEBGL.isWebGLAvailable()) {
  const warning = THREE.WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'RendererPage',
  setup() {
    const canvasContainer = ref(null)
    const backgroundColor = ref('#222222')
    const antialias = ref(true)
    const shadows = ref(false)
    
    let scene, camera, renderer, cube, light
    let animationId
    
    const initThree = () => {
      // 创建场景
      scene = new THREE.Scene()
      
      // 创建相机
      camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000)
      camera.position.set(3, 3, 5)
      
      // 创建渲染器
      renderer = new THREE.WebGLRenderer({ 
        antialias: antialias.value,
        alpha: true
      })
      renderer.setSize(400, 300)
      renderer.setClearColor(backgroundColor.value)
      renderer.shadowMap.enabled = shadows.value
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      
      // 创建立方体
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshLambertMaterial({ color: 0x42b883 })
      cube = new THREE.Mesh(geometry, material)
      cube.castShadow = true
      cube.receiveShadow = true
      scene.add(cube)
      
      // 创建地面
      const planeGeometry = new THREE.PlaneGeometry(10, 10)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -Math.PI / 2
      plane.position.y = -1
      plane.receiveShadow = true
      scene.add(plane)
      
      // 创建光源
      light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(5, 5, 5)
      light.castShadow = true
      light.shadow.mapSize.width = 1024
      light.shadow.mapSize.height = 1024
      scene.add(light)
      
      // 环境光
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
      scene.add(ambientLight)
      
      camera.lookAt(cube.position)
      
      // 添加到容器
      canvasContainer.value.appendChild(renderer.domElement)
      
      // 开始动画
      animate()
    }
    
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      
      renderer.render(scene, camera)
    }
    
    const updateBackgroundColor = () => {
      if (renderer) {
        renderer.setClearColor(backgroundColor.value)
      }
    }
    
    const toggleAntialias = () => {
      // 注意：抗锯齿需要重新创建渲染器才能生效
      console.log('抗锯齿设置需要重新创建渲染器才能生效')
    }
    
    const toggleShadows = () => {
      if (renderer) {
        renderer.shadowMap.enabled = shadows.value
      }
    }
    
    onMounted(() => {
      initThree()
    })
    
    onUnmounted(() => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (renderer) {
        renderer.dispose()
      }
    })
    
    return {
      canvasContainer,
      backgroundColor,
      antialias,
      shadows,
      updateBackgroundColor,
      toggleAntialias,
      toggleShadows
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

.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.demo-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.demo-controls {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.control-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.control-group label {
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.9rem;
}

.control-group input[type="color"] {
  width: 40px;
  height: 30px;
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
  
  .demo-canvas {
    width: 100%;
    max-width: 400px;
  }
  
  .demo-controls {
    gap: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>