<template>
  <div class="particle-system-container">
    <div class="controls">
      <h3>粒子系统控制面板</h3>
      
      <div class="control-group">
        <label>粒子数量:</label>
        <input 
          type="range" 
          min="1000" 
          max="50000" 
          step="1000" 
          v-model="particleCount"
          @input="updateParticleCount"
        />
        <span>{{ particleCount }}</span>
      </div>

      <div class="control-group">
        <label>动画速度:</label>
        <input 
          type="range" 
          min="0" 
          max="5" 
          step="0.1" 
          v-model="animationSpeed"
        />
        <span>{{ animationSpeed }}x</span>
      </div>

      <div class="control-group">
        <label>粒子大小:</label>
        <input 
          type="range" 
          min="1" 
          max="10" 
          step="0.5" 
          v-model="particleSize"
          @input="updateParticleSize"
        />
        <span>{{ particleSize }}</span>
      </div>

      <div class="control-group">
        <label>效果类型:</label>
        <select v-model="effectType" @change="changeEffect">
          <option value="galaxy">星系旋转</option>
          <option value="explosion">爆炸效果</option>
          <option value="wave">波浪效果</option>
          <option value="tornado">龙卷风</option>
          <option value="fireworks">烟花</option>
        </select>
      </div>

      <div class="control-group">
        <label>颜色模式:</label>
        <select v-model="colorMode" @change="updateColors">
          <option value="rainbow">彩虹</option>
          <option value="fire">火焰</option>
          <option value="ice">冰霜</option>
          <option value="electric">电光</option>
        </select>
      </div>

      <div class="control-group">
        <label>重力强度:</label>
        <input 
          type="range" 
          min="0" 
          max="2" 
          step="0.1" 
          v-model="gravity"
        />
        <span>{{ gravity }}</span>
      </div>

      <button @click="resetParticles">重置粒子</button>
      <button @click="togglePause">{{ isPaused ? '继续' : '暂停' }}</button>
    </div>

    <div ref="container" class="canvas-container"></div>

    <div class="info-panel">
      <h4>粒子系统信息</h4>
      <p>当前效果: {{ getEffectName() }}</p>
      <p>粒子数量: {{ particleCount }}</p>
      <p>FPS: {{ fps }}</p>
      
      <div class="effect-description">
        <h5>效果说明</h5>
        <p>{{ getEffectDescription() }}</p>
      </div>

      <div class="controls-help">
        <h5>操作说明</h5>
        <ul>
          <li>鼠标拖拽: 旋转视角</li>
          <li>滚轮: 缩放</li>
          <li>右键拖拽: 平移</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { markRaw } from 'vue'

