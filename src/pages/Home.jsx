import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Analyse from '@mui/icons-material/AssessmentOutlined';
import Paste from '@mui/icons-material/ContentCopyOutlined';
import Result from '@mui/icons-material/CheckCircleOutlineOutlined';
import Profile from '@mui/icons-material/AccountCircleOutlined';
import Fast from '@mui/icons-material/BoltOutlined';
import Privacy from '@mui/icons-material/HealthAndSafetyOutlined';
import ThumbUp from '@mui/icons-material/ThumbUpAltOutlined';
import './Home.css';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleCheck = () => {
    navigate('/results', { state: { inputText } });
  };

  const handleTextareaClick = () => {
    if (inputText.trim() === '') {
      handleCheck();
    }
  };

  return (
    <div className="home-wrapper">
      {/* Top Section */}
      <div className="top">
        <div className="top_heading">
          Is this news real?
        </div>
        <div className="top_subheading">
          <p>In today's digital age, misinformation spreads faster than ever — making it hard to tell what's true
            and what's not. <span className="ls">LieSpy</span> helps you verify news articles instantly, so you can stay informed with facts,
            not fiction.
          </p>
        </div>
        <div className="top-input-box">
          <textarea
            className="top-news-input"
            placeholder="Enter the news article or URL"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onClick={handleTextareaClick} // 🔸 Redirect on placeholder click
          />
          <button className="top-check-button" onClick={handleCheck}>
            CHECK
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div className="middle_heading">
          How it works?
        </div>
        <hr className="middle_line"></hr>
        <div className="how-it-works-cards">
          <div className="card-item">
            <div className="card-icon">
              <Paste />
            </div>
            <p>Paste link or text</p>
          </div>
          <div className="arrow">→</div>
          <div className="card-item">
            <div className="card-icon">
              <Analyse />
            </div>
            <p>Analyse</p>
          </div>
          <div className="arrow">→</div>
          <div className="card-item">
            <div className="card-icon">
              <Result />
            </div>
            <p>Get result!</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="bottom_heading">
          Why use <span className='use_ls'>LieSpy</span>?
        </div>
        <hr className="bottom_line"></hr>
        <div className="how-it-works-cards">
          <div className="card-item">
            <div className="card-icon">
              <Profile />
            </div>
            <p>No login required</p>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <Fast />
            </div>
            <p>fast and accurate</p>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <Privacy />
            </div>
            <p>Data privacy</p>
          </div>
          <div className="card-item">
            <div className="card-icon">
              <ThumbUp />
            </div>
            <p>Free to use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
