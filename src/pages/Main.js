import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: { user: match.params.id }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  return (
    <div className="main-container">
      <img src={logo} alt="Tindev Logo" />
      <ul>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/27784094?s=400&u=d8aeeea6592bd96c6cf8415d2a641e60923318a9&v=4"
            alt=""
          />
          <footer>
            <strong>Caio favoretto</strong>
            <p>App / Game Developer</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
