import styles from "./Chat.module.css"; // Make sure this file exists

const WELCOME_MESSAGE = {
  assistant: 'assistant',
  content: "Hello! How can i assist you today?"
}
export function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE,...messages].map(({ role, content }, index) => (
        <div key={index} className={styles.Message} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}