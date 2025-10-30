import React from "react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full text-left">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-blue-300">{title}</h4>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm"
          >
            Close
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
