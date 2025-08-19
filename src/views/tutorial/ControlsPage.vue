<template>
  <div class="tutorial-page">
    <h1>控制器 Controls</h1>
    <p class="intro">学习Three.js中的各种相机控制器，让用户能够交互式地操作3D场景视角。</p>

    <section>
      <h2>轨道控制器 OrbitControls</h2>
      <p>最常用的控制器，允许用户围绕目标点旋转、缩放和平移相机：</p>
      
      <div class="controls-demo">
        <div class="demo-canvas">
          <canvas ref="orbitCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-explanation">
          <p><strong>操作方式：</strong></p>
          <ul>
            <li>🖱️ <strong>左键拖拽</strong>：围绕目标旋转</li>
            <li>🖱️ <strong>右键拖拽</strong>：平移视角</li>
            <li>🎡 <strong>滚轮</strong>：缩放远近</li>
          </ul>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <label>
              <input type="checkbox" v-model="orbitSettings.enableDamping"> 启用阻尼
            </label>
          </div>
          <div class="control-group">
            <label>
              <input type="checkbox" v-model="orbitSettings.autoRotate"> 自动旋转
            </label>
          </div>
          <div class="control-group">
            <label>旋转速度: <span>{{ orbitSettings.autoRotateSpeed.toFixed(1) }}</span></label>
            <input type="range" v-model="orbitSettings.autoRotateSpeed" min="0.5" max="5" step="0.1">
          </div>
        </div>
      </div>

      <pre><code>import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 基本设置
controls.enableDamping = true; // 启用阻尼
controls.dampingFactor = 0.05; // 阻尼系数
controls.screenSpacePanning = false; // 禁用屏幕空间平移

// 限制控制范围
controls.minDistance = 3; // 最小距离
controls.maxDistance = 20; // 最大距离
controls.maxPolarAngle = Math.PI / 2; // 最大极角

// 自动旋转
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0;

// 在动画循环中更新
function animate() {
  controls.update(); // 更新控制器
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}</code></pre>
    </section>

    <section>
      <h2>第一人称控制器 FirstPersonControls</h2>
      <p>模拟第一人称视角，适合游戏和虚拟漫游应用：</p>
      
      <div class="controls-demo">
        <div class="demo-canvas">
          <canvas ref="firstPersonCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-explanation">
          <p><strong>操作方式：</strong></p>
          <ul>
            <li>⌨️ <strong>WASD</strong>：前后左右移动</li>
            <li>🖱️ <strong>鼠标移动</strong>：转动视角</li>
            <li>⌨️ <strong>QE</strong>：上下移动</li>
          </ul>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <label>移动速度: <span>{{ fpSettings.movementSpeed.toFixed(1) }}</span></label>
            <input type="range" v-model="fpSettings.movementSpeed" min="1" max="10" step="0.5">
          </div>
          <div class="control-group">
            <label>鼠标灵敏度: <span>{{ fpSettings.lookSpeed.toFixed(2) }}</span></label>
            <input type="range" v-model="fpSettings.lookSpeed" min="0.01" max="0.1" step="0.01">
          </div>
        </div>
      </div>

      <pre><code>import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';

// 创建第一人称控制器
const controls = new FirstPersonControls(camera, renderer.domElement);

// 基本设置
controls.movementSpeed = 5.0; // 移动速度
controls.lookSpeed = 0.05; // 鼠标灵敏度
controls.lookVertical = true; // 允许垂直查看
controls.constrainVertical = true; // 限制垂直角度
controls.verticalMin = 1.0; // 最小垂直角度
controls.verticalMax = 2.0; // 最大垂直角度

