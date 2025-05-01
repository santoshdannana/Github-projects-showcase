import React from 'react';
import './UserCard.css';

const UserCard = ({ user, isSelected, onClick, onRemove }) => {
  return (
    <div
      className={`profile-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {/* macOS style title bar */}
      <div className="mac-title-bar">
        <span className="dot red" onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>

      <div className="profile-content">
        <img className="profile-avatar" src={user.avatar_url} alt={user.name} />

        <h1 className="profile-name">{user.name || user.login}</h1>

        <div className="profile-buttons">
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            GitHub
          </a>
        </div>

        <div className="profile-extra">
            <p>📍 {user.location || 'No location added'}</p>
            <p>🧑‍💻 Gists: {user.public_gists ?? 0}</p>
            <p>📅 Joined: {new Date(user.created_at).toLocaleDateString()}</p>
        </div>



        <div className="profile-bottom">
          <div className="stat">
            <h4>{user.public_repos}</h4>
            <p>Repos</p>
          </div>
          <div className="stat">
            <h4>{user.followers}</h4>
            <p>Followers</p>
          </div>
          <div className="stat">
            <h4>{user.following}</h4>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
