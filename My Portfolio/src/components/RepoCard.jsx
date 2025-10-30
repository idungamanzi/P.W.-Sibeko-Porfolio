import { motion } from "framer-motion";

export default function RepoCard({ repo }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg transition"
    >
      <h4 className="text-lg font-semibold text-blue-300">
        {repo.name.replace(/-/g, " ")}
      </h4>

      {/* ✅ Description */}
      {repo.description ? (
        <p className="text-gray-400 text-sm mt-2">
          {repo.description}
        </p>
      ) : (
        <p className="text-gray-500 text-sm mt-2 italic">
          No description provided.
        </p>
      )}

      {/* ✅ Language */}
      {repo.language && (
        <p className="text-sm text-gray-500 mt-4">
          <span className="text-blue-400">Tech:</span> {repo.language}
        </p>
      )}

      {/* ✅ Stars + watchers (optional professional polish) */}
      <div className="flex gap-4 text-gray-600 text-sm mt-4">
        <span>⭐ {repo.stargazers_count}</span>
        <span>👁️ {repo.watchers_count}</span>
      </div>
    </motion.a>
  );
}
