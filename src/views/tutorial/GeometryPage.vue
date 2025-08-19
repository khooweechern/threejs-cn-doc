<template>
  <div class="tutorial-page">
    <h1>几何体 (Geometry)</h1>
    
    <div class="content">
      <section>
        <h2>什么是几何体？</h2>
        <p>几何体（Geometry）定义了 3D 对象的形状和结构。它包含了顶点位置、面的信息、法向量、纹理坐标等数据。可以把几何体想象成一个物体的"骨架"或"框架"。</p>
        
        <p>Three.js 提供了两种几何体类型：</p>
        <ul>
          <li><strong>BufferGeometry</strong>：现代的、高性能的几何体类型（推荐）</li>
          <li><strong>Geometry</strong>：传统的几何体类型（已废弃）</li>
        </ul>
      </section>
      
      <section>
        <h2>内置几何体</h2>
        <p>Three.js 提供了丰富的内置几何体，满足大部分常见需求：</p>
        
        <div class="geometry-grid">
          <div class="geometry-item" v-for="geo in geometries" :key="geo.name">
            <div class="geometry-preview" :ref="el => setGeometryRef(geo.name, el)"></div>
            <h3>{{ geo.name }}</h3>
            <p>{{ geo.description }}</p>
            <button @click="showCode(geo)" class="show-code-btn">查看代码</button>
          </div>
        </div>
        
        <div v-if="selectedGeometry" class="code-modal" @click="closeModal">
          <div class="code-content" @click.stop>
            <h3>{{ selectedGeometry.name }} 代码示例</h3>
            <pre><code>{{ selectedGeometry.code }}</code></pre>
            <button @click="closeModal" class="close-btn">关闭</button>
          </div>
        </div>
      </section>
      
      <section>
        <h2>几何体的重要属性</h2>
        
        <h3>1. attributes - 属性</h3>
        <p>包含顶点数据的属性集合：</p>
        <pre><code>const geometry = new THREE.BoxGeometry(1, 1, 1)

// 访问顶点位置
console.log(geometry.attributes.position)

// 访问法向量
console.log(geometry.attributes.normal)

// 访问纹理坐标
console.log(geometry.attributes.uv)</code></pre>
        
        <h3>2. index - 索引</h3>
        <p>定义如何连接顶点形成面：</p>
        <pre><code>// 查看索引数据
console.log(geometry.index)

// 获取面的数量
const faceCount = geometry.index.count / 3</code></pre>
        
        <h3>3. boundingBox - 包围盒</h3>
        <p>几何体的边界信息：</p>
        <pre><code>// 计算包围盒
geometry.computeBoundingBox()

// 获取尺寸
const size = new THREE.Vector3()
geometry.boundingBox.getSize(size)
console.log('几何体尺寸:', size)</code></pre>
      </section>
      
      <section>
        <h2>几何体的重要方法</h2>
        
        <h3>1. 计算法向量</h3>
        <pre><code>// 自动计算法向量（用于光照）
geometry.computeVertexNormals()</code></pre>
        
        <h3>2. 变换操作</h3>
        <pre><code>// 平移
geometry.translate(x, y, z)

// 旋转
geometry.rotateX(Math.PI / 4)
geometry.rotateY(Math.PI / 4)
geometry.rotateZ(Math.PI / 4)

// 缩放
geometry.scale(2, 2, 2)</code></pre>
        
        <h3>3. 合并几何体</h3>
        <pre><code>import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

const geo1 = new THREE.BoxGeometry(1, 1, 1)
const geo2 = new THREE.SphereGeometry(0.5)

// 合并几何体
const mergedGeometry = mergeBufferGeometries([geo1, geo2])</code></pre>
      </section>
      
      <section>
        <h2>自定义几何体</h2>
        <p>当内置几何体无法满足需求时，可以创建自定义几何体：</p>
        
        <h3>创建三角形</h3>
        <pre><code>// 创建自定义三角形几何体
function createTriangleGeometry() {
  const geometry = new THREE.BufferGeometry()
  
  // 定义三个顶点
  const vertices = new Float32Array([
    -1.0, -1.0,  0.0,  // 左下
     1.0, -1.0,  0.0,  // 右下
     0.0,  1.0,  0.0   // 顶部
  ])
  
  // 设置位置属性
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  
  // 计算法向量
  geometry.computeVertexNormals()
  
  return geometry
}</code></pre>
        
        <h3>创建带索引的几何体</h3>
        <pre><code>// 创建四边形（使用索引）
