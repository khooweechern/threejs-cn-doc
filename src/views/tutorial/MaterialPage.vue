<template>
  <div class="tutorial-page">
    <h1>材质 (Material)</h1>
    
    <div class="content">
      <section>
        <h2>什么是材质？</h2>
        <p>材质（Material）定义了 3D 对象的外观，包括颜色、纹理、反射、透明度等视觉属性。如果说几何体是物体的"骨架"，那么材质就是物体的"皮肤"。</p>
        
        <p>Three.js 提供了多种材质类型，适用于不同的渲染需求：</p>
        <ul>
          <li><strong>MeshBasicMaterial</strong>：基础材质，不受光照影响</li>
          <li><strong>MeshLambertMaterial</strong>：Lambert材质，漫反射光照</li>
          <li><strong>MeshPhongMaterial</strong>：Phong材质，支持镜面反射</li>
          <li><strong>MeshStandardMaterial</strong>：标准材质，基于物理的渲染</li>
        </ul>
      </section>
      
      <section>
        <h2>材质类型对比</h2>
        <p>不同材质在光照下的表现效果：</p>
        
        <div class="material-grid">
          <div class="material-item" v-for="material in materials" :key="material.name">
            <div class="material-preview" :ref="el => setMaterialRef(material.name, el)"></div>
            <h3>{{ material.name }}</h3>
            <p>{{ material.description }}</p>
            <div class="material-features">
              <span v-for="feature in material.features" :key="feature" class="feature-tag">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>基础材质 (MeshBasicMaterial)</h2>
        <p>最简单的材质，不受光照影响，始终显示相同的颜色。</p>
        
        <pre><code>// 创建基础材质
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,        // 红色
  wireframe: false,       // 是否显示线框
  transparent: false,     // 是否透明
  opacity: 1.0,          // 不透明度
  side: THREE.FrontSide  // 渲染面（正面/背面/双面）
})

// 常用属性
material.color.setHex(0x00ff00)  // 改变颜色为绿色
material.wireframe = true        // 切换为线框模式
material.opacity = 0.5           // 设置半透明</code></pre>
        
        <h3>适用场景</h3>
        <ul>
          <li>UI元素和图标</li>
          <li>不需要光照的装饰性对象</li>
          <li>调试和原型制作</li>
          <li>性能要求极高的场景</li>
        </ul>
      </section>
      
      <section>
        <h2>Lambert材质 (MeshLambertMaterial)</h2>
        <p>支持漫反射的材质，会对光照产生反应，但没有镜面反射效果。</p>
        
        <pre><code>// 创建Lambert材质
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,           // 基础颜色
  emissive: 0x000000,        // 发光颜色
  emissiveIntensity: 0,      // 发光强度
  map: texture,              // 颜色贴图
  transparent: false,        // 透明度
  opacity: 1.0              // 不透明度
})

// 设置发光效果
material.emissive.setHex(0x444444)
material.emissiveIntensity = 0.2</code></pre>
        
        <h3>特点</h3>
        <ul>
          <li>计算简单，性能较好</li>
          <li>适合表现粗糙表面</li>
          <li>支持基本的光照计算</li>
        </ul>
      </section>
      
      <section>
        <h2>Phong材质 (MeshPhongMaterial)</h2>
        <p>支持镜面反射的材质，可以创建光滑、有光泽的表面效果。</p>
        
        <pre><code>// 创建Phong材质
const material = new THREE.MeshPhongMaterial({
  color: 0x0000ff,           // 基础颜色
  specular: 0x111111,        // 镜面反射颜色
  shininess: 100,            // 光泽度
  emissive: 0x000000,        // 发光颜色
  map: diffuseTexture,       // 漫反射贴图
  normalMap: normalTexture,  // 法线贴图
  specularMap: specTexture   // 镜面反射贴图
})

// 调整光泽效果
material.shininess = 30      // 降低光泽度，更粗糙
material.specular.setHex(0xffffff)  // 白色镜面反射</code></pre>
        
        <h3>适用场景</h3>
        <ul>
          <li>金属表面</li>
          <li>塑料和陶瓷</li>
          <li>湿润的表面</li>
          <li>需要高光效果的对象</li>
        </ul>
      </section>
      
      <section>
        <h2>标准材质 (MeshStandardMaterial)</h2>
        <p>基于物理的渲染材质，提供最真实的光照效果。</p>
        
        <pre><code>// 创建标准材质
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,           // 基础颜色
  metalness: 0.0,            // 金属度 (0=非金属, 1=金属)
  roughness: 0.5,            // 粗糙度 (0=光滑, 1=粗糙)
  map: albedoTexture,        // 反照率贴图
  normalMap: normalTexture,  // 法线贴图
  metalnessMap: metalTexture, // 金属度贴图
  roughnessMap: roughTexture, // 粗糙度贴图
  envMap: environmentMap     // 环境贴图
})

