<template>
  <div class="tutorial-page">
    <h1>场景 (Scene)</h1>
    
    <div class="content">
      <section>
        <h2>什么是场景？</h2>
        <p>场景（Scene）是 Three.js 中的核心概念之一，它就像一个 3D 世界的容器，用来存放所有的 3D 对象、光源、相机等元素。</p>
        
        <p>可以把场景想象成一个舞台，所有的演员（3D 对象）都在这个舞台上表演，而观众（相机）从不同的角度观看这个舞台。</p>
      </section>
      
      <section>
        <h2>创建场景</h2>
        <p>创建一个场景非常简单：</p>
        
        <pre><code>const scene = new THREE.Scene()</code></pre>
        
        <p>这就创建了一个空的 3D 场景，现在你可以向其中添加各种对象了。</p>
      </section>
      
      <section>
        <h2>场景的重要属性</h2>
        
        <h3>1. background - 背景</h3>
        <p>设置场景的背景颜色或纹理：</p>
        
        <pre><code>// 设置纯色背景
scene.background = new THREE.Color(0xf0f0f0)

// 设置渐变背景
scene.background = new THREE.Color(0x87CEEB)

// 设置纹理背景
const loader = new THREE.TextureLoader()
scene.background = loader.load('path/to/texture.jpg')</code></pre>
        
        <h3>2. fog - 雾效</h3>
        <p>为场景添加雾效，增强深度感：</p>
        
        <pre><code>// 线性雾效
scene.fog = new THREE.Fog(0xcccccc, 10, 15)

// 指数雾效
scene.fog = new THREE.FogExp2(0xcccccc, 0.002)</code></pre>
        
        <h3>3. children - 子对象</h3>
        <p>场景中所有对象的数组，通常不直接操作：</p>
        
        <pre><code>console.log('场景中的对象数量:', scene.children.length)</code></pre>
      </section>
      
      <section>
        <h2>场景的重要方法</h2>
        
        <h3>1. add() - 添加对象</h3>
        <pre><code>// 添加单个对象
scene.add(cube)

// 添加多个对象
scene.add(cube, sphere, light)</code></pre>
        
        <h3>2. remove() - 移除对象</h3>
        <pre><code>// 移除对象
scene.remove(cube)

// 移除多个对象
scene.remove(cube, sphere)</code></pre>
        
        <h3>3. getObjectByName() - 通过名称获取对象</h3>
        <pre><code>// 给对象命名
cube.name = 'myCube'

// 通过名称查找
const foundCube = scene.getObjectByName('myCube')</code></pre>
        
        <h3>4. traverse() - 遍历所有对象</h3>
        <pre><code>// 遍历场景中的所有对象
scene.traverse((object) => {
  console.log('对象名称:', object.name)
  console.log('对象类型:', object.type)
})</code></pre>
      </section>
      
      <section>
        <h2>实际示例</h2>
        <p>下面是一个包含多个对象和雾效的场景示例：</p>
        
        <div class="demo-container">
          <div class="demo-canvas" ref="canvasContainer"></div>
        </div>
        
        <pre><code>// 创建场景
const scene = new THREE.Scene()

// 设置背景色
scene.background = new THREE.Color(0x87CEEB)

// 添加雾效
scene.fog = new THREE.Fog(0x87CEEB, 1, 100)

// 创建多个对象
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube.position.x = -2
cube.name = 'redCube'

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
sphere.name = 'greenSphere'

const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cone.position.x = 2
cone.name = 'blueCone'

// 添加到场景
scene.add(cube, sphere, cone)

// 查找对象
const foundSphere = scene.getObjectByName('greenSphere')
console.log('找到球体:', foundSphere)</code></pre>
      </section>
      
      <section>
        <h2>最佳实践</h2>
        
        <h3>1. 对象命名</h3>
        <p>为重要的对象设置有意义的名称，便于后续查找和调试：</p>
        <pre><code>player.name = 'player'
enemy.name = 'enemy_01'
terrain.name = 'ground'</code></pre>
        
        <h3>2. 场景组织</h3>
        <p>使用 Group 来组织相关的对象：</p>
        <pre><code>const buildingGroup = new THREE.Group()
buildingGroup.add(wall1, wall2, roof)
buildingGroup.name = 'building'
scene.add(buildingGroup)</code></pre>
        
        <h3>3. 性能优化</h3>
        <p>定期清理不需要的对象：</p>
        <pre><code>// 移除对象并释放内存
scene.remove(object)
object.geometry.dispose()
object.material.dispose()</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'ScenePage',
  setup() {
    const canvasContainer = ref(null)
    let scene, camera, renderer, objects = []
    let animationId
    
    const initThree = () => {
      // 创建场景
      scene = new THREE.Scene()
      scene.background = new THREE.Color(0x87CEEB)
      scene.fog = new THREE.Fog(0x87CEEB, 1, 100)
      
      // 创建相机
      camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000)
      camera.position.z = 8
      
      // 创建渲染器
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(400, 300)
      
      // 创建多个对象
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
      )
      cube.position.x = -2
      cube.name = 'redCube'
      
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.7),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      )
      sphere.name = 'greenSphere'
      
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(0.7, 1.5),
        new THREE.MeshBasicMaterial({ color: 0x0000ff })
      )
      cone.position.x = 2
      cone.name = 'blueCone'
      
      objects = [cube, sphere, cone]
      scene.add(...objects)
      
      // 添加到容器
      canvasContainer.value.appendChild(renderer.domElement)
      
      // 开始动画
      animate()
    }
    
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      objects.forEach((obj, index) => {
        obj.rotation.x += 0.01
        obj.rotation.y += 0.01 * (index + 1)
      })
      
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