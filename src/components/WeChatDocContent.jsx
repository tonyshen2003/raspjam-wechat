// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Clock, Eye, Share } from 'lucide-react';

const WeChatDocContent = ({
  docId
}) => {
  const docs = {
    'installation': {
      title: '安装指南',
      author: '官方团队',
      readCount: 1234,
      updateTime: '2024-01-15',
      content: `
# 安装指南

欢迎使用我们的知识库系统！本指南将帮助你快速完成安装。

## 📋 系统要求

- **Node.js**: 16.0 或更高版本
- **包管理器**: npm 或 yarn
- **内存**: 至少 2GB 可用内存
- **系统**: Windows 10 / macOS 10.15 / Ubuntu 18.04+

## 🚀 快速安装

### 第一步：克隆仓库

打开终端，执行以下命令：

\`\`\`bash
git clone https://github.com/your-org/knowledge-base.git
cd knowledge-base
\`\`\`

### 第二步：安装依赖

根据你的包管理器选择对应的命令：

\`\`\`bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
\`\`\`

### 第三步：环境配置

创建环境配置文件：

\`\`\`bash
# 复制示例配置
cp .env.example .env

# 编辑配置文件
nano .env
\`\`\`

在 \`.env\` 文件中配置以下参数：

\`\`\`env
# 数据库配置
DATABASE_URL=your_database_url_here
DATABASE_NAME=knowledge_base

# API配置
API_KEY=your_api_key_here
API_SECRET=your_api_secret_here

# 其他配置
PORT=3000
NODE_ENV=development
\`\`\`

### 第四步：启动服务

\`\`\`bash
# 开发模式
npm run dev

# 生产模式
npm run build
npm start
\`\`\`

启动成功后，打开浏览器访问：\`http://localhost:3000\`

## ✅ 验证安装

1. 打开浏览器访问本地地址
2. 检查页面是否正常加载
3. 测试搜索功能
4. 验证AI对话功能

## 🛠️ 常见问题

**Q: 安装失败怎么办？**
A: 请检查Node.js版本是否符合要求，清理npm缓存后重试。

**Q: 端口被占用怎么办？**
A: 修改.env文件中的PORT配置，或关闭占用端口的程序。

**Q: 如何更新到最新版本？**
A: 执行 \`git pull origin main\` 拉取最新代码。
          `
    },
    'configuration': {
      title: '配置说明',
      author: '技术团队',
      readCount: 856,
      updateTime: '2024-01-14',
      content: `
# 配置说明

详细配置指南，让你的知识库系统运行更加顺畅。

## ⚙️ 基础配置

### 应用配置

配置文件路径：\`config/app.json\`

\`\`\`json
{
  "app": {
    "name": "知识库系统",
    "version": "1.0.0",
    "description": "现代化的知识管理工具",
    "locale": "zh-CN",
    "timezone": "Asia/Shanghai"
  },
  "features": {
    "search": true,
    "aiChat": true,
    "darkMode": true,
    "offlineMode": false
  }
}
\`\`\`

### 主题配置

支持自定义主题颜色：

\`\`\`json
{
  "theme": {
    "primaryColor": "#07C160",
    "secondaryColor": "#FFFFFF",
    "backgroundColor": "#F7F7F7",
    "textColor": "#191919"
  }
}
\`\`\`

## 🔍 搜索配置

### Algolia配置

\`\`\`json
{
  "search": {
    "provider": "algolia",
    "appId": "your-app-id",
    "apiKey": "your-search-api-key",
    "indexName": "knowledge-base",
    "hitsPerPage": 10,
    "facets": ["category", "tags"]
  }
}
\`\`\`

### 本地搜索配置

\`\`\`json
{
  "search": {
    "provider": "local",
    "minQueryLength": 2,
    "maxResults": 20,
    "fuzzySearch": true
  }
}
\`\`\`

## 🤖 AI配置

### OpenAI配置

\`\`\`json
{
  "ai": {
    "provider": "openai",
    "model": "gpt-4",
    "apiKey": "your-openai-key",
    "maxTokens": 2000,
    "temperature": 0.7,
    "systemPrompt": "你是一个专业的技术文档助手"
  }
}
\`\`\`

### 其他AI提供商

支持多种AI服务提供商：

- **OpenAI**: GPT系列模型
- **Claude**: Anthropic Claude
- **文心一言**: 百度AI
- **通义千问**: 阿里云AI

## 📊 分析配置

集成分析工具：

\`\`\`json
{
  "analytics": {
    "googleAnalytics": {
      "trackingId": "GA-XXXXXXXXX"
    },
    "umami": {
      "websiteId": "umami-website-id"
    }
  }
}
\`\`\`
          `
    },
    'button': {
      title: '按钮组件',
      author: '前端团队',
      readCount: 2341,
      updateTime: '2024-01-13',
      content: `
# 按钮组件

微信风格按钮组件，提供一致的用户体验。

## 🎯 设计原则

- **一致性**: 保持微信原生按钮的视觉风格
- **易用性**: 清晰的视觉层级和交互反馈
- **可访问性**: 支持键盘导航和屏幕阅读器

## 📱 基础用法

### 主要按钮

用于最重要的操作：

\`\`\`jsx
<button className="weui-btn weui-btn_primary">主要按钮</button>
\`\`\`

### 次要按钮

用于次要操作：

\`\`\`jsx
<button className="weui-btn weui-btn_default">次要按钮</button>
\`\`\`

### 警告按钮

用于危险操作：

\`\`\`jsx
<button className="weui-btn weui-btn_warn">警告按钮</button>
\`\`\`

## 🎨 样式变体

### 尺寸规格

| 尺寸 | 高度 | 字体大小 | 适用场景 |
|------|------|----------|----------|
| 默认 | 44px | 17px | 主要操作 |
| 小尺寸 | 36px | 14px | 次要操作 |
| 大尺寸 | 50px | 20px | 突出显示 |

### 状态样式

\`\`\`css
/* 正常状态 */
.weui-btn {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

/* 按下状态 */
.weui-btn:active {
  opacity: 0.6;
  transform: scale(0.98);
}

/* 禁用状态 */
.weui-btn_disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
\`\`\`

## 🔧 使用示例

### React组件

\`\`\`jsx
import React from 'react';

const WeChatButton = ({ 
  type = 'primary', 
  size = 'default', 
  disabled = false,
  children,
  onClick 
}) => {
  const baseClasses = 'weui-btn';
  const typeClasses = \`weui-btn_\${type}\`;
  const sizeClasses = \`weui-btn_\${size}\`;
  const disabledClasses = disabled ? 'weui-btn_disabled' : '';
  
  return (
    <button 
      className={\`\${baseClasses} \${typeClasses} \${sizeClasses} \${disabledClasses}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
\`\`\`
          `
    }
  };
  const doc = docs[docId] || docs['installation'];
  const renderContent = content => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentCodeBlock = null;
    let codeLines = [];
    let codeLanguage = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // 处理代码块
      if (line.startsWith('```')) {
        if (currentCodeBlock) {
          // 结束代码块
          elements.push(<div key={`code-${i}`} className="my-4">
              <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                {codeLanguage && <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 font-medium">
                    {codeLanguage}
                  </div>}
                <pre className="p-4 text-sm text-gray-800 overflow-x-auto">
                  <code>{codeLines.join('\n')}</code>
                </pre>
              </div>
            </div>);
          currentCodeBlock = null;
          codeLines = [];
          codeLanguage = '';
        } else {
          // 开始代码块
          currentCodeBlock = true;
          codeLanguage = line.slice(3);
        }
        continue;
      }
      if (currentCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // 处理标题
      if (line.startsWith('# ')) {
        elements.push(<h1 key={`h1-${i}`} className="text-2xl font-bold mt-6 mb-4 text-gray-900">
            {line.slice(2)}
          </h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={`h2-${i}`} className="text-xl font-semibold mt-5 mb-3 text-gray-800">
            {line.slice(3)}
          </h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={`h3-${i}`} className="text-lg font-medium mt-4 mb-2 text-gray-700">
            {line.slice(4)}
          </h3>);
      } else if (line.startsWith('#### ')) {
        elements.push(<h4 key={`h4-${i}`} className="text-base font-medium mt-3 mb-2 text-gray-700">
            {line.slice(5)}
          </h4>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={`li-${i}`} className="ml-4 list-disc text-gray-600 text-sm">
            {line.slice(2)}
          </li>);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={`p-${i}`} className="mb-2 text-sm text-gray-600">
            <strong className="text-gray-800">{line.slice(2, -2)}</strong>
          </p>);
      } else if (line.trim() === '') {
        elements.push(<br key={`br-${i}`} />);
      } else if (line.trim()) {
        elements.push(<p key={`p-${i}`} className="mb-2 text-sm text-gray-600 leading-relaxed">
            {line}
          </p>);
      }
    }
    return elements;
  };
  return <div className="flex-1 overflow-y-auto bg-white">
          {/* 文章头部信息 */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{doc.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {doc.updateTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {doc.readCount} 阅读
                </span>
                <span className="text-gray-500">作者：{doc.author}</span>
              </div>
            </div>
          </div>

          {/* 文章内容 */}
          <div className="max-w-3xl mx-auto px-4 py-6">
            <div className="prose prose-sm max-w-none">
              {renderContent(doc.content)}
            </div>
          </div>

          {/* 底部操作栏 */}
          <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <button className="flex items-center gap-2 text-sm text-gray-600">
                <Share className="w-4 h-4" />
                分享
              </button>
              <button className="text-sm text-green-600 font-medium">
                收藏
              </button>
            </div>
          </div>
        </div>;
};
export default WeChatDocContent;