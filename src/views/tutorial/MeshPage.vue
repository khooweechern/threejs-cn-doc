<template>
  <div class="tutorial-page">
    <h1>网格 (Mesh)</h1>
    
    <div class="content">
      <section>
        <h2>什么是网格？</h2>
        <p>网格（Mesh）是 Three.js 中最重要的对象类型之一，它将几何体（Geometry）和材质（Material）结合在一起，形成一个可以在 3D 场景中显示的完整对象。</p>
        
        <p>可以把网格理解为：</p>
        <ul>
          <li><strong>几何体</strong>：定义物体的形状和结构</li>
          <li><strong>材质</strong>：定义物体的外观和视觉效果</li>
          <li><strong>网格</strong>：将形状和外观组合成完整的 3D 对象</li>
        </ul>
        
        <div class="concept-demo">
          <div class="demo-canvas" ref="conceptCanvas"></div>
          <div class="concept-explanation">
            <p><strong>几何体 + 材质 = 网格</strong></p>
            <p>左边是几何体的线框，右边是添加材质后的完整网格</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2>创建网格</h2>
        <p>创建网格需要几何体和材质两个基本要素：</p>
        
        <pre><code>// 1. 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 2. 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 3. 创建网格
const mesh = new THREE.Mesh(geometry, material)

// 4. 添加到场景
scene.add(mesh)</code></pre>
        
        <h3>一步创建</h3>
        <pre><code>// 直接在构造函数中创建
const mesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshLambertMaterial({ color: 0xff0000 })
)</code></pre>
      </section>
      
      <section>
        <h2>网格的重要属性</h2>
        
        <h3>1. position - 位置</h3>
        <p>控制网格在 3D 空间中的位置：</p>
        <pre><code>// 设置位置的不同方法
mesh.position.x = 5
mesh.position.y = 3
mesh.position.z = -2

// 使用 set 方法
mesh.position.set(5, 3, -2)

// 使用 Vector3
mesh.position.copy(new THREE.Vector3(5, 3, -2))</code></pre>
        
        <h3>2. rotation - 旋转</h3>
        <p>控制网格的旋转角度（以弧度为单位）：</p>
        <pre><code>// 绕各轴旋转
mesh.rotation.x = Math.PI / 4  // 45度
mesh.rotation.y = Math.PI / 2  // 90度
mesh.rotation.z = Math.PI      // 180度

// 使用 set 方法
mesh.rotation.set(Math.PI/4, Math.PI/2, 0)

// 旋转顺序
mesh.rotation.order = 'YXZ'  // 默认是 'XYZ'</code></pre>
        
        <h3>3. scale - 缩放</h3>
        <p>控制网格的大小：</p>
        <pre><code>// 等比缩放
mesh.scale.setScalar(2)  // 放大2倍

// 不等比缩放
mesh.scale.x = 2  // X轴放大2倍
mesh.scale.y = 0.5  // Y轴缩小一半
mesh.scale.z = 1  // Z轴保持不变

