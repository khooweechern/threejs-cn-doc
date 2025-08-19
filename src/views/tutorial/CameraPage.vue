<template>
  <div class="tutorial-page">
    <h1>相机 (Camera)</h1>
    
    <div class="content">
      <section>
        <h2>什么是相机？</h2>
        <p>相机（Camera）定义了我们观察 3D 场景的视角和方式。就像现实世界中的摄像机一样，它决定了我们能看到什么、从哪个角度看、以及看到的范围有多大。</p>
        
        <p>Three.js 提供了两种主要的相机类型：</p>
        <ul>
          <li><strong>透视相机 (PerspectiveCamera)</strong>：模拟人眼视觉，有透视效果</li>
          <li><strong>正交相机 (OrthographicCamera)</strong>：无透视效果，常用于建筑图纸</li>
        </ul>
      </section>
      
      <section>
        <h2>透视相机 (PerspectiveCamera)</h2>
        <p>透视相机是最常用的相机类型，它模拟了人眼的视觉效果，远处的物体看起来更小。</p>
        
        <h3>创建透视相机</h3>
        <pre><code>const camera = new THREE.PerspectiveCamera(
  fov,    // 视野角度 (Field of View)
  aspect, // 宽高比 (Aspect Ratio)
  near,   // 近裁剪面 (Near Clipping Plane)
  far     // 远裁剪面 (Far Clipping Plane)
)

// 典型示例
const camera = new THREE.PerspectiveCamera(
  75,                                    // 75度视野角度
  window.innerWidth / window.innerHeight, // 屏幕宽高比
  0.1,                                   // 近裁剪面距离
  1000                                   // 远裁剪面距离
)</code></pre>
        
        <h3>参数详解</h3>
        <ul>
          <li><strong>fov (视野角度)</strong>：垂直方向的视野角度，单位为度。常用值：45-75度</li>
          <li><strong>aspect (宽高比)</strong>：渲染区域的宽高比，通常是 width/height</li>
          <li><strong>near (近裁剪面)</strong>：相机能看到的最近距离，小于此距离的物体不会被渲染</li>
          <li><strong>far (远裁剪面)</strong>：相机能看到的最远距离，超过此距离的物体不会被渲染</li>
        </ul>
      </section>
      
      <section>
        <h2>相机位置和朝向</h2>
        
        <h3>设置相机位置</h3>
        <pre><code>// 方法1：直接设置坐标
camera.position.x = 5
camera.position.y = 3
camera.position.z = 8

// 方法2：使用 set 方法
camera.position.set(5, 3, 8)

// 方法3：使用 Vector3
camera.position.copy(new THREE.Vector3(5, 3, 8))</code></pre>
        
        <h3>设置相机朝向</h3>
        <pre><code>// 让相机朝向指定位置
camera.lookAt(0, 0, 0)  // 朝向原点
camera.lookAt(cube.position)  // 朝向某个对象

// 使用 Vector3
camera.lookAt(new THREE.Vector3(0, 0, 0))</code></pre>
        
        <div class="demo-container">
          <div class="demo-canvas" ref="canvasContainer"></div>
          <div class="demo-controls">
            <button @click="changeView('front')">正面视角</button>
            <button @click="changeView('side')">侧面视角</button>
            <button @click="changeView('top')">顶部视角</button>
            <button @click="changeView('perspective')">透视视角</button>
          </div>
        </div>
      </section>
      
      <section>
        <h2>正交相机 (OrthographicCamera)</h2>
        <p>正交相机没有透视效果，远近物体大小相同，常用于建筑设计、工程图纸等需要精确比例的场景。</p>
        
        <pre><code>const camera = new THREE.OrthographicCamera(
  left,   // 左边界
  right,  // 右边界
  top,    // 上边界
  bottom, // 下边界
  near,   // 近裁剪面
  far     // 远裁剪面
)

// 典型示例
const frustumSize = 10
const aspect = window.innerWidth / window.innerHeight
const camera = new THREE.OrthographicCamera(
  frustumSize * aspect / -2,  // left
  frustumSize * aspect / 2,   // right
  frustumSize / 2,            // top
  frustumSize / -2,           // bottom
  0.1,                        // near
  1000                        // far
)</code></pre>
      </section>
      
      <section>
        <h2>相机控制</h2>
        
        <h3>手动控制</h3>
        <pre><code>// 移动相机