// 调整材质属性
material.metalness = 0.8     // 更像金属
material.roughness = 0.2     // 更光滑</code></pre>
        
        <div class="interactive-demo">
          <h3>交互式材质调节</h3>
          <div class="demo-container">
            <div class="demo-canvas" ref="interactiveCanvas"></div>
            <div class="demo-controls">
              <div class="control-group">
                <label>金属度 (Metalness):</label>
                <input type="range" min="0" max="1" step="0.1" v-model="metalness" @input="updateMaterial">
                <span>{{ metalness }}</span>
              </div>
              <div class="control-group">
                <label>粗糙度 (Roughness):</label>
                <input type="range" min="0" max="1" step="0.1" v-model="roughness" @input="updateMaterial">
                <span>{{ roughness }}</span>
              </div>
              <div class="control-group">
                <label>颜色:</label>
                <input type="color" v-model="materialColor" @input="updateMaterial">
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2>纹理贴图</h2>
        <p>纹理可以为材质添加丰富的细节和真实感：</p>
        
        <h3>1. 颜色贴图 (Color Map)</h3>
        <pre><code>// 加载纹理
const textureLoader = new THREE.TextureLoader()
const colorTexture = textureLoader.load('path/to/texture.jpg')

// 应用到材质
const material = new THREE.MeshStandardMaterial({
  map: colorTexture
})

// 纹理设置
colorTexture.wrapS = THREE.RepeatWrapping
colorTexture.wrapT = THREE.RepeatWrapping
colorTexture.repeat.set(2, 2)  // 重复2x2次</code></pre>
        
        <h3>2. 法线贴图 (Normal Map)</h3>
        <pre><code>// 法线贴图增加表面细节
const normalTexture = textureLoader.load('path/to/normal.jpg')
material.normalMap = normalTexture
material.normalScale.set(1, 1)  // 法线强度</code></pre>
        
        <h3>3. 环境贴图 (Environment Map)</h3>
        <pre><code>// 环境贴图提供反射效果
const cubeTextureLoader = new THREE.CubeTextureLoader()
const envMap = cubeTextureLoader.load([
  'px.jpg', 'nx.jpg',  // 正X, 负X
  'py.jpg', 'ny.jpg',  // 正Y, 负Y
  'pz.jpg', 'nz.jpg'   // 正Z, 负Z
])

material.envMap = envMap
material.envMapIntensity = 1.0</code></pre>
      </section>
      
      <section>
        <h2>材质优化技巧</h2>
        
        <h3>1. 材质复用</h3>
        <pre><code>// 创建一个材质，多个对象复用
const sharedMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 })

const mesh1 = new THREE.Mesh(geometry1, sharedMaterial)
const mesh2 = new THREE.Mesh(geometry2, sharedMaterial)
const mesh3 = new THREE.Mesh(geometry3, sharedMaterial)</code></pre>
        
        <h3>2. 纹理优化</h3>
        <pre><code>// 设置纹理过滤
texture.minFilter = THREE.LinearMipmapLinearFilter
texture.magFilter = THREE.LinearFilter

// 生成mipmap
texture.generateMipmaps = true

// 设置各向异性过滤
texture.anisotropy = renderer.capabilities.getMaxAnisotropy()</code></pre>
        
        <h3>3. 内存管理</h3>
        <pre><code>// 释放材质资源
material.dispose()

// 释放纹理资源
texture.dispose()

// 检查材质是否需要更新
material.needsUpdate = true</code></pre>
      </section>
      
      <section>
        <h2>常见问题解决</h2>
        
        <h3>Q: 为什么材质看起来很暗？</h3>
        <p>A: 可能的原因：</p>
        <ul>
          <li>场景中没有光源（Lambert、Phong、Standard材质需要光照）</li>
          <li>光照强度不够</li>
          <li>材质颜色过暗</li>
          <li>使用了错误的材质类型</li>
        </ul>
        
        <h3>Q: 如何实现透明效果？</h3>
        <pre><code>// 启用透明
material.transparent = true
material.opacity = 0.5

// 注意渲染顺序问题
material.depthWrite = false  // 可能需要禁用深度写入</code></pre>
        
        <h3>Q: 纹理显示模糊怎么办？</h3>
        <pre><code>// 检查纹理尺寸（建议使用2的幂次方）
// 512x512, 1024x1024, 2048x2048

