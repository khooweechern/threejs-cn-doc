<template>
  <div class="tutorial-page">
    <h1>动画系统 Animation</h1>
    <p class="intro">学习Three.js中的动画系统，包括基础动画循环、关键帧动画、动画混合器等核心概念。</p>

    <section>
      <h2>基础动画循环</h2>
      <p>Three.js中最基本的动画是通过<code>requestAnimationFrame</code>创建的动画循环：</p>
      
      <div class="animation-demo">
        <div class="demo-canvas">
          <canvas ref="basicAnimationCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-explanation">
          <p>这个立方体展示了基础的旋转动画，通过在每一帧中修改对象的rotation属性实现。</p>
        </div>
      </div>

      <pre><code>// 基础动画循环
function animate() {
  requestAnimationFrame(animate);
  
  // 更新对象属性
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // 渲染场景
  renderer.render(scene, camera);
}

animate(); // 启动动画循环</code></pre>
    </section>

    <section>
      <h2>动画时钟 Clock</h2>
      <p>使用<code>THREE.Clock</code>可以获得更精确的时间控制，确保动画在不同帧率下保持一致：</p>
      
      <div class="animation-demo">
        <div class="demo-canvas">
          <canvas ref="clockAnimationCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <label>动画速度: <span>{{ animationSpeed.toFixed(1) }}</span></label>
            <input type="range" v-model="animationSpeed" min="0.1" max="3" step="0.1">
          </div>
          <div class="control-group">
            <label>
              <input type="checkbox" v-model="pauseAnimation"> 暂停动画
            </label>
          </div>
        </div>
      </div>

      <pre><code>const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const deltaTime = clock.getDelta(); // 获取时间差
  const elapsedTime = clock.getElapsedTime(); // 获取总时间
  
  // 基于时间的动画
  cube.rotation.y = elapsedTime * speed;
  cube.position.y = Math.sin(elapsedTime * 2) * 2;
  
  renderer.render(scene, camera);
}</code></pre>
    </section>

    <section>
      <h2>关键帧动画 KeyframeTrack</h2>
      <p>Three.js提供了强大的关键帧动画系统，可以创建复杂的动画序列：</p>
      
      <div class="animation-demo">
        <div class="demo-canvas">
          <canvas ref="keyframeCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <button @click="playKeyframeAnimation">播放关键帧动画</button>
            <button @click="pauseKeyframeAnimation">暂停</button>
            <button @click="resetKeyframeAnimation">重置</button>
          </div>
          <div class="control-group">
            <label>动画进度: <span>{{ keyframeProgress.toFixed(2) }}</span></label>
            <input type="range" v-model="keyframeProgress" min="0" max="1" step="0.01">
          </div>
        </div>
      </div>

      <pre><code>// 创建关键帧轨道
const positionKF = new THREE.VectorKeyframeTrack(
  '.position', 
  [0, 1, 2, 3], // 时间点
  [0, 0, 0,     // 位置1
   2, 0, 0,     // 位置2
   2, 2, 0,     // 位置3
   0, 2, 0]     // 位置4
);

const rotationKF = new THREE.QuaternionKeyframeTrack(
  '.quaternion',
  [0, 1, 2, 3],
  [0, 0, 0, 1,
   0, 0, 0.7071, 0.7071,
   0, 0, 1, 0,
   0, 0, 0.7071, -0.7071]
);

// 创建动画剪辑
const clip = new THREE.AnimationClip('Action', 3, [positionKF, rotationKF]);

// 创建动画混合器
const mixer = new THREE.AnimationMixer(cube);
const action = mixer.clipAction(clip);
action.play();</code></pre>
    </section>

    <section>
      <h2>缓动函数 Easing</h2>
      <p>使用缓动函数可以让动画更加自然和有趣：</p>
      
      <div class="animation-demo">
        <div class="demo-canvas">
          <canvas ref="easingCanvas" width="600" height="400"></canvas>
        </div>
        <div class="demo-controls">
          <div class="control-group">
            <label>缓动类型:</label>
            <select v-model="easingType">
              <option value="linear">Linear</option>
              <option value="easeInQuad">Ease In Quad</option>
              <option value="easeOutQuad">Ease Out Quad</option>
              <option value="easeInOutQuad">Ease In Out Quad</option>
              <option value="easeInCubic">Ease In Cubic</option>
              <option value="easeOutCubic">Ease Out Cubic</option>
              <option value="bounce">Bounce</option>
              <option value="elastic">Elastic</option>
            </select>
          </div>
          <div class="control-group">
            <button @click="playEasingAnimation">播放缓动动画</button>
          </div>
        </div>
      </div>

      <pre><code>// 缓动函数示例
