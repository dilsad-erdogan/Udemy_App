import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToMessage } from "../../redux/messageSlice";

const SendMessage = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleSendMessage = (e) => {
        e.preventDefault();
        const message = {
            name: "dlsd",
            text: value
        };
        dispatch(addToMessage(message));
        setValue("");
    };

    return (
      <div className="absolute bottom-0 left-0 w-full pt-10 px-2">
        <form onSubmit={handleSendMessage} className="flex">
            <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Enter message" className="w-full border py-2 px-4 bg-gray-100 rounded-r-none" />
            <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
        </form>
      </div>
    );
};
  
export default SendMessage;  