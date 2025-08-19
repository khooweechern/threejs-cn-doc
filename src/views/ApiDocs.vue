<template>
  <div class="api-docs">
    <div class="api-header">
      <h1>Three.js API 文档</h1>
      <p>完整的 Three.js API 参考文档和使用说明</p>
    </div>
    
    <div class="api-search">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="搜索 API..." 
        class="search-input"
      >
    </div>
    
    <div class="api-content">
      <div class="api-categories">
        <div 
          v-for="category in filteredCategories" 
          :key="category.name" 
          class="api-category"
        >
          <h2 class="category-title">{{ category.name }}</h2>
          <div class="api-items">
            <div 
              v-for="item in category.items" 
              :key="item.name"
              class="api-item"
              @click="selectApi(item)"
              :class="{ active: selectedApi?.name === item.name }"
            >
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="selectedApi" class="api-detail">
        <div class="api-detail-header">
          <h2>{{ selectedApi.name }}</h2>
          <span class="api-type">{{ selectedApi.type }}</span>
        </div>
        
        <p class="api-description">{{ selectedApi.description }}</p>
        
        <div v-if="selectedApi.link" class="api-section">
          <h3>官方文档</h3>
          <a :href="selectedApi.link" target="_blank" rel="noopener">{{ selectedApi.link }}</a>
        </div>
        
        <div v-if="selectedApi.constructor" class="api-section">
          <h3>构造函数</h3>
          <pre><code>{{ selectedApi.constructor }}</code></pre>
        </div>
        
        <div v-if="selectedApi.properties?.length" class="api-section">
          <h3>属性</h3>
          <div class="property-list">
            <div v-for="prop in selectedApi.properties" :key="prop.name" class="property-item">
              <code class="property-name">{{ prop.name }}</code>
              <span class="property-type">{{ prop.type }}</span>
              <p class="property-desc">{{ prop.description }}</p>
            </div>
          </div>
        </div>
        
        <div v-if="selectedApi.methods?.length" class="api-section">
          <h3>方法</h3>
          <div class="method-list">
            <div v-for="method in selectedApi.methods" :key="method.name" class="method-item">
              <code class="method-signature">{{ method.signature }}</code>
              <p class="method-desc">{{ method.description }}</p>
            </div>
          </div>
        </div>
        
        <div v-if="selectedApi.example" class="api-section">
          <h3>示例</h3>
          <pre><code>{{ selectedApi.example }}</code></pre>
        </div>
      </div>
      
      <div v-else class="api-placeholder">
        <h3>选择一个 API 查看详细信息</h3>
        <p>点击左侧的 API 项目来查看详细的使用说明、属性、方法和示例代码。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'ApiDocs',
  setup() {
    const searchQuery = ref('')
    const selectedApi = ref(null)
    
    const apiData = [
      {
        name: '核心',
        items: [
          {
            name: 'Scene',
            type: 'Class',
            description: '场景允许你设置哪些对象被three.js渲染以及在哪里渲染。这是所有3D对象的容器。',
            constructor: 'new THREE.Scene()',
            properties: [
              { name: 'background', type: 'Color | Texture | null', description: '场景的背景，可以是颜色、纹理或null（透明）' },
              { name: 'children', type: 'Array', description: '场景中所有对象的数组，包括网格、光源、相机等' },
              { name: 'fog', type: 'Fog | null', description: '场景中的雾效果，用于创建距离感' }
            ],
            methods: [
              { signature: 'add(object)', description: '向场景中添加对象，可以是网格、光源、相机等' },
              { signature: 'remove(object)', description: '从场景中移除指定对象' },
              { signature: 'getObjectByName(name)', description: '通过名称获取场景中的对象' }
            ],
            example: `// 创建场景
const scene = new THREE.Scene()

// 设置背景颜色
scene.background = new THREE.Color(0xf0f0f0)

// 创建并添加立方体
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)`,
            link: 'https://threejs.org/docs/#api/en/scenes/Scene'
          },
          {
            name: 'PerspectiveCamera',
            type: 'Class',
            description: '透视投影相机，模拟人眼看到的效果，远处的物体看起来更小。',
            constructor: 'new THREE.PerspectiveCamera(fov, aspect, near, far)',
            properties: [
              { name: 'fov', type: 'Number', description: '视野角度，以度为单位，默认50' },
              { name: 'aspect', type: 'Number', description: '长宽比，通常是canvas的宽度/高度' },
              { name: 'near', type: 'Number', description: '近截面距离，默认0.1' },
              { name: 'far', type: 'Number', description: '远截面距离，默认2000' }
            ],
            methods: [
              { signature: 'lookAt(vector)', description: '让相机朝向指定位置' },
              { signature: 'updateProjectionMatrix()', description: '更新投影矩阵，修改fov、aspect等后需调用' }
            ],
            example: `// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  75,                                    // 视野角度
  window.innerWidth / window.innerHeight, // 长宽比
  0.1,                                   // 近截面
  1000                                   // 远截面
)

// 设置相机位置
camera.position.set(0, 0, 5)`,
            link: 'https://threejs.org/docs/#api/en/cameras/PerspectiveCamera'
          },
          {
            name: 'WebGLRenderer',
            type: 'Class',
            description: 'WebGL渲染器使用WebGL来渲染场景，是最常用的渲染器。',
            constructor: 'new THREE.WebGLRenderer(parameters)',
            properties: [
              { name: 'domElement', type: 'HTMLCanvasElement', description: '渲染器创建的canvas元素，需要添加到DOM中' },
              { name: 'shadowMap', type: 'WebGLShadowMap', description: '阴影贴图的引用，用于配置阴影' }
            ],
            methods: [
              { signature: 'render(scene, camera)', description: '渲染场景，这是最重要的方法' },
              { signature: 'setSize(width, height)', description: '设置渲染器尺寸' },
              { signature: 'setClearColor(color, alpha)', description: '设置清除颜色和透明度' }
            ],
            example: `// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 渲染循环
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}`,
            link: 'https://threejs.org/docs/#api/en/renderers/WebGLRenderer'
          }
        ]
      },
      {
        name: '几何体',
        items: [
          {
            name: 'BoxGeometry',
            type: 'Class',
            description: '立方体几何体，用于创建立方体或长方体。这是最基础的几何体之一。',
            constructor: 'new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)',
            example: `// 基础立方体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 创建网格
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)`,
            link: 'https://threejs.org/docs/#api/en/geometries/BoxGeometry'
          },
          {
            name: 'SphereGeometry',
            type: 'Class',
            description: '球体几何体，用于创建球体。可以控制分段数来调整球体的平滑度。',
            constructor: 'new THREE.SphereGeometry(radius, widthSegments, heightSegments)',
            example: `// 基础球体
const geometry = new THREE.SphereGeometry(1, 32, 32)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const sphere = new THREE.Mesh(geometry, material)`,
            link: 'https://threejs.org/docs/#api/en/geometries/SphereGeometry'
          },
          {
            name: 'PlaneGeometry',
            type: 'Class',
            description: '平面几何体，用于创建平面。常用作地面、墙壁或显示图片。',
            constructor: 'new THREE.PlaneGeometry(width, height, widthSegments, heightSegments)',
            example: `// 基础平面
const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
const plane = new THREE.Mesh(geometry, material)
plane.rotation.x = -Math.PI / 2  // 旋转90度作为地面`,
            link: 'https://threejs.org/docs/#api/en/geometries/PlaneGeometry'
          },
          {
            name: 'TorusGeometry',
            type: 'Class',
            description: '圆环体几何体，可通过管道半径与细分数控制外形。',
            constructor: 'new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)',
            example: `const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0x6699ff })
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)`,
            link: 'https://threejs.org/docs/#api/en/geometries/TorusGeometry'
          },
          {
            name: 'TorusKnotGeometry',
            type: 'Class',
            description: '圆环结几何体，基于参数 p、q 生成多样的结形。',
            constructor: 'new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q)',
            example: `const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 16, 2, 3)
const material = new THREE.MeshStandardMaterial({ color: 0xff6699, metalness: 0.2, roughness: 0.4 })
const knot = new THREE.Mesh(geometry, material)
scene.add(knot)`,
            link: 'https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry'
          },
          {
            name: 'CylinderGeometry',
            type: 'Class',
            description: '圆柱体/圆台几何体，可设置上下半径与高度。',
            constructor: 'new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength)',
            example: `const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32)
const material = new THREE.MeshStandardMaterial({ color: 0x00bcd4 })
const cylinder = new THREE.Mesh(geometry, material)
scene.add(cylinder)`,
            link: 'https://threejs.org/docs/#api/en/geometries/CylinderGeometry'
          },
          {
            name: 'ConeGeometry',
            type: 'Class',
            description: '圆锥体几何体，CylinderGeometry 的特例（顶半径为 0）。',
            constructor: 'new THREE.ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength)',
            example: `const geometry = new THREE.ConeGeometry(0.6, 1.5, 32)
const material = new THREE.MeshStandardMaterial({ color: 0xffc107 })
const cone = new THREE.Mesh(geometry, material)
scene.add(cone)`,
            link: 'https://threejs.org/docs/#api/en/geometries/ConeGeometry'
          }
        ]
      },
      {
        name: '材质',
        items: [
          {
            name: 'MeshBasicMaterial',
            type: 'Class',
            description: '基础网格材质，不受光照影响。适用于简单的着色或调试。',
            constructor: 'new THREE.MeshBasicMaterial(parameters)',
            properties: [
              { name: 'color', type: 'Color', description: '材质的颜色，默认白色' },
              { name: 'wireframe', type: 'Boolean', description: '是否渲染为线框，默认false' },
              { name: 'transparent', type: 'Boolean', description: '是否透明，默认false' },
              { name: 'opacity', type: 'Number', description: '不透明度，0-1之间，默认1' }
            ],
            example: `// 基础材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 透明材质
const transparentMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  transparent: true,
  opacity: 0.5
})`,
            link: 'https://threejs.org/docs/#api/en/materials/MeshBasicMaterial'
          },
          {
            name: 'MeshLambertMaterial',
            type: 'Class',
            description: 'Lambert材质，会对光照产生反应。适用于非光泽表面。',
            constructor: 'new THREE.MeshLambertMaterial(parameters)',
            properties: [
              { name: 'color', type: 'Color', description: '材质的颜色' },
              { name: 'emissive', type: 'Color', description: '发光颜色，不受光照影响' }
            ],
            example: `// Lambert材质
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })

// 需要光源才能看到效果
const light = new THREE.DirectionalLight(0xffffff, 1)
scene.add(light)`,
            link: 'https://threejs.org/docs/#api/en/materials/MeshLambertMaterial'
          },
           {
            name: 'MeshStandardMaterial',
            type: 'Class',
            description: '基于物理的标准材质（PBR），支持金属度/粗糙度与环境贴图。',
            constructor: 'new THREE.MeshStandardMaterial(parameters)',
            properties: [
              { name: 'color', type: 'Color', description: '基色' },
              { name: 'metalness', type: 'Number', description: '金属度 0-1，默认 0' },
              { name: 'roughness', type: 'Number', description: '粗糙度 0-1，默认 1' },
              { name: 'envMap', type: 'Texture', description: '环境贴图，用于反射' }
            ],
            example: `const material = new THREE.MeshStandardMaterial({
  color: 0x8888ff,
  metalness: 0.6,
  roughness: 0.3,
  envMap: envCubeTexture // 可选：环境贴图
})`,
            link: 'https://threejs.org/docs/#api/en/materials/MeshStandardMaterial'
          },
          {
            name: 'MeshPhysicalMaterial',
            type: 'Class',
            description: '物理材质，扩展了标准材质，支持 clearcoat、transmission、ior、sheen 等高级特性。',
            constructor: 'new THREE.MeshPhysicalMaterial(parameters)',
            properties: [
              { name: 'clearcoat', type: 'Number', description: '清漆层强度 0-1' },
              { name: 'clearcoatRoughness', type: 'Number', description: '清漆层粗糙度' },
              { name: 'transmission', type: 'Number', description: '透光率 0-1（近似玻璃）' },
              { name: 'thickness', type: 'Number', description: '厚度（与 transmission 联用）' },
              { name: 'ior', type: 'Number', description: '折射率' }
            ],
            example: `const glass = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 0.9,
  thickness: 0.5,
  ior: 1.5
})`,
            link: 'https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial'
          },
          {
            name: 'MeshPhongMaterial',
            type: 'Class',
            description: 'Phong 高光材质，非 PBR，但直观易用，常用于入门与旧项目。',
            constructor: 'new THREE.MeshPhongMaterial(parameters)',
            properties: [
              { name: 'specular', type: 'Color', description: '高光颜色' },
              { name: 'shininess', type: 'Number', description: '高光强度（越大越锐利）' }
            ],
            example: `const material = new THREE.MeshPhongMaterial({
  color: 0x6699ff,
  specular: 0x222222,
  shininess: 50
})`,
            link: 'https://threejs.org/docs/#api/en/materials/MeshPhongMaterial'
          },
          {
            name: 'PointsMaterial',
            type: 'Class',
            description: '点材质，用于 Points 粒子渲染，支持点大小衰减与纹理贴图。',
            constructor: 'new THREE.PointsMaterial(parameters)',
            properties: [
              { name: 'size', type: 'Number', description: '点大小（世界单位）' },
              { name: 'sizeAttenuation', type: 'Boolean', description: '随距离衰减，默认 true' },
              { name: 'map', type: 'Texture', description: '点精灵纹理' },
              { name: 'transparent', type: 'Boolean', description: '是否开启透明' }
            ],
            example: `const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, sizeAttenuation: true })
const points = new THREE.Points(geometry, mat)
scene.add(points)`,
            link: 'https://threejs.org/docs/#api/en/materials/PointsMaterial'
          },
          {
            name: 'LineBasicMaterial',
            type: 'Class',
            description: '基础线材质，用于渲染线段（注意大多数平台不支持改变线宽）。',
            constructor: 'new THREE.LineBasicMaterial(parameters)',
            properties: [
              { name: 'color', type: 'Color', description: '颜色' }
            ],
            example: `const mat = new THREE.LineBasicMaterial({ color: 0xff0000 })
const line = new THREE.Line(geometry, mat)
scene.add(line)`,
            link: 'https://threejs.org/docs/#api/en/materials/LineBasicMaterial'
          }
        ]
      },
      {
        name: '光源',
        items: [
          {
            name: 'AmbientLight',
            type: 'Class',
            description: '环境光，均匀照亮场景中的所有对象。没有方向，不产生阴影。',
            constructor: 'new THREE.AmbientLight(color, intensity)',
            properties: [
              { name: 'color', type: 'Color', description: '光源颜色' },
              { name: 'intensity', type: 'Number', description: '光照强度，默认1' }
            ],
            example: `// 基础环境光
const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
scene.add(ambientLight)`,
            link: 'https://threejs.org/docs/#api/en/lights/AmbientLight'
          },
          {
            name: 'DirectionalLight',
            type: 'Class',
            description: '方向光，模拟太阳光。光线平行，可以产生阴影。',
            constructor: 'new THREE.DirectionalLight(color, intensity)',
            properties: [
              { name: 'color', type: 'Color', description: '光源颜色' },
              { name: 'intensity', type: 'Number', description: '光照强度' },
              { name: 'castShadow', type: 'Boolean', description: '是否产生阴影' }
            ],
            example: `// 创建方向光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)`,
            link: 'https://threejs.org/docs/#api/en/lights/DirectionalLight'
          },
           {
            name: 'PointLight',
            type: 'Class',
            description: '点光源，向各个方向均匀发光，可设置衰减与距离。',
            constructor: 'new THREE.PointLight(color, intensity, distance, decay)',
            properties: [
              { name: 'castShadow', type: 'Boolean', description: '是否产生阴影' }
            ],
            methods: [],
            example: `const light = new THREE.PointLight(0xffffff, 1, 50, 2)
light.position.set(2, 3, 2)
light.castShadow = true
scene.add(light)`,
            link: 'https://threejs.org/docs/#api/en/lights/PointLight'
          },
          {
            name: 'SpotLight',
            type: 'Class',
            description: '聚光灯，具有锥形光束，支持半影（penumbra）与目标点。',
            constructor: 'new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay)',
            properties: [
              { name: 'target', type: 'Object3D', description: '照射目标对象（默认世界原点）' },
              { name: 'castShadow', type: 'Boolean', description: '是否产生阴影' }
            ],
            methods: [],
            example: `const spot = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 6, 0.2, 2)
spot.position.set(5, 8, 5)
spot.castShadow = true
scene.add(spot)
scene.add(spot.target)
spot.target.position.set(0, 0, 0)`,
            link: 'https://threejs.org/docs/#api/en/lights/SpotLight'
          },
          {
            name: 'HemisphereLight',
            type: 'Class',
            description: '半球光，模拟来自天空与地面的漫射光，柔和填充环境。',
            constructor: 'new THREE.HemisphereLight(skyColor, groundColor, intensity)',
            properties: [],
            methods: [],
            example: `const hemi = new THREE.HemisphereLight(0x87ceeb, 0x444444, 0.6)
scene.add(hemi)`,
            link: 'https://threejs.org/docs/#api/en/lights/HemisphereLight'
          },
          {
            name: 'RectAreaLight',
            type: 'Class',
            description: '矩形面光，均匀从矩形区域发光，常用于室内/产品光照（与标准/物理材质配合良好）。',
            constructor: 'new THREE.RectAreaLight(color, intensity, width, height)',
            properties: [
              { name: 'width', type: 'Number', description: '光源宽度' },
              { name: 'height', type: 'Number', description: '光源高度' }
            ],
            methods: [],
            example: `const rect = new THREE.RectAreaLight(0xffffff, 5, 2, 1)
rect.position.set(2, 3, 2)
rect.lookAt(0, 0, 0)
scene.add(rect)`,
            link: 'https://threejs.org/docs/#api/en/lights/RectAreaLight'
          }
        ]
      }
    ,
      {
        name: '控制器',
        items: [
          {
            name: 'OrbitControls',
            type: 'Class',
            description: '轨道控制器，支持鼠标旋转/缩放/平移观察场景，最常用的交互控制器。',
            constructor: 'new OrbitControls(camera, renderer.domElement)',
            properties: [
              { name: 'enabled', type: 'Boolean', description: '是否启用控制器，默认 true' },
              { name: 'enableDamping', type: 'Boolean', description: '是否启用阻尼（惯性），默认 false，需要在动画循环中调用 update()' },
              { name: 'dampingFactor', type: 'Number', description: '阻尼系数，默认 0.05' },
              { name: 'enableZoom', type: 'Boolean', description: '是否允许缩放，默认 true' },
              { name: 'enablePan', type: 'Boolean', description: '是否允许平移，默认 true' },
              { name: 'target', type: 'Vector3', description: '相机围绕观察的中心点' }
            ],
            methods: [
              { signature: 'update()', description: '在启用阻尼时于动画循环中调用以更新控制器状态' },
              { signature: 'saveState()', description: '保存当前状态' },
              { signature: 'reset()', description: '重置到保存的状态' },
              { signature: 'dispose()', description: '释放事件监听等资源' }
            ],
            example: `// 需要先导入
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// 动画循环
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}`,
            link: 'https://threejs.org/docs/#examples/en/controls/OrbitControls'
          },
          {
            name: 'TransformControls',
            type: 'Class',
            description: '变换控制器，在场景中以手柄形式对对象进行平移/旋转/缩放操作，常用于编辑器类工具。',
            constructor: 'new TransformControls(camera, renderer.domElement)',
            properties: [
              { name: 'mode', type: "'translate' | 'rotate' | 'scale'", description: '当前变换模式' },
              { name: 'size', type: 'Number', description: '手柄大小' },
              { name: 'axis', type: 'String | null', description: '当前激活的轴' }
            ],
            methods: [
              { signature: 'attach(object)', description: '附加到某个对象以进行编辑' },
              { signature: 'detach()', description: '从对象上分离' },
              { signature: 'setMode(mode)', description: '设置变换模式：translate/rotate/scale' },
              { signature: 'dispose()', description: '释放资源' }
            ],
            example: `import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

const tControls = new TransformControls(camera, renderer.domElement)
tControls.attach(mesh)
scene.add(tControls)

// 与 OrbitControls 协同
tControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value
})`,
            link: 'https://threejs.org/docs/#examples/en/controls/TransformControls'
          },
          {
            name: 'PointerLockControls',
            type: 'Class',
            description: '指针锁定控制器，常用于第一人称视角（FPS）相机控制。',
            constructor: 'new PointerLockControls(camera, document.body)',
            properties: [
              { name: 'isLocked', type: 'Boolean', description: '指示当前是否处于指针锁定状态' }
            ],
            methods: [
              { signature: 'lock()', description: '请求进入指针锁定' },
              { signature: 'unlock()', description: '退出指针锁定' },
              { signature: 'dispose()', description: '释放资源' }
            ],
            example: `import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'

const plControls = new PointerLockControls(camera, document.body)
document.addEventListener('click', () => plControls.lock())

function animate() {
  requestAnimationFrame(animate)
  // 根据按键状态移动相机位置...
  renderer.render(scene, camera)
}`,
            link: 'https://threejs.org/docs/#examples/en/controls/PointerLockControls'
          },
          {
            name: 'FlyControls',
            type: 'Class',
            description: '飞行控制器，自由飞行浏览场景，常用于大场景预览。',
            constructor: 'new FlyControls(camera, renderer.domElement)',
            properties: [
              { name: 'movementSpeed', type: 'Number', description: '移动速度' },
              { name: 'rollSpeed', type: 'Number', description: '滚转速度' },
              { name: 'dragToLook', type: 'Boolean', description: '是否按住鼠标拖拽才转向' }
            ],
            methods: [
              { signature: 'update(delta)', description: '基于时间步长更新状态（需传入 Clock 的 delta）' },
              { signature: 'dispose()', description: '释放资源' }
            ],
            example: `import { Clock } from 'three'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

const clock = new Clock()
const fly = new FlyControls(camera, renderer.domElement)
fly.movementSpeed = 10
fly.rollSpeed = Math.PI / 6

function animate() {
  requestAnimationFrame(animate)
  const delta = clock.getDelta()
  fly.update(delta)
  renderer.render(scene, camera)
}`,
            link: 'https://threejs.org/docs/#examples/en/controls/FlyControls'
          }
        ]
      }
    ,
      {
        name: '加载器',
        items: [
          {
            name: 'TextureLoader',
            type: 'Class',
            description: '纹理加载器，用于从 URL 加载 2D 纹理并创建 THREE.Texture 实例。',
            constructor: 'new THREE.TextureLoader(manager?)',
            properties: [
              { name: 'manager', type: 'LoadingManager', description: '可选的加载管理器，用于跟踪加载状态' }
            ],
            methods: [
              { signature: 'load(url, onLoad, onProgress?, onError?)', description: '加载单张纹理，完成后回调返回 Texture 对象' },
              { signature: 'setPath(path)', description: '为后续 load 调用设置基础路径，返回 this' }
            ],
            example: `import { TextureLoader, MeshBasicMaterial, Mesh, BoxGeometry } from 'three'

const loader = new TextureLoader()
loader.setPath('/assets/textures/')

loader.load('brick_diffuse.jpg', (tex) => {
  const mat = new MeshBasicMaterial({ map: tex })
  const mesh = new Mesh(new BoxGeometry(1, 1, 1), mat)
  scene.add(mesh)
})`,
            link: 'https://threejs.org/docs/#api/en/loaders/TextureLoader'
          },
          {
            name: 'CubeTextureLoader',
            type: 'Class',
            description: '立方体纹理加载器，用于加载天空盒或环境贴图（6 张面纹理）。',
            constructor: 'new THREE.CubeTextureLoader(manager?)',
            properties: [
              { name: 'manager', type: 'LoadingManager', description: '可选的加载管理器' }
            ],
            methods: [
              { signature: 'load(urls, onLoad, onProgress?, onError?)', description: '加载6张纹理（按照 px, nx, py, ny, pz, nz 顺序），返回 CubeTexture' },
              { signature: 'setPath(path)', description: '为后续 load 调用设置基础路径，返回 this' }
            ],
            example: `import { CubeTextureLoader, Color } from 'three'

const urls = [
  'px.jpg','nx.jpg',
  'py.jpg','ny.jpg',
  'pz.jpg','nz.jpg'
]

const cubeTex = new CubeTextureLoader().setPath('/assets/sky/').load(urls)
scene.background = cubeTex
// 也可用于 PBR 材质的 envMap`,
            link: 'https://threejs.org/docs/#api/en/loaders/CubeTextureLoader'
          },
          {
            name: 'GLTFLoader',
            type: 'Class',
            description: 'GLTF/GLB 模型加载器，支持 PBR 材质、动画、相机、场景层级等，WebGL 实务标准格式。',
            constructor: 'new GLTFLoader(manager?)',
            properties: [],
            methods: [
              { signature: 'load(url, onLoad, onProgress?, onError?)', description: '加载 glTF/glb 文件，onLoad 回调参数包含 { scene, animations, cameras, asset, parser }' },
              { signature: 'setDRACOLoader(dracoLoader)', description: '设置 DRACOLoader 以解码压缩网格' },
              { signature: 'parse(data, path, onLoad, onError)', description: '从 ArrayBuffer/JSON 字符串解析 glTF' }
            ],
            example: `import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()
gltfLoader.load('/assets/models/DamagedHelmet.glb', (gltf) => {
  scene.add(gltf.scene)
  // 如果有动画，可创建 AnimationMixer 播放 gltf.animations
})`,
            link: 'https://threejs.org/docs/#examples/en/loaders/GLTFLoader'
          },
          {
            name: 'DRACOLoader',
            type: 'Class',
            description: 'DRACO 解码器加载器，为 glTF 等模型提供网格压缩解码以减少资源体积。',
            constructor: 'new DRACOLoader(manager?)',
            properties: [],
            methods: [
              { signature: 'setDecoderPath(path)', description: '设置解码器文件（.wasm/.js）所在的根路径' },
              { signature: 'setWorkerLimit(count)', description: '设置 Web Worker 的最大并发数量' },
              { signature: 'preload()', description: '预加载解码器模块，减少首次解码延迟' }
            ],
            example: `import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const draco = new DRACOLoader()
draco.setDecoderPath('/libs/draco/')  // 确保该目录下有 draco_wasm_wrapper.js / draco_decoder.wasm 等文件
draco.preload()

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(draco)

gltfLoader.load('/assets/models/compressed_model.glb', (gltf) => {
  scene.add(gltf.scene)
})`,
            link: 'https://threejs.org/docs/#examples/en/loaders/DRACOLoader'
          }
        ]
      }
    ,
      {
        name: '动画',
        items: [
          {
            name: 'AnimationMixer',
            type: 'Class',
            description: '动画混合器，管理在特定根对象上的动画播放与混合。',
            constructor: 'new THREE.AnimationMixer(rootObject)',
            properties: [
              { name: 'time', type: 'Number', description: '当前时间（秒）' },
              { name: 'timeScale', type: 'Number', description: '全局时间缩放，默认 1.0' }
            ],
            methods: [
              { signature: 'clipAction(clip, root?)', description: '创建/获取一个 AnimationAction 用于控制某个剪辑的播放' },
              { signature: 'update(delta)', description: '推进动画时间，通常在渲染循环中调用' },
              { signature: 'stopAllAction()', description: '停止所有动作' },
              { signature: 'getRoot()', description: '返回当前混合器的根对象' }
            ],
            example: `import { AnimationMixer, Clock, LoopRepeat } from 'three'

const mixer = new AnimationMixer(gltf.scene)
const action = mixer.clipAction(gltf.animations[0])
action.setLoop(LoopRepeat, Infinity)
action.play()

const clock = new Clock()
function animate() {
  requestAnimationFrame(animate)
  const delta = clock.getDelta()
  mixer.update(delta)
  renderer.render(scene, camera)
}`,
            link: 'https://threejs.org/docs/#api/en/animation/AnimationMixer'
          },
          {
            name: 'AnimationClip',
            type: 'Class',
            description: '动画剪辑，包含一组关键帧轨道与持续时间，描述对象属性随时间的变化。',
            constructor: 'new THREE.AnimationClip(name, duration, tracks, blendMode?)',
            properties: [
              { name: 'name', type: 'String', description: '剪辑名称' },
              { name: 'duration', type: 'Number', description: '持续时间（秒），可为 -1 表示由轨道自动计算' },
              { name: 'tracks', type: 'Array<KeyframeTrack>', description: '关键帧轨道数组' }
            ],
            methods: [
              { signature: 'AnimationClip.findByName(clips, name)', description: '在剪辑数组中按名称查找' },
              { signature: 'toJSON()', description: '序列化为 JSON' }
            ],
            example: `// 从 glTF 中选取名为 'Walk' 的剪辑
const clip = THREE.AnimationClip.findByName(gltf.animations, 'Walk')
const action = mixer.clipAction(clip).play()`,
            link: 'https://threejs.org/docs/#api/en/animation/AnimationClip'
          },
          {
            name: 'AnimationAction',
            type: 'Class',
            description: '动画动作，由 AnimationMixer 创建，用于控制单个 AnimationClip 的播放/混合。',
            constructor: '由 mixer.clipAction(clip) 返回',
            properties: [
              { name: 'loop', type: 'Number', description: '循环模式，如 THREE.LoopRepeat/LoopOnce/LoopPingPong' },
              { name: 'clampWhenFinished', type: 'Boolean', description: '播放结束后是否保持在最后一帧' },
              { name: 'enabled', type: 'Boolean', description: '是否启用该动作' },
              { name: 'time', type: 'Number', description: '当前播放位置（秒）' },
              { name: 'weight', type: 'Number', description: '动作权重，用于混合' }
            ],
            methods: [
              { signature: 'play()', description: '开始播放' },
              { signature: 'stop()', description: '停止播放并重置时间' },
              { signature: 'reset()', description: '重置到初始状态' },
              { signature: 'fadeIn(duration)', description: '在指定时间内从 0 淡入' },
              { signature: 'fadeOut(duration)', description: '在指定时间内淡出到 0' },
              { signature: 'crossFadeFrom(otherAction, duration, warp)', description: '从另一个动作交叉淡入' },
              { signature: 'setLoop(mode, repetitions)', description: '设置循环模式与重复次数' }
            ],
            example: `action.reset().setLoop(THREE.LoopRepeat, Infinity).fadeIn(0.5).play()
// 在需要切换动作时： newAction.crossFadeFrom(prevAction, 0.3, true).play()`,
            link: 'https://threejs.org/docs/#api/en/animation/AnimationAction'
          },
          {
            name: 'VectorKeyframeTrack',
            type: 'Class',
            description: '关键帧轨道的一种，控制 Vector3 类属性（如 position/scale）的关键帧变化。',
            constructor: "new THREE.VectorKeyframeTrack(name, times, values, interpolation?)",
            properties: [
              { name: 'name', type: 'String', description: "目标路径，如 'mesh.position'" }
            ],
            methods: [],
            example: `// 基于关键帧创建自定义平移动画
const times = [0, 1, 2]                 // 秒
const values = [0,0,0,  1,0,0,  0,0,0]  // 对应三个 Vector3
const track = new THREE.VectorKeyframeTrack('mesh.position', times, values)
const clip = new THREE.AnimationClip('moveX', 2, [track])
const action = mixer.clipAction(clip).play()`,
            link: 'https://threejs.org/docs/#api/en/animation/tracks/VectorKeyframeTrack'
          },
          {
            name: 'Clock',
            type: 'Class',
            description: '时钟工具，获取渲染循环中的时间步长 delta 或累计时间。',
            constructor: 'new THREE.Clock(autoStart?)',
            properties: [
              { name: 'autoStart', type: 'Boolean', description: '是否在首次调用 getDelta 时自动启动，默认 true' },
              { name: 'elapsedTime', type: 'Number', description: '自启动以来的累计时间（秒）' }
            ],
            methods: [
              { signature: 'getDelta()', description: '返回自上次调用以来的时间差（秒）' },
              { signature: 'getElapsedTime()', description: '返回累计时间' },
              { signature: 'start()', description: '启动计时' },
              { signature: 'stop()', description: '停止计时' }
            ],
            example: `const clock = new THREE.Clock()
function animate() {
  requestAnimationFrame(animate)
  const delta = clock.getDelta()
  mixer.update(delta)
  renderer.render(scene, camera)
}`,
            link: 'https://threejs.org/docs/#api/en/core/Clock'
          }
        ]
      }
    ,
      {
        name: '数学',
        items: [
          {
            name: 'Vector3',
            type: 'Class',
            description: '三维向量，常用于表示位置、方向与缩放等。',
            constructor: 'new THREE.Vector3(x?, y?, z?)',
            properties: [
              { name: 'x', type: 'Number', description: 'X 分量' },
              { name: 'y', type: 'Number', description: 'Y 分量' },
              { name: 'z', type: 'Number', description: 'Z 分量' }
            ],
            methods: [
              { signature: 'set(x, y, z)', description: '设置分量' },
              { signature: 'add(v)', description: '向量相加' },
              { signature: 'sub(v)', description: '向量相减' },
              { signature: 'multiplyScalar(s)', description: '数乘' },
              { signature: 'length()', description: '向量长度' },
              { signature: 'normalize()', description: '归一化为单位向量' },
              { signature: 'dot(v)', description: '点积' },
              { signature: 'cross(v)', description: '叉积' },
              { signature: 'distanceTo(v)', description: '与另一个向量的距离' },
              { signature: 'clone()', description: '克隆向量' }
            ],
            example: `const a = new THREE.Vector3(1, 0, 0)
const b = new THREE.Vector3(0, 1, 0)
const c = a.clone().add(b).normalize()
const dot = a.dot(b)     // 0
const cross = a.clone().cross(b) // (0,0,1)`,
            link: 'https://threejs.org/docs/#api/en/math/Vector3'
          },
          {
            name: 'Euler',
            type: 'Class',
            description: '欧拉角，按指定旋转顺序的三轴旋转表示，常用于对象 rotation。',
            constructor: 'new THREE.Euler(x?, y?, z?, order?)',
            properties: [
              { name: 'x', type: 'Number', description: '绕 X 轴旋转（弧度）' },
              { name: 'y', type: 'Number', description: '绕 Y 轴旋转（弧度）' },
              { name: 'z', type: 'Number', description: '绕 Z 轴旋转（弧度）' },
              { name: 'order', type: "String", description: "旋转顺序，默认 'XYZ'" }
            ],
            methods: [
              { signature: 'set(x, y, z, order?)', description: '设置欧拉角' },
              { signature: 'setFromQuaternion(q, order?)', description: '从四元数设置' },
              { signature: 'setFromRotationMatrix(m4, order?)', description: '从旋转矩阵设置' }
            ],
            example: `const deg = 45 * Math.PI / 180
mesh.rotation.set(0, deg, 0, 'YXZ')  // 以 YXZ 顺序旋转
const q = new THREE.Quaternion().setFromEuler(mesh.rotation)`,
            link: 'https://threejs.org/docs/#api/en/math/Euler'
          },
          {
            name: 'Matrix4',
            type: 'Class',
            description: '4x4 矩阵，用于三维中的仿射变换（平移/旋转/缩放）与投影。',
            constructor: 'new THREE.Matrix4()',
            properties: [],
            methods: [
              { signature: 'makeRotationX(theta)', description: '构建绕 X 轴的旋转矩阵' },
              { signature: 'makeRotationY(theta)', description: '构建绕 Y 轴的旋转矩阵' },
              { signature: 'makeRotationZ(theta)', description: '构建绕 Z 轴的旋转矩阵' },
              { signature: 'compose(position, quaternion, scale)', description: '由位置/旋转(四元数)/缩放组成矩阵' },
              { signature: 'multiply(m)', description: '右乘另一个矩阵' },
              { signature: 'invert()', description: '矩阵求逆' },
              { signature: 'decompose(position, quaternion, scale)', description: '分解为位置/四元数/缩放' }
            ],
            example: `const position = new THREE.Vector3(1, 2, 3)
const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2)
const scale = new THREE.Vector3(1, 1, 1)
const mat = new THREE.Matrix4().compose(position, quaternion, scale)
// 将矩阵分解回对象
mat.decompose(mesh.position, mesh.quaternion, mesh.scale)`,
            link: 'https://threejs.org/docs/#api/en/math/Matrix4'
          },
          {
            name: 'Quaternion',
            type: 'Class',
            description: '四元数，用于表示与插值三维旋转，避免万向节死锁。',
            constructor: 'new THREE.Quaternion(x?, y?, z?, w?)',
            properties: [
              { name: 'x', type: 'Number', description: 'X 分量' },
              { name: 'y', type: 'Number', description: 'Y 分量' },
              { name: 'z', type: 'Number', description: 'Z 分量' },
              { name: 'w', type: 'Number', description: 'W 分量（标量部分）' }
            ],
            methods: [
              { signature: 'setFromAxisAngle(axis, angle)', description: '从轴-角创建旋转' },
              { signature: 'setFromEuler(euler)', description: '从欧拉角创建旋转' },
              { signature: 'multiply(q)', description: '与另一个四元数复合' },
              { signature: 'slerp(q, t)', description: '球面线性插值' },
              { signature: 'normalize()', description: '单位化' }
            ],
            example: `const q1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2)
const q2 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0))
const q = q1.clone().slerp(q2, 0.5)
mesh.quaternion.copy(q)`,
            link: 'https://threejs.org/docs/#api/en/math/Quaternion'
          }
        ]
      }
    ,
      {
        name: '辅助器',
        items: [
          {
            name: 'AxesHelper',
            type: 'Class',
            description: '坐标轴辅助器，显示世界原点处的 XYZ 轴（红 X、绿 Y、蓝 Z）。',
            constructor: 'new THREE.AxesHelper(size?)',
            properties: [],
            methods: [],
            example: `const axes = new THREE.AxesHelper(5)
scene.add(axes)`,
            link: 'https://threejs.org/docs/#api/en/helpers/AxesHelper'
          },
          {
            name: 'GridHelper',
            type: 'Class',
            description: '网格辅助器，常用于表示地面参考线。',
            constructor: 'new THREE.GridHelper(size, divisions, colorCenterLine?, colorGrid?)',
            properties: [],
            methods: [],
            example: `const grid = new THREE.GridHelper(10, 10)
scene.add(grid)`,
            link: 'https://threejs.org/docs/#api/en/helpers/GridHelper'
          },
          {
            name: 'Box3Helper',
            type: 'Class',
            description: '包围盒辅助器，用线框显示 Box3 的边界，常用于调试包围体。',
            constructor: 'new THREE.Box3Helper(box, color?)',
            properties: [],
            methods: [],
            example: `const box = new THREE.Box3().setFromObject(mesh)
const helper = new THREE.Box3Helper(box, 0xffff00)
scene.add(helper)`,
            link: 'https://threejs.org/docs/#api/en/helpers/Box3Helper'
          },
          {
            name: 'CameraHelper',
            type: 'Class',
            description: '相机辅助器，显示相机视锥体，调试相机参数非常有用。',
            constructor: 'new THREE.CameraHelper(camera)',
            properties: [],
            methods: [
              { signature: 'update()', description: '相机参数改变后调用以更新显示' }
            ],
            example: `const helper = new THREE.CameraHelper(camera)
scene.add(helper)
// 修改相机参数后
helper.update()`,
            link: 'https://threejs.org/docs/#api/en/helpers/CameraHelper'
          }
        ]
      }
    ,
      {
        name: '相机',
        items: [
          {
            name: 'Camera',
            type: 'Class',
            description: '所有相机类型的基类，通常直接使用其子类（Perspective/Orthographic）。',
            constructor: 'new THREE.Camera()',
            properties: [
              { name: 'matrixWorldInverse', type: 'Matrix4', description: '世界矩阵的逆矩阵' },
              { name: 'projectionMatrix', type: 'Matrix4', description: '投影矩阵' }
            ],
            methods: [
              { signature: 'lookAt(vector)', description: '让相机朝向指定目标点' },
              { signature: 'updateMatrixWorld(force?)', description: '更新世界矩阵' },
              { signature: 'updateProjectionMatrix()', description: '更新投影矩阵' }
            ],
            example: `// 通常不直接实例化 Camera，而使用其子类
// 这里仅演示基类存在
const cam = new THREE.Camera()
cam.position.set(0, 0, 5)
cam.lookAt(0, 0, 0)`,
            link: 'https://threejs.org/docs/#api/en/cameras/Camera'
          },
          {
            name: 'OrthographicCamera',
            type: 'Class',
            description: '正交相机，无透视缩小效果，常用于2D/UI或工程视图。',
            constructor: 'new THREE.OrthographicCamera(left, right, top, bottom, near, far)',
            properties: [
              { name: 'left', type: 'Number', description: '左裁剪面' },
              { name: 'right', type: 'Number', description: '右裁剪面' },
              { name: 'top', type: 'Number', description: '上裁剪面' },
              { name: 'bottom', type: 'Number', description: '下裁剪面' },
              { name: 'near', type: 'Number', description: '近裁剪面' },
              { name: 'far', type: 'Number', description: '远裁剪面' },
              { name: 'zoom', type: 'Number', description: '缩放系数，默认1' }
            ],
            methods: [
              { signature: 'updateProjectionMatrix()', description: '修改参数后需调用以生效' },
              { signature: 'setViewOffset(fullWidth, fullHeight, x, y, width, height)', description: '设置视口偏移' },
              { signature: 'clearViewOffset()', description: '清除视口偏移' }
            ],
            example: `const aspect = window.innerWidth / window.innerHeight
const frustumSize = 10
const camera = new THREE.OrthographicCamera(
  -frustumSize * aspect / 2,
   frustumSize * aspect / 2,
   frustumSize / 2,
  -frustumSize / 2,
  0.1,
  1000
)
camera.position.set(0, 0, 10)
camera.lookAt(0, 0, 0)
camera.updateProjectionMatrix()`,
            link: 'https://threejs.org/docs/#api/en/cameras/OrthographicCamera'
          },
          {
            name: 'ArrayCamera',
            type: 'Class',
            description: '相机数组，允许在一次渲染中以多个子相机的不同视口输出，常用于分屏/多视角。',
            constructor: 'new THREE.ArrayCamera(cameras)',
            properties: [
              { name: 'cameras', type: 'Array<Camera>', description: '子相机数组，每个相机可设置 viewport' }
            ],
            methods: [],
            example: `const camL = new THREE.PerspectiveCamera(60, 0.5 * window.innerWidth / window.innerHeight, 0.1, 100)
camL.viewport = new THREE.Vector4(0, 0, window.innerWidth / 2, window.innerHeight)

const camR = new THREE.PerspectiveCamera(60, 0.5 * window.innerWidth / window.innerHeight, 0.1, 100)
camR.viewport = new THREE.Vector4(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight)

const arrayCamera = new THREE.ArrayCamera([camL, camR])
renderer.render(scene, arrayCamera)`,
            link: 'https://threejs.org/docs/#api/en/cameras/ArrayCamera'
          },
          {
            name: 'CubeCamera',
            type: 'Class',
            description: '用于生成环境贴图的立方体相机，常用于反射/折射等效果。',
            constructor: 'new THREE.CubeCamera(near, far, renderTarget)',
            properties: [],
            methods: [
              { signature: 'update(renderer, scene)', description: '从当前位置捕获六个方向的环境贴图' }
            ],
            example: `const cubeRT = new THREE.WebGLCubeRenderTarget(256, { generateMipmaps: true })
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRT)
// 将 cubeRT.texture 用作 PBR 材质的 envMap
function animate() {
  requestAnimationFrame(animate)
  // 在需要时更新环境贴图
  cubeCamera.update(renderer, scene)
  renderer.render(scene, mainCamera)
}`,
            link: 'https://threejs.org/docs/#api/en/cameras/CubeCamera'
          }
        ]
      }
    ,
      {
        name: '渲染器',
        items: [
          {
            name: 'WebGL1Renderer',
            type: 'Class',
            description: '使用 WebGL 1.0 的渲染器，作为 WebGLRenderer 的兼容性备选方案。',
            constructor: 'new THREE.WebGL1Renderer(parameters?)',
            properties: [],
            methods: [
              { signature: 'render(scene, camera)', description: '渲染场景' },
              { signature: 'setSize(width, height, updateStyle?)', description: '设置渲染尺寸' },
              { signature: 'setPixelRatio(value)', description: '设置像素比以适配高 DPI 屏幕' },
              { signature: 'setClearColor(color, alpha?)', description: '设置清屏颜色与透明度' },
              { signature: 'dispose()', description: '释放 GPU 资源' }
            ],
            example: `import { WebGL1Renderer } from 'three'
const renderer = new WebGL1Renderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)`,
            link: 'https://threejs.org/docs/#api/en/renderers/WebGL1Renderer'
          },
          {
            name: 'WebGLRenderTarget',
            type: 'Class',
            description: '离屏渲染目标（帧缓冲），常用于后期处理、反射、阴影贴图等。',
            constructor: 'new THREE.WebGLRenderTarget(width, height, options?)',
            properties: [
              { name: 'texture', type: 'Texture', description: '渲染输出的纹理' },
              { name: 'depthTexture', type: 'DepthTexture', description: '可选的深度纹理' }
            ],
            methods: [
              { signature: 'setSize(width, height)', description: '调整渲染目标尺寸' },
              { signature: 'dispose()', description: '释放资源' }
            ],
            example: `import { WebGLRenderTarget, Scene, OrthographicCamera, MeshBasicMaterial, PlaneGeometry, Mesh } from 'three'
const rt = new WebGLRenderTarget(512, 512)
// 第一次渲染到 RT
renderer.setRenderTarget(rt)
renderer.render(scene, camera)
renderer.setRenderTarget(null)
// 将 RT 纹理贴到一个平面上显示
const mat = new MeshBasicMaterial({ map: rt.texture })
const plane = new Mesh(new PlaneGeometry(2, 2), mat)
scene2.add(plane)
renderer.render(scene2, new OrthographicCamera())`,
            link: 'https://threejs.org/docs/#api/en/renderers/WebGLRenderTarget'
          },
          {
            name: 'WebGLCubeRenderTarget',
            type: 'Class',
            description: '立方体离屏渲染目标，常与 CubeCamera 搭配用于反射/环境贴图。',
            constructor: 'new THREE.WebGLCubeRenderTarget(size, options?)',
            properties: [
              { name: 'texture', type: 'CubeTexture', description: '立方体纹理输出' }
            ],
            methods: [
              { signature: 'fromEquirectangularTexture(renderer, texture)', description: '从等距柱状环境图转成立方体环境贴图' },
              { signature: 'dispose()', description: '释放资源' }
            ],
            example: `import { WebGLCubeRenderTarget } from 'three'
const cubeRT = new WebGLCubeRenderTarget(256, { generateMipmaps: true })
// 可与 CubeCamera 搭配：cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRT)
// material.envMap = cubeRT.texture`,
            link: 'https://threejs.org/docs/#api/en/renderers/WebGLCubeRenderTarget'
          }
        ]
      }
    ,
      {
        name: '场景对象',
        items: [
          {
            name: 'Object3D',
            type: 'Class',
            description: 'Three.js 中所有可放入场景层级的对象基类，提供位置/旋转/缩放、层级关系与通用操作。',
            constructor: 'new THREE.Object3D()',
            properties: [
              { name: 'position', type: 'Vector3', description: '世界变换中的平移' },
              { name: 'rotation', type: 'Euler', description: '欧拉角旋转' },
              { name: 'quaternion', type: 'Quaternion', description: '四元数旋转' },
              { name: 'scale', type: 'Vector3', description: '缩放' },
              { name: 'children', type: 'Array<Object3D>', description: '子对象列表' },
              { name: 'parent', type: 'Object3D | null', description: '父对象' },
              { name: 'visible', type: 'Boolean', description: '是否可见' },
              { name: 'name', type: 'String', description: '对象名称' }
            ],
            methods: [
              { signature: 'add(...objects)', description: '添加子对象' },
              { signature: 'remove(...objects)', description: '移除子对象' },
              { signature: 'traverse(callback)', description: '深度优先遍历所有后代' },
              { signature: 'lookAt(x|Vector3, y?, z?)', description: '朝向目标点' },
              { signature: 'getObjectByName(name)', description: '按名称查找子树中的对象' },
              { signature: 'updateMatrixWorld(force?)', description: '更新世界矩阵' }
            ],
            example: `const root = new THREE.Object3D()
root.position.set(0, 1, 0)
const child = new THREE.Object3D()
root.add(child)
scene.add(root)
root.traverse(obj => obj.visible = true)`,
            link: 'https://threejs.org/docs/#api/en/core/Object3D'
          },
          {
            name: 'Group',
            type: 'Class',
            description: '对象分组容器，继承自 Object3D，便于整体变换与管理。',
            constructor: 'new THREE.Group()',
            properties: [],
            methods: [],
            example: `const group = new THREE.Group()
group.name = 'characters'
group.add(mesh1, mesh2)
group.position.set(0, 0, -5)
scene.add(group)`,
            link: 'https://threejs.org/docs/#api/en/objects/Group'
          },
          {
            name: 'Mesh',
            type: 'Class',
            description: '网格对象，由几何体与材质组成，是最常见的可渲染对象。',
            constructor: 'new THREE.Mesh(geometry, material)',
            properties: [
              { name: 'geometry', type: 'BufferGeometry', description: '几何体数据' },
              { name: 'material', type: 'Material | Material[]', description: '材质或材质数组' },
              { name: 'castShadow', type: 'Boolean', description: '是否投射阴影' },
              { name: 'receiveShadow', type: 'Boolean', description: '是否接收阴影' }
            ],
            methods: [],
            example: `const geo = new THREE.BoxGeometry(1, 1, 1)
const mat = new THREE.MeshStandardMaterial({ color: 0x6699ff })
const mesh = new THREE.Mesh(geo, mat)
mesh.castShadow = true
mesh.receiveShadow = true
scene.add(mesh)`,
            link: 'https://threejs.org/docs/#api/en/objects/Mesh'
          },
          {
            name: 'Line',
            type: 'Class',
            description: '线段对象，使用 LineBasicMaterial 或 LineDashedMaterial 渲染几何体的顶点连接线。',
            constructor: 'new THREE.Line(geometry, material)',
            properties: [],
            methods: [],
            example: `const points = [new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0)]
const geo = new THREE.BufferGeometry().setFromPoints(points)
const mat = new THREE.LineBasicMaterial({ color: 0xff0000 })
const line = new THREE.Line(geo, mat)
scene.add(line)`,
            link: 'https://threejs.org/docs/#api/en/objects/Line'
          },
          {
            name: 'Points',
            type: 'Class',
            description: '点精灵对象，使用 PointsMaterial 渲染大量点，常用于粒子效果。',
            constructor: 'new THREE.Points(geometry, material)',
            properties: [],
            methods: [],
            example: `const count = 1000
const positions = new Float32Array(count * 3)
for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 10
const geo = new THREE.BufferGeometry()
geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, sizeAttenuation: true })
const points = new THREE.Points(geo, mat)
scene.add(points)`,
            link: 'https://threejs.org/docs/#api/en/objects/Points'
          }
        ]
      }
    ]
    
    const filteredCategories = computed(() => {
      if (!searchQuery.value) return apiData
      
      return apiData.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      })).filter(category => category.items.length > 0)
    })
    
    const selectApi = (api) => {
      selectedApi.value = api
    }
    
    return {
      searchQuery,
      selectedApi,
      filteredCategories,
      selectApi
    }
  }
}
</script>

