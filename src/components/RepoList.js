import React, { useState, useEffect } from 'react';
import './RepoList.css';

const RepoList = ({ reposUrl }) => {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (!reposUrl) return;
    fetch(reposUrl)
      .then(res => res.json())
      .then(setRepos);
  }, [reposUrl]);

  const filteredRepos = repos.filter(repo => {
    if (filter === 'Popular') return repo.stargazers_count > 0;
    if (filter === 'Forked') return repo.fork;
    return true;
  });

  return (
    <div className="repo-section">
      <div className="repo-tabs">
        {['All', 'Popular', 'Forked'].map(tab => (
          <button
            key={tab}
            className={filter === tab ? 'active' : ''}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="repo-list">
        {filteredRepos.map(repo => (
          <div key={repo.id} className="repo-card">
            <h3>{repo.name}</h3>
            <p title={repo.description}>{repo.description || 'No description'}</p>
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <span>💻 {repo.language || 'N/A'}</span>
            </div>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};



const getLangColor = (lang) => {
    const colors = {
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Java: '#b07219',
      TypeScript: '#2b7489',
      C: '#555555',
      'C++': '#f34b7d',
      Ruby: '#701516'
    };
    return colors[lang] || '#ccc';
  };
  

export default RepoList;
