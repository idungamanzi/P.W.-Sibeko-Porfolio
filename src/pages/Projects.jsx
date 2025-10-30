import React from "react";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import RepoCard from "../components/RepoCard";
import { skills } from "../data/skills";
import SkillWalletCard from "../components/SkillWalletCard";
import featuredProjects from "../data/featuredProjects";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch latest repos
    fetch("https://api.github.com/users/idungamanzi/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter out forks for professionalism
          const filtered = data.filter(repo => !repo.fork);
          setRepos(filtered);
        } else {
          setRepos([]);
        }
      })
      .catch(err => {
        console.error("GitHub Fetch Error:", err);
        setRepos([]);
      });
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      {/* ===== FEATURED PROJECTS ===== */}
      <SectionHeader>Featured Projects</SectionHeader>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>


      {/* ===== SKILLS WALLET ===== */}
      <section id="skills" className="py-24">
        <h3 className="text-3xl font-semibold mb-8 text-blue-400">Skills Wallet</h3>

        <p className="text-gray-400 max-w-3xl mb-10">
          A verified skills portfolio demonstrating competencies supported by academic coursework,
          certifications, and practical project experience.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillWalletCard key={skill.category} {...skill} />
          ))}
        </div>
      </section>


      {/* ===== GITHUB HIGHLIGHTS ===== */}
      <SectionHeader>GitHub Highlights</SectionHeader>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {repos.length > 0 ? (
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        ) : (
          <p className="text-gray-400 text-center w-full">
            Fetching your live public projects...
          </p>
        )}
      </div>

    </section>
  );
}
