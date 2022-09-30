import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chatImg from '../images/chat-icon.png'

const Home = ({socket}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('newUser', { userName, socketID: socket.id})
    navigate('/chat');
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
        <img src={chatImg} alt="chatImg" className='home__Img' />
      <h2 className="home__header">OPEN CHAT .....</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        placeholder='Enter your username'
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">LOGIN</button>
    </form>
  );
};

export default Home;