function createQuadGeometry() {
  const geometry = new THREE.BufferGeometry()
  
  // 定义四个顶点
  const vertices = new Float32Array([
    -1, -1, 0,  // 0: 左下
     1, -1, 0,  // 1: 右下
     1,  1, 0,  // 2: 右上
    -1,  1, 0   // 3: 左上
  ])
  
  // 定义两个三角形的索引
  const indices = [
    0, 1, 2,  // 第一个三角形
    2, 3, 0   // 第二个三角形
  ]
  
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  
  return geometry
}</code></pre>
      </section>
      
      <section>
        <h2>几何体优化</h2>
        
        <h3>1. 减少顶点数量</h3>
        <pre><code>// 创建低多边形球体
const lowPolySphere = new THREE.SphereGeometry(1, 8, 6) // 较少的分段

// 创建高多边形球体
const highPolySphere = new THREE.SphereGeometry(1, 32, 32) // 较多的分段</code></pre>
        
        <h3>2. 复用几何体</h3>
        <pre><code>// 创建一个几何体，多个网格复用
const sharedGeometry = new THREE.BoxGeometry(1, 1, 1)

const mesh1 = new THREE.Mesh(sharedGeometry, material1)
const mesh2 = new THREE.Mesh(sharedGeometry, material2)
const mesh3 = new THREE.Mesh(sharedGeometry, material3)</code></pre>
        
        <h3>3. 内存管理</h3>
        <pre><code>// 不再使用时释放几何体
geometry.dispose()

// 检查几何体信息
console.log('顶点数量:', geometry.attributes.position.count)
console.log('面数量:', geometry.index ? geometry.index.count / 3 : 0)</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'GeometryPage',
  setup() {
    const geometryRefs = ref({})
    const selectedGeometry = ref(null)
    const scenes = {}
    const renderers = {}
    const animationIds = {}
    
    const geometries = [
      {
        name: 'BoxGeometry',
        description: '立方体几何体，最基础的几何体',
        code: `const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)`
      },
      {
        name: 'SphereGeometry', 
        description: '球体几何体，常用于创建球形对象',
        code: `const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)`
      },
      {
        name: 'CylinderGeometry',
        description: '圆柱体几何体，可创建圆柱、圆锥等',
        code: `const geometry = new THREE.CylinderGeometry(1, 1, 2, 32)
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const cylinder = new THREE.Mesh(geometry, material)
scene.add(cylinder)`
      },
      {
        name: 'PlaneGeometry',
        description: '平面几何体，常用作地面或墙面',
        code: `const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const plane = new THREE.Mesh(geometry, material)
scene.add(plane)`
      }
    ]
    
    const setGeometryRef = (name, el) => {
      if (el) {
        geometryRefs.value[name] = el
      }
    }
    
    const showCode = (geometry) => {
      selectedGeometry.value = geometry
    }
    
    const closeModal = () => {
      selectedGeometry.value = null
    }
    
    const initGeometry = (geoData) => {
      const container = geometryRefs.value[geoData.name]
      if (!container) return
      
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 200 / 150, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(200, 150)
      renderer.setClearColor(0x000000, 0)
      
      let geometry, material, mesh
      
      switch (geoData.name) {
        case 'BoxGeometry':
          geometry = new THREE.BoxGeometry(1, 1, 1)
          material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
          break
        case 'SphereGeometry':
          geometry = new THREE.SphereGeometry(0.8, 16, 16)
          material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
          break
        case 'CylinderGeometry':
          geometry = new THREE.CylinderGeometry(0.6, 0.6, 1.2, 16)
          material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
          break
        case 'PlaneGeometry':
          geometry = new THREE.PlaneGeometry(1.5, 1.5)
          material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true })
          break
      }
      
      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
      
      camera.position.z = 3
      
      container.appendChild(renderer.domElement)
      
      const animate = () => {
        animationIds[geoData.name] = requestAnimationFrame(animate)
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      
      animate()
      
      scenes[geoData.name] = scene
      renderers[geoData.name] = renderer
    }
    
    onMounted(() => {
      setTimeout(() => {
        geometries.forEach(initGeometry)
      }, 100)
    })
    
    onUnmounted(() => {
      Object.values(animationIds).forEach(id => {
        if (id) cancelAnimationFrame(id)
      })
      Object.values(renderers).forEach(renderer => {
        if (renderer) renderer.dispose()
      })
    })
    
    return {
      geometries,
      selectedGeometry,
      setGeometryRef,
      showCode,
      closeModal
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

.geometry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.geometry-item {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.geometry-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.geometry-preview {
  width: 200px;
  height: 150px;
  margin: 0 auto 1rem auto;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}

.geometry-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.geometry-item p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.show-code-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.show-code-btn:hover {
  background: #369870;
}

.code-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.code-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.code-content h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
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
  
  .geometry-grid {
    grid-template-columns: 1fr;
  }
  
  .geometry-preview {
    width: 100%;
    max-width: 200px;
  }
  
  .code-content {
    margin: 1rem;
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>