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
  const [language, setLanguage] = useState('bengali'); // 'english' or 'bengali'

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Funding options data
  const fundingOptions = {
    startups: [
      { 
        name: language === 'english' ? "Seed Funding" : "সীড ফান্ডিং", 
        amount: language === 'english' ? "Up to 50,000" : "৫০,০০০ পর্যন্ত", 
        desc: language === 'english' ? "For early-stage ideas with prototype" : "প্রোটোটাইপ সহ প্রাথমিক পর্যায়ের ধারণার জন্য" 
      },
      { 
        name: language === 'english' ? "Growth Funding" : "গ্রোথ ফান্ডিং", 
        amount: language === 'english' ? "50,000 - 200,000" : "৫০,০০০ - ২,০০,০০০", 
        desc: language === 'english' ? "For scaling existing products" : "বিদ্যমান পণ্য স্কেল করার জন্য" 
      },
      { 
        name: language === 'english' ? "Innovation Grants" : "ইনোভেশন গ্রান্ট", 
        amount: language === 'english' ? "10,000 - 30,000" : "১০,০০০ - ৩০,০০০", 
        desc: language === 'english' ? "For research-driven projects" : "গবেষণা-চালিত প্রকল্পের জন্য" 
      }
    ],
    students: [
      { 
        name: language === 'english' ? "Scholarships" : "স্কলারশিপ", 
        amount: language === 'english' ? "5,000 - 20,000" : "৫,০০০ - ২০,০০০", 
        desc: language === 'english' ? "For student-led tech projects" : "ছাত্র-নেতৃত্বাধীন প্রযুক্তি প্রকল্পের জন্য" 
      },
      { 
        name: language === 'english' ? "Hackathon Prizes" : "হ্যাকাথন পুরস্কার", 
        amount: language === 'english' ? "1,000 - 10,000" : "১,০০০ - ১০,০০০", 
        desc: language === 'english' ? "Competitive funding for winners" : "বিজয়ীদের জন্য প্রতিযোগিতামূলক তহবিল" 
      },
      { 
        name: language === 'english' ? "Research Fellowships" : "গবেষণা ফেলোশিপ", 
        amount: language === 'english' ? "2,000/month" : "২,০০০/মাস", 
        desc: language === 'english' ? "For academic tech research" : "একাডেমিক প্রযুক্তি গবেষণার জন্য" 
      }
    ],
    nonprofits: [
      { 
        name: language === 'english' ? "Tech for Good Grants" : "সামাজিক প্রযুক্তি অনুদান", 
        amount: language === 'english' ? "25,000 - 100,000" : "২৫,০০০ - ১,০০,০০০", 
        desc: language === 'english' ? "For social impact projects" : "সামাজিক প্রভাব প্রকল্পের জন্য" 
      },
      { 
        name: language === 'english' ? "Digital Inclusion Fund" : "ডিজিটাল অন্তর্ভুক্তি তহবিল", 
        amount: language === 'english' ? "Up to 75,000" : "৭৫,০০০ পর্যন্ত", 
        desc: language === 'english' ? "Bridging the digital divide" : "ডিজিটাল বিভেদ দূর করা" 
      },
      { 
        name: language === 'english' ? "Community Innovation" : "সম্পদায় উদ্ভাবন", 
        amount: language === 'english' ? "10,000 - 50,000" : "১০,০০০ - ৫০,০০০", 
        desc: language === 'english' ? "Local tech solutions" : "স্থানীয় প্রযুক্তি সমাধান" 
      }
    ]
  };

  // FAQ items
  const faqs = [
    {
      question: language === 'english' ? "What types of projects do you fund?" : "আপনারা কোন ধরনের প্রকল্পে তহবিল প্রদান করেন?",
      answer: language === 'english' 
        ? "We fund a wide range of tech projects including software development, hardware innovation, AI/ML applications, and social impact technology. The project should demonstrate innovation, feasibility, and potential for impact." 
        : "আমরা সফ্টওয়্যার ডেভেলপমেন্ট, হার্ডওয়্যার উদ্ভাবন, AI/ML অ্যাপ্লিকেশন এবং সামাজিক প্রভাব প্রযুক্তি সহ বিস্তৃত পরিসরের প্রযুক্তি প্রকল্পে তহবিল প্রদান করি। প্রকল্পটিতে উদ্ভাবন, সম্ভাব্যতা এবং প্রভাবের সম্ভাবনা প্রদর্শন করা উচিত।"
    },
    {
      question: language === 'english' ? "How long does the application process take?" : "আবেদন প্রক্রিয়াটি কতদিন সময় নেয়?",
      answer: language === 'english' 
        ? "The initial review takes 2-3 weeks. If your application progresses, the full evaluation typically takes 4-6 weeks. We'll keep you informed at every stage of the process." 
        : "প্রাথমিক পর্যালোচনায় ২-৩ সপ্তাহ সময় লাগে। যদি আপনার আবেদন এগিয়ে যায়, সম্পূর্ণ মূল্যায়ন সাধারণত ৪-৬ সপ্তাহ সময় নেয়। আমরা প্রক্রিয়ার প্রতিটি পর্যায়ে আপনাকে অবহিত রাখব।"
    },
    {
      question: language === 'english' ? "Do I need to have a team to apply?" : "আবেদন করার জন্য কি আমার একটি দল প্রয়োজন?",
      answer: language === 'english' 
        ? "While having a team is beneficial, solo founders can also apply. What's most important is your ability to execute the project, whether through your own skills or by building the right team with our support." 
        : "একটি দল থাকা উপকারী হলেও, একক প্রতিষ্ঠাতারাও আবেদন করতে পারেন। সবচেয়ে গুরুত্বপূর্ণ হল প্রকল্পটি বাস্তবায়নের আপনার সক্ষমতা, তা আপনার নিজের দক্ষতার মাধ্যমে হোক বা আমাদের সমর্থন নিয়ে সঠিক দল গঠনের মাধ্যমে।"
    },
    {
      question: language === 'english' ? "What happens after funding is awarded?" : "তহবিল প্রদানের পর কি হয়?",
      answer: language === 'english' 
        ? "You'll receive the funding in milestone-based installments. We provide ongoing support including mentorship, technical resources, and networking opportunities to help ensure your success." 
        : "আপনি মাইলফলক-ভিত্তিক কিস্তিতে তহবিল পাবেন। আমরা আপনার সাফল্য নিশ্চিত করতে পরামর্শদান, প্রযুক্তিগত সম্পদ এবং নেটওয়ার্কিং সুযোগ সহ চলমান সহায়তা প্রদান করি।"
    }
  ];

  // Translated texts
  const translations = {
    header: {
      title: language === 'english' ? "Entrepreneur Tech Funding" : "উদ্যোক্তা প্রযুক্তি তহবিল",
      subtitle: language === 'english' 
        ? "Funding Programs for Entrepreneurs and Community" 
        : "উদ্যোক্তা এবং কমিউনিটির জন্য তহবিল কর্মসূচি"
    },
    tabs: {
      startups: language === 'english' ? "startups" : "স্টার্টআপ",
      students: language === 'english' ? "students" : "শিক্ষার্থী",
      nonprofits: language === 'english' ? "nonprofits" : "লাভ-নিরপেক্ষ"
    },
    resources: {
      tipsTitle: language === 'english' ? "Application Tips" : "আবেদনের টিপস",
      tips: language === 'english' 
        ? [
            "Clearly define your problem and solution",
            "Include market research data",
            "Show your team's capabilities",
            "Provide a realistic timeline",
            "Explain how funding will be used"
          ]
        : [
            "আপনার সমস্যা এবং সমাধান স্পষ্টভাবে সংজ্ঞায়িত করুন",
            "বাজার গবেষণা ডেটা অন্তর্ভুক্ত করুন",
            "আপনার দলের সক্ষমতা দেখান",
            "একটি বাস্তবসম্মত সময়সূচী প্রদান করুন",
            "ব্যাখ্যা করুন কিভাবে তহবিল ব্যবহার করা হবে"
          ],
      eligibilityTitle: language === 'english' ? "Eligibility" : "যোগ্যতা",
      eligibility: language === 'english' 
        ? [
            "Tech-focused projects only",
            "Open to individuals and organizations",
            "No geographic restrictions",
            "Previous experience not required",
            "Must be original work"
          ]
        : [
            "শুধুমাত্র প্রযুক্তি-কেন্দ্রিক প্রকল্প",
            "ব্যক্তি এবং সংস্থার জন্য উন্মুক্ত",
            "কোন ভৌগোলিক সীমাবদ্ধতা নেই",
            "পূর্ববর্তী অভিজ্ঞতার প্রয়োজন নেই",
            "মূল কাজ হতে হবে"
          ],
      datesTitle: language === 'english' ? "Key Dates" : "গুরুত্বপূর্ণ তারিখ",
      dates: language === 'english' 
        ? [
            "Applications accepted year-round",
            "Quarterly review cycles",
            "Next deadline: June 30",
            "Final decisions within 6 weeks",
            "Funding disbursed within 2 weeks of approval"
          ]
        : [
            "সারা বছর আবেদন গ্রহণ করা হয়",
            "ত্রৈমাসিক পর্যালোচনা চক্র",
            "পরবর্তী শেষ তারিখ: ৩০ জুন",
            "৬ সপ্তাহের মধ্যে চূড়ান্ত সিদ্ধান্ত",
            "অনুমোদনের ২ সপ্তাহের মধ্যে তহবিল বিতরণ"
          ]
    },
    cta: {
      title: language === 'english' ? "Ready to Bring Your Idea to Life?" : "আপনার ধারণাকে বাস্তবে রূপান্তর করতে প্রস্তুত?",
      description: language === 'english' 
        ? "Join innovators who have transformed their ideas into successful projects with our funding and support." 
        : "আমাদের তহবিল এবং সমর্থন নিয়ে তাদের ধারণাকে সফল প্রকল্পে রূপান্তরিত করেছেন এমন উদ্ভাবকদের সাথে যোগ দিন।",
      apply: language === 'english' ? "Apply Now" : "এখনই আবেদন করুন"
    },
    faqTitle: language === 'english' ? "Frequently Asked Questions" : "প্রায়শই জিজ্ঞাসিত প্রশ্ন"
  };

  return (
    <div style={{
      backgroundColor: darkMode ?'rgb(52, 0, 84)' :'#ffffff',
      padding: '4rem 1rem',
      color: darkMode ? '#ffffff' : '#333333',
      position: 'relative'
    }}>
      {/* Language Toggle Button */}
      <button 
        onClick={() => setLanguage(language === 'english' ? 'bengali' : 'english')}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem 1rem',
         
          background: darkMode ? '#2e7d32' : '#fff',
          color: darkMode ? '#fff' : '#2e7d32',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          zIndex: 100
        }}
      >
        {language === 'english' ? 'বাংলা' : 'English'}
      </button>

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
          }}>{translations.header.title}</h2>
        </div>

        {/* Funding Options Tabs */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: darkMode ? '#ffffff' : primaryGreen,
            marginBottom: '2rem'
          }}>{translations.header.subtitle}</h3>
          
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
                {translations.tabs[tab]}
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
            }}>{translations.resources.tipsTitle}</h4>
            <ul style={{
              paddingLeft: '1.2rem',
              color: darkMode ? '#cccccc' : '#666666',
              lineHeight: 1.8
            }}>
              {translations.resources.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
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
            }}>{translations.resources.eligibilityTitle}</h4>
            <ul style={{
              paddingLeft: '1.2rem',
              color: darkMode ? '#cccccc' : '#666666',
              lineHeight: 1.8
            }}>
              {translations.resources.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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
            }}>{translations.resources.datesTitle}</h4>
            <ul style={{
              paddingLeft: '1.2rem',
              color: darkMode ? '#cccccc' : '#666666',
              lineHeight: 1.8
            }}>
              {translations.resources.dates.map((date, index) => (
                <li key={index}>{date}</li>
              ))}
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
          }}>{translations.cta.title}</h3>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            {translations.cta.description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                background: '#ffffff',
                
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
              {translations.cta.apply}
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
          }}>{translations.faqTitle}</h3>
          
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