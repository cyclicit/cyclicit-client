import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Internship = ({ darkMode }) => {
  // State for language
  const [language, setLanguage] = useState('en'); // 'en' for English, 'bn' for Bengali

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const darkGreen = '#1b5e20';
  const lightGreen = '#e8f5e9';

  // State for accordion
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // English content
  const enContent = {
    header: {
      subtitle: "Internship Program",
      title: "Launch Your Tech Career with Us"
    },
    tracks: {
      title: "Available Tracks",
      frontend: {
        title: "Frontend Development",
        icon: "💻",
        description: "Build responsive UIs with React, Next.js, and modern CSS frameworks",
        skills: ["React", "JavaScript", "CSS", "UI/UX"],
        duration: "3-6 months"
      },
      backend: {
        title: "Backend Development",
        icon: "⚙️",
        description: "Develop scalable server-side applications with Node.js and databases",
        skills: ["Node.js", "Express", "MongoDB", "API Design"],
        duration: "3-6 months"
      },
      fullstack: {
        title: "Full Stack Development",
        icon: "🔗",
        description: "End-to-end application development from frontend to backend",
        skills: ["MERN Stack", "Authentication", "Deployment", "Testing"],
        duration: "6 months"
      }
    },
    details: {
      title: "Program Details",
      duration: {
        title: "📅 Duration & Structure",
        items: [
          "Duration: 3-6 months",
          "Hours: 20-40 hours/week",
          "Format: Remote or Hybrid",
          "Start Dates: Quarterly intakes"
        ]
      },
      requirements: {
        title: "🎯 What We Look For",
        items: [
          "Basic programming knowledge in your track",
          "Eagerness to learn and grow",
          "Problem-solving mindset",
          "Team collaboration skills"
        ]
      },
      benefits: {
        title: "🏆 Benefits",
        items: [
          "Certificate upon completion",
          "Letter of recommendation for top performers",
          "Potential job offer for exceptional interns",
          "Networking with industry professionals"
        ]
      }
    },
    cards: {
      contact: {
        title: "📞 Contact",
        description: "Have questions? Reach out to our team:",
        phone: "+8801577148188",
        email: "cyclicit@gmail.com"
      },
      learning: {
        title: "🎓 Learning Outcomes",
        items: [
          "Hands-on project experience",
          "Skill development programs",
          "Collaborative environment",
          "Code review process",
          "Agile methodologies"
        ]
      },
      growth: {
        title: "🚀 Career Growth",
        items: [
          "Production best practices",
          "Performance optimization",
          "Team growth strategies",
          "Networking opportunities",
          "Portfolio projects"
        ]
      }
    },
    cta: {
      title: "Ready to Launch Your Career?",
      description: "Applications are open for our next cohort. Limited spots available!",
      button: "Apply Now"
    }
  };

  // Bengali content
  const bnContent = {
    header: {
      subtitle: "ইন্টার্নশিপ প্রোগ্রাম",
      title: "আমাদের সাথে আপনার টেক ক্যারিয়ার শুরু করুন"
    },
    tracks: {
      title: "উপলব্ধ ট্র্যাকসমূহ",
      frontend: {
        title: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
        icon: "💻",
        description: "React, Next.js এবং আধুনিক CSS ফ্রেমওয়ার্ক দিয়ে রেস্পন্সিভ UI তৈরি করুন",
        skills: ["React", "JavaScript", "CSS", "UI/UX"],
        duration: "৩-৬ মাস"
      },
      backend: {
        title: "ব্যাকএন্ড ডেভেলপমেন্ট",
        icon: "⚙️",
        description: "Node.js এবং ডাটাবেস দিয়ে স্কেলেবল সার্ভার-সাইড অ্যাপ্লিকেশন ডেভেলপ করুন",
        skills: ["Node.js", "Express", "MongoDB", "API Design"],
        duration: "৩-৬ মাস"
      },
      fullstack: {
        title: "ফুল স্ট্যাক ডেভেলপমেন্ট",
        icon: "🔗",
        description: "ফ্রন্টএন্ড থেকে ব্যাকএন্ড পর্যন্ত এন্ড-টু-এন্ড অ্যাপ্লিকেশন ডেভেলপমেন্ট",
        skills: ["MERN Stack", "Authentication", "Deployment", "Testing"],
        duration: "৬ মাস"
      }
    },
    details: {
      title: "প্রোগ্রামের বিবরণ",
      duration: {
        title: "📅 সময়কাল ও কাঠামো",
        items: [
          "সময়কাল: ৩-৬ মাস",
          "ঘণ্টা: সপ্তাহে ২০-৪০ ঘণ্টা",
          "ফরম্যাট: রিমোট বা হাইব্রিড",
          "শুরুর তারিখ: ত্রৈমাসিক ইনটেক"
        ]
      },
      requirements: {
        title: "🎯 আমরা যা খুঁজি",
        items: [
          "আপনার ট্র্যাকের প্রোগ্রামিংয়ের প্রাথমিক জ্ঞান",
          "শেখার এবং বৃদ্ধির আগ্রহ",
          "সমস্যা সমাধানের মানসিকতা",
          "দলগত সহযোগিতার দক্ষতা"
        ]
      },
      benefits: {
        title: "🏆 সুবিধাসমূহ",
        items: [
          "সমাপ্তির পর সার্টিফিকেট",
          "শীর্ষ পারফর্মারদের জন্য সুপারিশপত্র",
          "অসাধারণ ইন্টার্নদের জন্য চাকরির প্রস্তাব",
          "শিল্প পেশাদারদের সাথে নেটওয়ার্কিং"
        ]
      }
    },
    cards: {
      contact: {
        title: "📞 যোগাযোগ",
        description: "প্রশ্ন আছে? আমাদের দলের সাথে যোগাযোগ করুন:",
        phone: "+৮৮০১৫৭৭১৪৮১৮৮",
        email: "cyclicit@gmail.com"
      },
      learning: {
        title: "🎓 শেখার ফলাফল",
        items: [
          "হাতেকলমে প্রকল্পের অভিজ্ঞতা",
          "দক্ষতা উন্নয়ন প্রোগ্রাম",
          "সহযোগিতামূলক পরিবেশ",
          "কোড রিভিউ প্রক্রিয়া",
          "এজাইল পদ্ধতি"
        ]
      },
      growth: {
        title: "🚀 ক্যারিয়ার বৃদ্ধি",
        items: [
          "প্রোডাকশনের সেরা অনুশীলন",
          "পারফরম্যান্স অপ্টিমাইজেশন",
          "দল বৃদ্ধির কৌশল",
          "নেটওয়ার্কিং সুযোগ",
          "পোর্টফোলিও প্রকল্প"
        ]
      }
    },
    cta: {
      title: "আপনার ক্যারিয়ার শুরু করতে প্রস্তুত?",
      description: "আমাদের পরবর্তী কোহোর্টের জন্য আবেদন খোলা আছে। সীমিত সংখ্যক স্থান উপলব্ধ!",
      button: "এখনই আবেদন করুন"
    }
  };

  // Select content based on language
  const content = language === 'en' ? enContent : bnContent;

  const tracks = [
    content.tracks.frontend,
    content.tracks.backend,
    content.tracks.fullstack
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      padding: '2rem 1rem',
      color: darkMode ? '#ffffff' : '#333333',
      position: 'relative'
    }}>
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLanguage}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '0.5rem 1rem',
          background: darkMode ? '#2e7d32' : '#fff',
          color: darkMode ? '#fff' : '#2e7d32',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
         
          
          
          zIndex: 100
        }}
      >
        {language === 'en' ? 'বাংলা' : 'English'}
      </button>

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
          }}>{content.header.subtitle}</h2>
          
          <h1 style={{
            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
            fontWeight: 700,
            margin: '0.5rem 0',
            background: `linear-gradient(90deg, ${darkGreen}, ${secondaryGreen})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.3'
          }}>{content.header.title}</h1>
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
              {content.tracks.title}
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
                key={track.title}
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
                  onClick={() => toggleAccordion(track.title)}
                >
                  <span style={{ fontSize: '2rem' }}>{track.icon}</span>
                  <div>
                    <h3 style={{
                      margin: 0,
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}>{track.title}</h3>
                    <p style={{ margin: '0.3rem 0 0', opacity: 0.9 }}>{track.duration}</p>
                    <p>{language === 'en' ? 'Details ↓' : 'বিস্তারিত ↓'}</p>
                  </div>
                </div>
                <div style={{
                  padding: openAccordion === track.title ? '1.5rem' : '0',
                  height: openAccordion === track.title ? 'auto' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  borderTop: openAccordion === track.title ? `1px solid ${darkMode ? '#333' : '#eee'}` : 'none'
                }}>
                  <p style={{ marginTop: 0 }}>{track.description}</p>
                  <div>
                    <h4 style={{
                      margin: '1rem 0 0.5rem',
                      fontSize: '1rem',
                      color: secondaryGreen
                    }}>
                      {language === 'en' ? "Skills You'll Learn:" : "আপনি যে দক্ষতাগুলি শিখবেন:"}
                    </h4>
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
            {content.details.title}
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
                {content.details.duration.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: darkMode ? '#cccccc' : '#555555'
              }}>
                {content.details.duration.items.map((item, index) => (
                  <li key={index} style={{ 
                    padding: '0.5rem 0', 
                    borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}` 
                  }}>
                    <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                  </li>
                ))}
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
                {content.details.requirements.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: darkMode ? '#cccccc' : '#555555'
              }}>
                {content.details.requirements.items.map((item, index) => (
                  <li key={index} style={{ 
                    padding: '0.5rem 0', 
                    borderBottom: index < content.details.requirements.items.length - 1 ? 
                      `1px solid ${darkMode ? '#333' : '#eee'}` : 'none' 
                  }}>
                    {item}
                  </li>
                ))}
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
                {content.details.benefits.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: darkMode ? '#cccccc' : '#555555'
              }}>
                {content.details.benefits.items.map((item, index) => (
                  <li key={index} style={{ 
                    padding: '0.5rem 0', 
                    borderBottom: index < content.details.benefits.items.length - 1 ? 
                      `1px solid ${darkMode ? '#333' : '#eee'}` : 'none' 
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
            }}>{content.cards.contact.title}</h3>
            <p style={{
              color: darkMode ? '#cccccc' : '#666666',
              margin: '0 0 1rem 0',
              fontSize: '1rem'
            }}>{content.cards.contact.description}</p>
            <p style={{
              color: darkMode ? '#ffffff' : '#333333',
              fontWeight: 500,
              margin: '0.5rem 0'
            }}>{content.cards.contact.phone}</p>
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
              {content.cards.contact.email}
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
            }}>{content.cards.learning.title}</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {content.cards.learning.items.map((item, index) => (
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
            }}>{content.cards.growth.title}</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {content.cards.growth.items.map((item, index) => (
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
            {content.cta.title}
          </h2>
          <p style={{
            maxWidth: '700px',
            margin: '0 auto 2rem',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            {content.cta.description}
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
            {content.cta.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Internship;