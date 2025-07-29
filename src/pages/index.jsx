// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Menu, X } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

import Sidebar from '@/components/Sidebar';
import DocContent from '@/components/DocContent';
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
  return <div className="flex h-screen bg-white">
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <Sidebar onSelectDoc={handleSelectDoc} onNavigateToChat={handleNavigateToChat} />
          </div>

          {/* Mobile Sidebar */}
          {sidebarOpen && <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-64">
                <Sidebar onSelectDoc={handleSelectDoc} onNavigateToChat={handleNavigateToChat} />
              </div>
            </div>}

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200">
              <h1 className="text-lg font-semibold">知识库</h1>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
            </div>

            <DocContent docId={selectedDoc} />
          </div>
        </div>;
}