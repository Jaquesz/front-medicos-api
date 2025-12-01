// ModalWrapper.jsx
export default function ModalWrapper({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={onClose} 
        >

            <div 
                className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100 relative"
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                
                {children}
            </div>
        </div>
    );
}