import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Internship = ({ darkMode }) => {
  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const darkGreen = '#1b5e20';
  const lightGreen = '#e8f5e9';

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Internship tracks data
  const tracks = [
    {
      id: 1,
      title: "Frontend Development",
      icon: "💻",
      description: "Build responsive UIs with React, Next.js, and modern CSS frameworks",
      skills: ["React", "JavaScript", "CSS", "UI/UX"],
      duration: "3-6 months"
    },
    {
      id: 2,
      title: "Backend Development",
      icon: "⚙️",
      description: "Develop scalable server-side applications with Node.js and databases",
      skills: ["Node.js", "Express", "MongoDB", "API Design"],
      duration: "3-6 months"
    },
    {
      id: 3,
      title: "Full Stack Development",
      icon: "🔗",
      description: "End-to-end application development from frontend to backend",
      skills: ["MERN Stack", "Authentication", "Deployment", "Testing"],
      duration: "6 months"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Former Intern, now Frontend Developer",
      quote: "The internship gave me real-world experience that was invaluable for my career. I worked on production code from day one!",
      avatar: "👩‍💻"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Former Intern, now Software Engineer",
      quote: "The mentorship I received helped me grow faster than I thought possible. I still use the skills I learned daily.",
      avatar: "👨‍💻"
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      padding: '2rem 1rem',
      color: darkMode ? '#ffffff' : '#333333'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '0.9rem',
            color: darkMode ? '#81c784' : primaryGreen,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem'
          }}>Internship Program</h2>
          
          <h1 style={{
            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.3'
          }}>Launch Your Tech Career with Us</h1>

          
        </div>


        {/* Internship Tracks */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: darkMode ? '#ffffff' : '#333333',
            marginBottom: '2rem',
            position: 'relative',
            display: 'inline-block',
            width: '100%'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '0 1rem',
              background: darkMode ? '#121212' : '#f8f9fa',
              position: 'relative',
              zIndex: 2
            }}>
              Available Tracks
            </span>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '1px',
              background: darkMode ? '#333' : '#ddd',
              zIndex: 1
            }}></span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {tracks.map(track => (
              <div 
                key={track.id}
                style={{
                  background: darkMode ? '#1e1e1e' : '#ffffff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}
                data-aos="fade-up"
              >
                <div 
                  style={{
                    background: `linear-gradient(135deg, ${darkGreen}, ${secondaryGreen})`,
                    padding: '1.5rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleAccordion(track.id)}
                >
                  <span style={{ fontSize: '2rem' }}>{track.icon}</span>
                  <div>
                    <h3 style={{
                      margin: 0,
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}>{track.title}</h3>
                    <p style={{ margin: '0.3rem 0 0', opacity: 0.9 }}>{track.duration}</p>
                  </div>
                </div>
                <div style={{
                  padding: openAccordion === track.id ? '1.5rem' : '0',
                  height: openAccordion === track.id ? 'auto' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  borderTop: openAccordion === track.id ? `1px solid ${darkMode ? '#333' : '#eee'}` : 'none'
                }}>
                  <p style={{ marginTop: 0 }}>{track.description}</p>
                  <div>
                    <h4 style={{
                      margin: '1rem 0 0.5rem',
                      fontSize: '1rem',
                      color: secondaryGreen
                    }}>Skills You'll Learn:</h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {track.skills.map((skill, index) => (
                        <span key={index} style={{
                          background: lightGreen,
                          color: primaryGreen,
                          padding: '0.3rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 500
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>






        {/* Program Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {/* Contact Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: hoveredCard === 'contact' ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredCard === 'contact' ? '0 8px 16px rgba(0,0,0,0.12)' : '0 4px 8px rgba(0,0,0,0.08)'
            }}
            onMouseEnter={() => setHoveredCard('contact')}
            onMouseLeave={() => setHoveredCard(null)}
            data-aos="fade-right"
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>📞 Contact</h3>
            <p style={{
              color: darkMode ? '#cccccc' : '#666666',
              margin: '0 0 1rem 0',
              fontSize: '1rem'
            }}>Have questions? Reach out to our team:</p>
            <p style={{
              color: darkMode ? '#ffffff' : '#333333',
              fontWeight: 500,
              margin: '0.5rem 0'
            }}>+8801577148188</p>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                background: lightGreen,
                color: primaryGreen,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                marginTop: '1rem'
              }}
            >
              cyclicit@gmail.com
            </Link>
          </div>
          
          {/* Learning Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: hoveredCard === 'learning' ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredCard === 'learning' ? '0 8px 16px rgba(0,0,0,0.12)' : '0 4px 8px rgba(0,0,0,0.08)'
            }}
            onMouseEnter={() => setHoveredCard('learning')}
            onMouseLeave={() => setHoveredCard(null)}
            data-aos="fade-up"
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>🎓 Learning Outcomes</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                "Hands-on project experience",
                "Skill development programs",
                "Collaborative environment",
                "Code review process",
                "Agile methodologies"
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  color: darkMode ? '#cccccc' : '#666666',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ color: secondaryGreen }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Growth Card */}
          <div 
            style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: hoveredCard === 'growth' ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredCard === 'growth' ? '0 8px 16px rgba(0,0,0,0.12)' : '0 4px 8px rgba(0,0,0,0.08)'
            }}
            onMouseEnter={() => setHoveredCard('growth')}
            onMouseLeave={() => setHoveredCard(null)}
            data-aos="fade-left"
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: secondaryGreen,
              margin: '0 0 0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>🚀 Career Growth</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                "Production best practices",
                "Performance optimization",
                "Team growth strategies",
                "Networking opportunities",
                "Portfolio projects"
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  color: darkMode ? '#cccccc' : '#666666',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.95rem'
                }}>
                  <span style={{ color: secondaryGreen }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        

       

        {/* Program Details */}
        <div style={{
          background: darkMode ? '#1e1e1e' : '#ffffff',
          borderRadius: '10px',
          padding: '2rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: darkMode ? '#ffffff' : '#333333',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Program Details
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                color: secondaryGreen,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>📅</span> Duration & Structure
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: darkMode ? '#cccccc' : '#555555'
              }}>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Duration:</strong> 3-6 months
                </li>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Hours:</strong> 20-40 hours/week
                </li>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Format:</strong> Remote or Hybrid
                </li>
                <li style={{ padding: '0.5rem 0' }}>
                  <strong>Start Dates:</strong> Quarterly intakes
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{
                color: secondaryGreen,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>🎯</span> What We Look For
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: darkMode ? '#cccccc' : '#555555'
              }}>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Basic programming knowledge</strong> in your track
                </li>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Eagerness to learn</strong> and grow
                </li>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Problem-solving mindset</strong>
                </li>
                <li style={{ padding: '0.5rem 0' }}>
                  <strong>Team collaboration</strong> skills
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{
                color: secondaryGreen,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>🏆</span> Benefits
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: darkMode ? '#cccccc' : '#555555'
              }}>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Certificate</strong> upon completion
                </li>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Letter of recommendation</strong> for top performers
                </li>
                <li style={{ padding: '0.5rem 0', borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` }}>
                  <strong>Potential job offer</strong> for exceptional interns
                </li>
                <li style={{ padding: '0.5rem 0' }}>
                  <strong>Networking</strong> with industry professionals
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: `linear-gradient(135deg, ${darkGreen}, ${primaryGreen})`,
          borderRadius: '10px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1rem'
          }}>
            Ready to Launch Your Career?
          </h2>
          <p style={{
            maxWidth: '700px',
            margin: '0 auto 2rem',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            Applications are open for our next cohort. Limited spots available!
          </p>
          <Link 
            to="/contact" 
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              background: 'white',
              color: primaryGreen,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Internship;