<style scoped>
.api-docs {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.api-header {
  text-align: center;
  margin-bottom: 2rem;
}

.api-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.api-header p {
  font-size: 1.1rem;
  color: #666;
}

.api-search {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #42b883;
}

.api-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.api-categories {
  max-height: 80vh;
  overflow-y: auto;
}

.api-category {
  margin-bottom: 2rem;
}

.category-title {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #42b883;
}

.api-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.api-item {
  padding: 1rem;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.api-item:hover {
  border-color: #42b883;
  background: rgba(66, 184, 131, 0.05);
}

.api-item.active {
  border-color: #42b883;
  background: rgba(66, 184, 131, 0.1);
}

.api-item h3 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.api-item p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.api-detail {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 2rem;
  max-height: 80vh;
  overflow-y: auto;
  position: sticky;
  top: 2rem;
}

.api-placeholder {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: #666;
}

.api-detail-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.api-detail-header h2 {
  color: #2c3e50;
  margin: 0;
}

.api-type {
  background: #42b883;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.api-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.api-section {
  margin-bottom: 2rem;
}

.api-section h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.property-list,
.method-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.property-item,
.method-item {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e1e8ed;
}

.property-name,
.method-signature {
  background: #2d3748;
  color: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
}

.property-type {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.property-desc,
.method-desc {
  color: #666;
  margin-top: 0.5rem;
  line-height: 1.5;
}

pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .api-docs {
    padding: 1rem;
  }
  
  .api-content {
    grid-template-columns: 1fr;
  }
  
  .api-detail {
    position: static;
    max-height: none;
  }
  
  .api-header h1 {
    font-size: 2rem;
  }
}
</style>