import React, { useState } from 'react';
import { ChatContainer, MessageList, MessageBubble, InputContainer, InputField, SendButton } from './ChatBot.styled';
import { runChat } from '../../api/googleAi';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { role: 'user', text: inputValue }]);
      setInputValue('');

      try {
        const response = await runChat(inputValue);
        setMessages([...messages, { role: 'assistant', text: response }]);
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    }
  };

  return (
    <ChatContainer>
      <MessageList>
        {messages.map((message, index) => (
          <MessageBubble key={index} role={message.role}>
            {message.text}
          </MessageBubble>
        ))}
      </MessageList>
      <InputContainer>
        <InputField
          type="text"
          placeholder="Digite sua mensagem..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <SendButton onClick={handleSendMessage}>Enviar</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatBot;