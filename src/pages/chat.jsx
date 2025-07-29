// @ts-ignore;
import React from 'react';

// @ts-ignore;
import WeChatChat from '@/components/WeChatChat';
export default function ChatPage(props) {
  const {
    $w
  } = props;
  const handleBack = () => {
    $w.utils.navigateBack();
  };
  return <WeChatChat onBack={handleBack} />;
}