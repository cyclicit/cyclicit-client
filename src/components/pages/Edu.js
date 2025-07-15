import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Edu = ({ darkMode }) => {
  const [isBengali, setIsBengali] = useState(true);
  
  // English content
  const content = {
    hero: {
      title: "Complete Website Package for Educational Institutions",
      subtitle: "Fully compliant with the Bangladesh Government's Digital Education Policy",
      button: "View Demo"
    },
    features: [
      { title: "Dynamic Website", desc: "Modern design fully responsive website that will display correctly on any device" },
      { title: "Monthly Maintenance", desc: "Regular updates, backups and complete maintenance including technical support" },
      { title: "Admin Dashboard", desc: "Facility to easily manage all content including notices, results, gallery" },
      { title: "Special Recognition", desc: "Feature for student of the month and teacher of the month" },
      { title: "Free Course Section", desc: "Educational content and resources open to all" },
      { title: "Affordable Price", desc: "Affordable packages with monthly installment facilities" }
    ],
    gov: {
      title: "Government Guidelines",
      desc: "The Bangladesh government has made it mandatory for all educational institutions to have their own website. Our solution not only meets this requirement but also provides many additional benefits.",
      benefits: [
        "Compliant with all government policies",
        "No need for large one-time investment - monthly installment payment",
        "Regular updates and development",
        "Dedicated support team that understands the needs of educational institutions",
        "Proven track record of increasing institutional digital presence"
      ]
    },
    cta: {
      title: "Ready to upgrade your institution's digital presence?",
      desc: "Get started today with our complete solution",
      buttons: ["View Demo Website", "Contact Us"],
      phone: "Call for any questions: +88 01780755531"
    }
  };

  // Bengali content
  const bengaliContent = {
    hero: {
      title: "শিক্ষা প্রতিষ্ঠানের জন্য সম্পূর্ণ ওয়েবসাইট প্যাকেজ",
      subtitle: "বাংলাদেশ সরকারের ডিজিটাল শিক্ষা নীতির সাথে সম্পূর্ণ সামঞ্জস্যপূর্ণ",
      button: "ডেমো দেখুন"
    },
    features: [
      { title: "ডাইনামিক ওয়েবসাইট", desc: "আধুনিক ডিজাইনের সম্পূর্ণ রেসপনসিভ ওয়েবসাইট যা যেকোনো ডিভাইসে সঠিকভাবে দেখা যাবে" },
      { title: "মাসিক মেইনটেনেন্স", desc: "নিয়মিত আপডেট, ব্যাকআপ এবং টেকনিক্যাল সাপোর্টসহ সম্পূর্ণ রক্ষণাবেক্ষণ" },
      { title: "অ্যাডমিন ড্যাশবোর্ড", desc: "নোটিশ, রেজাল্ট, গ্যালারি সহ সকল কন্টেন্ট সহজে ম্যানেজ করার সুবিধা" },
      { title: "বিশেষ স্বীকৃতি", desc: "মাসের সেরা শিক্ষার্থী এবং মাসের সেরা শিক্ষক ফিচার" },
      { title: "ফ্রি কোর্স সেকশন", desc: "সকলের জন্য উন্মুক্ত শিক্ষামূলক কন্টেন্ট এবং রিসোর্স" },
      { title: "সাশ্রয়ী মূল্য", desc: "মাসিক কিস্তিতে পরিশোধের সুবিধা সহ সাশ্রয়ী প্যাকেজ" }
    ],
    gov: {
      title: "বাংলাদেশ সরকারের নির্দেশনা",
      desc: "বাংলাদেশ সরকার সকল শিক্ষা প্রতিষ্ঠানের জন্য নিজস্ব ওয়েবসাইট বাধ্যতামূলক করেছে। আমাদের সমাধান শুধু এই প্রয়োজনই পূরণ করে না বরং আরও অনেক অতিরিক্ত সুবিধা প্রদান করে।",
      benefits: [
        "সরকারি সকল নীতিমালার সাথে সঙ্গতিপূর্ণ",
        "একালীন বড় অংকের বিনিয়োগের প্রয়োজন নেই - মাসিক কিস্তিতে পরিশোধ",
        "নিয়মিত আপডেট এবং উন্নয়ন",
        "শিক্ষা প্রতিষ্ঠানের প্রয়োজন বুঝে এমন ডেডিকেটেড সাপোর্ট টিম",
        "প্রতিষ্ঠানের ডিজিটাল উপস্থিতি বৃদ্ধির প্রমাণিত রেকর্ড"
      ]
    },
    cta: {
      title: "আপনার প্রতিষ্ঠানের ডিজিটাল উপস্থিতি আপগ্রেড করতে প্রস্তুত?",
      desc: "আজই শুরু করুন আমাদের সম্পূর্ণ সমাধান দিয়ে",
      buttons: ["ডেমো ওয়েবসাইট দেখুন", "যোগাযোগ করুন"],
      phone: "যেকোনো প্রশ্নের জন্য কল করুন: +৮৮ ০১৭৮০৭৫৫৫৩১"
    }
  };

  const currentContent = isBengali ? bengaliContent : content;

  const handleDemoClick = () => {
    window.open('https://eduinsbycyclic.netlify.app/', '_blank');
  };

  const toggleLanguage = () => {
    setIsBengali(!isBengali);
  };

  // Theme colors
  const primaryColor = darkMode ? '#4caf50' : '#2e7d32';
  const secondaryColor = darkMode ? '#81c784' : '#4caf50';
  const bgColor = darkMode ? '#121212' : '#f8f9fa';
  const textColor = darkMode ? '#ffffff' : '#333333';
  const cardBg = darkMode ? '#1e1e1e' : '#ffffff';
  const borderColor = darkMode ? '#2d2d2d' : '#e0e0e0';
  const lightText = darkMode ? '#cccccc' : '#666666';

return (
    <div style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: "'Hind Siliguri', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: '1.6',
        padding: '0 20px',
        minHeight: '100vh'
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
                zIndex: 100,
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
        >
            {isBengali ? 'English' : 'বাংলা'}
        </button>

        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px 24px', // Increased left and right padding
            boxSizing: 'border-box'
        }}>
            {/* Hero Section */}
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                padding: '3rem 0',
                marginBottom: '2rem'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                        marginBottom: '1rem',
                        color: primaryColor,
                        fontWeight: '700',
                        lineHeight: '1.3'
                    }}>
                        {currentContent.hero.title}
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        marginBottom: '2rem',
                        color: lightText
                    }}>
                        {currentContent.hero.subtitle}
                    </p>
                    <button 
                        onClick={handleDemoClick}
                        style={{
                            backgroundColor: primaryColor,
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontWeight: '600',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = secondaryColor;
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = primaryColor;
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                        }}
                    >
                        {currentContent.hero.button}
                    </button>
                </div>
                <div 
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        cursor: 'pointer'
                    }}
                    onClick={handleDemoClick}
                >
                    <img 
                        src="https://i.ibb.co/mVCh0trM/Screenshot-2025-07-15-204341.png" 
                        alt={isBengali ? "শিক্ষা ওয়েবসাইট ড্যাশবোর্ড" : "Education Website Dashboard"} 
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                            border: `1px solid ${borderColor}`
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    />
                </div>
            </section>

            {/* Features Section */}
            <section style={{
                padding: '3rem 0',
                
                
                margin: '2rem 0',
               
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    color: primaryColor,
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    {isBengali ? "আমাদের সেবাসমূহ" : "Our Services"}
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    padding: '0 1rem'
                }}>
                    {currentContent.features.map((feature, index) => (
                        <div 
                            key={index}
                            style={{
                                backgroundColor: cardBg,
                                padding: '1.5rem',
                                borderRadius: '8px',
                                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                border: `1px solid ${borderColor}`
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = `0 8px 24px rgba(76, 175, 80, 0.15)`;
                                e.currentTarget.style.borderColor = secondaryColor;
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = borderColor;
                            }}
                        >
                            <h3 style={{ 
                                color: secondaryColor, 
                                marginBottom: '0.8rem',
                                fontSize: '1.2rem'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{ color: lightText }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Government Compliance Section */}
            <section style={{
                padding: '3rem 1rem',
                margin: '2rem 0',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    color: primaryColor,
                    marginBottom: '1.5rem'
                }}>
                    {currentContent.gov.title}
                </h2>
                <p style={{
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto 2rem',
                    fontSize: '1.1rem',
                    color: lightText
                }}>
                    {currentContent.gov.desc}
                </p>
                <div style={{
                    backgroundColor: darkMode ? '#2d2d2d' : '#eaf2f8',
                    padding: '2rem',
                    borderRadius: '8px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'left',
                    border: `1px solid ${borderColor}`
                }}>
                    <h3 style={{
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: secondaryColor,
                        fontSize: '1.3rem'
                    }}>
                        {isBengali ? "কেন আমাদের সেবা নির্বাচন করবেন?" : "Why Choose Our Service?"}
                    </h3>
                    <ul style={{
                        listStyleType: 'none',
                        padding: '0'
                    }}>
                        {currentContent.gov.benefits.map((benefit, index) => (
                            <li 
                                key={index}
                                style={{
                                    padding: '0.5rem 0',
                                    position: 'relative',
                                    paddingLeft: '1.5rem',
                                    color: lightText
                                }}
                            >
                                ✔ {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                background: darkMode 
                    ? 'linear-gradient(135deg, rgba(27, 94, 32, 0.2), rgba(46, 125, 50, 0.3))' 
                    : 'linear-gradient(135deg, #1a5276, #2874a6)',
                color: 'white',
                borderRadius: '8px',
                margin: '2rem 0 3rem',
                border: `1px solid ${borderColor}`
            }}>
                <h2 style={{
                    color: 'white',
                    marginBottom: '1rem',
                    fontSize: '1.8rem'
                }}>
                    {currentContent.cta.title}
                </h2>
                <p style={{
                    marginBottom: '2rem',
                    fontSize: '1.1rem'
                }}>
                    {currentContent.cta.desc}
                </p>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '1rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem'
                }}>
                    <button 
                        onClick={handleDemoClick}
                        style={{
                            backgroundColor: secondaryColor,
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontWeight: '600',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = darkMode ? '#4caf50' : '#239b56';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = secondaryColor;
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                        }}
                    >
                        {currentContent.cta.buttons[0]}
                    </button>
                    <button
                        onClick={() => window.location.href = '/contact'}
                        style={{
                            backgroundColor: darkMode ? '#1a5276' : '#154360',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontWeight: '600',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = darkMode ? '#154360' : '#1a5276';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = darkMode ? '#1a5276' : '#154360';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                        }}
                    >
                        {currentContent.cta.buttons[1]}
                    </button>
                </div>
                <div style={{ 
                    fontSize: '1.1rem', 
                    color: '#fff', 
                    background: 'rgba(26,82,118,0.7)', 
                    display: 'inline-block', 
                    padding: '8px 18px', 
                    borderRadius: '6px' 
                }}>
                    {currentContent.cta.phone}
                </div>
            </section>

            {/* Responsive Adjustments */}
            <style>
                {`
                @media (min-width: 768px) {
                    section:first-child {
                        flex-direction: row !important;
                        text-align: left !important;
                    }
                    
                    section:first-child > div:first-child {
                        text-align: left !important;
                        flex: 1;
                    }
                    
                    section:first-child h1 {
                        font-size: 2.5rem !important;
                    }
                    .edu-main-container {
                        padding-left: 48px !important;
                        padding-right: 48px !important;
                    }
                }

                @media (min-width: 992px) {
                    section:first-child h1 {
                        font-size: 3rem !important;
                        line-height: 1.2 !important;
                        margin-bottom: 1.5rem !important;
                    }
                    
                    section:first-child p {
                        font-size: 1.3rem !important;
                    }
                    .edu-main-container {
                        padding-left: 80px !important;
                        padding-right: 80px !important;
                    }
                }
                `}
            </style>
        </div>
    </div>
);
};

export default Edu;