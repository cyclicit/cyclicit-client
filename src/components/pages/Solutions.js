import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Solutions = ({ darkMode }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [language, setLanguage] = useState('bn'); // 'en' for English, 'bn' for Bengali

  const deals = [
    {
      id: 'prime',
      title: language === 'en' ? "🚀 Prime Deal" : "🚀 প্রাইম ডিল",
      tag: language === 'en' ? "Limited" : "সীমিত",
      duration: "21 Days",
      price: "$$$",
      priceValue: 2999,
      features: [
        { 
          name: language === 'en' ? "Responsive design" : "রেস্পন্সিভ ডিজাইন", 
          description: language === 'en' 
            ? "Fully responsive across all devices with mobile-first approach" 
            : "মোবাইল-ফার্স্ট অ্যাপ্রোচ সহ সমস্ত ডিভাইসে সম্পূর্ণ রেস্পন্সিভ" 
        },
        { 
          name: language === 'en' ? "SEO optimized" : "এসইও অপ্টিমাইজড", 
          description: language === 'en' 
            ? "Advanced SEO techniques including schema markup and performance optimization" 
            : "স্কিমা মার্কআপ এবং পারফরম্যান্স অপ্টিমাইজেশন সহ উন্নত এসইও কৌশল" 
        },
        { 
          name: language === 'en' ? "1 year free hosting" : "১ বছর ফ্রি হোস্টিং", 
          description: language === 'en' 
            ? "Premium hosting with 99.9% uptime guarantee and CDN" 
            : "৯৯.৯% আপটাইম গ্যারান্টি এবং সিডিএন সহ প্রিমিয়াম হোস্টিং" 
        },
        { 
          name: language === 'en' ? "Priority support" : "অগ্রাধিকার সমর্থন", 
          description: language === 'en' 
            ? "24/7 dedicated support with 1-hour response time" 
            : "১ ঘন্টা প্রতিক্রিয়া সময় সহ ২৪/৭ ডেডিকেটেড সমর্থন" 
        },
        { 
          name: language === 'en' ? "Custom analytics" : "কাস্টম অ্যানালিটিক্স", 
          description: language === 'en' 
            ? "Advanced analytics dashboard with custom KPIs" 
            : "কাস্টম কেপিআই সহ উন্নত অ্যানালিটিক্স ড্যাশবোর্ড" 
        }
      ],
      color: "linear-gradient(135deg, #2e7d32, #4caf50)",
      buttonText: language === 'en' ? "Claim Deal" : "ডিল নিন",
      bestFor: language === 'en' 
        ? "Businesses needing premium features and support" 
        : "প্রিমিয়াম বৈশিষ্ট্য এবং সমর্থন প্রয়োজন এমন ব্যবসাগুলি",
      projectsCompleted: 142,
      clientSatisfaction: "98%"
    },
    {
      id: 'genuine',
      title: language === 'en' ? "🌱 Genuine Deal" : "🌱 জেনুইন ডিল",
      tag: language === 'en' ? "Standard" : "স্ট্যান্ডার্ড",
      duration: "50 Days",
      price: "$$",
      priceValue: 1499,
      features: [
        { 
          name: language === 'en' ? "Mobile-friendly" : "মোবাইল-বান্ধব", 
          description: language === 'en' 
            ? "Responsive design that works well on mobile devices" 
            : "মোবাইল ডিভাইসে ভালভাবে কাজ করে এমন রেস্পন্সিভ ডিজাইন" 
        },
        { 
          name: language === 'en' ? "Basic SEO" : "বেসিক এসইও", 
          description: language === 'en' 
            ? "Standard SEO setup including meta tags and sitemap" 
            : "মেটা ট্যাগ এবং সাইটম্যাপ সহ স্ট্যান্ডার্ড এসইও সেটআপ" 
        },
        { 
          name: language === 'en' ? "6 months hosting" : "৬ মাস হোস্টিং", 
          description: language === 'en' 
            ? "Shared hosting with regular backups" 
            : "নিয়মিত ব্যাকআপ সহ শেয়ার্ড হোস্টিং" 
        },
        { 
          name: language === 'en' ? "Email support" : "ইমেইল সমর্থন", 
          description: language === 'en' 
            ? "Business-day email support with 24-hour response" 
            : "২৪-ঘন্টা প্রতিক্রিয়া সহ ব্যবসায়িক দিনের ইমেইল সমর্থন" 
        },
        { 
          name: language === 'en' ? "Performance reports" : "পারফরম্যান্স রিপোর্ট", 
          description: language === 'en' 
            ? "Monthly performance reports with basic metrics" 
            : "বেসিক মেট্রিক্স সহ মাসিক পারফরম্যান্স রিপোর্ট" 
        }
      ],
      color: "linear-gradient(135deg, #388e3c, #66bb6a)",
      buttonText: language === 'en' ? "Get Started" : "শুরু করুন",
      bestFor: language === 'en' 
        ? "Small businesses and startups" 
        : "ছোট ব্যবসা এবং স্টার্টআপস",
      projectsCompleted: 287,
      clientSatisfaction: "95%"
    },
    {
      id: 'ready',
      title: language === 'en' ? "✨ Ready Deal" : "✨ রেডি ডিল",
      tag: language === 'en' ? "Instant" : "তাত্ক্ষণিক",
      duration: "7 Days",
      price: "$",
      priceValue: 499,
      features: [
        { 
          name: language === 'en' ? "Pre-designed" : "প্রি-ডিজাইনড", 
          description: language === 'en' 
            ? "Choose from our library of professional templates" 
            : "আমাদের পেশাদার টেমপ্লেট লাইব্রেরি থেকে বেছে নিন" 
        },
        { 
          name: language === 'en' ? "Quick setup" : "দ্রুত সেটআপ", 
          description: language === 'en' 
            ? "Get your site live in just a few days" 
            : "মাত্র কয়েক দিনের মধ্যে আপনার সাইট লাইভ করুন" 
        },
        { 
          name: language === 'en' ? "3 months hosting" : "৩ মাস হোস্টিং", 
          description: language === 'en' 
            ? "Basic shared hosting with limited resources" 
            : "সীমিত সম্পদ সহ বেসিক শেয়ার্ড হোস্টিং" 
        },
        { 
          name: language === 'en' ? "Documentation" : "ডকুমেন্টেশন", 
          description: language === 'en' 
            ? "Comprehensive guides and tutorials" 
            : "সম্পূর্ণ গাইড এবং টিউটোরিয়াল" 
        },
        { 
          name: language === 'en' ? "Community support" : "কমিউনিটি সমর্থন", 
          description: language === 'en' 
            ? "Access to our community forums" 
            : "আমাদের কমিউনিটি ফোরামে অ্যাক্সেস" 
        }
      ],
      color: "linear-gradient(135deg, #1b5e20, #43a047)",
      buttonText: language === 'en' ? "Browse Templates" : "টেমপ্লেট ব্রাউজ করুন",
      bestFor: language === 'en' 
        ? "Individuals and side projects" 
        : "ব্যক্তি এবং পার্শ্ব প্রকল্প",
      projectsCompleted: 512,
      clientSatisfaction: "89%"
    }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <div style={{
      backgroundColor: darkMode ?'rgb(52, 0, 84)' : '#f5f7fa',
      padding: '3rem 1rem',
      color: darkMode ? '#ffffff' : '#333333',
      position: 'relative'
    }}>
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLanguage}
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
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem'
          
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
            color: darkMode ? '#81c784' : '#2e7d32',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem'
          }}>
            {language === 'en' ? 'Our Solutions' : 'আমাদের সমাধানসমূহ'}
          </h2>
          
          <h1 style={{
            fontSize: '1.8rem',
            margin: '0.5rem 0 1rem',
            lineHeight: '1.3'
          }}>
            {language === 'en' 
              ? 'Tailored Packages for Every Need' 
              : 'প্রতিটি প্রয়োজনের জন্য কাস্টমাইজড প্যাকেজ'}
          </h1>
          
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            opacity: 0.8,
            lineHeight: '1.6'
          }}>
            {language === 'en' 
              ? 'Choose the perfect package for your project. All plans include free consultations, quality assurance, and our satisfaction guarantee.' 
              : 'আপনার প্রকল্পের জন্য নিখুঁত প্যাকেজ নির্বাচন করুন। সমস্ত পরিকল্পনায় বিনামূল্যে পরামর্শ, গুণমান নিশ্চিতকরণ এবং আমাদের সন্তুষ্টি গ্যারান্টি অন্তর্ভুক্ত রয়েছে।'}
          </p>
        </div>

        {selectedFeature === 'compare' ? (
          <div style={{
            background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>
              {language === 'en' ? 'Detailed Feature Comparison' : 'বিস্তারিত বৈশিষ্ট্য তুলনা'}
            </h3>
            
            <div style={{
               marginTop: '2rem',
              padding: '1rem',
              background: darkMode ? 'rgba(46, 125, 50, 0.1)' : 'rgba(76, 175, 80, 0.1)',
              borderRadius: '8px',
              borderLeft: `4px solid ${darkMode ? '#81c784' : '#4caf50'}`
            }}>
              {deals.map(deal => (
                <div key={deal.id} style={{
                  background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.03)',
                  borderRadius: '8px',
                  padding: '1rem',
                  borderLeft: `4px solid ${darkMode ? '#81c784' : '#4caf50'}`
                }}>
                  <h4 style={{ 
                    marginTop: 0,
                    color: darkMode ? '#81c784' : '#2e7d32',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>{deal.title.split(' ')[0]}</span>
                    {deal.title.split(' ').slice(1).join(' ')}
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    opacity: 0.9
                  }}>
                    <strong>{language === 'en' ? 'Best for:' : 'সেরা জন্য:'}</strong> {deal.bestFor}
                  </p>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span>{language === 'en' ? 'Price:' : 'মূল্য:'} {deal.price}</span>
                    <span>{language === 'en' ? 'Delivery:' : 'ডেলিভারি:'} {deal.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: darkMode ? 'rgba(46, 125, 50, 0.1)' : 'rgba(76, 175, 80, 0.1)',
              borderRadius: '8px',
              borderLeft: `4px solid ${darkMode ? '#81c784' : '#4caf50'}`
            }}>
              <h4 style={{ 
                marginTop: 0,
                color: darkMode ? '#81c784' : '#2e7d32'
              }}>
                {language === 'en' ? 'How to choose?' : 'কিভাবে বেছে নেবেন?'}
              </h4>
              <ul style={{
                paddingLeft: '1.2rem',
                marginBottom: 0
              }}>
                <li><strong>{language === 'en' ? 'Prime Deal' : 'প্রাইম ডিল'}</strong>: {deals[0].bestFor}</li>
                <li><strong>{language === 'en' ? 'Genuine Deal' : 'জেনুইন ডিল'}</strong>: {deals[1].bestFor}</li>
                <li><strong>{language === 'en' ? 'Ready Deal' : 'রেডি ডিল'}</strong>: {deals[2].bestFor}</li>
              </ul>
            </div>
          </div>
        ) : (
          <div style={{
            background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>
              {language === 'en' ? 'Detailed Feature Comparison' : 'বিস্তারিত বৈশিষ্ট্য তুলনা'}
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {deals.map(deal => (
                <div key={deal.id} style={{
                  background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.03)',
                  borderRadius: '8px',
                  padding: '1rem',
                  borderLeft: `4px solid ${darkMode ? '#81c784' : '#4caf50'}`
                }}>
                  <h4 style={{ 
                    marginTop: 0,
                    color: darkMode ? '#81c784' : '#2e7d32',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>{deal.title.split(' ')[0]}</span>
                    {deal.title.split(' ').slice(1).join(' ')}
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    opacity: 0.9
                  }}>
                    <strong>{language === 'en' ? 'Best for:' : 'সেরা জন্য:'}</strong> {deal.bestFor}
                  </p>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span>{language === 'en' ? 'Price:' : 'মূল্য:'} {deal.price}</span>
                    <span>{language === 'en' ? 'Delivery:' : 'ডেলিভারি:'} {deal.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: darkMode ? 'rgba(46, 125, 50, 0.1)' : 'rgba(76, 175, 80, 0.1)',
              borderRadius: '8px',
              borderLeft: `4px solid ${darkMode ? '#81c784' : '#4caf50'}`
            }}>
              <h4 style={{ 
                marginTop: 0,
                color: darkMode ? '#81c784' : '#2e7d32'
              }}>
                {language === 'en' ? 'How to choose?' : 'কিভাবে বেছে নেবেন?'}
              </h4>
              <ul style={{
                paddingLeft: '1.2rem',
                marginBottom: 0
              }}>
                <li><strong>{language === 'en' ? 'Prime Deal' : 'প্রাইম ডিল'}</strong>: {deals[0].bestFor}</li>
                <li><strong>{language === 'en' ? 'Genuine Deal' : 'জেনুইন ডিল'}</strong>: {deals[1].bestFor}</li>
                <li><strong>{language === 'en' ? 'Ready Deal' : 'রেডি ডিল'}</strong>: {deals[2].bestFor}</li>
              </ul>
            </div>
          </div>
        )}

        {/* Additional Info Section */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>
            {language === 'en' 
              ? 'Not sure which package is right for you?' 
              : 'নিশ্চিত নন কোন প্যাকেজটি আপনার জন্য সঠিক?'}
          </h3>
          <p style={{
            maxWidth: '600px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6',
            opacity: 0.8
          }}>
            {language === 'en' 
              ? 'Our experts can help you choose the perfect solution based on your budget, timeline, and specific requirements.' 
              : 'আমাদের বিশেষজ্ঞরা আপনার বাজেট, সময়সীমা এবং নির্দিষ্ট প্রয়োজনীয়তার ভিত্তিতে নিখুঁত সমাধান বেছে নিতে আপনাকে সাহায্য করতে পারেন।'}
          </p>
          <Link 
            to="/buy" 
            style={{
              display: 'inline-block',
              background: darkMode ? '#2e7d32' : '#4caf50',
              color: 'white',
              padding: '0.8rem 1.8rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              ':hover': {
                background: darkMode ? '#1b5e20' : '#388e3c',
                transform: 'translateY(-2px)',
                boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
              }
            }}
          >
            {language === 'en' 
              ? 'Get Personalized Recommendation' 
              : 'ব্যক্তিগতকৃত সুপারিশ পান'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;