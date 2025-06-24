import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';

const Results = () => {
  const location = useLocation();
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(''); 
  const [sources, setSources] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (location.state?.inputText) {
      setInputText(location.state.inputText);
    }
  }, [location.state]);

  const handleCheck = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to check.');
      setShowResult(false);
      return;
    }

    setLoading(true);
    setError('');
    setShowResult(false);

    try {
      const req_body = {"article": inputText}
      const response = await fetch('https://f46b-2405-201-d002-b879-c0bb-9729-88b2-724e.ngrok-free.app/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body) 
      });

      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }

      const data = await response.json();

      setResult(data.accuracy);
      setSources(data.sources);
      setShowResult(true);
    } catch (err) {
      setError('Error fetching results: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="results-wrapper">
      <div className="results">
        <div className="middle-container">
          <div className="input-box">
            <textarea
              className="news-input"
              placeholder="Enter the news article or URL"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="check-button" onClick={handleCheck} disabled={loading}>
              {loading ? 'Checking...' : 'CHECK'}
            </button>
            {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
          </div>

          <div className="result-box">
            {showResult && (
              <>
                <div className="result-text">{result}</div>
                <div className="result-subtext">of the news is likely true</div>
              </>
            )}
          </div>
        </div>

        <div className="source">
          <div className="source_heading">Sources</div>
          <hr className="source-line" />
          <div className="source_content">
            <div className="source_content_container">
              {showResult ? (
                <div>{sources}</div>
              ) : (
                <div style={{ fontStyle: 'italic', color: '#777' }}>Sources will appear here after checking.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
