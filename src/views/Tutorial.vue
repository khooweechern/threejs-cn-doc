<template>
  <div class="tutorial">
    <div class="tutorial-header">
      <h1>Three.js 教程</h1>
      <p>系统学习 Three.js 的核心概念和实用技巧</p>
    </div>
    
    <div class="tutorial-content">
      <section class="tutorial-section">
        <h2>🚀 快速开始</h2>
        <div class="tutorial-card">
          <h3>什么是 Three.js？</h3>
          <p>Three.js 是一个基于 WebGL 的 JavaScript 3D 库，它简化了在网页中创建和显示 3D 图形的过程。</p>
          
          <h4>核心概念：</h4>
          <ul>
            <li><strong>场景 (Scene)</strong>：3D 世界的容器</li>
            <li><strong>相机 (Camera)</strong>：观察 3D 世界的视角</li>
            <li><strong>渲染器 (Renderer)</strong>：将 3D 场景渲染到 2D 屏幕</li>
            <li><strong>几何体 (Geometry)</strong>：定义物体的形状</li>
            <li><strong>材质 (Material)</strong>：定义物体的外观</li>
            <li><strong>网格 (Mesh)</strong>：几何体 + 材质的组合</li>
          </ul>
        </div>
      </section>
      
      <section class="tutorial-section">
        <h2>📦 安装和设置</h2>
        <div class="tutorial-card">
          <h3>通过 npm 安装</h3>
          <pre><code>npm install three</code></pre>
          
          <h3>基本导入</h3>
          <pre><code>import * as THREE from 'three'</code></pre>
          
          <h3>创建第一个场景</h3>
          <pre><code>// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 创建立方体
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 设置相机位置
camera.position.z = 5

// 渲染循环
function animate() {
  requestAnimationFrame(animate)
  
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  
  renderer.render(scene, camera)
}
animate()</code></pre>
        </div>
      </section>
      
      <section class="tutorial-section">
        <h2>🎯 学习路径</h2>
        <div class="learning-path">
          <div class="path-item">
            <div class="path-number">1</div>
            <div class="path-content">
              <h3>基础概念</h3>
              <p>学习场景、相机、渲染器等核心概念</p>
            </div>
          </div>
          
          <div class="path-item">
            <div class="path-number">2</div>
            <div class="path-content">
              <h3>几何体和材质</h3>
              <p>掌握各种几何体的创建和材质的应用</p>
            </div>
          </div>
          
          <div class="path-item">
            <div class="path-number">3</div>
            <div class="path-content">
              <h3>光照和阴影</h3>
              <p>理解光照模型，创建逼真的阴影效果</p>
            </div>
          </div>
          
          <div class="path-item">
            <div class="path-number">4</div>
            <div class="path-content">
              <h3>动画和交互</h3>
              <p>添加动画效果和用户交互功能</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tutorial'
}
</script>

<style scoped>
.tutorial {
  max-width: 800px;
  margin: 0 auto;
}

.tutorial-header {
  text-align: center;
  margin-bottom: 3rem;
}

.tutorial-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.tutorial-header p {
  font-size: 1.1rem;
  color: #666;
}

.tutorial-section {
  margin-bottom: 3rem;
}

.tutorial-section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #42b883;
  padding-bottom: 0.5rem;
}

.tutorial-card {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 2rem;
}

.tutorial-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.tutorial-card h4 {
  color: #42b883;
  margin: 1.5rem 0 0.5rem 0;
}

.tutorial-card ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.tutorial-card li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
}

.learning-path {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.path-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.path-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.path-number {
  width: 40px;
  height: 40px;
  background: #42b883;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.path-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.path-content p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .tutorial-header h1 {
    font-size: 2rem;
  }
  
  .tutorial-card {
    padding: 1.5rem;
  }
  
  .path-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>