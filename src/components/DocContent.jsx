// @ts-ignore;
import React from 'react';

const DocContent = ({
  docId
}) => {
  const docs = {
    'installation': {
      title: '安装指南',
      content: `
# 安装指南

欢迎使用我们的知识库系统！本指南将帮助你快速完成安装。

## 系统要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器
- 至少 2GB 可用内存

## 安装步骤

### 1. 克隆仓库

\`\`\`bash
git clone https://github.com/your-org/knowledge-base.git
cd knowledge-base
\`\`\`

### 2. 安装依赖

\`\`\`bash
npm install
# 或者
yarn install
\`\`\`

### 3. 配置环境变量

创建 \`.env\` 文件：

\`\`\`env
DATABASE_URL=your_database_url
API_KEY=your_api_key
\`\`\`

### 4. 启动开发服务器

\`\`\`bash
npm run dev
# 或者
yarn dev
\`\`\`

现在你可以在浏览器中访问 \`http://localhost:3000\` 查看应用。
          `
    },
    'configuration': {
      title: '配置说明',
      content: `
# 配置说明

了解如何配置你的知识库系统。

## 基础配置

所有配置都存储在 \`config/app.json\` 文件中：

\`\`\`json
{
  "app": {
    "name": "知识库系统",
    "version": "1.0.0",
    "description": "现代化的知识管理工具"
  },
  "features": {
    "search": true,
    "aiChat": true,
    "darkMode": true
  }
}
\`\`\`

## 高级配置

### 搜索配置

\`\`\`json
{
  "search": {
    "provider": "algolia",
    "apiKey": "your-api-key",
    "indexName": "knowledge-base"
  }
}
\`\`\`

### AI配置

\`\`\`json
{
  "ai": {
    "provider": "openai",
    "model": "gpt-4",
    "apiKey": "your-openai-key"
  }
}
\`\`\`
          `
    },
    'button': {
      title: '按钮组件',
      content: `
# 按钮组件

按钮是用户界面中最基础的交互元素。

## 基本用法

\`\`\`jsx
import { Button } from '@/components/ui/button';

function App() {
  return <Button>点击我</Button>;
}
\`\`\`

## 变体

按钮支持多种变体：

\`\`\`jsx
<Button variant="default">默认</Button>
<Button variant="destructive">危险</Button>
<Button variant="outline">轮廓</Button>
<Button variant="secondary">次要</Button>
<Button variant="ghost">幽灵</Button>
<Button variant="link">链接</Button>
\`\`\`

## 尺寸

\`\`\`jsx
<Button size="default">默认</Button>
<Button size="sm">小</Button>
<Button size="lg">大</Button>
<Button size="icon">图标</Button>
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
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('```')) {
        if (currentCodeBlock) {
          // 结束代码块
          elements.push(<div key={`code-${i}`} className="relative my-4">
              <div className="bg-slate-900 rounded-lg overflow-hidden">
                <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400">
                  {currentCodeBlock}
                </div>
                <pre className="p-4 text-sm text-slate-100 overflow-x-auto">
                  <code>{codeLines.join('\n')}</code>
                </pre>
              </div>
            </div>);
          currentCodeBlock = null;
          codeLines = [];
        } else {
          // 开始代码块
          currentCodeBlock = line.slice(3);
        }
        continue;
      }
      if (currentCodeBlock) {
        codeLines.push(line);
        continue;
      }

      // 处理标题
      if (line.startsWith('# ')) {
        elements.push(<h1 key={`h1-${i}`} className="text-3xl font-bold mt-8 mb-4 text-slate-900">
            {line.slice(2)}
          </h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={`h2-${i}`} className="text-2xl font-semibold mt-6 mb-3 text-slate-800">
            {line.slice(3)}
          </h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={`h3-${i}`} className="text-xl font-medium mt-4 mb-2 text-slate-700">
            {line.slice(4)}
          </h3>);
      } else if (line.startsWith('#### ')) {
        elements.push(<h4 key={`h4-${i}`} className="text-lg font-medium mt-3 mb-2 text-slate-700">
            {line.slice(5)}
          </h4>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={`li-${i}`} className="ml-6 list-disc text-slate-600">
            {line.slice(2)}
          </li>);
      } else if (line.trim() === '') {
        elements.push(<br key={`br-${i}`} />);
      } else if (line.trim()) {
        elements.push(<p key={`p-${i}`} className="mb-2 text-slate-600 leading-relaxed">
            {line}
          </p>);
      }
    }
    return elements;
  };
  return <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900">{doc.title}</h1>
            <div className="prose prose-slate max-w-none">
              {renderContent(doc.content)}
            </div>
          </div>
        </div>;
};
export default DocContent;