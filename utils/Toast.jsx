import { useState } from 'react';

const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-${type}-500 text-white p-4 rounded-lg shadow-lg z-50`}
      role="alert"
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white font-bold">X</button>
      </div>
    </div>
  );
};

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'green') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000); // Auto-close after 3 seconds
  };

  return { toast, showToast };
};
