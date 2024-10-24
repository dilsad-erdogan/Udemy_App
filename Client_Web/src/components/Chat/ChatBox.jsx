import { useSelector } from "react-redux";
import Message from "./Message";

const ChatBox = () => {
    const messages = useSelector(state => state.message);
    
    return (
        <div className="pb-44 pt-20">
            {messages.messages.map(message => (
                <div key={message.text}>
                    <Message message={message} />
                </div>
            ))}
        </div>
    )
}

export default ChatBox