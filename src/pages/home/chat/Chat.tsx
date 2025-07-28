// src/pages/home/Chat.tsx
import React, { useState } from 'react';
import ChatWindow from './ChatWindow'; // Ensure this exists
import styles from './Chat.module.css';

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.chatContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <ChatWindow />
        </div>
      )}
      <button className={styles.chatToggle} onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chat;
