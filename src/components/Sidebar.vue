<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <nav class="sidebar-nav">
        <div class="nav-section">
          <h3 class="nav-title">开始</h3>
          <ul class="nav-list">
            <li><router-link to="/" class="nav-item">介绍</router-link></li>
            <li><router-link to="/tutorial/installation" class="nav-item">安装</router-link></li>
            <li><router-link to="/tutorial/first-scene" class="nav-item">第一个场景</router-link></li>
          </ul>
        </div>
        
        <div class="nav-section">
          <h3 class="nav-title">基础概念</h3>
          <ul class="nav-list">
            <li><router-link to="/tutorial/scene" class="nav-item">场景 Scene</router-link></li>
            <li><router-link to="/tutorial/camera" class="nav-item">相机 Camera</router-link></li>
            <li><router-link to="/tutorial/renderer" class="nav-item">渲染器 Renderer</router-link></li>
            <li><router-link to="/tutorial/geometry" class="nav-item">几何体 Geometry</router-link></li>
            <li><router-link to="/tutorial/material" class="nav-item">材质 Material</router-link></li>
            <li><router-link to="/tutorial/mesh" class="nav-item">网格 Mesh</router-link></li>
          </ul>
        </div>
        
        <div class="nav-section">
          <h3 class="nav-title">光照与阴影</h3>
          <ul class="nav-list">
            <li><router-link to="/tutorial/lights" class="nav-item">光源</router-link></li>
            <li><router-link to="/tutorial/shadows" class="nav-item">阴影</router-link></li>
          </ul>
        </div>
        
        <div class="nav-section">
          <h3 class="nav-title">动画</h3>
          <ul class="nav-list">
            <li><router-link to="/tutorial/animation" class="nav-item">基础动画</router-link></li>
            <li><router-link to="/tutorial/controls" class="nav-item">控制器</router-link></li>
          </ul>
        </div>
        
        <div class="nav-section">
          <h3 class="nav-title">示例</h3>
          <ul class="nav-list">
            <li><router-link to="/examples/cube" class="nav-item">旋转立方体</router-link></li>
            <li><router-link to="/examples/solar-system" class="nav-item">太阳系</router-link></li>
            <li><router-link to="/examples/particle-system" class="nav-item">粒子系统</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  background: #fafbfc;
  border-right: 1px solid #e1e8ed;
  height: calc(100vh - 60px);
  overflow-y: auto;
  position: sticky;
  top: 60px;
}

.sidebar-content {
  padding: 2rem 0;
}

.nav-section {
  margin-bottom: 2rem;
}

.nav-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 1.5rem;
  margin-bottom: 0.5rem;
}

.nav-list {
  list-style: none;
}

.nav-item {
  display: block;
  padding: 0.5rem 1.5rem;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  color: #42b883;
  background: rgba(66, 184, 131, 0.1);
}

.nav-item.router-link-active {
  color: #42b883;
  background: rgba(66, 184, 131, 0.1);
  border-left-color: #42b883;
  font-weight: 500;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>