camera.position.x += 0.1

// 旋转相机
camera.rotation.y += 0.01

// 更新投影矩阵（改变相机参数后需要调用）
camera.updateProjectionMatrix()</code></pre>
        
        <h3>使用控制器</h3>
        <p>Three.js 提供了多种相机控制器，让用户可以交互式地控制相机：</p>
        
        <pre><code>import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)

// 设置控制器参数
controls.enableDamping = true  // 启用阻尼
controls.dampingFactor = 0.25  // 阻尼系数
controls.enableZoom = true     // 启用缩放
controls.autoRotate = true     // 自动旋转

// 在动画循环中更新控制器
function animate() {
  controls.update()
  renderer.render(scene, camera)
}</code></pre>
      </section>
      
      <section>
        <h2>常见问题和解决方案</h2>
        
        <h3>Q: 为什么物体看不见？</h3>
        <p>A: 检查以下几点：</p>
        <ul>
          <li>相机位置是否在物体内部</li>
          <li>物体是否在相机的视野范围内</li>
          <li>near 和 far 参数是否合适</li>
          <li>相机是否朝向正确的方向</li>
        </ul>
        
        <h3>Q: 如何让相机跟随物体？</h3>
        <pre><code>// 在动画循环中更新相机位置
function animate() {
  // 相机跟随玩家，保持一定距离
  camera.position.copy(player.position)
  camera.position.y += 5  // 高度偏移
  camera.position.z += 10 // 距离偏移
  camera.lookAt(player.position)
}</code></pre>
        
        <h3>Q: 如何实现第一人称视角？</h3>
        <pre><code>// 将相机放在角色头部位置
camera.position.copy(character.position)
camera.position.y += 1.8  // 人物身高

// 根据鼠标移动旋转相机
document.addEventListener('mousemove', (event) => {
  camera.rotation.y -= event.movementX * 0.002
  camera.rotation.x -= event.movementY * 0.002
})</code></pre>
      </section>
      
      <section>
        <h2>最佳实践</h2>
        
        <h3>1. 合理设置裁剪面</h3>
        <ul>
          <li>near 值不要太小（避免 z-fighting）</li>
          <li>far 值不要太大（影响深度精度）</li>
          <li>根据场景大小调整 near 和 far</li>
        </ul>
        
        <h3>2. 响应式相机</h3>
        <pre><code>// 窗口大小改变时更新相机
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})</code></pre>
        
        <h3>3. 相机动画</h3>
        <pre><code>// 使用 Tween.js 实现平滑的相机移动
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'

function moveCameraTo(targetPosition) {
  new TWEEN.Tween(camera.position)
    .to(targetPosition, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)
    .start()
}</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'CameraPage',
  setup() {
    const canvasContainer = ref(null)
    let scene, camera, renderer, cube
    let animationId
    
    const initThree = () => {
      // 创建场景
      scene = new THREE.Scene()
      scene.background = new THREE.Color(0xf0f0f0)
      
      // 创建相机
      camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000)
      camera.position.set(5, 3, 8)
      
      // 创建渲染器
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(400, 300)
      
      // 创建立方体
      const geometry = new THREE.BoxGeometry(2, 2, 2)
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x42b883,
        wireframe: true
      })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      
      // 添加坐标轴辅助器
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      
      // 相机朝向立方体
      camera.lookAt(cube.position)
      
      // 添加到容器
      canvasContainer.value.appendChild(renderer.domElement)
      
      // 开始动画
      animate()
    }
    
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      cube.rotation.x += 0.005
      cube.rotation.y += 0.005
      
      renderer.render(scene, camera)
    }
    
    const changeView = (viewType) => {
      switch (viewType) {
        case 'front':
          camera.position.set(0, 0, 8)
          break
        case 'side':
          camera.position.set(8, 0, 0)
          break
        case 'top':
          camera.position.set(0, 8, 0)
          break
        case 'perspective':
          camera.position.set(5, 3, 8)
          break
      }
      camera.lookAt(cube.position)
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
      changeView
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
}

.demo-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.demo-controls {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.demo-controls button {
  padding: 0.5rem 1rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.demo-controls button:hover {
  background: #369870;
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
    justify-content: center;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>