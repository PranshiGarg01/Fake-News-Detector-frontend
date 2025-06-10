import React, { useState } from 'react';
import './Results.css';

const Results = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('80%');
  const [showResult, setShowResult] = useState(false); // Control when to show result text

  const handleCheck = () => {
    console.log('Checking:', inputText);
    // Add your logic here
    setShowResult(true); // Show result text after check
  };

  return (
    <div className="results-wrapper">
      <div className="results">
        <div className="middle-container">
          {/* Left input area */}
          <div className="input-box">
            <textarea
              className="news-input"
              placeholder="Enter the news article or URL"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="check-button" onClick={handleCheck}>
              CHECK
            </button>
          </div>

          {/* Right result area - always visible, text shown conditionally */}
          <div className="result-box">
            {showResult && (
              <>
                <div className="result-text">{result}</div>
                <div className="result-subtext">of the news is likely fake</div>
              </>
            )}
          </div>
        </div>

        <div className="source">
          <div className="source_heading">Sources</div>
          <hr className="source-line" />
          <div className="source_content">
            <div className="source_content_container">
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
