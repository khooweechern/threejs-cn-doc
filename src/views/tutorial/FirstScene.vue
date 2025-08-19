<template>
  <div class="tutorial-page">
    <h1>创建第一个场景</h1>
    
    <div class="content">
      <section>
        <h2>基本概念</h2>
        <p>在 Three.js 中，要显示任何内容，我们需要三个基本要素：</p>
        <ul>
          <li><strong>场景 (Scene)</strong>：包含所有 3D 对象的容器</li>
          <li><strong>相机 (Camera)</strong>：定义观察场景的视角</li>
          <li><strong>渲染器 (Renderer)</strong>：将场景渲染到屏幕上</li>
        </ul>
      </section>
      
      <section>
        <h2>完整示例</h2>
        <p>让我们创建一个包含旋转立方体的简单场景：</p>
        
        <div class="demo-container">
          <div class="demo-canvas" ref="canvasContainer"></div>
        </div>
        
        <pre><code>// 1. 创建场景
const scene = new THREE.Scene()

// 2. 创建相机
const camera = new THREE.PerspectiveCamera(
  75,                                    // 视野角度
  window.innerWidth / window.innerHeight, // 宽高比
  0.1,                                   // 近裁剪面
  1000                                   // 远裁剪面
)

// 3. 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 4. 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 5. 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 6. 创建网格（几何体 + 材质）
const cube = new THREE.Mesh(geometry, material)

// 7. 将立方体添加到场景
scene.add(cube)

// 8. 设置相机位置
camera.position.z = 5

// 9. 渲染循环
function animate() {
  requestAnimationFrame(animate)
  
  // 旋转立方体
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  // 渲染场景
  renderer.render(scene, camera)
}

// 开始动画
animate()</code></pre>
      </section>
      
      <section>
        <h2>代码解析</h2>
        
        <h3>1. 创建场景</h3>
        <p>场景是所有 3D 对象的容器，就像一个舞台。</p>
        <pre><code>const scene = new THREE.Scene()</code></pre>
        
        <h3>2. 创建相机</h3>
        <p>透视相机模拟人眼的视觉效果，参数包括：</p>
        <ul>
          <li><strong>fov</strong>：视野角度（75度）</li>
          <li><strong>aspect</strong>：宽高比</li>
          <li><strong>near</strong>：近裁剪面（0.1）</li>
          <li><strong>far</strong>：远裁剪面（1000）</li>
        </ul>
        
        <h3>3. 创建渲染器</h3>
        <p>WebGL 渲染器负责将 3D 场景渲染到 2D 屏幕上。</p>
        
        <h3>4. 创建对象</h3>
        <p>每个 3D 对象都由几何体（形状）和材质（外观）组成。</p>
        
        <h3>5. 动画循环</h3>
        <p>使用 requestAnimationFrame 创建流畅的动画效果。</p>
      </section>
      
      <section>
        <h2>常见问题</h2>
        
        <h3>Q: 为什么看不到任何内容？</h3>
        <p>A: 检查以下几点：</p>
        <ul>
          <li>相机位置是否正确设置</li>
          <li>对象是否添加到场景中</li>
          <li>渲染器是否正确添加到 DOM</li>
          <li>是否调用了 render 方法</li>
        </ul>
        
        <h3>Q: 如何调整相机位置？</h3>
        <p>A: 使用 camera.position 属性：</p>
        <pre><code>camera.position.x = 2
camera.position.y = 3
camera.position.z = 5</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'FirstScene',
  setup() {
    const canvasContainer = ref(null)
    let scene, camera, renderer, cube
    let animationId
    
    const initThree = () => {
      // 创建场景
      scene = new THREE.Scene()
      
      // 创建相机
      camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000)
      camera.position.z = 5
      
      // 创建渲染器
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(400, 300)
      renderer.setClearColor(0x000000, 0)
      
      // 创建立方体
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      
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
      canvasContainer
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
  justify-content: center;
  margin: 2rem 0;
}

.demo-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
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
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>