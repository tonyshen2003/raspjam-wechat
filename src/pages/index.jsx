// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Menu, X } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

import WeChatSidebar from '@/components/WeChatSidebar';
import WeChatDocContent from '@/components/WeChatDocContent';
export default function KnowledgeBase(props) {
  const {
    $w
  } = props;
  const [selectedDoc, setSelectedDoc] = useState('installation');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSelectDoc = docId => {
    setSelectedDoc(docId);
    setSidebarOpen(false);
  };
  const handleNavigateToChat = () => {
    $w.utils.navigateTo({
      pageId: 'chat'
    });
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
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="p-2">
                <Menu className="w-5 h-5" />
              </Button>
            </div>

            <WeChatDocContent docId={selectedDoc} />
          </div>
        </div>;
}