// 调整纹理过滤
texture.minFilter = THREE.LinearFilter
texture.magFilter = THREE.LinearFilter</code></pre>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  name: 'MaterialPage',
  setup() {
    const materialRefs = ref({})
    const interactiveCanvas = ref(null)
    const metalness = ref(0.5)
    const roughness = ref(0.5)
    const materialColor = ref('#ffffff')
    
    const scenes = {}
    const renderers = {}
    const animationIds = {}
    let interactiveScene, interactiveRenderer, interactiveMesh, interactiveMaterial
    
    const materials = [
      {
        name: 'MeshBasicMaterial',
        description: '基础材质，不受光照影响，性能最好',
        features: ['无光照', '高性能', '简单']
      },
      {
        name: 'MeshLambertMaterial', 
        description: 'Lambert材质，支持漫反射光照',
        features: ['漫反射', '中等性能', '粗糙表面']
      },
      {
        name: 'MeshPhongMaterial',
        description: 'Phong材质，支持镜面反射',
        features: ['镜面反射', '光泽效果', '光滑表面']
      },
      {
        name: 'MeshStandardMaterial',
        description: '标准材质，基于物理的渲染',
        features: ['PBR', '最真实', '金属/粗糙度']
      }
    ]
    
    const setMaterialRef = (name, el) => {
      if (el) {
        materialRefs.value[name] = el
      }
    }
    
    const initMaterial = (materialData) => {
      const container = materialRefs.value[materialData.name]
      if (!container) return
      
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 200 / 150, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(200, 150)
      renderer.setClearColor(0x000000, 0)
      
      // 添加光源
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
      scene.add(ambientLight)
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 5, 5)
      scene.add(directionalLight)
      
      // 创建几何体
      const geometry = new THREE.SphereGeometry(0.8, 32, 32)
      let material
      
      switch (materialData.name) {
        case 'MeshBasicMaterial':
          material = new THREE.MeshBasicMaterial({ color: 0x42b883 })
          break
        case 'MeshLambertMaterial':
          material = new THREE.MeshLambertMaterial({ color: 0x42b883 })
          break
        case 'MeshPhongMaterial':
          material = new THREE.MeshPhongMaterial({ 
            color: 0x42b883,
            shininess: 100,
            specular: 0x111111
          })
          break
        case 'MeshStandardMaterial':
          material = new THREE.MeshStandardMaterial({ 
            color: 0x42b883,
            metalness: 0.3,
            roughness: 0.4
          })
          break
      }
      
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
      
      camera.position.z = 3
      
      container.appendChild(renderer.domElement)
      
      const animate = () => {
        animationIds[materialData.name] = requestAnimationFrame(animate)
        mesh.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      
      animate()
      
      scenes[materialData.name] = scene
      renderers[materialData.name] = renderer
    }
    
    const initInteractiveDemo = () => {
      if (!interactiveCanvas.value) return
      
      interactiveScene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000)
      interactiveRenderer = new THREE.WebGLRenderer({ antialias: true })
      interactiveRenderer.setSize(400, 300)
      
      // 添加光源
      const ambientLight = new THREE.AmbientLight(0x404040, 0.2)
      interactiveScene.add(ambientLight)
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 5, 5)
      interactiveScene.add(directionalLight)
      
      // 创建材质和网格
      const geometry = new THREE.SphereGeometry(1, 64, 64)
      interactiveMaterial = new THREE.MeshStandardMaterial({
        color: materialColor.value,
        metalness: parseFloat(metalness.value),
        roughness: parseFloat(roughness.value)
      })
      
      interactiveMesh = new THREE.Mesh(geometry, interactiveMaterial)
      interactiveScene.add(interactiveMesh)
      
      camera.position.z = 4
      
      interactiveCanvas.value.appendChild(interactiveRenderer.domElement)
      
      const animate = () => {
        animationIds['interactive'] = requestAnimationFrame(animate)
        interactiveMesh.rotation.y += 0.005
        interactiveRenderer.render(interactiveScene, camera)
      }
      
      animate()
    }
    
    const updateMaterial = () => {
      if (interactiveMaterial) {
        interactiveMaterial.color.setHex(materialColor.value.replace('#', '0x'))
        interactiveMaterial.metalness = parseFloat(metalness.value)
        interactiveMaterial.roughness = parseFloat(roughness.value)
      }
    }
    
    onMounted(() => {
      setTimeout(() => {
        materials.forEach(initMaterial)
        initInteractiveDemo()
      }, 100)
    })
    
    onUnmounted(() => {
      Object.values(animationIds).forEach(id => {
        if (id) cancelAnimationFrame(id)
      })
      Object.values(renderers).forEach(renderer => {
        if (renderer) renderer.dispose()
      })
      if (interactiveRenderer) {
        interactiveRenderer.dispose()
      }
    })
    
    return {
      materials,
      materialRefs,
      interactiveCanvas,
      metalness,
      roughness,
      materialColor,
      setMaterialRef,
      updateMaterial
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

.material-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.material-item {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.material-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.material-preview {
  width: 200px;
  height: 150px;
  margin: 0 auto 1rem auto;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}

.material-item h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.material-item p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.material-features {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.feature-tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.interactive-demo {
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

.demo-canvas {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
}

.demo-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
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

.control-group span {
  font-size: 0.9rem;
  color: #666;
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
  
  .material-grid {
    grid-template-columns: 1fr;
  }
  
  .material-preview {
    width: 100%;
    max-width: 200px;
  }
  
  .demo-container {
    gap: 1rem;
  }
  
  .demo-canvas {
    width: 100%;
    max-width: 400px;
  }
  
  .demo-controls {
    grid-template-columns: 1fr;
  }
  
  .interactive-demo {
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>