// 在动画循环中更新
const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta();
  controls.update(delta); // 需要传入时间差
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}</code></pre>
    </section>

    <section>
      <h2>飞行控制器 FlyControls</h2>
      <p>提供完全自由的6DOF（六自由度）飞行控制：</p>
      
      <div class="controls-demo">
        <div class="demo-canvas">
          <canvas ref="flyCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-explanation">
          <p><strong>操作方式：</strong></p>
          <ul>
            <li>🖱️ <strong>鼠标移动</strong>：改变飞行方向</li>
            <li>⌨️ <strong>WASD</strong>：前后左右</li>
            <li>⌨️ <strong>RF</strong>：上升下降</li>
            <li>⌨️ <strong>QE</strong>：翻滚</li>
          </ul>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <label>移动速度: <span>{{ flySettings.movementSpeed.toFixed(1) }}</span></label>
            <input type="range" v-model="flySettings.movementSpeed" min="0.1" max="2" step="0.1">
          </div>
          <div class="control-group">
            <label>翻滚速度: <span>{{ flySettings.rollSpeed.toFixed(2) }}</span></label>
            <input type="range" v-model="flySettings.rollSpeed" min="0.01" max="0.2" step="0.01">
          </div>
        </div>
      </div>

      <pre><code>import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';

// 创建飞行控制器
const controls = new FlyControls(camera, renderer.domElement);

// 基本设置
controls.movementSpeed = 1.0; // 移动速度
controls.domElement = renderer.domElement;
controls.rollSpeed = Math.PI / 24; // 翻滚速度
controls.autoForward = false; // 自动前进
controls.dragToLook = false; // 拖拽查看

// 在动画循环中更新
const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta();
  controls.update(delta);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}</code></pre>
    </section>

    <section>
      <h2>轨迹球控制器 TrackballControls</h2>
      <p>提供类似轨迹球的旋转控制，没有上下限制：</p>
      
      <div class="controls-demo">
        <div class="demo-canvas">
          <canvas ref="trackballCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-explanation">
          <p><strong>操作方式：</strong></p>
          <ul>
            <li>🖱️ <strong>左键拖拽</strong>：自由旋转（无限制）</li>
            <li>🖱️ <strong>中键拖拽</strong>：缩放</li>
            <li>🖱️ <strong>右键拖拽</strong>：平移</li>
          </ul>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <label>旋转速度: <span>{{ trackballSettings.rotateSpeed.toFixed(1) }}</span></label>
            <input type="range" v-model="trackballSettings.rotateSpeed" min="0.5" max="3" step="0.1">
          </div>
          <div class="control-group">
            <label>缩放速度: <span>{{ trackballSettings.zoomSpeed.toFixed(1) }}</span></label>
            <input type="range" v-model="trackballSettings.zoomSpeed" min="0.5" max="3" step="0.1">
          </div>
        </div>
      </div>

      <pre><code>import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

// 创建轨迹球控制器
const controls = new TrackballControls(camera, renderer.domElement);

// 基本设置
controls.rotateSpeed = 1.0; // 旋转速度
controls.zoomSpeed = 1.2; // 缩放速度
controls.panSpeed = 0.8; // 平移速度
controls.noZoom = false; // 允许缩放
controls.noPan = false; // 允许平移
controls.staticMoving = true; // 静态移动
controls.dynamicDampingFactor = 0.3; // 动态阻尼

// 在动画循环中更新
function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}</code></pre>
    </section>

    <section>
      <h2>变换控制器 TransformControls</h2>
      <p>用于直接操作3D对象的位置、旋转和缩放：</p>
      
      <div class="controls-demo">
        <div class="demo-canvas">
          <canvas ref="transformCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-explanation">
          <p><strong>操作方式：</strong></p>
          <ul>
            <li>🎯 <strong>点击对象</strong>：选择要变换的对象</li>
            <li>🔄 <strong>拖拽轴线</strong>：沿轴移动/旋转/缩放</li>
            <li>⌨️ <strong>G/R/S</strong>：切换移动/旋转/缩放模式</li>
          </ul>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <label>变换模式:</label>
            <select v-model="transformMode">
              <option value="translate">移动 (G)</option>
              <option value="rotate">旋转 (R)</option>
              <option value="scale">缩放 (S)</option>
            </select>
          </div>
          <div class="control-group">
            <label>
              <input type="checkbox" v-model="transformSettings.showX"> X轴
            </label>
            <label>
              <input type="checkbox" v-model="transformSettings.showY"> Y轴
            </label>
            <label>
              <input type="checkbox" v-model="transformSettings.showZ"> Z轴
            </label>
          </div>
        </div>
      </div>

      <pre><code>import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

