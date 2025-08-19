<template>
  <div class="example-page">
    <h1>旋转立方体示例</h1>
    
    <div class="example-content">
      <div class="example-demo">
        <div class="canvas-container" ref="canvasContainer"></div>
        
        <div class="controls">
          <div class="control-group">
            <label>旋转速度:</label>
            <input 
              type="range" 
              min="0" 
              max="0.05" 
              step="0.005" 
              v-model="rotationSpeed"
              @input="updateRotationSpeed"
            >
            <span>{{ rotationSpeed }}</span>
          </div>
          
          <div class="control-group">
            <label>立方体颜色:</label>
            <input 
              type="color" 
              v-model="cubeColor"
              @input="updateColor"
            >
          </div>
          
          <div class="control-group">
            <label>线框模式:</label>
            <input 
              type="checkbox" 
              v-model="wireframe"
              @change="updateWireframe"
            >
          </div>
          
          <div class="control-group">
            <button @click="resetCamera">重置相机</button>
            <button @click="toggleAnimation">{{ isAnimating ? '暂停' : '播放' }}</button>
          </div>
        </div>
      </div>
      
      <div class="code-section">
        <h2>完整代码</h2>
        <pre><code>import * as THREE from 'three'

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
)

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 创建立方体几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 创建材质
const material = new THREE.MeshBasicMaterial({ 
  color: 0x00ff00,
  wireframe: false
})

// 创建网格
const cube = new THREE.Mesh(geometry, material)

// 添加到场景
scene.add(cube)

// 设置相机位置
camera.position.z = 5

// 动画循环
function animate() {
  requestAnimationFrame(animate)
  
  // 旋转立方体
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  // 渲染场景
  renderer.render(scene, camera)
}

// 开始动画
animate()

// 响应窗口大小变化
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})</code></pre>
      </div>
      
      <div class="explanation-section">
        <h2>代码解析</h2>
        
        <div class="explanation-item">
          <h3>1. 创建基础元素</h3>
          <p>首先创建场景、相机和渲染器这三个基本元素。场景用来容纳所有3D对象，相机定义观察视角，渲染器负责将3D场景渲染到2D屏幕上。</p>
        </div>
        
        <div class="explanation-item">
          <h3>2. 创建立方体</h3>
          <p>使用 BoxGeometry 创建立方体的几何形状，用 MeshBasicMaterial 创建材质，然后将它们组合成 Mesh 对象。</p>
        </div>
        
        <div class="explanation-item">
          <h3>3. 动画循环</h3>
          <p>使用 requestAnimationFrame 创建动画循环，在每一帧中更新立方体的旋转角度，然后重新渲染场景。</p>
        </div>
        
        <div class="explanation-item">
          <h3>4. 响应式设计</h3>
          <p>监听窗口大小变化事件，动态调整相机的宽高比和渲染器的尺寸，确保在不同屏幕尺寸下都能正常显示。</p>
        </div>
      </div>
      
      <div class="tips-section">
        <h2>扩展建议</h2>
        
        <div class="tip-item">
          <h3>🎨 材质变化</h3>
          <p>尝试使用不同的材质类型，如 MeshLambertMaterial 或 MeshPhongMaterial，并添加光源来看看效果。</p>
        </div>
        
        <div class="tip-item">
          <h3>🎮 交互控制</h3>
          <p>添加鼠标或键盘控制，让用户可以手动旋转立方体或改变相机位置。</p>
        </div>
        
        <div class="tip-item">
          <h3>🌈 多个立方体</h3>
          <p>创建多个不同颜色和大小的立方体，形成更复杂的场景。</p>
        </div>
        
        <div class="tip-item">
          <h3>✨ 添加光效</h3>
          <p>添加环境光和点光源，使用支持光照的材质来创建更真实的视觉效果。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'CubeExample',
  setup() {
    const canvasContainer = ref(null)
    const rotationSpeed = ref(0.01)
    const cubeColor = ref('#00ff00')
    const wireframe = ref(false)
    const isAnimating = ref(true)
    
    let scene, camera, renderer, cube
    let animationId
    
    const initThree = () => {
      // 创建场景
      scene = new THREE.Scene()
      scene.background = new THREE.Color(0x222222)
      
      // 创建相机
      camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000)
      camera.position.z = 5
      
      // 创建渲染器
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(600, 400)
      
      // 创建立方体
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ 
        color: cubeColor.value,
        wireframe: wireframe.value
      })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      
      // 添加到容器
      canvasContainer.value.appendChild(renderer.domElement)
      
      // 开始动画
      animate()
    }
    
    const animate = () => {
      if (isAnimating.value) {
        animationId = requestAnimationFrame(animate)
        
        cube.rotation.x += parseFloat(rotationSpeed.value)
        cube.rotation.y += parseFloat(rotationSpeed.value)
        
        renderer.render(scene, camera)
      }
    }
    
    const updateRotationSpeed = () => {
      // 旋转速度会在下一帧自动应用
    }
    
    const updateColor = () => {
      if (cube) {
        cube.material.color.setHex(cubeColor.value.replace('#', '0x'))
      }
    }
    
    const updateWireframe = () => {
      if (cube) {
        cube.material.wireframe = wireframe.value
      }
    }
    
    const resetCamera = () => {
      camera.position.set(0, 0, 5)
      camera.lookAt(0, 0, 0)
    }
    
    const toggleAnimation = () => {
      isAnimating.value = !isAnimating.value
      if (isAnimating.value) {
        animate()
      } else {
        cancelAnimationFrame(animationId)
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
      rotationSpeed,
      cubeColor,
      wireframe,
      isAnimating,
      updateRotationSpeed,
      updateColor,
      updateWireframe,
      resetCamera,
      toggleAnimation
    }
  }
}
</script>

<style scoped>
.example-page {
  max-width: 1000px;
  margin: 0 auto;
}

.example-page h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.example-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.example-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.canvas-container {
  border: 2px solid #42b883;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.9rem;
}

.control-group input[type="range"] {
  width: 100%;
}

.control-group input[type="color"] {
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.control-group button {
  padding: 0.5rem 1rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.control-group button:hover {
  background: #369870;
}

.code-section,
.explanation-section,
.tips-section {
  background: white;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 2rem;
}

.code-section h2,
.explanation-section h2,
.tips-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #42b883;
  padding-bottom: 0.5rem;
}

.explanation-item,
.tip-item {
  margin-bottom: 2rem;
}

.explanation-item h3,
.tip-item h3 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.explanation-item p,
.tip-item p {
  color: #666;
  line-height: 1.6;
}

pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .example-page h1 {
    font-size: 2rem;
  }
  
  .canvas-container {
    width: 100%;
    max-width: 400px;
  }
  
  .controls {
    grid-template-columns: 1fr;
  }
  
  .code-section,
  .explanation-section,
  .tips-section {
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>