import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Buy = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [language, setLanguage] = useState('bn'); // 'en' for English, 'bn' for Bengali

  // Translations
  const translations = {
    en: {
      headerSubtitle: "Website Templates",
      headerTitle: "Premium Templates for Every Business",
      headerDescription: "Browse our collection of professionally designed templates. Each comes with full customization options and dedicated support to make your website stand out.",
      allTemplates: "All Templates",
      liveDemo: "Live Demo",
      bookSite: "Book Site",
      bookTemplate: "Book {template}",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      cancel: "Cancel",
      confirmBooking: "Confirm Booking",
      customSolutionTitle: "Need a Custom Website Solution?",
      customSolutionText: "Our team can create a completely custom website tailored to your specific business needs.",
      requestCustomDesign: "Request Custom Design",
      submissionSuccess: "Your request has been submitted successfully!",
      submissionError: "Failed to submit your request. Please try again.",
      processing: "Processing...",
      features: "Features",
      rating: "Rating",
      sales: "sales",
      categories: {
        all: "All Templates",
        ecommerce: "E-Commerce",
        portfolio: "Portfolio",
        business: "Business",
        blog: "Blog",
        marketing: "Marketing"
      }
    },
    bn: {
      headerSubtitle: "ওয়েবসাইট টেমপ্লেট",
      headerTitle: "প্রতিটি ব্যবসার জন্য প্রিমিয়াম টেমপ্লেট",
      headerDescription: "পেশাদারভাবে ডিজাইন করা আমাদের টেমপ্লেট সংগ্রহ ব্রাউজ করুন। প্রতিটি টেমপ্লেট সম্পূর্ণ কাস্টমাইজেশন অপশন এবং ডেডিকেটেড সাপোর্ট সহ আসে যাতে আপনার ওয়েবসাইট সবার থেকে আলাদা হয়।",
      allTemplates: "সমস্ত টেমপ্লেট",
      liveDemo: "লাইভ ডেমো",
      bookSite: "সাইট বুক করুন",
      bookTemplate: "{template} বুক করুন",
      fullName: "পুরো নাম",
      emailAddress: "ইমেইল ঠিকানা",
      phoneNumber: "ফোন নম্বর",
      cancel: "বাতিল",
      confirmBooking: "বুকিং নিশ্চিত করুন",
      customSolutionTitle: "কাস্টম ওয়েবসাইট সমাধান প্রয়োজন?",
      customSolutionText: "আমাদের টিম আপনার ব্যবসার প্রয়োজনে সম্পূর্ণ কাস্টম ওয়েবসাইট তৈরি করতে পারে।",
      requestCustomDesign: "কাস্টম ডিজাইন অনুরোধ করুন",
      submissionSuccess: "আপনার অনুরোধ সফলভাবে জমা হয়েছে!",
      submissionError: "আপনার অনুরোধ জমা করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      processing: "প্রক্রিয়াকরণ...",
      features: "বৈশিষ্ট্য",
      rating: "রেটিং",
      sales: "বিক্রয়",
      categories: {
        all: "সমস্ত টেমপ্লেট",
        ecommerce: "ই-কমার্স",
        portfolio: "পোর্টফোলিও",
        business: "ব্যবসা",
        blog: "ব্লগ",
        marketing: "মার্কেটিং"
      }
    }
  };

  const t = translations[language];

  const websiteTemplates = [
    {
      id: 'Farmermers-ecommerce',
      title: language === 'en' ? "Farmers E-Commerce" : "কৃষক ই-কমার্স",
      category: "ecommerce",
      price: 1599,
      image: "https://i.ibb.co/xqZjj0CK/Screenshot-2025-05-05-105451.png",
      description: language === 'en' 
        ? "Appetizing restaurant website with menu, reservations, and gallery" 
        : "মেনু, রিজার্ভেশন এবং গ্যালারি সহ রেস্তোরাঁ ওয়েবসাইট",
      features: language === 'en' 
        ? ["Menu display", "Online reservations", "Food gallery", "Location map", "Reviews section"]
        : ["মেনু প্রদর্শন", "অনলাইন রিজার্ভেশন", "খাবারের গ্যালারি", "লোকেশন ম্যাপ", "রিভিউ সেকশন"],
      liveDemo: "https://bengalharvestglobal.netlify.app/",
      rating: 4.9,
      sales: 78,
      color: "linear-gradient(135deg, #f46b45 0%, #eea849 100%)"
    },
    {
      id: 'portfolio-premium',
      title: language === 'en' ? "Portfolio Premium" : "প্রিমিয়াম পোর্টফোলিও",
      category: "portfolio",
      price: 1299,
      image: "https://i.ibb.co/fVv70dxj/Screenshot-2025-05-28-213536.png",
      description: language === 'en' 
        ? "Elegant portfolio to showcase your work with gallery and contact form" 
        : "গ্যালারি এবং কন্টাক্ট ফর্ম সহ আপনার কাজ প্রদর্শনের জন্য মার্জিত পোর্টফোলিও",
      features: language === 'en' 
        ? ["Responsive gallery", "Project showcase", "Blog section", "Contact form", "SEO optimized"]
        : ["রেস্পন্সিভ গ্যালারি", "প্রজেক্ট প্রদর্শনী", "ব্লগ সেকশন", "যোগাযোগ ফর্ম", "এসইও অপ্টিমাইজড"],
      liveDemo: "https://safinsyam.netlify.app/",
      rating: 4.6,
      sales: 87,
      color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
    },
    {
      id: 'Pet-ecommerce',
      title: language === 'en' ? "Pet e-commerce" : "পোষা প্রাণী ই-কমার্স",
      category: "ecommerce",
      price: 699,
      image: "https://i.ibb.co/whH2D9K0/Screenshot-2025-05-05-105046.png",
      description: language === 'en' 
        ? "High-converting landing page for products or services" 
        : "পণ্য বা সেবার জন্য উচ্চ রূপান্তর সহ ল্যান্ডিং পেজ",
      features: language === 'en' 
        ? ["Lead capture form", "Feature highlights", "Testimonials", "Call-to-action", "Mobile optimized"]
        : ["লিড ক্যাপচার ফর্ম", "বৈশিষ্ট্য হাইলাইট", "সাক্ষ্য", "কল-টু-অ্যাকশন", "মোবাইল অপ্টিমাইজড"],
      liveDemo: "https://petandvet.netlify.app/",
      rating: 4.8,
      sales: 203,
      color: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
    },
    {
      id: 'business-elite',
      title: language === 'en' ? "Business Elite" : "বিজনেস এলিট",
      category: "business",
      price: 1899,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: language === 'en' 
        ? "Professional corporate website with services, team, and testimonials" 
        : "সেবা, টিম এবং সাক্ষ্য সহ পেশাদার কর্পোরেট ওয়েবসাইট",
      features: language === 'en' 
        ? ["Service pages", "Team section", "Testimonials", "Pricing tables", "FAQ section"]
        : ["সেবা পৃষ্ঠা", "টিম সেকশন", "সাক্ষ্য", "মূল্য তালিকা", "প্রশ্নোত্তর সেকশন"],
      liveDemo: "https://fireflythemes.com/preview/?demo=elite-business-dark-free",
      rating: 4.0,
      sales: 112,
      color: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)"
    },
    {
      id: 'blog-standard',
      title: language === 'en' ? "Blog Standard" : "স্ট্যান্ডার্ড ব্লগ",
      category: "blog",
      price: 899,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: language === 'en' 
        ? "Modern blog template with article layouts and newsletter integration" 
        : "আর্টিকেল লেআউট এবং নিউজলেটার ইন্টিগ্রেশন সহ আধুনিক ব্লগ টেমপ্লেট",
      features: language === 'en' 
        ? ["Article layouts", "Categories", "Author profiles", "Newsletter signup", "Social sharing"]
        : ["আর্টিকেল লেআউট", "বিভাগ", "লেখক প্রোফাইল", "নিউজলেটার সাইনআপ", "সোশ্যাল শেয়ারিং"],
      liveDemo: "https://eris-templateify.blogspot.com/",
      rating: 4.0,
      sales: 156,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 'marketing',
      title: language === 'en' ? "Elite Events House" : "এলিট ইভেন্টস হাউস",
      category: "marketing",
      price: 2499,
      image: "https://i.ibb.co/tMg8bmqZ/Screenshot-2025-05-25-234847.png",
      description: language === 'en' 
        ? "Complete online store with product management, cart, and secure checkout" 
        : "পণ্য ব্যবস্থাপনা, কার্ট এবং সুরক্ষিত চেকআউট সহ সম্পূর্ণ অনলাইন স্টোর",
      features: language === 'en' 
        ? ["Product catalog", "Shopping cart", "Secure payments", "Inventory management", "Customer accounts"]
        : ["পণ্য ক্যাটালগ", "শপিং কার্ট", "সুরক্ষিত পেমেন্ট", "ইনভেন্টরি ব্যবস্থাপনা", "গ্রাহক অ্যাকাউন্ট"],
      liveDemo: "https://eliteeventshouse.netlify.app/",
      rating: 4.9,
      sales: 142,
      color: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
    },
  ];

  const categories = [
    { id: 'all', name: t.categories.all },
    { id: 'ecommerce', name: t.categories.ecommerce },
    { id: 'portfolio', name: t.categories.portfolio },
    { id: 'business', name: t.categories.business },
    { id: 'blog', name: t.categories.blog },
    { id: 'marketing', name: t.categories.marketing },
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? websiteTemplates 
    : websiteTemplates.filter(template => template.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleBookClick = (template) => {
    setSelectedTemplate(template);
    setShowBookingForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookSite = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xjkwnapo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          templateId: selectedTemplate.id,
          templateName: selectedTemplate.title,
          price: selectedTemplate.price,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          message: language === 'en' 
            ? `I would like to book the ${selectedTemplate.title} template for $${selectedTemplate.price}.` 
            : `আমি ${selectedTemplate.title} টেমপ্লেটটি $${selectedTemplate.price} এর জন্য বুক করতে চাই।`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '' });
        setShowBookingForm(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      backgroundColor: darkMode ? '#121212' : '#f5f7fa',
      padding: '3rem 1rem',
      color: darkMode ? '#ffffff' : '#333333',
      minHeight: '100vh'
    }}>
      {/* Language Toggle Button */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button
          onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
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
      </div>

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
            {t.headerSubtitle}
          </h2>
          
          <h1 style={{
            fontSize: '1.8rem',
            margin: '0.5rem 0 1rem',
            lineHeight: '1.3'
          }}>
            {t.headerTitle}
          </h1>
          
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            opacity: 0.8,
            lineHeight: '1.6'
          }}>
            {t.headerDescription}
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          padding: '0.5rem 0',
          marginBottom: '2rem',
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            margin: '0 auto',
            padding: '0 0.5rem'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  background: selectedCategory === category.id 
                    ? (darkMode ? '#2e7d32' : '#4caf50') 
                    : (darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'),
                  border: 'none',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '50px',
                  color: selectedCategory === category.id 
                    ? 'white' 
                    : (darkMode ? '#ddd' : '#555'),
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  fontSize: '0.85rem'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          justifyContent: 'center'
        }}>
          {filteredTemplates.map((template) => (
            <div 
              key={template.id}
              style={{
                background: darkMode ? 'rgba(255,255,255,0.05)' : 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: darkMode ? '0 4px 6px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: expandedCard === template.id ? 'auto' : '100%',
                transform: expandedCard === template.id ? 'translateY(-10px)' : 'none',
                zIndex: expandedCard === template.id ? 10 : 1,
                cursor: 'pointer'
              }}
              onClick={() => toggleExpand(template.id)}
            >
              {/* Template Image */}
              <div style={{
                height: '180px',
                background: `url(${template.image}) center/cover no-repeat`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {categories.find(c => c.id === template.category)?.name}
                </div>
              </div>
              
              {/* Template Content */}
              <div style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    margin: 0,
                    color: darkMode ? 'white' : '#333'
                  }}>{template.title}</h3>
                </div>
                
                {/* Rating and Sales */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.8rem',
                  fontSize: '0.85rem',
                  color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'
                }}>
                  <span style={{
                    color: '#ffc107',
                    marginRight: '0.3rem'
                  }}>★</span>
                  <span style={{ marginRight: '0.8rem' }}>{template.rating}</span>
                 
                </div>
                
                {/* Description (shown when expanded) */}
                {expandedCard === template.id && (
                  <p style={{
                    fontSize: '0.9rem',
                    margin: '0 0 1rem 0',
                    color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                    lineHeight: '1.5'
                  }}>
                    {template.description}
                  </p>
                )}
                
                {/* Features List */}
                <div style={{ margin: '0.5rem 0', flex: 1 }}>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'
                  }}>
                    {t.features}:
                  </div>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '0.85rem'
                  }}>
                    {template.features.slice(0, expandedCard === template.id ? template.features.length : 3).map((feature, i) => (
                      <li 
                        key={i} 
                        style={{
                          padding: '0.3rem 0',
                          display: 'flex',
                          alignItems: 'center',
                          color: darkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'
                        }}
                      >
                        <span style={{
                          marginRight: '0.4rem',
                          fontSize: '0.9rem',
                          color: darkMode ? '#81c784' : '#2e7d32'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '0.8rem',
                  marginTop: '1rem'
                }}>
                  <a
                    href={template.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: 'transparent',
                      color: darkMode ? '#81c784' : '#2e7d32',
                      padding: '0.6rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                      border: `1px solid ${darkMode ? '#81c784' : '#2e7d32'}`,
                      ':hover': {
                        background: darkMode ? 'rgba(129, 199, 132, 0.1)' : 'rgba(46, 125, 50, 0.1)'
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.liveDemo}
                  </a>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookClick(template);
                    }}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      background: darkMode ? '#2e7d32' : '#4caf50',
                      color: 'white',
                      padding: '0.6rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer',
                      ':hover': {
                        background: darkMode ? '#1b5e20' : '#388e3c',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {t.bookSite}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              background: darkMode ? '#1e1e1e' : 'white',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1.5rem',
                color: darkMode ? 'white' : '#333'
              }}>
                {t.bookTemplate.replace('{template}', selectedTemplate.title)}
              </h3>
              
              <form onSubmit={handleBookSite}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: darkMode ? 'rgba(255,255,255,0.8)' : '#555',
                    fontSize: '0.9rem'
                  }}>
                    {t.fullName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '6px',
                      border: `1px solid ${darkMode ? '#333' : '#ddd'}`,
                      background: darkMode ? '#2a2a2a' : 'white',
                      color: darkMode ? 'white' : '#333',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: darkMode ? 'rgba(255,255,255,0.8)' : '#555',
                    fontSize: '0.9rem'
                  }}>
                    {t.emailAddress}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '6px',
                      border: `1px solid ${darkMode ? '#333' : '#ddd'}`,
                      background: darkMode ? '#2a2a2a' : 'white',
                      color: darkMode ? 'white' : '#333',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: darkMode ? 'rgba(255,255,255,0.8)' : '#555',
                    fontSize: '0.9rem'
                  }}>
                    {t.phoneNumber}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '6px',
                      border: `1px solid ${darkMode ? '#333' : '#ddd'}`,
                      background: darkMode ? '#2a2a2a' : 'white',
                      color: darkMode ? 'white' : '#333',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}>
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      color: darkMode ? '#ddd' : '#555',
                      padding: '0.8rem',
                      borderRadius: '6px',
                      border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {t.cancel}
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      flex: 1,
                      background: darkMode ? '#2e7d32' : '#4caf50',
                      color: 'white',
                      padding: '0.8rem',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      ':disabled': {
                        opacity: 0.7,
                        cursor: 'not-allowed'
                      }
                    }}
                  >
                    {isSubmitting ? t.processing : t.confirmBooking}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Additional Info Section */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem 1rem',
          background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
          borderRadius: '12px'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: darkMode ? 'white' : '#333'
          }}>
            {t.customSolutionTitle}
          </h3>
          <p style={{
            maxWidth: '600px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6',
            opacity: 0.8,
            color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'
          }}>
            {t.customSolutionText}
          </p>
          <Link 
            to="/contact" 
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
            {t.requestCustomDesign}
          </Link>
        </div>

        {/* Submission Status Message */}
        {submitStatus === 'success' && (
          <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#4caf50',
            color: 'white',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>✓</span>
            <span>{t.submissionSuccess}</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#f44336',
            color: 'white',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>✗</span>
            <span>{t.submissionError}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;