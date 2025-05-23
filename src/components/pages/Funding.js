import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Funding = ({ darkMode }) => {
  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const darkGreen = '#1b5e20';
  const lightGreen = '#e8f5e9';

  // State for accordion and tabs
  const [activeTab, setActiveTab] = useState('startups');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Funding options data
  const fundingOptions = {
    startups: [
      { name: "Seed Funding", amount: "Up to 50,000", desc: "For early-stage ideas with prototype" },
      { name: "Growth Funding", amount: "50,000 - 200,000", desc: "For scaling existing products" },
      { name: "Innovation Grants", amount: "10,000 - 30,000", desc: "For research-driven projects" }
    ],
    students: [
      { name: "Scholarships", amount: "5,000 - 20,000", desc: "For student-led tech projects" },
      { name: "Hackathon Prizes", amount: "1,000 - 10,000", desc: "Competitive funding for winners" },
      { name: "Research Fellowships", amount: "2,000/month", desc: "For academic tech research" }
    ],
    nonprofits: [
      { name: "Tech for Good Grants", amount: "25,000 - 100,000", desc: "For social impact projects" },
      { name: "Digital Inclusion Fund", amount: "Up to 75,000", desc: "Bridging the digital divide" },
      { name: "Community Innovation", amount: "10,000 - 50,000", desc: "Local tech solutions" }
    ]
  };



  // FAQ items
  const faqs = [
    {
      question: "What types of projects do you fund?",
      answer: "We fund a wide range of tech projects including software development, hardware innovation, AI/ML applications, and social impact technology. The project should demonstrate innovation, feasibility, and potential for impact."
    },
    {
      question: "How long does the application process take?",
      answer: "The initial review takes 2-3 weeks. If your application progresses, the full evaluation typically takes 4-6 weeks. We'll keep you informed at every stage of the process."
    },
    {
      question: "Do I need to have a team to apply?",
      answer: "While having a team is beneficial, solo founders can also apply. What's most important is your ability to execute the project, whether through your own skills or by building the right team with our support."
    },
    {
      question: "What happens after funding is awarded?",
      answer: "You'll receive the funding in milestone-based installments. We provide ongoing support including mentorship, technical resources, and networking opportunities to help ensure your success."
    }
  ];

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f8f9fa',
      padding: '4rem 1rem',
      color: darkMode ? '#ffffff' : '#333333'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.2rem',
            color: darkMode ? '#81c784' : primaryGreen,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>Tech Funding</h2>
          
         
          
          
        </div>

        

        {/* Funding Options Tabs */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: darkMode ? '#ffffff' : primaryGreen,
            marginBottom: '2rem'
          }}>Funding Programs</h3>
          
          {/* Tabs Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {['startups', 'students', 'nonprofits'].map((tab) => (
              <button
                key={tab}
                style={{
                  padding: '0.8rem 1.5rem',
                  borderRadius: '50px',
                  background: activeTab === tab 
                    ? `linear-gradient(90deg, ${darkGreen}, ${primaryGreen})` 
                    : darkMode ? '#2a2a2a' : '#e0e0e0',
                  color: activeTab === tab ? 'white' : (darkMode ? '#cccccc' : '#333333'),
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Tabs Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {fundingOptions[activeTab].map((option, index) => (
              <div 
                key={index}
                style={{
                  background: darkMode ? '#1e1e1e' : '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  borderLeft: `4px solid ${secondaryGreen}`,
                  transition: 'transform 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <h4 style={{
                  fontSize: '1.2rem',
                  margin: '0 0 0.5rem 0',
                  color: darkMode ? '#ffffff' : primaryGreen
                }}>{option.name}</h4>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: secondaryGreen,
                  marginBottom: '0.5rem'
                }}>{option.amount}</div>
                <p style={{
                  color: darkMode ? '#cccccc' : '#666666',
                  margin: 0,
                  lineHeight: 1.6
                }}>{option.desc}</p>
              </div>
            ))}
          </div>
        </div>

         {/* Additional Resources */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: darkMode ? '#1e1e1e' : '#ffffff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            borderTop: `4px solid ${secondaryGreen}`
          }}>
            <h4 style={{
              fontSize: '1.2rem',
              color: darkMode ? '#ffffff' : primaryGreen,
              margin: '0 0 1rem 0'
            }}>Application Tips</h4>
            <ul style={{
              paddingLeft: '1.2rem',
              color: darkMode ? '#cccccc' : '#666666',
              lineHeight: 1.8
            }}>
              <li>Clearly define your problem and solution</li>
              <li>Include market research data</li>
              <li>Show your team's capabilities</li>
              <li>Provide a realistic timeline</li>
              <li>Explain how funding will be used</li>
            </ul>
          </div>
          <div style={{
            background: darkMode ? '#1e1e1e' : '#ffffff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            borderTop: `4px solid ${secondaryGreen}`
          }}>
            <h4 style={{
              fontSize: '1.2rem',
              color: darkMode ? '#ffffff' : primaryGreen,
              margin: '0 0 1rem 0'
            }}>Eligibility</h4>
            <ul style={{
              paddingLeft: '1.2rem',
              color: darkMode ? '#cccccc' : '#666666',
              lineHeight: 1.8
            }}>
              <li>Tech-focused projects only</li>
              <li>Open to individuals and organizations</li>
              <li>No geographic restrictions</li>
              <li>Previous experience not required</li>
              <li>Must be original work</li>
            </ul>
          </div>
          <div style={{
            background: darkMode ? '#1e1e1e' : '#ffffff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            borderTop: `4px solid ${secondaryGreen}`
          }}>
            <h4 style={{
              fontSize: '1.2rem',
              color: darkMode ? '#ffffff' : primaryGreen,
              margin: '0 0 1rem 0'
            }}>Key Dates</h4>
            <ul style={{
              paddingLeft: '1.2rem',
              color: darkMode ? '#cccccc' : '#666666',
              lineHeight: 1.8
            }}>
              <li>Applications accepted year-round</li>
              <li>Quarterly review cycles</li>
              <li>Next deadline: June 30</li>
              <li>Final decisions within 6 weeks</li>
              <li>Funding disbursed within 2 weeks of approval</li>
            </ul>
          </div>
        </div>

       

        

      

        {/* CTA Section */}
        <div style={{ 
          textAlign: 'center',
          background: `linear-gradient(135deg, ${darkGreen}, ${primaryGreen})`,
          padding: '3rem 2rem',
          borderRadius: '12px',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            color: '#ffffff',
            margin: '0 0 1rem 0'
          }}>Ready to Bring Your Idea to Life?</h3>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Join hundreds of innovators who have transformed their ideas into successful projects with our funding and support.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                background: '#ffffff',
                color: primaryGreen,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                ':hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                  background: '#f5f5f5'
                }
              }}
            >
              Apply Now
            </Link>
            <Link 
              to="/funding-guide" 
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                background: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255,255,255,0.3)',
                ':hover': {
                  transform: 'translateY(-3px)',
                  borderColor: '#ffffff',
                  background: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Learn More
            </Link>
          </div>
        </div>

          {/* FAQ Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: darkMode ? '#ffffff' : primaryGreen,
            marginBottom: '2rem'
          }}>Frequently Asked Questions</h3>
          
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  background: darkMode ? '#1e1e1e' : '#ffffff',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              >
                <div 
                  style={{
                    padding: '1.2rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: expandedFaq === index 
                      ? (darkMode ? '#2a2a2a' : lightGreen)
                      : 'transparent',
                    transition: 'background-color 0.3s ease'
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <h4 style={{
                    margin: 0,
                    color: expandedFaq === index ? secondaryGreen : (darkMode ? '#ffffff' : '#333333'),
                    fontSize: '1.1rem'
                  }}>
                    {faq.question}
                  </h4>
                  <div style={{
                    fontSize: '1.2rem',
                    color: secondaryGreen,
                    transform: expandedFaq === index ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease'
                  }}>
                    +
                  </div>
                </div>
                {expandedFaq === index && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    color: darkMode ? '#cccccc' : '#666666',
                    lineHeight: 1.6
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Funding;