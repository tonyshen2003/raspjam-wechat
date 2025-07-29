// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { Send, User, Bot, ArrowLeft } from 'lucide-react';
// @ts-ignore;
import { Button, Input, Card, CardContent } from '@/components/ui';

export default function ChatPage(props) {
  const {
    $w
  } = props;
  const [messages, setMessages] = useState([{
    id: 1,
    role: 'assistant',
    content: '你好！我是知识库AI助手，有什么我可以帮助你的吗？',
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // 模拟AI回复
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: `关于"${input}"，我可以为你提供以下信息：\n\n1. 这是一个很好的问题\n2. 根据知识库内容，相关文档可以在左侧目录中找到\n3. 需要我帮你查找更详细的信息吗？`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const handleBack = () => {
    $w.utils.navigateBack();
  };
  return <div className="flex flex-col h-screen bg-slate-50">
          {/* Header */}
          <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center">
            <Button variant="ghost" size="sm" onClick={handleBack} className="mr-3">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold">AI助手</h1>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map(message => <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start gap-3 max-w-2xl`}>
                    {message.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>}
                    
                    <Card className={`${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                      <CardContent className="p-3">
                        <div className="whitespace-pre-wrap text-sm">
                          {message.content}
                        </div>
                        <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </CardContent>
                    </Card>

                    {message.role === 'user' && <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-slate-600" />
                      </div>}
                  </div>
                </div>)}
              
              {loading && <div className="flex justify-start">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <Card className="bg-white">
                      <CardContent className="p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{
                    animationDelay: '0.1s'
                  }} />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{
                    animationDelay: '0.2s'
                  }} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="bg-white border-t border-slate-200 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2">
                <Input value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="输入你的问题..." className="flex-1" disabled={loading} />
                <Button onClick={handleSend} disabled={!input.trim() || loading} className="px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>;
}