// 使用 set 方法
mesh.scale.set(2, 0.5, 1)</code></pre>
        
        <div class="transform-demo">
          <h3>变换演示</h3>
          <div class="demo-container">
            <div class="demo-canvas" ref="transformCanvas"></div>
            <div class="demo-controls">
              <div class="control-section">
                <h4>位置</h4>
                <div class="control-group">
                  <label>X: <span>{{ position.x }}</span></label>
                  <input type="range" min="-3" max="3" step="0.1" v-model="position.x" @input="updateTransform">
                </div>
                <div class="control-group">
                  <label>Y: <span>{{ position.y }}</span></label>
                  <input type="range" min="-3" max="3" step="0.1" v-model="position.y" @input="updateTransform">
                </div>
                <div class="control-group">
                  <label>Z: <span>{{ position.z }}</span></label>
                  <input type="range" min="-3" max="3" step="0.1" v-model="position.z" @input="updateTransform">
                </div>
              </div>
              
              <div class="control-section">
                <h4>旋转</h4>
                <div class="control-group">
                  <label>X: <span>{{ Math.round(rotation.x * 180 / Math.PI) }}°</span></label>
                  <input type="range" min="0" max="6.28" step="0.1" v-model="rotation.x" @input="updateTransform">
                </div>
                <div class="control-group">
                  <label>Y: <span>{{ Math.round(rotation.y * 180 / Math.PI) }}°</span></label>
                  <input type="range" min="0" max="6.28" step="0.1" v-model="rotation.y" @input="updateTransform">
                </div>
                <div class="control-group">
                  <label>Z: <span>{{ Math.round(rotation.z * 180 / Math.PI) }}°</span></label>
                  <input type="range" min="0" max="6.28" step="0.1" v-model="rotation.z" @input="updateTransform">
                </div>
              </div>
              
              <div class="control-section">
                <h4>缩放</h4>
                <div class="control-group">
                  <label>X: <span>{{ scale.x }}</span></label>
                  <input type="range" min="0.1" max="3" step="0.1" v-model="scale.x" @input="updateTransform">
                </div>
                <div class="control-group">
                  <label>Y: <span>{{ scale.y }}</span></label>
                  <input type="range" min="0.1" max="3" step="0.1" v-model="scale.y" @input="updateTransform">
                </div>
                <div class="control-group">
                  <label>Z: <span>{{ scale.z }}</span></label>
                  <input type="range" min="0.1" max="3" step="0.1" v-model="scale.z" @input="updateTransform">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>网格的重要方法</h2>
        
        <h3>1. 变换方法</h3>
        <pre><code>// 平移
mesh.translateX(2)      // 沿X轴移动2个单位
mesh.translateY(-1)     // 沿Y轴移动-1个单位
mesh.translateZ(3)      // 沿Z轴移动3个单位

// 旋转
mesh.rotateX(Math.PI / 4)  // 绕X轴旋转45度
mesh.rotateY(Math.PI / 2)  // 绕Y轴旋转90度
mesh.rotateOnAxis(axis, angle)  // 绕指定轴旋转

// 朝向
mesh.lookAt(target)     // 让网格朝向目标位置</code></pre>
        
        <h3>2. 层级关系</h3>
        <pre><code>// 添加子对象
const childMesh = new THREE.Mesh(geometry, material)
mesh.add(childMesh)

// 移除子对象
mesh.remove(childMesh)

// 遍历子对象
mesh.traverse((child) => {
  if (child.isMesh) {
    console.log('找到网格:', child.name)
  }
})

// 通过名称查找
const foundChild = mesh.getObjectByName('childName')</code></pre>
        
        <h3>3. 世界坐标转换</h3>
        <pre><code>// 获取世界位置
const worldPosition = new THREE.Vector3()
mesh.getWorldPosition(worldPosition)

// 获取世界旋转
const worldQuaternion = new THREE.Quaternion()
mesh.getWorldQuaternion(worldQuaternion)

// 获取世界缩放
const worldScale = new THREE.Vector3()
mesh.getWorldScale(worldScale)</code></pre>
      </section>
      
      <section>
        <h2>网格的高级属性</h2>
        
        <h3>1. visible - 可见性</h3>
        <pre><code>// 隐藏网格
mesh.visible = false

// 显示网格
mesh.visible = true

// 切换可见性
mesh.visible = !mesh.visible</code></pre>
        
        <h3>2. castShadow & receiveShadow - 阴影</h3>
        <pre><code>// 投射阴影
mesh.castShadow = true

// 接收阴影
mesh.receiveShadow = true

// 注意：需要启用渲染器的阴影功能
renderer.shadowMap.enabled = true</code></pre>
        
        <h3>3. layers - 图层</h3>
        <pre><code>// 设置图层
mesh.layers.set(1)  // 设置为图层1

// 启用多个图层
mesh.layers.enable(0)  // 启用图层0
mesh.layers.enable(2)  // 启用图层2

// 相机也需要设置对应图层才能看到
camera.layers.enable(1)</code></pre>
        
        <h3>4. userData - 用户数据</h3>
        <pre><code>// 存储自定义数据
mesh.userData = {
  type: 'enemy',
  health: 100,
  speed: 5
}

// 访问用户数据
console.log(mesh.userData.health)</code></pre>
      </section>
      
      <section>
        <h2>网格组合和管理</h2>
        
        <h3>1. 使用 Group 组织网格</h3>
        <pre><code>// 创建组
