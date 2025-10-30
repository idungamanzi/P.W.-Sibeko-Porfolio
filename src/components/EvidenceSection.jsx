import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ExpandableEvidence = ({ title, details, logo }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-gray-800 rounded-xl p-4 cursor-pointer border border-gray-700 hover:border-blue-400 transition"
      onClick={() => setOpen(!open)}
      transition={{ duration: 0.3 }}
    >
      <motion.div layout className="flex items-center gap-4">
        <img src={logo} className="w-16 h-16 object-contain rounded-md" alt={title} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.p
            className="text-gray-300 mt-3 pl-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            {details}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function EvidenceSection() {
  return (
    <div className="space-y-4 mt-12">
      <ExpandableEvidence
        title="Cisco Cybersecurity Certification"
        details="Completed CCNA CyberOps foundational program focusing on SOC workflows, network defense, and threat response."
        logo="/logos/cisco.png"
      />

      <ExpandableEvidence
        title="University of Zululand Honours Research Project"
        details="Research on Machine Learning Intrusion Detection Systems using CNN, LSTM, and XGBoost architectures applied to IoT datasets."
        logo="/logos/UNIZULU.avif"
      />
    </div>
  );
}
