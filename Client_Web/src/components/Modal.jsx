const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
      <div className="bg-white rounded-lg shadow-lg p-10 relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={() => setIsModalOpen(false)}>&times;</button>

        {children}
      </div>
    </div>
  );
};

export default Modal;