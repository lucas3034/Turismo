import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`;

export const MessageBubble = styled.div`
  background-color: ${(props) => (props.role === 'user' ? '#008000 ' : '#e9ecef')};
  color: ${(props) => (props.role === 'user' ? '#fff' : '#333')};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  max-width: 70%;
  margin-bottom: 0.5rem;
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};
`;

export const InputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

export const SendButton = styled.button`
  background-color: #008000 ;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;