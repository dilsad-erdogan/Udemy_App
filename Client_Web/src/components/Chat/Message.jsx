
const Message = ({ message }) => {
    return (
        <div className="flex flex-col items-start gap-2.5 mb-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-500">{message.name}</span>
            </div>
            
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                <p className="text-sm font-normal py-2.5 text-gray-900">{message.text}</p>
            </div>
        </div>
    )
}

export default Message