import React, { useState, useEffect } from 'react';
import { ChatContainer, MessageList, MessageBubble, InputContainer, InputField, SendButton } from './ChatBot.styled';
import runChat from '../../api/googleAi';
import { TypingIndicator } from './ChatBot.styled';

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '' && !isRequestInProgress) {
      setIsRequestInProgress(true);
      const userMessage = { role: 'user', text: inputValue };
      setChatHistory([...chatHistory, userMessage]);
      setInputValue('');

      try {
        setIsBotTyping(true); // Iniciar o indicador de digitação
        const response = await runChat(inputValue);
        const assistantMessage = { role: 'assistant', text: response };
        setChatHistory([...chatHistory, userMessage, assistantMessage]);
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      } finally {
        setIsRequestInProgress(false);
        setIsBotTyping(false); // Parar o indicador de digitação
      }
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
          {isBotTyping && (
          <MessageBubble role="assistant">
            Digitando... <TypingIndicator />
          </MessageBubble>
        )}
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
          disabled={isRequestInProgress}
        />
        <SendButton onClick={handleSendMessage} disabled={isRequestInProgress}>
          {isRequestInProgress ? 'Enviando...' : 'Enviar'}
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatBot;