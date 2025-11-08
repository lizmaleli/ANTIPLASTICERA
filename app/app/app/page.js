// Antiplastic Era Studio - Complete Brand AI Co-Founder
import React, { useState, useRef, useEffect } from 'react';
import { Settings, Upload, Send, Download, Loader, Image, Palette, Calendar, Zap, Users, Target } from 'lucide-react';

const AntiPlasticStudio = () => {
  const [replicateKey, setReplicateKey] = useState('');
  const [anthropicKey, setAnthropicKey] = useState('');
  const [showSettings, setShowSettings] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const fileInputRef = useRef(null);

  // Brand creation features
  const brandTools = [
    { id: 'strategy', name: 'Brand Strategy', icon: Target, description: 'Build your complete brand identity' },
    { id: 'content', name: 'Content Calendar', icon: Calendar, description: 'Plan your social media content' },
    { id: 'visual', name: 'Visual Identity', icon: Palette, description: 'Create mood boards & aesthetics' },
    { id: 'marketing', name: 'Marketing Copy', icon: Zap, description: 'Write sales pages & ads' },
    { id: 'audience', name: 'Audience Analysis', icon: Users, description: 'Find your target customers' }
  ];

  const quickPrompts = [
    "Create my entire brand identity from scratch",
    "Generate a luxury fashion photoshoot for my brand", 
    "Plan my Instagram content for next month",
    "Design a visual mood board for my aesthetic",
    "Write my Payhip sales page copy",
    "Analyze my target audience and competitors"
  ];

  const brandColors = {
    primary: '#5A3A1F',
    secondary: '#F5F1E8',
    accent: '#D4AF37',
    dark: '#3A2A15', 
    light: '#FFFBF5'
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsGenerating(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: 'assistant',
        content: "I'll help you build your brand! Let me create some visual concepts and strategic recommendations for your antiplastic AI content studio.",
        suggestions: [
          "Generate luxury brand imagery", 
          "Create content calendar",
          "Design visual identity",
          "Write marketing copy"
        ]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle image upload for reference
      console.log('Uploaded file:', file);
    }
  };

  const handleQuickPrompt = (prompt) => {
    setInputMessage(prompt);
  };

  const handleBrandTool = (toolId) => {
    const toolPrompts = {
      strategy: "Help me build my complete brand strategy including mission, values, and positioning in the antiplastic AI content space.",
      content: "Create a 30-day content calendar for my Antiplastic Era Studio with daily post ideas and hashtags.", 
      visual: "Design a visual identity system for my brand including color palette, typography, and mood board inspiration.",
      marketing: "Write compelling marketing copy for my Payhip subscription including sales pages and email sequences.",
      audience: "Analyze my target audience and identify key competitors in the luxury AI content creation space."
    };
    setInputMessage(toolPrompts[toolId]);
  };

  if (showSettings) {
    return (
      <div style={{ 
        background: brandColors.secondary, 
        minHeight: '100vh', 
        padding: '20px',
        color: brandColors.primary 
      }}>
        <div style={{
          maxWidth: '500px',
          margin: '50px auto',
          background: brandColors.light,
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(90, 58, 31, 0.1)'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '10px',
            color: brandColors.primary 
          }}>
            Antiplastic Era Studio
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '30px',
            color: brandColors.dark 
          }}>
            Your AI Co-Founder for Building Luxury Brands
          </p>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Replicate API Key
            </label>
            <input
              type="password"
              value={replicateKey}
              onChange={(e) => setReplicateKey(e.target.value)}
              placeholder="Enter your Replicate API key (r8_...)"
              style={{
                width: '100%',
                padding: '12px',
                border: `2px solid ${brandColors.primary}`,
                borderRadius: '8px',
                background: brandColors.secondary
              }}
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Anthropic API Key
            </label>
            <input
              type="password"
              value={anthropicKey}
              onChange={(e) => setAnthropicKey(e.target.value)}
              placeholder="Enter your Anthropic API key (sk-ant...)"
              style={{
                width: '100%',
                padding: '12px',
                border: `2px solid ${brandColors.primary}`,
                borderRadius: '8px',
                background: brandColors.secondary
              }}
            />
          </div>

          <button
            onClick={() => setShowSettings(false)}
            disabled={!replicateKey || !anthropicKey}
            style={{
              width: '100%',
              padding: '15px',
              background: brandColors.primary,
              color: brandColors.light,
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              opacity: (!replicateKey || !anthropicKey) ? 0.6 : 1
            }}
          >
            Launch Brand Studio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      background: brandColors.secondary, 
      minHeight: '100vh',
      color: brandColors.primary,
      fontFamily: 'Georgia, serif'
    }}>
      {/* Header */}
      <header style={{
        background: brandColors.primary,
        color: brandColors.light,
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Antiplastic Era Studio</h1>
        <button
          onClick={() => setShowSettings(true)}
          style={{
            background: 'transparent',
            border: `1px solid ${brandColors.light}`,
            color: brandColors.light,
            padding: '8px 15px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          <Settings size={18} />
        </button>
      </header>

      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        {/* Left Sidebar - Brand Tools */}
        <div style={{
          width: '250px',
          background: brandColors.dark,
          color: brandColors.light,
          padding: '20px',
          overflowY: 'auto'
        }}>
          <h3 style={{ marginBottom: '20px', color: brandColors.accent }}>Brand Tools</h3>
          {brandTools.map(tool => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.id}
                onClick={() => handleBrandTool(tool.id)}
                style={{
                  padding: '15px',
                  marginBottom: '10px',
                  background: brandColors.primary,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = brandColors.accent;
                  e.target.style.color = brandColors.dark;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = brandColors.primary;
                  e.target.style.color = brandColors.light;
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <IconComponent size={18} style={{ marginRight: '10px' }} />
                  <strong>{tool.name}</strong>
                </div>
                <small>{tool.description}</small>
              </div>
            );
          })}

          <div style={{ marginTop: '30px' }}>
            <h4 style={{ marginBottom: '15px', color: brandColors.accent }}>Quick Start</h4>
            {quickPrompts.map((prompt, index) => (
              <div
                key={index}
                onClick={() => handleQuickPrompt(prompt)}
                style={{
                  padding: '10px',
                  marginBottom: '8px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: `1px solid ${brandColors.accent}`,
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: brandColors.light
        }}>
          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto'
          }}>
            {messages.map((message, index) => (
              <div key={index} style={{
                marginBottom: '20px',
                textAlign: message.role === 'user' ? 'right' : 'left'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '15px 20px',
                  background: message.role === 'user' ? brandColors.primary : brandColors.secondary,
                  color: message.role === 'user' ? brandColors.light : brandColors.primary,
                  borderRadius: '15px',
                  maxWidth: '70%',
                  border: message.role === 'user' ? 'none' : `1px solid ${brandColors.primary}`
                }}>
                  {message.content}
                </div>
                {message.suggestions && (
                  <div style={{ marginTop: '10px', textAlign: 'left' }}>
                    {message.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickPrompt(suggestion)}
                        style={{
                          margin: '5px',
                          padding: '8px 15px',
                          background: 'transparent',
                          border: `1px solid ${brandColors.accent}`,
                          color: brandColors.accent,
                          borderRadius: '20px',
                          cursor: 'pointer',
                          fontSize: '0.9rem'
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isGenerating && (
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '15px 20px',
                  background: brandColors.secondary,
                  color: brandColors.primary,
                  borderRadius: '15px'
                }}>
                  <Loader size={16} style={{ animation: 'spin 1s linear infinite' }} />
                  Creating your brand strategy...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{
            padding: '20px',
            borderTop: `1px solid ${brandColors.primary}`,
            background: brandColors.light
          }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                accept="image/*"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  padding: '12px',
                  background: brandColors.secondary,
                  border: `1px solid ${brandColors.primary}`,
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                <Upload size={20} />
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me to build your brand, create content, or generate images..."
                style={{
                  flex: 1,
                  padding: '12px',
                  border: `1px solid ${brandColors.primary}`,
                  borderRadius: '8px',
                  background: brandColors.secondary
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                style={{
                  padding: '12px 20px',
                  background: brandColors.primary,
                  color: brandColors.light,
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Image Gallery */}
        <div style={{
          width: '300px',
          background: brandColors.secondary,
          padding: '20px',
          overflowY: 'auto',
          borderLeft: `1px solid ${brandColors.primary}`
        }}>
          <h3 style={{ marginBottom: '20px', color: brandColors.primary }}>Brand Gallery</h3>
          <div style={{
            display: 'grid',
            gap: '10px'
          }}>
            {generatedImages.map((image, index) => (
              <div key={index} style={{
                background: brandColors.light,
                padding: '10px',
                borderRadius: '8px',
                border: `1px solid ${brandColors.primary}`
              }}>
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: '#ddd',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <Image size={40} color={brandColors.primary} />
                </div>
                <button style={{
                  width: '100%',
                  padding: '8px',
                  background: brandColors.primary,
                  color: brandColors.light,
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  <Download size={14} style={{ marginRight: '5px' }} />
                  Download
                </button>
              </div>
            ))}
            {generatedImages.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                color: brandColors.dark
              }}>
                <Image size={48} style={{ marginBottom: '10px', opacity: 0.5 }} />
                <p>Your generated brand images will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default AntiPlasticStudio;
