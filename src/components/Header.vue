<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <router-link to="/" class="logo-link">
          <span class="logo-text">Three.js</span>
          <span class="logo-subtitle">学习指南</span>
        </router-link>
      </div>
      
      <nav class="nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/tutorial" class="nav-link">教程</router-link>
        <router-link to="/api" class="nav-link">API文档</router-link>
        <router-link to="/examples" class="nav-link">示例</router-link>
      </nav>
      
      <div class="header-actions">
        <button class="theme-toggle" @click="toggleTheme">
          {{ isDark ? '🌞' : '🌙' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const isDark = ref(false)
    
    const toggleTheme = () => {
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark', isDark.value)
    }
    
    return {
      isDark,
      toggleTheme
    }
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #e1e8ed;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b883;
}

.logo-subtitle {
  font-size: 0.9rem;
  color: #666;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #42b883;
  border-bottom-color: #42b883;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: #f5f5f5;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
  }
  
  .nav {
    display: none;
  }
  
  .logo-subtitle {
    display: none;
  }
}
</style>