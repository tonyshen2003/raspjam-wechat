// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ChevronRight, ChevronDown, Search, MessageSquare } from 'lucide-react';
// @ts-ignore;
import { Button, Input } from '@/components/ui';

const Sidebar = ({
  onSelectDoc,
  onNavigateToChat
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState(['getting-started']);
  const docs = [{
    id: 'getting-started',
    title: '快速开始',
    children: [{
      id: 'installation',
      title: '安装指南'
    }, {
      id: 'configuration',
      title: '配置说明'
    }]
  }, {
    id: 'components',
    title: '组件文档',
    children: [{
      id: 'button',
      title: '按钮组件'
    }, {
      id: 'input',
      title: '输入框组件'
    }, {
      id: 'card',
      title: '卡片组件'
    }]
  }, {
    id: 'api',
    title: 'API参考',
    children: [{
      id: 'rest-api',
      title: 'REST API'
    }, {
      id: 'graphql',
      title: 'GraphQL'
    }]
  }];
  const filteredDocs = docs.map(section => ({
    ...section,
    children: section.children.filter(child => child.title.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(section => section.title.toLowerCase().includes(searchTerm.toLowerCase()) || section.children.length > 0);
  const toggleSection = sectionId => {
    setExpandedSections(prev => prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]);
  };
  return <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col h-full">
          <div className="p-4 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input placeholder="搜索文档..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {filteredDocs.map(section => <div key={section.id}>
                  <button onClick={() => toggleSection(section.id)} className="w-full flex items-center justify-between px-2 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded">
                    <span>{section.title}</span>
                    {expandedSections.includes(section.id) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  
                  {expandedSections.includes(section.id) && <div className="ml-4 mt-1 space-y-1">
                      {section.children.map(child => <button key={child.id} onClick={() => onSelectDoc(child.id)} className="w-full text-left px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 rounded">
                          {child.title}
                        </button>)}
                    </div>}
                </div>)}
            </nav>
          </div>
          
          <div className="p-4 border-t border-slate-200">
            <Button onClick={onNavigateToChat} className="w-full flex items-center justify-center gap-2" variant="outline">
              <MessageSquare className="w-4 h-4" />
              AI助手
            </Button>
          </div>
        </div>;
};
export default Sidebar;