// 创建变换控制器
const transformControls = new TransformControls(camera, renderer.domElement);
scene.add(transformControls);

// 设置要控制的对象
transformControls.attach(cube);

// 设置变换模式
transformControls.setMode('translate'); // 'translate', 'rotate', 'scale'

// 设置显示的轴
transformControls.showX = true;
transformControls.showY = true;
transformControls.showZ = true;

// 事件监听
transformControls.addEventListener('change', () => {
  renderer.render(scene, camera);
});

transformControls.addEventListener('dragging-changed', (event) => {
  orbitControls.enabled = !event.value; // 拖拽时禁用轨道控制
});

// 键盘快捷键
window.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyG':
      transformControls.setMode('translate');
      break;
    case 'KeyR':
      transformControls.setMode('rotate');
      break;
    case 'KeyS':
      transformControls.setMode('scale');
      break;
  }
});</code></pre>
    </section>

    <section>
      <h2>控制器对比</h2>
      <div class="controls-comparison">
        <div class="comparison-item">
          <h3>🌍 OrbitControls</h3>
          <div class="pros-cons">
            <div class="pros">
              <h4>优点</h4>
              <ul>
                <li>易于使用</li>
                <li>适合展示模型</li>
                <li>支持阻尼效果</li>
                <li>可限制旋转范围</li>
              </ul>
            </div>
            <div class="cons">
              <h4>缺点</h4>
              <ul>
                <li>围绕固定点旋转</li>
                <li>不适合第一人称</li>
              </ul>
            </div>
          </div>
          <div class="use-cases">
            <strong>适用场景：</strong>产品展示、建筑可视化、模型查看器
          </div>
        </div>

        <div class="comparison-item">
          <h3>🎮 FirstPersonControls</h3>
          <div class="pros-cons">
            <div class="pros">
              <h4>优点</h4>
              <ul>
                <li>真实的第一人称体验</li>
                <li>支持键盘移动</li>
                <li>适合游戏开发</li>
              </ul>
            </div>
            <div class="cons">
              <h4>缺点</h4>
              <ul>
                <li>学习成本较高</li>
                <li>需要更多配置</li>
              </ul>
            </div>
          </div>
          <div class="use-cases">
            <strong>适用场景：</strong>游戏、虚拟现实、室内漫游
          </div>
        </div>

        <div class="comparison-item">
          <h3>✈️ FlyControls</h3>
          <div class="pros-cons">
            <div class="pros">
              <h4>优点</h4>
              <ul>
                <li>完全自由的6DOF</li>
                <li>适合空间导航</li>
                <li>支持翻滚动作</li>
              </ul>
            </div>
            <div class="cons">
              <h4>缺点</h4>
              <ul>
                <li>操作复杂</li>
                <li>容易迷失方向</li>
              </ul>
            </div>
          </div>
          <div class="use-cases">
            <strong>适用场景：</strong>太空模拟、飞行模拟、科学可视化
          </div>
        </div>

        <div class="comparison-item">
          <h3>🔄 TrackballControls</h3>
          <div class="pros-cons">
            <div class="pros">
              <h4>优点</h4>
              <ul>
                <li>无旋转限制</li>
                <li>直观的操作</li>
                <li>适合精确控制</li>
              </ul>
            </div>
            <div class="cons">
              <h4>缺点</h4>
              <ul>
                <li>可能产生翻转</li>
                <li>缺少阻尼效果</li>
              </ul>
            </div>
          </div>
          <div class="use-cases">
            <strong>适用场景：</strong>CAD软件、3D建模、精确操作
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>自定义控制器</h2>
      <p>创建自己的控制器来满足特定需求：</p>
      
      <pre><code>class CustomControls {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.isMouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;
    
    this.bindEvents();
  }
  
  bindEvents() {
    this.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.domElement.addEventListener('wheel', this.onWheel.bind(this));
  }
  
  onMouseDown(event) {
    this.isMouseDown = true;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  onMouseMove(event) {
    if (!this.isMouseDown) return;
    
    const deltaX = event.clientX - this.mouseX;
    const deltaY = event.clientY - this.mouseY;
    
    // 自定义旋转逻辑
    this.camera.rotation.y -= deltaX * 0.01;
    this.camera.rotation.x -= deltaY * 0.01;
    
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  
  onMouseUp() {
    this.isMouseDown = false;
  }
  
  onWheel(event) {
    // 自定义缩放逻辑
    const scale = event.deltaY > 0 ? 1.1 : 0.9;
    this.camera.position.multiplyScalar(scale);
  }
  
  update() {
    // 每帧更新逻辑
  }
}</code></pre>
    </section>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default {
  name: 'ControlsPage',
  data() {
    return {
      orbitSettings: {
        enableDamping: true,
        autoRotate: false,
        autoRotateSpeed: 2.0
      },
      fpSettings: {
        movementSpeed: 5.0,
        lookSpeed: 0.05
      },
      flySettings: {
        movementSpeed: 1.0,
        rollSpeed: 0.1
      },
      trackballSettings: {
        rotateSpeed: 1.0,
        zoomSpeed: 1.2
      },
      transformMode: 'translate',
      transformSettings: {
        showX: true,
        showY: true,
        showZ: true
      }
    }
  },
  mounted() {
    this.initOrbitControls()
    this.initFirstPersonDemo()
    this.initFlyDemo()
    this.initTrackballDemo()
    this.initTransformDemo()
  },
  methods: {
    initOrbitControls() {
      const canvas = this.$refs.orbitCanvas
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas })
      
      // 创建场景对象
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x42b883 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      
      // 添加网格
      const gridHelper = new THREE.GridHelper(10, 10)
      scene.add(gridHelper)
      
      camera.position.set(5, 5, 5)
      
      // 创建轨道控制器
      const controls = new OrbitControls(camera, canvas)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      
      const animate = () => {
        controls.enableDamping = this.orbitSettings.enableDamping
        controls.autoRotate = this.orbitSettings.autoRotate
        controls.autoRotateSpeed = this.orbitSettings.autoRotateSpeed
        
        controls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    initFirstPersonDemo() {
      const canvas = this.$refs.firstPersonCanvas
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas })
      
      // 创建简单的环境
      for (let i = 0; i < 10; i++) {
        const geometry = new THREE.BoxGeometry(
          Math.random() * 2 + 0.5,
          Math.random() * 3 + 1,
          Math.random() * 2 + 0.5
        )
        const material = new THREE.MeshBasicMaterial({ 
          color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6)
        })
        const cube = new THREE.Mesh(geometry, material)
        cube.position.set(
          (Math.random() - 0.5) * 20,
          cube.geometry.parameters.height / 2,
          (Math.random() - 0.5) * 20
        )
        scene.add(cube)
      }
      
      // 添加地面
      const groundGeometry = new THREE.PlaneGeometry(30, 30)
      const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 })
      const ground = new THREE.Mesh(groundGeometry, groundMaterial)
      ground.rotation.x = -Math.PI / 2
      scene.add(ground)
      
      camera.position.set(0, 2, 5)
      
      // 简化的第一人称控制
      let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false
      
      const onKeyDown = (event) => {
        switch (event.code) {
          case 'KeyW': moveForward = true; break
          case 'KeyS': moveBackward = true; break
          case 'KeyA': moveLeft = true; break
          case 'KeyD': moveRight = true; break
        }
      }
      
      const onKeyUp = (event) => {
        switch (event.code) {
          case 'KeyW': moveForward = false; break
          case 'KeyS': moveBackward = false; break
          case 'KeyA': moveLeft = false; break
          case 'KeyD': moveRight = false; break
        }
      }
      
      document.addEventListener('keydown', onKeyDown)
      document.addEventListener('keyup', onKeyUp)
      
      const animate = () => {
        const speed = this.fpSettings.movementSpeed * 0.01
        
        if (moveForward) camera.translateZ(-speed)
        if (moveBackward) camera.translateZ(speed)
        if (moveLeft) camera.translateX(-speed)
        if (moveRight) camera.translateX(speed)
        
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    initFlyDemo() {
      const canvas = this.$refs.flyCanvas
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas })
      
      // 创建星空效果
      const starsGeometry = new THREE.BufferGeometry()
      const starsCount = 1000
      const positions = new Float32Array(starsCount * 3)
      
      for (let i = 0; i < starsCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 200
      }
      
      starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 })
      const stars = new THREE.Points(starsGeometry, starsMaterial)
      scene.add(stars)
      
      camera.position.set(0, 0, 10)
      
      const animate = () => {
        // 简单的飞行动画
        camera.position.z -= this.flySettings.movementSpeed * 0.1
        if (camera.position.z < -100) camera.position.z = 100
        
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    initTrackballDemo() {
      const canvas = this.$refs.trackballCanvas
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas })
      
      // 创建复杂的几何体
      const geometry = new THREE.IcosahedronGeometry(2, 1)
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x4ecdc4,
        wireframe: true
      })
      const icosahedron = new THREE.Mesh(geometry, material)
      scene.add(icosahedron)
      
      camera.position.set(0, 0, 8)
      
      // 简化的轨迹球控制
      let isMouseDown = false
      let mouseX = 0, mouseY = 0
      
      canvas.addEventListener('mousedown', (event) => {
        isMouseDown = true
        mouseX = event.clientX
        mouseY = event.clientY
      })
      
      canvas.addEventListener('mousemove', (event) => {
        if (!isMouseDown) return
        
        const deltaX = event.clientX - mouseX
        const deltaY = event.clientY - mouseY
        
        icosahedron.rotation.y += deltaX * 0.01 * this.trackballSettings.rotateSpeed
        icosahedron.rotation.x += deltaY * 0.01 * this.trackballSettings.rotateSpeed
        
        mouseX = event.clientX
        mouseY = event.clientY
      })
      
      canvas.addEventListener('mouseup', () => {
        isMouseDown = false
      })
      
      const animate = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    initTransformDemo() {
      const canvas = this.$refs.transformCanvas
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas })
      
      // 创建可变换的对象
      const geometry = new THREE.ConeGeometry(1, 2, 8)
      const material = new THREE.MeshBasicMaterial({ color: 0xff6b6b })
      const cone = new THREE.Mesh(geometry, material)
      scene.add(cone)
      
      // 添加网格辅助
      const gridHelper = new THREE.GridHelper(10, 10)
      scene.add(gridHelper)
      
      camera.position.set(5, 5, 5)
      camera.lookAt(0, 0, 0)
      
      const animate = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    }
  }
}
</script>

