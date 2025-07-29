// @ts-ignore;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore;
import { Send, User, Bot, ArrowLeft, Plus, Mic } from 'lucide-react';
// @ts-ignore;
import { Button, Input } from '@/components/ui';

const WeChatChat = ({
  onBack
}) => {
  const [messages, setMessages] = useState([{
    id: 1,
    role: 'assistant',
    content: '你好！我是你的知识库AI助手，可以帮你：\n\n• 查找相关文档\n• 解答技术问题\n• 提供代码示例\n• 解释复杂概念\n\n有什么我可以帮助你的吗？',
    timestamp: new Date(),
    avatar: '🤖'
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
      timestamp: new Date(),
      avatar: '👤'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    // 模拟AI回复
    setTimeout(() => {
      const responses = ["我理解你的问题。根据知识库内容，建议你查看【安装指南】部分，里面有详细的步骤说明。", "这个问题很常见，让我为你解释一下：\n\n1. 首先确保环境配置正确\n2. 然后按照文档步骤操作\n3. 如果遇到问题，可以查看常见问题部分", "我找到了相关的文档！你可以参考以下内容：\n\n```javascript\n// 示例代码\nconst example = () => {\n  console.log('Hello World');\n};\n```", "这是一个很好的问题！让我为你详细解释一下这个概念..."];
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        avatar: '🤖'
      };
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const formatTime = date => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return <div className="flex flex-col h-screen bg-gray-50">
          {/* 顶部导航 */}
          <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center">
            <Button variant="ghost" size="sm" onClick={onBack} className="mr-3 p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-base font-medium">AI智能助手</h1>
                <p className="text-xs text-green-600">在线</p>
              </div>
            </div>
          </div>

          {/* 消息列表 */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-4">
              {messages.map((message, index) => <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end gap-2 max-w-[80%]`}>
                    {message.role === 'assistant' && <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">{message.avatar}</span>
                      </div>}
                    
                    <div className={`px-3 py-2 rounded-lg ${message.role === 'user' ? 'bg-green-500 text-white' : 'bg-white border border-gray-200'}`}>
                      <div className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </div>
                      <div className={`text-xs mt-1 ${message.role === 'user' ? 'text-green-100' : 'text-gray-400'}`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>

                    {message.role === 'user' && <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-sm">{message.avatar}</span>
                      </div>}
                  </div>
                </div>)}
              
              {loading && <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div className="bg-white border border-gray-200 px-3 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{
                  animationDelay: '0.1s'
                }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{
                  animationDelay: '0.2s'
                }} />
                      </div>
                    </div>
                  </div>
                </div>}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* 底部输入栏 */}
          <div className="bg-white border-t border-gray-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400">
                <Plus className="w-5 h-5" />
              </button>
              
              <div className="flex-1 relative">
                <Input value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="输入消息..." className="bg-gray-50 border-0 rounded-full pl-4 pr-10" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Mic className="w-4 h-4" />
                </button>
              </div>
              
              <Button onClick={handleSend} disabled={!input.trim() || loading} className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 p-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>;
};
export default WeChatChat;