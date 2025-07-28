// src/components/MessageBubble.tsx
import React from 'react';
import { type Message } from '../../../types/types';

type Props = {
  message: Message;
};

const MessageBubble: React.FC<Props> = ({ message }) => {
  return (
    <div className={`bubble ${message.from === 'user' ? 'user' : 'ai'}`}>
      <p>{message.content}</p>
    </div>
  );
};

export default MessageBubble;
