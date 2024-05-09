// node --version # Should be >= 18
// npm install @google/generative-ai

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "gemini-1.5-pro-latest";
  const API_KEY = "AIzaSyBk73XUscgQJK741LJklJc55c_hz4YPZDA";
  
  async function runChat() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "Veja esse código:\n\n// node --version # Should be >= 18\n// npm install @google/generative-ai\n\nconst {\n  GoogleGenerativeAI,\n  HarmCategory,\n  HarmBlockThreshold,\n} = require(\"@google/generative-ai\");\n\nconst MODEL_NAME = \"gemini-1.5-pro-latest\";\nconst API_KEY = \"YOUR_API_KEY\";\n\nasync function runChat() {\n  const genAI = new GoogleGenerativeAI(API_KEY);\n  const model = genAI.getGenerativeModel({ model: MODEL_NAME });\n\n  const generationConfig = {\n    temperature: 1,\n    topK: 0,\n    topP: 0.95,\n    maxOutputTokens: 8192,\n  };\n\n  const safetySettings = [\n    {\n      category: HarmCategory.HARM_CATEGORY_HARASSMENT,\n      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,\n    },\n    {\n      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,\n      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,\n    },\n    {\n      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,\n      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,\n    },\n    {\n      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,\n      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,\n    },\n  ];\n\n  const chat = model.startChat({\n    generationConfig,\n    safetySettings,\n    history: [\n    ],\n  });\n\n  const result = await chat.sendMessage(\"YOUR_USER_INPUT\");\n  const response = result.response;\n  console.log(response.text());\n}\n\nrunChat();\n\nMinha chave API é:\n\nAIzaSyBk73XUscgQJK741LJklJc55c_hz4YPZDA\n\n______________________\n\n\nMe ensine  fazer um projeto com node.js que eu consiga conversar cm a ia, eu quero rodar o projeto usando node ai.js\ntbm me ensine a baixar todas as libs e dependencias necessárias"}],
        },
        {
          role: "model",
          parts: [{ text: "## Conversando com a IA usando Node.js e Google Generative AI\n\nO código que você forneceu é um ótimo ponto de partida para criar um projeto de conversa com IA usando Node.js e a biblioteca `@google/generative-ai`. Vamos analisar o código e entender como utilizá-lo:\n\n**1. Instalação e Dependências:**\n\n* **Node.js:** Certifique-se de ter o Node.js versão 18 ou superior instalado. Você pode baixá-lo em https://nodejs.org/.\n* **Biblioteca @google/generative-ai:** Instale a biblioteca usando o comando:\n\n```bash\nnpm install @google/generative-ai\n```\n\n**2. Configuração:**\n\n* **API Key:** Substitua `YOUR_API_KEY` pelo seu próprio API Key da Google Generative AI. Você pode obter sua chave no console do Google Cloud Platform.\n* **Model Name:** O código utiliza o modelo `gemini-1.5-pro-latest`. Você pode explorar outros modelos disponíveis na documentação da Google Generative AI.\n* **Safety Settings:** O código define configurações de segurança para evitar conteúdo prejudicial. Você pode ajustar essas configurações conforme suas necessidades.\n\n**3. Execução:**\n\n* Salve o código em um arquivo chamado `ai.js`.\n* Execute o código usando o comando:\n\n```bash\nnode ai.js\n```\n\n* O código iniciará um chat com o modelo de IA e imprimirá a resposta no console.\n\n**4. Conversando com a IA:**\n\n* Modifique a linha `YOUR_USER_INPUT` com a mensagem que você deseja enviar para a IA.\n* Execute o script novamente para enviar a mensagem e receber uma resposta.\n\n**5. Melhorando o projeto:**\n\n* **Interface de usuário:** Você pode criar uma interface de usuário mais interativa usando bibliotecas como `readline` para receber entradas do usuário e exibir as respostas de forma mais amigável. \n* **Loop de conversa:** Implemente um loop para permitir conversas contínuas com a IA.\n* **Armazenamento de histórico:** Salve o histórico da conversa para referência futura. \n\n**Exemplo de código com loop de conversa:**\n\n```javascript\nconst readline = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nasync function runChat() {\n  // ... (código anterior) ...\n\n  while (true) {\n    readline.question(\"Você: \", async (userInput) => {\n      const result = await chat.sendMessage(userInput);\n      const response = result.response;\n      console.log(\"IA:\", response.text());\n    });\n  }\n}\n\nrunChat();\n```\n\n**Observações:**\n\n* A utilização da API Google Generative AI pode ter custos associados. Verifique os preços e limites de uso na documentação da Google Cloud Platform.\n* Explore a documentação da biblioteca `@google/generative-ai` para descobrir outras funcionalidades e opções de configuração.\n\nEspero que este guia ajude você a criar seu projeto de conversa com IA usando Node.js e Google Generative AI!"}],
        },
      ],
    });
  
    const result = await chat.sendMessage("YOUR_USER_INPUT");
    const response = result.response;
    console.log(response.text());
  }
  
  runChat();