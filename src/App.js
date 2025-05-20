import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import RepoList from './components/RepoList';
import octocat from './octocat.png';

function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setDarkMode(true);
  }, []);

  // Apply theme to body + persist
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const fetchData = async () => {
    if (!username) return;

    if (users.length >= 4) {
      setError('You can only compare up to 4 users.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error('User not found');
      const user = await userRes.json();

      const alreadyExists = users.find(u => u.login === user.login);
      if (alreadyExists) {
        setError('User already added');
      } else {
        setUsers(prev => [...prev, user]);
      }

      setUsername('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeUser = (login) => {
    setUsers(prev => prev.filter(user => user.login !== login));
    if (selectedUser === login) {
      setSelectedUser(null);
    }
  };

  const clearAllUsers = () => {
    setUsers([]);
    setSelectedUser(null);
    setError('');
  };

  return (
    <div className={`mac-window ${darkMode ? 'dark' : ''}`}>
      {/* macOS-style title bar */}
      <div className="mac-window-bar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="window-title">GitHub Project Showcase</span>
        <div className="theme-toggle-wrapper">
        <button
          className="theme-icon-toggle"
          onClick={toggleTheme}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      </div>


      {/* App content */}
      <div className="app">


        <SearchBar
          username={username}
          setUsername={setUsername}
          fetchData={fetchData}
          isLimitReached={users.length >= 4}
        />

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        <div className="compare-users">
          {users.map(user => (
            <UserCard
              key={user.id}
              user={user}
              isSelected={selectedUser === user.login}
              onClick={() => setSelectedUser(user.login)}
              onRemove={() => removeUser(user.login)}
            />
          ))}
        </div>

        {users.length > 0 && (
          <button className="clear-button" onClick={clearAllUsers}>
            Clear All Users
          </button>
        )}

        {users.length === 0 && !loading && (
          <div className="empty-state">
            <img src={octocat} alt="GitHub Octocat" className="octocat-img" />
            <p>Enter a GitHub username above to get started.</p>
          </div>
        )}


        {selectedUser && (
          <RepoList
            reposUrl={users.find(u => u.login === selectedUser)?.repos_url}
          />
        )}
      </div>
    </div>
  );
}

export default App;
