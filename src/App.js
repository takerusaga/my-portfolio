import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import categories from './data/categories';
import './styles/App.css';  // CSSファイルのインポート

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    projects: category.projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.projects.length > 0);

  // デバッグ用ログ
  console.log('Filtered Categories:', filteredCategories);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="search-icon">🔍</span>
          </div>
        </header>
        <main>
          {console.log('Main element rendered')}
          <Routes>
            <Route path="/" element={
              <div>
                {filteredCategories.length === 0 ? (
                  <p>No projects found</p>
                ) : (
                  filteredCategories.map((category, categoryIndex) => (
                    <section key={categoryIndex}>
                      <h2 className="category-title">{category.title}</h2>
                      <div className="projects-container">
                        <div className="projects">
                          {category.projects.map((project, projectIndex) => (
                            <div className="project" key={projectIndex}>
                              {project.thumbnail ? (
                                <Link to={`/projects/${project.id}`}>
                                  <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="thumbnail" />
                                </Link>
                              ) : (
                                <div className="thumbnail">Thumbnail</div>
                              )}
                              <h3>
                                <Link to={`/projects/${project.id}`}>
                                  {project.title}
                                </Link>
                              </h3>
                              <p>{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  ))
                )}
              </div>
            } />
            <Route path="/projects/:projectId" element={<ProjectPage projects={categories.flatMap(category => category.projects)} />} />
          </Routes>
        </main>
        <footer>
          <a href="#about">About Me</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
