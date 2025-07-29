// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Search, MessageCircle, ChevronRight, BookOpen } from 'lucide-react';
// @ts-ignore;
import { Input } from '@/components/ui';

const WeChatSidebar = ({
  onSelectDoc,
  onNavigateToChat
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [{
    id: 'getting-started',
    title: '快速开始',
    icon: '🚀',
    count: 3,
    children: [{
      id: 'installation',
      title: '安装指南',
      desc: '5分钟完成安装'
    }, {
      id: 'configuration',
      title: '配置说明',
      desc: '详细配置教程'
    }, {
      id: 'quick-start',
      title: '快速上手',
      desc: '新手入门必看'
    }]
  }, {
    id: 'components',
    title: '组件文档',
    icon: '🧩',
    count: 8,
    children: [{
      id: 'button',
      title: '按钮组件',
      desc: '基础交互元素'
    }, {
      id: 'input',
      title: '输入框组件',
      desc: '数据输入控件'
    }, {
      id: 'card',
      title: '卡片组件',
      desc: '内容展示容器'
    }]
  }, {
    id: 'api',
    title: 'API参考',
    icon: '🔌',
    count: 5,
    children: [{
      id: 'rest-api',
      title: 'REST API',
      desc: 'RESTful接口文档'
    }, {
      id: 'graphql',
      title: 'GraphQL',
      desc: 'GraphQL查询指南'
    }]
  }];
  const filteredCategories = categories.map(category => ({
    ...category,
    children: category.children.filter(child => child.title.toLowerCase().includes(searchTerm.toLowerCase()) || child.desc.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(category => category.title.toLowerCase().includes(searchTerm.toLowerCase()) || category.children.length > 0);
  return <div className="w-full md:w-80 bg-gray-50 h-full overflow-y-auto">
          {/* 搜索栏 */}
          <div className="p-4 bg-white border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="搜索文档..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 bg-gray-50 border-0 rounded-lg" />
            </div>
          </div>

          {/* 分类列表 */}
          <div className="p-2">
            {filteredCategories.map(category => <div key={category.id} className="mb-3">
                <div className="px-3 py-2 text-sm font-medium text-gray-600">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                  <span className="ml-1 text-xs text-gray-400">({category.count})</span>
                </div>
                
                <div className="space-y-1">
                  {category.children.map(child => <button key={child.id} onClick={() => onSelectDoc(child.id)} className="w-full text-left px-3 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{child.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{child.desc}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </button>)}
                </div>
              </div>)}
          </div>

          {/* AI助手入口 */}
          <div className="p-4 border-t border-gray-100">
            <button onClick={onNavigateToChat} className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">AI智能助手</span>
            </button>
          </div>
        </div>;
};
export default WeChatSidebar;