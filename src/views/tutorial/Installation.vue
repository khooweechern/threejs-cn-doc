<template>
  <div class="tutorial-page">
    <h1>安装 Three.js</h1>
    
    <div class="content">
      <section>
        <h2>通过 npm 安装</h2>
        <p>推荐使用 npm 来安装 Three.js，这样可以更好地管理依赖和版本。</p>
        
        <pre><code>npm install three</code></pre>
        
        <p>安装完成后，你可以在项目中导入 Three.js：</p>
        
        <pre><code>import * as THREE from 'three'</code></pre>
      </section>
      
      <section>
        <h2>通过 CDN 使用</h2>
        <p>如果你想快速开始，也可以通过 CDN 直接引入 Three.js：</p>
        
        <pre><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"&gt;&lt;/script&gt;</code></pre>
      </section>
      
      <section>
        <h2>验证安装</h2>
        <p>创建一个简单的测试来验证 Three.js 是否正确安装：</p>
        
        <pre><code>// 测试 Three.js 是否可用
console.log('Three.js version:', THREE.REVISION)

// 创建一个简单的场景
const scene = new THREE.Scene()
console.log('Scene created successfully:', scene)</code></pre>
      </section>
      
      <section>
        <h2>开发环境设置</h2>
        <p>为了更好的开发体验，建议配置以下工具：</p>
        
        <h3>1. TypeScript 支持</h3>
        <pre><code>npm install --save-dev @types/three</code></pre>
        
        <h3>2. 代码编辑器插件</h3>
        <ul>
          <li>VS Code: Three.js Snippets</li>
          <li>WebStorm: 内置支持</li>
        </ul>
        
        <h3>3. 调试工具</h3>
        <p>推荐使用浏览器的开发者工具来调试 Three.js 应用。</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Installation'
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
  
  pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>