import React, { useEffect, useRef, useState } from 'react';
import styles from './ChatWindow.module.css';

type Message = {
  from: 'user' | 'ai';
  content: string;
};

// Fixed Q&A pairs
const faqAnswers: Record<string, string> = {
  "working hours?": "We are open from 9am to 5pm, Monday to Friday.",
  "reset password": "Click on the 'Forgot password' link on the login page.",
  "location?": "Our headquarters are in Berlin, Germany.",
  "do you offer refunds": "Yes, we offer a 30-day refund policy on all purchases.",
};

// Suggested buttons
const suggestedQuestions = [
  "working hours?",
  "reset password",
  "location?",
  "Do you offer refunds",
];

// Answer lookup
function getFixedAnswer(input: string): string {
  const question = input.trim().toLowerCase();
  return faqAnswers[question] || "I'm sorry, I don't understand that question.";
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const answer = getFixedAnswer(userMessage.content);
    const aiMessage: Message = { from: 'ai', content: answer };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  const handleSuggestedClick = (question: string) => {
    const userMessage: Message = { from: 'user', content: question };
    setMessages((prev) => [...prev, userMessage]);

    const answer = getFixedAnswer(question);
    const aiMessage: Message = { from: 'ai', content: answer };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.chatWindow}>
      <div className={styles.messages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.from === 'user' ? styles.userMessage : styles.aiMessage}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div className={styles.suggestions}>
        {suggestedQuestions.map((q, i) => (
          <button key={i} onClick={() => handleSuggestedClick(q)}>
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