export default {
  name: 'ParticleSystemExample',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      particleSystem: null,
      particles: null,
      velocities: null,
      animationId: null,
      
      // 控制参数
      particleCount: 10000,
      animationSpeed: 1,
      particleSize: 2,
      effectType: 'galaxy',
      colorMode: 'rainbow',
      gravity: 0.5,
      isPaused: false,
      
      // 性能监控
      fps: 0,
      lastTime: 0,
      frameCount: 0,
      
      // 动画参数
      time: 0,
      mouseX: 0,
      mouseY: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initThree()
      this.createParticleSystem()
      this.animate()
      this.addEventListeners()
    })
  },
  beforeUnmount() {
    this.cleanup()
  },
  methods: {
    initThree() {
      // 创建场景
      this.scene = markRaw(new THREE.Scene())
      this.scene.background = new THREE.Color(0x000011)

      // 获取容器尺寸
      const container = this.$refs.container
      const width = container.clientWidth || 800
      const height = container.clientHeight || 600

      // 创建相机
      this.camera = markRaw(new THREE.PerspectiveCamera(75, width / height, 1, 2000))
      this.camera.position.set(0, 0, 100)

      // 创建渲染器
      this.renderer = markRaw(new THREE.WebGLRenderer({ antialias: true }))
      this.renderer.setSize(width, height)
      this.renderer.setClearColor(0x000011)
      container.appendChild(this.renderer.domElement)

      // 创建控制器
      this.controls = markRaw(new OrbitControls(this.camera, this.renderer.domElement))
      this.controls.enableDamping = true
      this.controls.dampingFactor = 0.05
      this.controls.minDistance = 10
      this.controls.maxDistance = 500
    },

    createParticleSystem() {
      // 创建粒子几何体
      const geometry = markRaw(new THREE.BufferGeometry())
      
      // 初始化粒子位置和速度
      this.initializeParticles(geometry)
      
      // 创建粒子材质
      const material = markRaw(new THREE.PointsMaterial({
        size: this.particleSize,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      }))

      // 创建粒子系统
      this.particleSystem = markRaw(new THREE.Points(geometry, material))
      this.scene.add(this.particleSystem)
    },

    initializeParticles(geometry) {
      const positions = new Float32Array(this.particleCount * 3)
      const colors = new Float32Array(this.particleCount * 3)
      const velocities = new Float32Array(this.particleCount * 3)

      for (let i = 0; i < this.particleCount; i++) {
        const i3 = i * 3

        // 根据效果类型初始化位置
        this.setParticlePosition(positions, i3)
        
        // 初始化速度
        velocities[i3] = (Math.random() - 0.5) * 0.1
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.1
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.1

        // 设置颜色
        this.setParticleColor(colors, i3, i)
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      
      this.particles = positions
      this.velocities = velocities
    },

    setParticlePosition(positions, index) {
      switch (this.effectType) {
        case 'galaxy':
          const radius = Math.random() * 50
          const angle = Math.random() * Math.PI * 2
          positions[index] = Math.cos(angle) * radius
          positions[index + 1] = (Math.random() - 0.5) * 10
          positions[index + 2] = Math.sin(angle) * radius
          break

        case 'explosion':
          const sphereRadius = Math.random() * 30
          const phi = Math.random() * Math.PI * 2
          const theta = Math.random() * Math.PI
          positions[index] = sphereRadius * Math.sin(theta) * Math.cos(phi)
          positions[index + 1] = sphereRadius * Math.sin(theta) * Math.sin(phi)
          positions[index + 2] = sphereRadius * Math.cos(theta)
          break

        case 'wave':
          positions[index] = (Math.random() - 0.5) * 100
          positions[index + 1] = Math.sin(positions[index] * 0.1) * 10
          positions[index + 2] = (Math.random() - 0.5) * 100
          break

        case 'tornado':
          const height = (Math.random() - 0.5) * 100
          const tornadoRadius = Math.abs(height) * 0.3
          const tornadoAngle = Math.random() * Math.PI * 2
          positions[index] = Math.cos(tornadoAngle) * tornadoRadius
          positions[index + 1] = height
          positions[index + 2] = Math.sin(tornadoAngle) * tornadoRadius
          break

        case 'fireworks':
          positions[index] = (Math.random() - 0.5) * 5
          positions[index + 1] = Math.random() * 50
          positions[index + 2] = (Math.random() - 0.5) * 5
          break

        default:
          positions[index] = (Math.random() - 0.5) * 100
          positions[index + 1] = (Math.random() - 0.5) * 100
          positions[index + 2] = (Math.random() - 0.5) * 100
      }
    },

    setParticleColor(colors, index, particleIndex) {
      let r, g, b

      switch (this.colorMode) {
        case 'rainbow':
          const hue = (particleIndex / this.particleCount) * 360
          const color = new THREE.Color().setHSL(hue / 360, 1, 0.5)
          r = color.r
          g = color.g
          b = color.b
          break

        case 'fire':
          r = 1
          g = Math.random() * 0.5
          b = 0
          break

        case 'ice':
          r = 0.3
          g = 0.7
          b = 1
          break

        case 'electric':
          r = 0.5 + Math.random() * 0.5
          g = 0.5 + Math.random() * 0.5
          b = 1
          break

        default:
          r = Math.random()
          g = Math.random()
          b = Math.random()
      }

      colors[index] = r
      colors[index + 1] = g
      colors[index + 2] = b
    },

    animate() {
      if (!this.isPaused) {
        this.animationId = requestAnimationFrame(() => this.animate())
      }

      this.time += 0.01 * this.animationSpeed
      this.updateParticles()
      this.updateFPS()

      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    },

    updateParticles() {
      if (!this.particles || !this.velocities) return

      const positions = this.particleSystem.geometry.attributes.position.array

      for (let i = 0; i < this.particleCount; i++) {
        const i3 = i * 3

        // 根据效果类型更新粒子
        this.updateParticleByEffect(positions, i3, i)
      }

      this.particleSystem.geometry.attributes.position.needsUpdate = true
    },

    updateParticleByEffect(positions, index, particleIndex) {
      switch (this.effectType) {
        case 'galaxy':
          const centerX = 0
          const centerZ = 0
          const dx = positions[index] - centerX
          const dz = positions[index + 2] - centerZ
          const distance = Math.sqrt(dx * dx + dz * dz)
          
          if (distance > 0) {
            const speed = 0.01 * this.animationSpeed / (distance * 0.1 + 1)
            const angle = Math.atan2(dz, dx) + speed
            positions[index] = centerX + Math.cos(angle) * distance
            positions[index + 2] = centerZ + Math.sin(angle) * distance
          }
          break

        case 'explosion':
          this.velocities[index] *= 0.99
          this.velocities[index + 1] *= 0.99
          this.velocities[index + 2] *= 0.99
          
          positions[index] += this.velocities[index] * this.animationSpeed
          positions[index + 1] += this.velocities[index + 1] * this.animationSpeed
          positions[index + 2] += this.velocities[index + 2] * this.animationSpeed
          
          // 重力效果
          this.velocities[index + 1] -= this.gravity * 0.01
          break

        case 'wave':
          positions[index + 1] = Math.sin(positions[index] * 0.1 + this.time) * 10 + 
                                 Math.sin(positions[index + 2] * 0.1 + this.time * 0.7) * 5
          break

        case 'tornado':
          const height = positions[index + 1]
          const radius = Math.abs(height) * 0.3
          const angle = Math.atan2(positions[index + 2], positions[index]) + 0.02 * this.animationSpeed
          
          positions[index] = Math.cos(angle) * radius
          positions[index + 2] = Math.sin(angle) * radius
          positions[index + 1] += (Math.random() - 0.5) * 0.5 * this.animationSpeed
          
          // 边界检查
          if (positions[index + 1] > 50) positions[index + 1] = -50
          if (positions[index + 1] < -50) positions[index + 1] = 50
          break

        case 'fireworks':
          this.velocities[index + 1] -= this.gravity * 0.02
          
          positions[index] += this.velocities[index] * this.animationSpeed
          positions[index + 1] += this.velocities[index + 1] * this.animationSpeed
          positions[index + 2] += this.velocities[index + 2] * this.animationSpeed
          
          // 重新发射
          if (positions[index + 1] < -50) {
            positions[index] = (Math.random() - 0.5) * 5
            positions[index + 1] = 50
            positions[index + 2] = (Math.random() - 0.5) * 5
            this.velocities[index] = (Math.random() - 0.5) * 0.2
            this.velocities[index + 1] = Math.random() * 0.1
            this.velocities[index + 2] = (Math.random() - 0.5) * 0.2
          }
          break
      }
    },

    updateParticleCount() {
      this.scene.remove(this.particleSystem)
      this.createParticleSystem()
    },

    updateParticleSize() {
      if (this.particleSystem) {
        this.particleSystem.material.size = this.particleSize
      }
    },

    changeEffect() {
      this.resetParticles()
    },

    updateColors() {
      if (!this.particleSystem) return
      
      const colors = this.particleSystem.geometry.attributes.color.array
      for (let i = 0; i < this.particleCount; i++) {
        this.setParticleColor(colors, i * 3, i)
      }
      this.particleSystem.geometry.attributes.color.needsUpdate = true
    },

    resetParticles() {
      if (this.particleSystem) {
        this.scene.remove(this.particleSystem)
      }
      this.createParticleSystem()
    },

    togglePause() {
      this.isPaused = !this.isPaused
      if (!this.isPaused) {
        this.animate()
      }
    },

    updateFPS() {
      this.frameCount++
      const currentTime = performance.now()
      
      if (currentTime - this.lastTime >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime))
        this.frameCount = 0
        this.lastTime = currentTime
      }
    },

    getEffectName() {
      const names = {
        galaxy: '星系旋转',
        explosion: '爆炸效果',
        wave: '波浪效果',
        tornado: '龙卷风',
        fireworks: '烟花'
      }
      return names[this.effectType] || '未知效果'
    },

    getEffectDescription() {
      const descriptions = {
        galaxy: '粒子围绕中心旋转，模拟星系结构',
        explosion: '粒子从中心爆炸散开，受重力影响',
        wave: '粒子形成波浪状运动模式',
        tornado: '粒子形成龙卷风螺旋上升效果',
        fireworks: '粒子模拟烟花爆炸和重力下落'
      }
      return descriptions[this.effectType] || '暂无描述'
    },

    addEventListeners() {
      window.addEventListener('resize', this.onWindowResize)
      document.addEventListener('mousemove', this.onMouseMove)
    },

    removeEventListeners() {
      window.removeEventListener('resize', this.onWindowResize)
      document.removeEventListener('mousemove', this.onMouseMove)
    },

    onWindowResize() {
      if (!this.$refs.container) return
      
      const width = this.$refs.container.clientWidth
      const height = this.$refs.container.clientHeight
      
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
    },

    onMouseMove(event) {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    },

    cleanup() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
      if (this.renderer) {
        this.renderer.dispose()
      }
      this.removeEventListeners()
    }
  }
}
</script>

