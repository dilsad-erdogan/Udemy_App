
const Message = ({ message }) => {
    return (
        <div className="flex flex-col items-start mb-4">
            <div className="flex items-center">
                <span className="text-sm font-semibold text-gray-400">{message.name}</span>
            </div>
            
            <div className="flex flex-col w-full max-w-[320px] pl-2">
                <p className="text-sm font-normal py-1 text-black">{message.text}</p>
            </div>
        </div>
    )
}

export default Message