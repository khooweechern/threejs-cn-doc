<template>
  <div class="examples">
    <div class="examples-header">
      <h1>Three.js 示例</h1>
      <p>通过实际示例学习 Three.js 的各种功能和技巧</p>
    </div>
    
    <div class="examples-grid">
      <div class="example-card" v-for="example in examples" :key="example.id">
        <div class="example-preview">
          <div class="example-canvas" :ref="el => setCanvasRef(example.id, el)"></div>
        </div>
        <div class="example-info">
          <h3>{{ example.title }}</h3>
          <p>{{ example.description }}</p>
          <div class="example-tags">
            <span class="tag" v-for="tag in example.tags" :key="tag">{{ tag }}</span>
          </div>
          <button class="view-code-btn" @click="toggleCode(example.id)">
            {{ showCode[example.id] ? '隐藏代码' : '查看代码' }}
          </button>
        </div>
        
        <div v-if="showCode[example.id]" class="code-section">
          <pre><code>{{ example.code }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'Examples',
  setup() {
    const canvasRefs = ref({})
    const showCode = reactive({})
    const scenes = {}
    const renderers = {}
    const animationIds = {}
    
    const examples = [
      {
        id: 'rotating-cube',
        title: '旋转立方体',
        description: '最基础的 Three.js 示例，展示如何创建和旋转一个立方体',
        tags: ['基础', '几何体', '动画'],
        code: `// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
camera.position.z = 5

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(300, 200)

// 创建立方体
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x42b883 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 动画循环
function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()`
      },
      {
        id: 'colorful-sphere',
        title: '彩色球体',
        description: '使用不同材质创建彩色球体，展示材质的基本用法',
        tags: ['材质', '几何体', '颜色'],
        code: `// 创建场景和相机
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
camera.position.z = 5

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(300, 200)

// 创建球体
const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ 
  color: 0xff6b6b,
  wireframe: false
})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// 动画
function animate() {
  requestAnimationFrame(animate)
  sphere.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()`
      },
      {
        id: 'multiple-objects',
        title: '多个物体',
        description: '在场景中添加多个不同的几何体，展示场景管理',
        tags: ['场景', '多物体', '组合'],
        code: `// 创建场景
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
camera.position.z = 8

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(300, 200)

// 创建多个物体
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0x42b883 })
)
cube.position.x = -2

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7),
  new THREE.MeshBasicMaterial({ color: 0xff6b6b })
)

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5),
  new THREE.MeshBasicMaterial({ color: 0x4ecdc4 })
)
cone.position.x = 2

scene.add(cube, sphere, cone)

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.y += 0.01
  sphere.rotation.x += 0.01
  cone.rotation.z += 0.01
  renderer.render(scene, camera)
}
animate()`
      }
    ]
    
    const setCanvasRef = (id, el) => {
      if (el) {
        canvasRefs.value[id] = el
      }
    }
    
    const toggleCode = (id) => {
      showCode[id] = !showCode[id]
    }
    
    const initExample = (example) => {
      const container = canvasRefs.value[example.id]
      if (!container) return
      
      // 创建场景
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(300, 200)
      renderer.setClearColor(0x000000, 0)
      
      container.appendChild(renderer.domElement)
      
      // 根据示例类型创建不同的内容
      if (example.id === 'rotating-cube') {
        camera.position.z = 5
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x42b883 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        
        const animate = () => {
          animationIds[example.id] = requestAnimationFrame(animate)
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
          renderer.render(scene, camera)
        }
        animate()
      } else if (example.id === 'colorful-sphere') {
        camera.position.z = 5
        const geometry = new THREE.SphereGeometry(1, 32, 32)
        const material = new THREE.MeshBasicMaterial({ color: 0xff6b6b })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)
        
        const animate = () => {
          animationIds[example.id] = requestAnimationFrame(animate)
          sphere.rotation.y += 0.01
          renderer.render(scene, camera)
        }
        animate()
      } else if (example.id === 'multiple-objects') {
        camera.position.z = 8
        
        const cube = new THREE.Mesh(
          new THREE.BoxGeometry(),
          new THREE.MeshBasicMaterial({ color: 0x42b883 })
        )
        cube.position.x = -2
        
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.7),
          new THREE.MeshBasicMaterial({ color: 0xff6b6b })
        )
        
        const cone = new THREE.Mesh(
          new THREE.ConeGeometry(0.7, 1.5),
          new THREE.MeshBasicMaterial({ color: 0x4ecdc4 })
        )
        cone.position.x = 2
        
        scene.add(cube, sphere, cone)
        
        const animate = () => {
          animationIds[example.id] = requestAnimationFrame(animate)
          cube.rotation.y += 0.01
          sphere.rotation.x += 0.01
          cone.rotation.z += 0.01
          renderer.render(scene, camera)
        }
        animate()
      }
      
      scenes[example.id] = scene
      renderers[example.id] = renderer
    }
    
    onMounted(() => {
      // 初始化所有示例的 showCode 状态
      examples.forEach(example => {
        showCode[example.id] = false
      })
      
      // 延迟初始化以确保 DOM 已渲染
      setTimeout(() => {
        examples.forEach(initExample)
      }, 100)
    })
    
    onUnmounted(() => {
      // 清理资源
      Object.values(animationIds).forEach(id => {
        if (id) cancelAnimationFrame(id)
      })
      Object.values(renderers).forEach(renderer => {
        if (renderer) renderer.dispose()
      })
    })
    
    return {
      examples,
      showCode,
      setCanvasRef,
      toggleCode
    }
  }
}
</script>

<style scoped>
.examples {
  max-width: 1000px;
  margin: 0 auto;
}

.examples-header {
  text-align: center;
  margin-bottom: 3rem;
}

.examples-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.examples-header p {
  font-size: 1.1rem;
  color: #666;
}

.examples-grid {
  display: grid;
  gap: 2rem;
}

.example-card {
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.example-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.example-preview {
  background: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 220px;
}

.example-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  overflow: hidden;
}

.example-info {
  padding: 1.5rem;
}

.example-info h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.example-info p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.example-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.view-code-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.view-code-btn:hover {
  background: #369870;
}

.code-section {
  border-top: 1px solid #e1e8ed;
  background: #f8f9fa;
}

.code-section pre {
  margin: 0;
  padding: 1.5rem;
  background: #2d3748;
  color: #e2e8f0;
  overflow-x: auto;
}

.code-section code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .examples-header h1 {
    font-size: 2rem;
  }
  
  .example-info {
    padding: 1rem;
  }
  
  .example-preview {
    padding: 0.5rem;
  }
}
</style>