const group = new THREE.Group()

// 添加多个网格到组
const mesh1 = new THREE.Mesh(geometry1, material1)
const mesh2 = new THREE.Mesh(geometry2, material2)
const mesh3 = new THREE.Mesh(geometry3, material3)

group.add(mesh1, mesh2, mesh3)

// 整体变换组
group.position.set(0, 5, 0)
group.rotation.y = Math.PI / 4

// 添加组到场景
scene.add(group)</code></pre>
        
        <h3>2. 实例化网格 (InstancedMesh)</h3>
        <p>当需要渲染大量相同的对象时，使用实例化网格可以大幅提升性能：</p>
        <pre><code>// 创建实例化网格
const instanceCount = 1000
const instancedMesh = new THREE.InstancedMesh(
  geometry, 
  material, 
  instanceCount
)

// 设置每个实例的变换矩阵
const matrix = new THREE.Matrix4()
for (let i = 0; i < instanceCount; i++) {
  // 随机位置
  const x = (Math.random() - 0.5) * 100
  const y = (Math.random() - 0.5) * 100
  const z = (Math.random() - 0.5) * 100
  
  matrix.setPosition(x, y, z)
  instancedMesh.setMatrixAt(i, matrix)
}

// 更新实例矩阵
instancedMesh.instanceMatrix.needsUpdate = true

scene.add(instancedMesh)</code></pre>
      </section>
      
      <section>
        <h2>性能优化技巧</h2>
        
        <h3>1. 几何体和材质复用</h3>
        <pre><code>// 复用几何体和材质
const sharedGeometry = new THREE.BoxGeometry(1, 1, 1)
const sharedMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 })

// 创建多个网格但共享资源
const mesh1 = new THREE.Mesh(sharedGeometry, sharedMaterial)
const mesh2 = new THREE.Mesh(sharedGeometry, sharedMaterial)
const mesh3 = new THREE.Mesh(sharedGeometry, sharedMaterial)</code></pre>
        
        <h3>2. 视锥体剔除</h3>
        <pre><code>// 启用视锥体剔除（默认启用）
mesh.frustumCulled = true

// 对于总是可见的对象可以禁用
skyboxMesh.frustumCulled = false</code></pre>
        
        <h3>3. 层级细节 (LOD)</h3>
        <pre><code>// 创建LOD对象
const lod = new THREE.LOD()

// 添加不同细节级别的网格
lod.addLevel(highDetailMesh, 0)    // 0-50单位距离
lod.addLevel(mediumDetailMesh, 50) // 50-100单位距离
lod.addLevel(lowDetailMesh, 100)   // 100+单位距离

scene.add(lod)</code></pre>
      </section>
      
      <section>
        <h2>常见问题解决</h2>
        
        <h3>Q: 网格不显示怎么办？</h3>
        <p>A: 检查以下几点：</p>
        <ul>
          <li>网格是否添加到场景中</li>
          <li>相机位置是否正确</li>
          <li>网格是否在相机的视野范围内</li>
          <li>材质是否需要光照（Lambert、Phong材质需要光源）</li>
          <li>网格的 visible 属性是否为 true</li>
        </ul>
        
        <h3>Q: 如何检测鼠标点击网格？</h3>
        <pre><code>// 使用射线投射
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

function onMouseClick(event) {
  // 计算鼠标位置
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  
  // 设置射线
  raycaster.setFromCamera(mouse, camera)
  
  // 检测相交的对象
  const intersects = raycaster.intersectObjects([mesh])
  
  if (intersects.length > 0) {
    console.log('点击了网格!')
  }
}

window.addEventListener('click', onMouseClick)</code></pre>
        
        <h3>Q: 如何实现网格动画？</h3>
        <pre><code>// 在渲染循环中更新网格属性
