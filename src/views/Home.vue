<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">Three.js 学习指南</h1>
      <p class="hero-subtitle">
        从零开始学习 Three.js，掌握 3D Web 开发的核心技术
      </p>
      <div class="hero-actions">
        <router-link to="/tutorial" class="btn btn-primary">开始学习</router-link>
        <router-link to="/examples" class="btn btn-secondary">查看示例</router-link>
      </div>
    </div>
    
    <div class="demo-container">
      <div class="demo-canvas" ref="canvasContainer"></div>
    </div>
    
    <div class="features">
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">📚</div>
          <h3>系统教程</h3>
          <p>从基础概念到高级技巧，循序渐进的学习路径</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>实战示例</h3>
          <p>丰富的代码示例和交互演示，边学边练</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📖</div>
          <h3>API文档</h3>
          <p>完整的 API 参考文档，快速查找所需信息</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>最佳实践</h3>
          <p>性能优化技巧和开发最佳实践分享</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'Home',
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
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x42b883,
        wireframe: true
      })
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
.home {
  max-width: 800px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 3rem 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #42b883;
  color: white;
}

.btn-primary:hover {
  background: #369870;
}

.btn-secondary {
  background: transparent;
  color: #42b883;
  border: 2px solid #42b883;
}

.btn-secondary:hover {
  background: #42b883;
  color: white;
}

.demo-container {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
}

.demo-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
}

.features {
  margin: 4rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .demo-canvas {
    width: 100%;
    max-width: 400px;
  }
}
</style>