import { useState } from "react";
import { IoCodeSlash, IoPlanet, IoLogoPython, IoChatbubblesSharp, IoSend } from "react-icons/io5";
import { GoogleGenerativeAI } from "@google/generative-ai";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [isResponseScreen, setisResponseScreen] = useState(false);
    const [messages, setMessages] = useState([]);

    const hitRequest = () => {
        if (message) {
            generateResponse(message);
        }
        else {
            alert("You must write somthing... !")
        }
    };

    const generateResponse = async (msg) => {
        if (!msg) return;
        
        const genAI = new GoogleGenerativeAI("AIzaSyC5jlzrov2B7NuDFwvCjYQvjS0CI7LhO8M");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(msg);

        const formatText = (text) => {
            return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        };
        
        const newMessages = [
          ...messages,
          { type: "userMsg", text: formatText(msg) },
          { type: "responseMsg", text: formatText(result.response.text()) },
        ];
        
        setMessages(newMessages);
        setisResponseScreen(true);
        setMessage("");
    };

    const newChat = () => {
        setisResponseScreen(false);
        setMessages([]);
    };

    return (
        <main className="overflow-x-hidden bg-white text-dark w-screen min-h-screen">
            <StudentPageNavbar />

            <div className="text-white">
                {isResponseScreen ?
                    <div className="h-[70vh] flex flex-col">
                        <div className="header pt-[25px] flex items-center justify-between w-full px-[300px]">
                            <h2 className='text-2xl font-bold'>AssistMe</h2>
                            <button id='newChatBtn' className='bg-gray-500 p-[10px] rounded-[30px] cursor-pointer text-[14px] px-[20px] mb-3' onClick={newChat}>New Chat</button>
                        </div>

                        <div className="messages overflow-y-auto max-h-[60vh] px-[300px] py-4 space-y-3">
                            {messages?.map((msg, index) => {
                                return (
                                    <div key={index} className={msg.type} dangerouslySetInnerHTML={{ __html: msg.text }} />
                                )
                            })
                            }
                        </div>
                    </div>
                    :
                    <div className="middle h-[70vh] flex items-center flex-col justify-center">
                        <h1 className='text-4xl'>AssistMe</h1>

                        <div className="boxes mt-[30px] flex items-center gap-2">
                            <div className="card rounded-lg cursor-pointer transition-all hover:bg-gray-700 px-[20px] relative min-h-[20vh] bg-gray-500 p-[10px]">
                                <p className='text-[18px]'>What is coding ? <br /> How we can learn it.</p>
                                <i className=' absolute right-3 bottom-3 text-[18px]'><IoCodeSlash /></i>
                            </div>

                            <div className="card rounded-lg cursor-pointer transition-all hover:bg-gray-700 px-[20px] relative min-h-[20vh] bg-gray-500 p-[10px]">
                                <p className='text-[18px]'>Which is the red <br /> planet of solar <br /> system. </p>
                                <i className=' absolute right-3 bottom-3 text-[18px]'><IoPlanet /></i>
                            </div>

                            <div className="card rounded-lg cursor-pointer transition-all hover:bg-gray-700 px-[20px] relative min-h-[20vh] bg-gray-500 p-[10px]">
                                <p className='text-[18px]'>In which year python <br /> was invented?</p>
                                <i className=' absolute right-3 bottom-3 text-[18px]'><IoLogoPython /></i>
                            </div>

                            <div className="card rounded-lg cursor-pointer transition-all hover:bg-gray-700 px-[20px] relative min-h-[20vh] bg-gray-500 p-[10px]">
                                <p className='text-[18px]'>How we can use <br /> the AI for adopt?</p>
                                <i className=' absolute right-3 bottom-3 text-[18px]'><IoChatbubblesSharp /></i>
                            </div>
                        </div>
                    </div>
                }

                <div className="bottom w-[100%] flex flex-col items-center">
                    <div className="inputBox w-[60%] text-[15px] py-[7px] flex items-center bg-gray-500 rounded-[30px]">
                        <input value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" className='p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none' placeholder='Write your message here...' id='messageBox' />

                        {message == "" ? "" : <i className='text-[20px] mr-5 cursor-pointer' onClick={hitRequest}><IoSend /></i>}
                    </div>

                    <p className='text-[gray] text-[14px] my-4'>AssistMe is developed by Dilsad Rukiye Erdogan. This AI use the gemini API for giving the response.</p>
                </div>
            </div>
        </main>
    )
}

export default Chatbot