function animate() {
  requestAnimationFrame(animate)
  
  // 旋转动画
  mesh.rotation.y += 0.01
  
  // 浮动动画
  mesh.position.y = Math.sin(Date.now() * 0.001) * 2
  
  // 缩放动画
  const scale = 1 + Math.sin(Date.now() * 0.002) * 0.3
  mesh.scale.setScalar(scale)
  
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
  name: 'MeshPage',
  setup() {
    const conceptCanvas = ref(null)
    const transformCanvas = ref(null)
    
    const position = reactive({ x: 0, y: 0, z: 0 })
    const rotation = reactive({ x: 0, y: 0, z: 0 })
    const scale = reactive({ x: 1, y: 1, z: 1 })
    
    let conceptScene, conceptRenderer, conceptMesh1, conceptMesh2
    let transformScene, transformRenderer, transformMesh
    let animationIds = {}
    
    const initConceptDemo = () => {
      if (!conceptCanvas.value) return
      
      conceptScene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 500 / 200, 0.1, 1000)
      conceptRenderer = new THREE.WebGLRenderer({ antialias: true })
      conceptRenderer.setSize(500, 200)
      
      // 创建几何体
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      
      // 左边：线框几何体
      const wireframeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x42b883, 
        wireframe: true 
      })
      conceptMesh1 = new THREE.Mesh(geometry, wireframeMaterial)
      conceptMesh1.position.x = -1.5
      
      // 右边：完整网格
      const solidMaterial = new THREE.MeshBasicMaterial({ color: 0x42b883 })
      conceptMesh2 = new THREE.Mesh(geometry, solidMaterial)
      conceptMesh2.position.x = 1.5
      
      conceptScene.add(conceptMesh1, conceptMesh2)
      
      camera.position.z = 5
      
      conceptCanvas.value.appendChild(conceptRenderer.domElement)
      
      const animate = () => {
        animationIds['concept'] = requestAnimationFrame(animate)
        
        conceptMesh1.rotation.y += 0.01
        conceptMesh2.rotation.y += 0.01
        
        conceptRenderer.render(conceptScene, camera)
      }
      
      animate()
    }
    
    const initTransformDemo = () => {
      if (!transformCanvas.value) return
      
      transformScene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000)
      transformRenderer = new THREE.WebGLRenderer({ antialias: true })
      transformRenderer.setSize(400, 300)
      
      // 添加网格辅助线
      const gridHelper = new THREE.GridHelper(10, 10)
      transformScene.add(gridHelper)
      
      // 添加坐标轴辅助器
      const axesHelper = new THREE.AxesHelper(3)
      transformScene.add(axesHelper)
      
      // 创建可变换的网格
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x42b883 })
      transformMesh = new THREE.Mesh(geometry, material)
      transformScene.add(transformMesh)
      
      camera.position.set(5, 5, 5)
      camera.lookAt(0, 0, 0)
      
      transformCanvas.value.appendChild(transformRenderer.domElement)
      
      const animate = () => {
        animationIds['transform'] = requestAnimationFrame(animate)
        transformRenderer.render(transformScene, camera)
      }
      
      animate()
    }
    
    const updateTransform = () => {
      if (transformMesh) {
        transformMesh.position.set(
          parseFloat(position.x),
          parseFloat(position.y),
          parseFloat(position.z)
        )
        
        transformMesh.rotation.set(
          parseFloat(rotation.x),
          parseFloat(rotation.y),
          parseFloat(rotation.z)
        )
        
        transformMesh.scale.set(
          parseFloat(scale.x),
          parseFloat(scale.y),
          parseFloat(scale.z)
        )
      }
    }
    
    onMounted(() => {
      setTimeout(() => {
        initConceptDemo()
        initTransformDemo()
      }, 100)
    })
    
    onUnmounted(() => {
      Object.values(animationIds).forEach(id => {
        if (id) cancelAnimationFrame(id)
      })
      if (conceptRenderer) conceptRenderer.dispose()
      if (transformRenderer) transformRenderer.dispose()
    })
    
    return {
      conceptCanvas,
      transformCanvas,
      position,
      rotation,
      scale,
      updateTransform,
      Math
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

.concept-demo {
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

.concept-explanation p {
  margin: 0.5rem 0;
  color: #2c3e50;
}

.transform-demo {
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
  gap: 2rem;
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
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.9rem;
}

.control-group input[type="range"] {
  width: 100%;
}

.control-group span {
  color: #42b883;
  font-weight: bold;
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
  
  .concept-demo,
  .transform-demo {
    padding: 1rem;
  }
  
  .demo-canvas {
    width: 100%;
    max-width: 400px;
  }
  
  .demo-controls {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .control-section {
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>