// src/components/ProjectPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectPage.css';

const ProjectPage = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
      </nav>
      <h1>{project.title}</h1>
      <section className="overview">
        <h2>概要</h2>
        <p>{project.description}</p>
      </section>
      <section className="details">
        <h2>詳細情報</h2>
        <ul>
          <li><strong>技術スタック:</strong> {project.techStack ? project.techStack.join(', ') : 'N/A'}</li>
          <li><strong>背景と目的:</strong> {project.background || 'N/A'}</li>
          <li><strong>主要機能:</strong></li>
          <ul>
            {project.features ? project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            )) : 'N/A'}
          </ul>
        </ul>
      </section>
      <section className="media">
        <h2>スクリーンショット</h2>
        {project.screenshots ? project.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} alt={`${project.title} screenshot ${index + 1}`} />
        )) : 'N/A'}
        {project.demoVideo && (
          <div className="video">
            <h2>デモ動画</h2>
            <video controls src={project.demoVideo}></video>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectPage;
