import React, { useState } from 'react';
import { ChatContainer, MessageList, MessageBubble, InputContainer, InputField, SendButton } from './ChatBot.styled';
import runChat from '../../api/googleAi';

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      const userMessage = { role: 'user', text: inputValue };
      setChatHistory([...chatHistory, userMessage]);

      try {
        const response = await runChat(inputValue);
        const assistantMessage = { role: 'assistant', text: response };
        setChatHistory([...chatHistory, userMessage, assistantMessage]);
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }

      setInputValue('');
    }
  };

  return (
    <ChatContainer>
      <MessageList>
        {chatHistory.map((message, index) => (
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