const easingFunctions = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  bounce: t => {
    if (t < 1/2.75) return 7.5625 * t * t;
    if (t < 2/2.75) return 7.5625 * (t -= 1.5/2.75) * t + 0.75;
    if (t < 2.5/2.75) return 7.5625 * (t -= 2.25/2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625/2.75) * t + 0.984375;
  }
};</code></pre>
    </section>
  </div>
</template>

<script>
import * as THREE from 'three'
import { markRaw } from 'vue'

export default {
  name: 'AnimationPage',
  data() {
    return {
      animationSpeed: 1.0,
      pauseAnimation: false,
      keyframeProgress: 0,
      easingType: 'easeInOutQuad',
      // 动画相关变量
      basicScene: null,
      clockScene: null,
      keyframeScene: null,
      easingScene: null,
      animationId: null,
      keyframeMixer: null,
      keyframeAction: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initBasicAnimation()
      this.initClockAnimation()
      this.initKeyframeAnimation()
      this.initEasingAnimation()
    })
  },
  beforeUnmount() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  },
  methods: {
    initBasicAnimation() {
      const canvas = this.$refs.basicAnimationCanvas
      const scene = markRaw(new THREE.Scene())
      const camera = markRaw(new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000))
      const renderer = markRaw(new THREE.WebGLRenderer({ canvas }))
      
      // 创建立方体
      const geometry = markRaw(new THREE.BoxGeometry())
      const material = markRaw(new THREE.MeshBasicMaterial({ 
        color: 0x42b883,
        wireframe: true
      }))
      const cube = markRaw(new THREE.Mesh(geometry, material))
      scene.add(cube)
      
      camera.position.z = 5
      
      // 基础动画循环
      const animate = () => {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    initClockAnimation() {
      const canvas = this.$refs.clockAnimationCanvas
      const scene = markRaw(new THREE.Scene())
      const camera = markRaw(new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000))
      const renderer = markRaw(new THREE.WebGLRenderer({ canvas }))
      const clock = markRaw(new THREE.Clock())
      
      // 创建多个对象
      const cubes = []
      for (let i = 0; i < 3; i++) {
        const geometry = markRaw(new THREE.BoxGeometry(0.8, 0.8, 0.8))
        const material = markRaw(new THREE.MeshBasicMaterial({ 
          color: new THREE.Color().setHSL(i * 0.3, 0.7, 0.6)
        }))
        const cube = markRaw(new THREE.Mesh(geometry, material))
        cube.position.x = (i - 1) * 2
        scene.add(cube)
        cubes.push(cube)
      }
      
      camera.position.z = 8
      this.clockScene = { scene, camera, renderer, clock, cubes }
      
      this.animateClockScene()
    },
    
    animateClockScene() {
      if (!this.clockScene) return
      
      const { scene, camera, renderer, clock, cubes } = this.clockScene
      
      const animate = () => {
        if (!this.pauseAnimation) {
          const elapsedTime = clock.getElapsedTime()
          
          cubes.forEach((cube, index) => {
            cube.rotation.y = elapsedTime * this.animationSpeed
            cube.position.y = Math.sin(elapsedTime * this.animationSpeed + index) * 1.5
            cube.rotation.x = elapsedTime * this.animationSpeed * 0.5
          })
        }
        
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    initKeyframeAnimation() {
      const canvas = this.$refs.keyframeCanvas
      const scene = markRaw(new THREE.Scene())
      const camera = markRaw(new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000))
      const renderer = markRaw(new THREE.WebGLRenderer({ canvas }))
      
      // 创建立方体
      const geometry = markRaw(new THREE.BoxGeometry())
      const material = markRaw(new THREE.MeshBasicMaterial({ color: 0xff6b6b }))
      const cube = markRaw(new THREE.Mesh(geometry, material))
      scene.add(cube)
      
      camera.position.z = 8
      
      // 创建关键帧动画
      const positionKF = markRaw(new THREE.VectorKeyframeTrack(
        '.position',
        [0, 1, 2, 3, 4],
        [0, 0, 0,
         3, 0, 0,
         3, 3, 0,
         -3, 3, 0,
         0, 0, 0]
      ))
      
      const rotationKF = markRaw(new THREE.QuaternionKeyframeTrack(
        '.quaternion',
        [0, 1, 2, 3, 4],
        [0, 0, 0, 1,
         0, 0, 0.7071, 0.7071,
         0, 0, 1, 0,
         0, 0, 0.7071, -0.7071,
         0, 0, 0, 1]
      ))
      
      const clip = markRaw(new THREE.AnimationClip('Action', 4, [positionKF, rotationKF]))
      const mixer = markRaw(new THREE.AnimationMixer(cube))
      const action = markRaw(mixer.clipAction(clip))
      
      this.keyframeMixer = mixer
      this.keyframeAction = action
      this.keyframeScene = { scene, camera, renderer, cube, mixer, action }
      
      this.animateKeyframeScene()
    },
    
    animateKeyframeScene() {
      if (!this.keyframeScene) return
      
      const { scene, camera, renderer, mixer } = this.keyframeScene
      const clock = markRaw(new THREE.Clock())
      
      const animate = () => {
        const deltaTime = clock.getDelta()
        mixer.update(deltaTime)
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    initEasingAnimation() {
      const canvas = this.$refs.easingCanvas
      const scene = markRaw(new THREE.Scene())
      const camera = markRaw(new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000))
      const renderer = markRaw(new THREE.WebGLRenderer({ canvas }))
      
      // 创建球体
      const geometry = markRaw(new THREE.SphereGeometry(0.5, 32, 32))
      const material = markRaw(new THREE.MeshBasicMaterial({ color: 0x4ecdc4 }))
      const sphere = markRaw(new THREE.Mesh(geometry, material))
      scene.add(sphere)
      
      camera.position.z = 8
      
      this.easingScene = { scene, camera, renderer, sphere }
      
      const animate = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    
    playKeyframeAnimation() {
      if (this.keyframeAction) {
        this.keyframeAction.reset()
        this.keyframeAction.play()
      }
    },
    
    pauseKeyframeAnimation() {
      if (this.keyframeAction) {
        this.keyframeAction.paused = !this.keyframeAction.paused
      }
    },
    
    resetKeyframeAnimation() {
      if (this.keyframeAction) {
        this.keyframeAction.reset()
        this.keyframeAction.stop()
      }
    },
    
    playEasingAnimation() {
      if (!this.easingScene) return
      
      const { sphere } = this.easingScene
      const easingFunctions = {
        linear: t => t,
        easeInQuad: t => t * t,
        easeOutQuad: t => t * (2 - t),
        easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        easeInCubic: t => t * t * t,
        easeOutCubic: t => (--t) * t * t + 1,
        bounce: t => {
          if (t < 1/2.75) return 7.5625 * t * t
          if (t < 2/2.75) return 7.5625 * (t -= 1.5/2.75) * t + 0.75
          if (t < 2.5/2.75) return 7.5625 * (t -= 2.25/2.75) * t + 0.9375
          return 7.5625 * (t -= 2.625/2.75) * t + 0.984375
        },
        elastic: t => {
          if (t === 0) return 0
          if (t === 1) return 1
          const p = 0.3
          const s = p / 4
          return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p))
        }
      }
      
      const startTime = performance.now()
      const duration = 2000
      const startX = -4
      const endX = 4
      
      const animate = () => {
        const elapsed = performance.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easingFunctions[this.easingType](progress)
        
        sphere.position.x = startX + (endX - startX) * easedProgress
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      animate()
    }
  },
  watch: {
    keyframeProgress(newVal) {
      if (this.keyframeAction) {
        this.keyframeAction.time = newVal * this.keyframeAction.getClip().duration
      }
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

.animation-demo {
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

.control-group button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.control-group button:hover {
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
  .tutorial-page {
    padding: 1rem;
  }
  
  .tutorial-page h1 {
    font-size: 2rem;
  }
  
  section h2 {
    font-size: 1.5rem;
  }
  
  .demo-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .animation-demo {
    padding: 1rem;
  }
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>