<style scoped>
.tutorial-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.tutorial-page h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid #42b883;
  padding-bottom: 0.5rem;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-left: 4px solid #42b883;
  border-radius: 0 8px 8px 0;
}

section {
  margin-bottom: 4rem;
}

section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e1e8ed;
}

.controls-demo {
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
  display: inline-block;
}

.demo-explanation {
  margin: 1rem 0;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.demo-explanation ul {
  list-style: none;
  padding: 0;
}

.demo-explanation li {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  border-left: 3px solid #42b883;
}

.demo-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 200px;
}

.control-group label {
  font-weight: 500;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control-group input[type="range"] {
  width: 100%;
}

.control-group select {
  padding: 0.5rem;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  background: white;
}

.controls-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.comparison-item {
  background: #f8f9fa;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  padding: 1.5rem;
}

.comparison-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.pros, .cons {
  background: white;
  padding: 1rem;
  border-radius: 6px;
}

.pros h4 {
  color: #27ae60;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.cons h4 {
  color: #e74c3c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.pros ul, .cons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros li, .cons li {
  margin: 0.25rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.9rem;
}

.pros li::before {
  content: '✓';
  color: #27ae60;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.cons li::before {
  content: '✗';
  color: #e74c3c;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.use-cases {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #1976d2;
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
  .tutorial-page {
    padding: 1rem;
  }
  
  .tutorial-page h1 {
    font-size: 2rem;
  }
  
  section h2 {
    font-size: 1.5rem;
  }
  
  .controls-comparison {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
  
  .demo-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .controls-demo {
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
