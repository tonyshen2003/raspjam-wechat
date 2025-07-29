// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Upload, FileText, X, Check, Loader2 } from 'lucide-react';
// @ts-ignore;
import { Button, Input, useToast } from '@/components/ui';

const KnowledgeUpload = ({
  onUploadSuccess
}) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // 自动提取文件名作为标题
      if (!title) {
        setTitle(selectedFile.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };
  const handleUpload = async () => {
    if (!file || !title) {
      toast({
        title: '请填写完整信息',
        description: '请确保已选择文件并填写标题',
        variant: 'destructive'
      });
      return;
    }
    setIsLoading(true);
    try {
      // 读取文件内容
      const content = await readFileContent(file);

      // 调用数据源API保存文档
      const result = await $w.cloud.callDataSource({
        dataSourceName: 'knowledge_docs',
        methodName: 'wedaCreateV2',
        params: {
          data: {
            title,
            content,
            category: category || '未分类',
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        }
      });
      toast({
        title: '上传成功',
        description: '文档已添加到知识库'
      });
      setFile(null);
      setTitle('');
      setCategory('');
      setTags('');
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (error) {
      toast({
        title: '上传失败',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };
  const readFileContent = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = e => reject(new Error('文件读取失败'));
      reader.readAsText(file);
    });
  };
  return <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">上传文件</label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            {file ? <div className="flex flex-col items-center p-4">
                <FileText className="w-8 h-8 text-gray-400" />
                <span className="mt-2 text-sm text-gray-600">{file.name}</span>
              </div> : <div className="flex flex-col items-center p-4">
                <Upload className="w-8 h-8 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-semibold">点击上传</span> 或拖拽文件到此处
                </p>
                <p className="text-xs text-gray-500">支持.txt, .md格式</p>
              </div>}
            <input type="file" className="hidden" onChange={handleFileChange} accept=".txt,.md" />
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">文档标题</label>
        <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="请输入文档标题" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">分类</label>
        <Input value={category} onChange={e => setCategory(e.target.value)} placeholder="请输入分类" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">标签(逗号分隔)</label>
        <Input value={tags} onChange={e => setTags(e.target.value)} placeholder="标签1,标签2,标签3" />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleUpload} disabled={isLoading || !file} className="flex items-center gap-2">
          {isLoading ? <>
              <Loader2 className="w-4 h-4 animate-spin" />
              上传中...
            </> : <>
              <Check className="w-4 h-4" />
              确认上传
            </>}
        </Button>
      </div>
    </div>;
};
export default KnowledgeUpload;