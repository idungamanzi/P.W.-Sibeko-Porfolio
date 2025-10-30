import { useState } from "react";

export default function SkillWalletCard({ category, evidence }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 cursor-pointer transition hover:border-blue-500"
         onClick={() => setOpen(!open)}>
      <h4 className="text-lg font-semibold text-blue-400">{category}</h4>

      {open && (
        <ul className="mt-4 text-gray-300 text-sm space-y-2 border-t border-gray-700 pt-4">
          {evidence.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.source}</span>
              <span className="text-blue-500 text-xs">{item.type}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
