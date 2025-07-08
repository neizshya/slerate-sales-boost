"use client";

import { useEffect } from "react";
import { XIcon } from "./icons/Icons";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0  z-50 flex justify-center items-center p-4 transition-opacity duration-300 bg-black/50"
      onClick={onClose}>
      <div
        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md m-8 transition-transform transform duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-blue-700 rounded-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
