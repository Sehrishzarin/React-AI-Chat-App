import { useState } from "react";
import { Chat } from "./components/Chat/Chat";
import styles from "./App.module.css";
import { Controls } from "./components/Controls/Controls";
function App() {
  const [messages, setMessages] = useState([]);
  function handleContentSend(content) {
    setMessages((prevMessages) => [...prevMessages, { content, role: 'user' }]);
  }
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
      <img className={styles.Logo} src="/chat-bot.png" alt="chatbot" />
        <h2 className={styles.Title}>AI Chat App</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  )
}

export default App;
