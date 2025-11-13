import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Funding = ({ darkMode }) => {


  // Green theme colors
  const primaryGreen = '#2e7d32';
  const secondaryGreen = '#4caf50';
  const darkGreen = '#1b5e20ff';
  const lightGreen = '#e8f5e9';

  // State for language
  const [language, setLanguage] = useState('bengali'); // 'english' or 'bengali'

  // Translated content
  const content = {
    english: {
      header: {
        title: "Cyclic-it's Vision",
        subtitle: "Empowering Bangladeshi Entrepreneurs Through Technology"
      },
      sections: {
        vision: {
          title: "Our Vision for Bangladesh",
          content: [
            "At Cyclicit, we envision a Bangladesh where every entrepreneur has access to cutting-edge technology and digital solutions. We are committed to bridging the digital divide and creating equal opportunities for business growth across all regions of the country.",
            "Our mission extends beyond immediate solutions - we're building sustainable partnerships that nurture long-term success and technological independence for Bangladeshi businesses."
          ]
        },
        partnership: {
          title: "Long-Term Partnerships & Support",
          content: [
            "We believe in growing together with our partners. That's why we offer comprehensive tech support, exclusive discounts, and customized solutions tailored to the unique needs of Bangladeshi entrepreneurs.",
            "Our partnership model includes ongoing technical assistance, regular updates, and strategic guidance to ensure your business stays ahead in the competitive digital landscape."
          ]
        },
        opportunity: {
          title: "The E-commerce Revolution in Bangladesh",
          content: [
            "Bangladesh's e-commerce market is experiencing unprecedented growth, with projections showing exponential expansion in the coming years. We strongly recommend our services to position your business at the forefront of this digital transformation.",
            "With increasing internet penetration, digital literacy, and consumer confidence in online transactions, now is the perfect time to establish a robust digital presence. Our solutions are designed to help you capitalize on this massive opportunity."
          ]
        },
        education: {
          title: "EdTech Initiatives with Local Institutions",
          content: [
            "Through our educational technology programs, we collaborate with local universities, colleges, and training centers to build the next generation of tech-savvy entrepreneurs.",
            "Our EdTech initiatives include digital literacy workshops, advanced technology training, and entrepreneurship development programs that equip students and professionals with the skills needed to thrive in the digital economy."
          ]
        },
        impact: {
          title: "Creating Lasting Impact",
          content: [
            "We measure our success by the success of our partners. From rural startups to urban enterprises, we've helped hundreds of businesses establish their digital footprint and achieve sustainable growth.",
            "Our commitment to Bangladesh's entrepreneurial ecosystem includes mentorship programs, networking opportunities, and continuous innovation to address the evolving challenges of the digital marketplace."
          ]
        }
      },
      stats: {
        entrepreneurs: "500+ Entrepreneurs Supported",
        partnerships: "50+ Long-term Partnerships",
        institutions: "25+ Educational Institutions",
        growth: "300% Market Growth Potential"
      },
      cta: {
        title: "Join the Digital Revolution",
        description: "Partner with Cyclicit to transform your business and be part of Bangladesh's exciting digital future",
        partner: "Become a Partner",
        learn: "Learn More"
      }
    },
    bengali: {
      header: {
        title: "ভিশন",
        subtitle: "প্রযুক্তির মাধ্যমে বাংলাদেশী উদ্যোক্তাদের ক্ষমতায়ন"
      },
      sections: {
        vision: {
          title: "বাংলাদেশের জন্য আমাদের ভিশন",
          content: [
            " আমরা একটি বাংলাদেশের স্বপ্ন দেখি যেখানে প্রতিটি উদ্যোক্তার কাছে অত্যাধুনিক প্রযুক্তি এবং ডিজিটাল সমাধান প্রবেশযোগ্য। আমরা ডিজিটাল বিভেদ দূর করতে এবং দেশের সকল অঞ্চলে ব্যবসায়িক বৃদ্ধির জন্য সমান সুযোগ সৃষ্টিতে প্রতিশ্রুতিবদ্ধ।",
            "আমাদের মিশন তাৎক্ষণিক সমাধানের বাইরে প্রসারিত - আমরা বাংলাদেশী ব্যবসার জন্য দীর্ঘমেয়াদী সাফল্য এবং প্রযুক্তিগত স্বাধীনতা লালন করে এমন টেকসই অংশীদারিত্ব গড়ে তুলছি।"
          ]
        },
        partnership: {
          title: "দীর্ঘমেয়াদী অংশীদারিত্ব ও সমর্থন",
          content: [
            "আমরা আমাদের অংশীদারদের সাথে একসাথে বৃদ্ধি বিশ্বাস করি। এইজন্যই আমরা বাংলাদেশী উদ্যোক্তাদের অনন্য প্রয়োজন অনুযায়ী কাস্টমাইজড সমাধান, ব্যাপক প্রযুক্তি সহায়তা এবং বিশেষ ছাড় প্রদান করি।",
            "আমাদের অংশীদারিত্ব মডেলে চলমান প্রযুক্তিগত সহায়তা, নিয়মিত আপডেট এবং কৌশলগত নির্দেশনা অন্তর্ভুক্ত রয়েছে যা নিশ্চিত করে যে আপনার ব্যবসা প্রতিযোগিতামূলক ডিজিটাল ল্যান্ডস্কেপে এগিয়ে থাকে।"
          ]
        },
        opportunity: {
          title: "বাংলাদেশে ই-কমার্স বিপ্লব",
          content: [
            "বাংলাদেশের ই-কমার্স বাজার অভূতপূর্ব বৃদ্ধি অনুভব করছে, আগামী বছরগুলিতে সূচকীয় সম্প্রসারণ দেখানো পূর্বাভাস সহ। আমরা এই ডিজিটাল রূপান্তরের অগ্রভাগে আপনার ব্যবসাকে অবস্থান করতে আমাদের পরিষেবাগুলি দৃঢ়ভাবে সুপারিশ করি।",
            "বর্ধমান ইন্টারনেট অনুপ্রবেশ, ডিজিটাল সাক্ষরতা এবং অনলাইন লেনদেনে ভোক্তাদের আত্মবিশ্বাসের সাথে, এখন একটি শক্তিশালী ডিজিটাল উপস্থিতি প্রতিষ্ঠার জন্য নিখুঁত সময়। আমাদের সমাধানগুলি এই বিশাল সুযোগের সদ্ব্যবহার করতে আপনাকে সাহায্য করার জন্য ডিজাইন করা হয়েছে।"
          ]
        },
        education: {
          title: "স্থানীয় প্রতিষ্ঠানের সাথে এডটেক উদ্যোগ",
          content: [
            "আমাদের শিক্ষাগত প্রযুক্তি প্রোগ্রামের মাধ্যমে, আমরা প্রযুক্তি-সচেত উদ্যোক্তাদের পরবর্তী প্রজন্ম গড়ে তুলতে স্থানীয় বিশ্ববিদ্যালয়, কলেজ এবং প্রশিক্ষণ কেন্দ্রগুলির সাথে সহযোগিতা করি।",
            "আমাদের এডটেক উদ্যোগগুলিতে ডিজিটাল সাক্ষরতা কর্মশালা, উন্নত প্রযুক্তি প্রশিক্ষণ এবং উদ্যোক্তা উন্নয়ন প্রোগ্রাম অন্তর্ভুক্ত রয়েছে যা শিক্ষার্থী এবং পেশাদারদের ডিজিটাল অর্থনীতিতে উন্নতি করার জন্য প্রয়োজনীয় দক্ষতা দিয়ে সজ্জিত করে।"
          ]
        },
        impact: {
          title: "স্থায়ী প্রভাব সৃষ্টি",
          content: [
            "আমরা আমাদের অংশীদারদের সাফল্য দ্বারা আমাদের সাফল্য পরিমাপ করি। গ্রামীণ স্টার্টআপ থেকে শহুরে উদ্যোগ পর্যন্ত, আমরা শত শত ব্যবসাকে তাদের ডিজিটাল পদচিহ্ন প্রতিষ্ঠা করতে এবং টেকসই বৃদ্ধি অর্জন করতে সাহায্য করেছি।",
            "বাংলাদেশের উদ্যোক্তা ইকোসিস্টেমের প্রতি আমাদের প্রতিশ্রুতিতে পরামর্শদাতা প্রোগ্রাম, নেটওয়ার্কিং সুযোগ এবং ডিজিটাল মার্কেটপ্লেসের বিবর্তনশীল চ্যালেঞ্জগুলি মোকাবেলা করার জন্য অবিচ্ছিন্ন উদ্ভাবন অন্তর্ভুক্ত রয়েছে।"
          ]
        }
      },
      stats: {
        entrepreneurs: "৫০০+ উদ্যোক্তা সমর্থিত",
        partnerships: "৫০+ দীর্ঘমেয়াদী অংশীদারিত্ব",
        institutions: "২৫+ শিক্ষাগত প্রতিষ্ঠান",
        growth: "৩০০% মার্কেট গ্রোথ সম্ভাবনা"
      },
      cta: {
        title: "ডিজিটাল বিপ্লবে যোগ দিন",
        description: "আপনার ব্যবসা রূপান্তর করতে এবং বাংলাদেশের উত্তেজনাপূর্ণ ডিজিটাল ভবিষ্যতের অংশ হতে সাইক্লিসিটের সাথে অংশীদার হন",
        partner: "একটি অংশীদার হন",
        learn: "আরও জানুন"
      }
    }
  };

  const t = content[language];

  return (
    <div style={{
      backgroundColor: darkMode ? 'rgba(14, 53, 0, 1)' : '#004007ff',
      padding: '4rem 1rem',
      color: darkMode ? '#ffffff' : '#333333',
      position: 'relative',
      minHeight: '100vh'
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
          zIndex: 100,
          fontWeight: 600
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
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: darkMode ? '#81c784' : primaryGreen,
            marginBottom: '1rem',
            fontWeight: 700
          }}>{t.header.title}</h1>
          <p style={{
            fontSize: '1.3rem',
            color: darkMode ? '#cccccc' : '#666666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>{t.header.subtitle}</p>
        </div>

       

        {/* Main Content Sections */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {Object.entries(t.sections).map(([key, section]) => (
            <div key={key} style={{
              background: darkMode ? '#1e1e1e' : '#ffffff',
              padding: '2.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                color: darkMode ? '#81c784' : primaryGreen,
                margin: '0 0 1.5rem 0',
                borderBottom: `2px solid ${secondaryGreen}`,
                paddingBottom: '0.5rem'
              }}>{section.title}</h2>
              <div style={{
                color: darkMode ? '#cccccc' : '#666666',
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}>
                {section.content.map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{ 
          textAlign: 'center',
          background: `linear-gradient(135deg, ${darkGreen}, ${primaryGreen})`,
          padding: '4rem 2rem',
          borderRadius: '12px',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#ffffff',
            margin: '0 0 1rem 0',
            fontWeight: 700
          }}>{t.cta.title}</h3>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            fontSize: '1.2rem',
            lineHeight: 1.6
          }}>
            {t.cta.description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
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
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
                e.target.style.background = '#f5f5f5';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                e.target.style.background = '#ffffff';
              }}
            >
              {t.cta.partner}
            </Link>
            <Link 
              to="/services" 
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                background: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                border: '2px solid #ffffff',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = primaryGreen;
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              {t.cta.learn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;

