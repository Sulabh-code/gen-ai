import React, { useState, useEffect } from 'react';

function App() {
  const [apiStatus, setApiStatus] = useState('checking...');
  
  useEffect(() => {
    // Try to connect to API
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setApiStatus(data.status || 'connected'))
      .catch(() => setApiStatus('offline'));
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '3rem',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
        <h1 style={{ 
          color: '#333', 
          marginBottom: '1rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          MurtiHub AI Platform
        </h1>
        <p style={{ 
          color: '#666', 
          marginBottom: '2rem',
          fontSize: '1.2rem',
          lineHeight: '1.6'
        }}>
          Your AI Agentic Bots Platform is now live on Google Cloud!
        </p>
        
        <div style={{
          background: '#f8f9fa',
          padding: '1rem',
          borderRadius: '10px',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Platform Status:</strong> ✅ Running
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>API Status:</strong> {apiStatus === 'running' ? '✅' : '⏳'} {apiStatus}
          </div>
          <div>
            <strong>Domain:</strong> murtihub.co.in
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '1rem',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎯</div>
            <div><strong>Plug & Play</strong></div>
            <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Deploy AI bots instantly</div>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #f093fb, #f5576c)',
            color: 'white',
            padding: '1rem',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡</div>
            <div><strong>Cloud Scale</strong></div>
            <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Auto-scaling on GCP</div>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            color: 'white',
            padding: '1rem',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📊</div>
            <div><strong>Analytics</strong></div>
            <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Real-time insights</div>
          </div>
        </div>

        <p style={{ 
          color: '#999', 
          fontSize: '0.9rem',
          marginBottom: '1rem'
        }}>
          🚀 Successfully deployed to Google Cloud Platform<br/>
          🔒 SSL certificates will be auto-provisioned within 24 hours
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="/api/status" 
            target="_blank"
            style={{
              background: '#667eea',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            API Status
          </a>
          <a 
            href="/health" 
            target="_blank"
            style={{
              background: '#4facfe',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Health Check
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