<style scoped>
.particle-system-container {
  display: flex;
  height: 100vh;
  background: #000;
}

.controls {
  width: 280px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  overflow-y: auto;
  border-right: 1px solid #333;
}

.controls h3 {
  margin-top: 0;
  color: #FFD700;
  font-size: 18px;
  margin-bottom: 20px;
}

.control-group {
  margin-bottom: 20px;
}

.control-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #ccc;
}

.control-group input[type="range"] {
  width: 100%;
  margin-bottom: 5px;
}

.control-group select {
  width: 100%;
  padding: 5px;
  background: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 4px;
}

.control-group span {
  font-size: 12px;
  color: #aaa;
}

button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  transition: background 0.3s;
}

button:hover {
  background: #45a049;
}

button:nth-child(2) {
  background: #ff9800;
}

button:nth-child(2):hover {
  background: #e68900;
}

.canvas-container {
  flex: 1;
  position: relative;
  min-height: 400px;
}

.info-panel {
  width: 280px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  overflow-y: auto;
  border-left: 1px solid #333;
}

.info-panel h4 {
  margin-top: 0;
  color: #FFD700;
  font-size: 18px;
}

.info-panel p {
  line-height: 1.6;
  color: #ccc;
  font-size: 14px;
  margin: 8px 0;
}

.effect-description, .controls-help {
  margin-top: 25px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.effect-description h5, .controls-help h5 {
  margin-top: 0;
  color: #87CEEB;
  font-size: 16px;
}

.controls-help ul {
  margin: 10px 0;
  padding-left: 20px;
}

.controls-help li {
  margin: 5px 0;
  font-size: 13px;
  color: #ccc;
}

@media (max-width: 768px) {
  .particle-system-container {
    flex-direction: column;
  }
  
  .controls, .info-panel {
    width: 100%;
    height: auto;
    max-height: 200px;
  }
  
  .canvas-container {
    min-height: 300px;
  }
}
</style>