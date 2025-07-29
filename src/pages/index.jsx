// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Menu, X, Plus } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

import WeChatSidebar from '@/components/WeChatSidebar';
import WeChatDocContent from '@/components/WeChatDocContent';
import KnowledgeUpload from '@/components/KnowledgeUpload';
export default function KnowledgeBase(props) {
  const {
    $w
  } = props;
  const [selectedDoc, setSelectedDoc] = useState('installation');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const handleSelectDoc = docId => {
    setSelectedDoc(docId);
    setSidebarOpen(false);
  };
  const handleNavigateToChat = () => {
    $w.utils.navigateTo({
      pageId: 'chat'
    });
  };
  const handleUploadSuccess = () => {
    setShowUpload(false);
    // 这里可以添加刷新文档列表的逻辑
  };
  return <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-80">
        <WeChatSidebar onSelectDoc={handleSelectDoc} onNavigateToChat={handleNavigateToChat} />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80">
            <WeChatSidebar onSelectDoc={handleSelectDoc} onNavigateToChat={handleNavigateToChat} />
          </div>
        </div>}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
          <h1 className="text-lg font-medium text-gray-900">知识库</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowUpload(true)} className="p-2">
              <Plus className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="p-2">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
          <h1 className="text-lg font-medium text-gray-900">知识库文档</h1>
          <Button onClick={() => setShowUpload(true)} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            上传文档
          </Button>
        </div>

        {/* Content Area */}
        {showUpload ? <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">上传新文档</h2>
                <Button variant="ghost" onClick={() => setShowUpload(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <KnowledgeUpload onUploadSuccess={handleUploadSuccess} />
            </div>
          </div> : <WeChatDocContent docId={selectedDoc} />}
      </div>
    </div>;
}