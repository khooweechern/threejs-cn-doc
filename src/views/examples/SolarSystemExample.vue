<template>
  <div class="solar-system-container">
    <div class="controls">
      <h3>太阳系控制面板</h3>
      <div class="control-group">
        <label>动画速度:</label>
        <input 
          type="range" 
          min="0" 
          max="3" 
          step="0.1" 
          v-model="animationSpeed"
        />
        <span>{{ animationSpeed }}x</span>
      </div>
      <div class="control-group">
        <label>显示轨道:</label>
        <input 
          type="checkbox" 
          v-model="showOrbits"
          @change="toggleOrbits"
        />
      </div>
      <button @click="resetCamera">重置视角</button>
    </div>
    <div ref="container" class="canvas-container"></div>
    <div class="info-panel">
      <h4>太阳系信息</h4>
      <p>这是一个简化的太阳系模型，展示了太阳和行星的相对位置和运动。</p>
      <div class="planet-info" v-if="selectedPlanet">
        <h5>{{ selectedPlanet.name }}</h5>
        <p>半径: {{ selectedPlanet.radius }}km</p>
        <p>距离太阳: {{ selectedPlanet.distance }}AU</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { markRaw } from 'vue'

export default {
  name: 'SolarSystemExample',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      planets: [],
      orbits: [],
      animationSpeed: 1,
      showOrbits: true,
      selectedPlanet: null,
      animationId: null,
      sun: null,
      mouseX: 0,
      mouseY: 0,
      // 行星数据
      planetData: [
        { name: '水星', radius: 3, distance: 40, color: 0x8C7853, speed: 0.04 },
        { name: '金星', radius: 4, distance: 60, color: 0xFFC649, speed: 0.03 },
        { name: '地球', radius: 5, distance: 80, color: 0x6B93D6, speed: 0.02 },
        { name: '火星', radius: 4, distance: 100, color: 0xCD5C5C, speed: 0.015 }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initThree()
      this.createSolarSystem()
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
      this.scene.background = new THREE.Color(0x000033)

      // 获取容器尺寸
      const container = this.$refs.container
      const width = container.clientWidth || 800
      const height = container.clientHeight || 600

      // 创建相机 - 使用更简单的设置
      this.camera = markRaw(new THREE.PerspectiveCamera(75, width / height, 1, 2000))
      this.camera.position.z = 200
      this.camera.position.y = 50

      // 创建渲染器 - 最基础的设置
      this.renderer = markRaw(new THREE.WebGLRenderer())
      this.renderer.setSize(width, height)
      this.renderer.setClearColor(0x000033)
      container.appendChild(this.renderer.domElement)

      // 非响应式容器，避免 Mesh 被深度代理
      this.planets = markRaw([])
      this.orbits = markRaw([])

      // 添加基础光照
      const light = markRaw(new THREE.AmbientLight(0x404040, 1))
      this.scene.add(light)

      const directionalLight = markRaw(new THREE.DirectionalLight(0xffffff, 1))
      directionalLight.position.set(0, 0, 1)
      this.scene.add(directionalLight)
    },

    createSolarSystem() {
      // 创建太阳 - 使用最基础的材质
      const sunGeometry = new THREE.SphereGeometry(15, 16, 16)
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 })
      this.sun = markRaw(new THREE.Mesh(sunGeometry, sunMaterial))
      this.scene.add(this.sun)

      // 创建行星
      this.planetData.forEach((data, index) => {
        this.createPlanet(data, index)
      })
    },

    createPlanet(data, index) {
      // 创建行星 - 使用最基础的材质
      const geometry = new THREE.SphereGeometry(data.radius, 12, 12)
      const material = new THREE.MeshBasicMaterial({ color: data.color })
      const planet = markRaw(new THREE.Mesh(geometry, material))
      
      // 设置行星数据
      planet.userData = {
        name: data.name,
        distance: data.distance,
        speed: data.speed,
        angle: Math.random() * Math.PI * 2,
        radius: data.radius
      }

      // 设置初始位置
      planet.position.x = data.distance
      planet.position.y = 0
      planet.position.z = 0

      this.planets.push(planet)
      this.scene.add(planet)

      // 创建轨道
      if (this.showOrbits) {
        this.createOrbit(data.distance)
      }
    },

    createOrbit(distance) {
      // 使用线条创建轨道，避免复杂的几何体
      const points = []
      for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2
        points.push(new THREE.Vector3(
          Math.cos(angle) * distance,
          0,
          Math.sin(angle) * distance
        ))
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ color: 0x666666, opacity: 0.5, transparent: true })
      const orbit = markRaw(new THREE.Line(geometry, material))
      
      this.orbits.push(orbit)
      this.scene.add(orbit)
    },

    animate() {
      this.animationId = requestAnimationFrame(() => this.animate())

      // 简单的相机控制
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.01
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.01
      this.camera.lookAt(this.scene.position)

      // 太阳自转
      if (this.sun) {
        this.sun.rotation.y += 0.01 * this.animationSpeed
      }

      // 行星公转和自转
      this.planets.forEach(planet => {
        const userData = planet.userData
        userData.angle += userData.speed * this.animationSpeed
        
        planet.position.x = Math.cos(userData.angle) * userData.distance
        planet.position.z = Math.sin(userData.angle) * userData.distance
        
        // 行星自转
        planet.rotation.y += 0.02 * this.animationSpeed
      })

      this.renderer.render(this.scene, this.camera)
    },

    toggleOrbits() {
      this.orbits.forEach(orbit => {
        orbit.visible = this.showOrbits
      })
    },

    resetCamera() {
      this.camera.position.set(0, 50, 200)
      this.mouseX = 0
      this.mouseY = 0
    },

    addEventListeners() {
      window.addEventListener('resize', this.onWindowResize)
      document.addEventListener('mousemove', this.onMouseMove)
      if (this.renderer && this.renderer.domElement) {
        this.renderer.domElement.addEventListener('click', this.onMouseClick)
      }
    },

    removeEventListeners() {
      window.removeEventListener('resize', this.onWindowResize)
      document.removeEventListener('mousemove', this.onMouseMove)
      if (this.renderer && this.renderer.domElement) {
        this.renderer.domElement.removeEventListener('click', this.onMouseClick)
      }
    },

    onMouseMove(event) {
      this.mouseX = (event.clientX - window.innerWidth / 2) * 0.1
      this.mouseY = (event.clientY - window.innerHeight / 2) * 0.1
    },

    onWindowResize() {
      if (!this.$refs.container) return
      
      const width = this.$refs.container.clientWidth
      const height = this.$refs.container.clientHeight
      
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
    },

    onMouseClick(event) {
      // 简化的点击检测
      const rect = this.renderer.domElement.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      // 简单的距离检测
      this.planets.forEach(planet => {
        const screenPos = planet.position.clone()
        screenPos.project(this.camera)
        
        const screenX = (screenPos.x + 1) * rect.width / 2
        const screenY = (-screenPos.y + 1) * rect.height / 2
        
        const distance = Math.sqrt((x - screenX) ** 2 + (y - screenY) ** 2)
        
        if (distance < 30) {
          this.selectedPlanet = {
            name: planet.userData.name,
            radius: Math.round(planet.userData.radius * 1000),
            distance: (planet.userData.distance / 10).toFixed(1)
          }
        }
      })
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
.solar-system-container {
  display: flex;
  height: 100vh;
  background: #000;
}

.controls {
  width: 250px;
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

.control-group input[type="checkbox"] {
  margin-right: 10px;
}

.control-group span {
  font-size: 12px;
  color: #aaa;
}

button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  transition: background 0.3s;
}

button:hover {
  background: #45a049;
}

.canvas-container {
  flex: 1;
  position: relative;
  min-height: 400px;
}

.info-panel {
  width: 250px;
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
}

.planet-info {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.planet-info h5 {
  margin-top: 0;
  color: #87CEEB;
  font-size: 16px;
}

.planet-info p {
  margin: 8px 0;
  font-size: 13px;
}

@media (max-width: 768px) {
  .solar-system-container {
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