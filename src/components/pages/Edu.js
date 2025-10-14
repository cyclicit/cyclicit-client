import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Edu = ({ darkMode }) => {
  const [isBengali, setIsBengali] = useState(false);
  
  // English content
  const content = {
    hero: {
      title: "Professional Web Solutions for Your Business",
      subtitle: "Custom websites for EdTech and Ecommerce with modern features",
      button: "View Packages"
    },
    clients: {
      edtech: [
       
        
        
        { 
          title: "Collectorate Collegiate School", 
          link: "https://ccs-lal-edu-bd.com/",
           image: "https://github.com/cyclicit/cyclicit-img/blob/main/cp3.png?raw=true"
        },
        { 
          title: "Crossing International School", 
          link: "https://crossinginternationalschool.com/",
           image: "https://github.com/cyclicit/cyclicit-img/blob/main/c4.png?raw=true"
        }, { 
          title: "Shahid Abul Kashem College", 
          link: "https://shahidabulkashemcollege.com/",
          image: "https://github.com/cyclicit/cyclicit-img/blob/main/cp1.png?raw=true"
        },
        { 
          title: "Church Of God High School", 
          link: "https://coghslal.edu.bd/",
         image: "https://github.com/cyclicit/cyclicit-img/blob/main/cp2.png?raw=true"
        },
      ],
      ecommerce: [
        { 
          title: "BLKBRD Shoemaker", 
          link: "https://www.blkbrdshoemaker.com/",
          image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        { 
          title: "Topshop Fashion", 
          link: "https://www.topshop.com/gb/topshop",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        { 
          title: "Jowissa Watches", 
          link: "https://www.jowissa.com/",
          image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    packages: {
      edtech: [
        {
          name: "Basic",
          price: "53,000৳",
          features: [
            "Responsive Professional Design",
            "History & Academic Info",
            "Teachers & Staff Section",
            "4 Dynamic Data Management",
            "Notices & Announcements",
            "Results Center",
            "Blog Management",
            "Gallery Management",
            "Admin Access",
             "SEO Optimization"
          ]
        },
        {
          name: "Classic",
          price: "120000৳",
          features: [
            "All Basic Features",
            "Student Login System",
            "Individual Result Access",
            "Student Information Portal",
            "Advanced Admin Panel",
            "Email Integration",
            "Enhanced Security"
          ]
        },
        {
          name: "Premium",
          price: "270000৳",
          features: [
            "All Classic Features",
            "Teacher & Student Portal",
            "Payment System Integration",
            "Career Section",
            "Advanced Analytics",
            "Custom Modules",
            "Priority Support",
           
          ]
        }
      ],
      ecommerce: {
        special: {
          title: "Ecommerce Special Offer",
          originalPrice: "1,00,000৳",
          discountedPrice: "50,000৳",
          discount: "50% OFF",
          features: [
            "Full Ecommerce Website",
            "Product Management",
            "Shopping Cart",
          
            "Order Management",
            "Customer Accounts",
            " Maintenance",
            "Free Payment Options (bKash/Nagad)"
          ]
        }
      }
    },
    cta: {
      title: "Ready to build your professional website?",
      desc: "Get started today with our affordable packages",
      buttons: ["View Packages", "Contact Us"],
      phone: "Call for any questions: +88 01780755531"
    }
  };

  // Bengali content
  const bengaliContent = {
    hero: {
      title: "আপনার ব্যবসার জন্য প্রফেশনাল ওয়েব সলিউশন",
      subtitle: "এডটেক এবং ইকমার্সের জন্য আধুনিক ফিচার সহ কাস্টম ওয়েবসাইট",
      button: "প্যাকেজ দেখুন"
    },
    clients: {
      edtech: [
        
        { 
          title: "ক্রসিং ইন্টারন্যাশনাল স্কুল", 
          link: "https://crossinginternationalschool.com/",
          image: "https://github.com/cyclicit/cyclicit-img/blob/main/c4.png?raw=true"
        },
        { 
          title: "কালেক্টরেট কলেজিয়েট স্কুল", 
          link: "https://ccs-lal-edu-bd.com/",
          image: "https://github.com/cyclicit/cyclicit-img/blob/main/cp3.png?raw=true"
        },{ 
          title: "শহীদ আবুল কাশেম কলেজ", 
          link: "https://shahidabulkashemcollege.com/",
          image: "https://github.com/cyclicit/cyclicit-img/blob/main/cp1.png?raw=true"
        },
        { 
          title: "চার্চ অফ গড হাই স্কুল", 
          link: "https://coghslal.edu.bd/",
          image: "https://github.com/cyclicit/cyclicit-img/blob/main/cp2.png?raw=true"
        }
      ],
      ecommerce: [
        { 
          title: "বিএলকেবিআরডি শুমেকার", 
          link: "https://www.blkbrdshoemaker.com/",
          image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        { 
          title: "টপশপ ফ্যাশন", 
          link: "https://www.topshop.com/gb/topshop",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        { 
          title: "জোভিসা ওয়াচ", 
          link: "https://www.jowissa.com/",
          image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    packages: {
      edtech: [
        {
          name: "বেসিক",
          price: "৫,৩০০০৳",
          features: [
            "রেসপনসিভ প্রফেশনাল ডিজাইন",
            "ইতিহাস ও একাডেমিক তথ্য",
            "শিক্ষক ও স্টাফ সেকশন",
            "৪টি ডাইনামিক ডাটা ম্যানেজমেন্ট",
            "নোটিশ ও ঘোষণা",
            "রেজাল্ট সেন্টার",
            "ব্লগ ম্যানেজমেন্ট",
            "গ্যালারি ম্যানেজমেন্ট",
            "অ্যাডমিন এক্সেস",
             "এসইও অপ্টিমাইজেশন"
          ]
        },
        {
          name: "ক্লাসিক",
          price: "১,২০,০০০৳",
          features: [
            "সকল বেসিক ফিচার",
            "স্টুডেন্ট লগইন সিস্টেম",
            "ব্যক্তিগত রেজাল্ট এক্সেস",
            "স্টুডেন্ট ইনফরমেশন পোর্টাল",
            "অ্যাডভান্সড অ্যাডমিন প্যানেল",
            "ইমেইল ইন্টিগ্রেশন",
            "এনহ্যান্সড সিকিউরিটি"
          ]
        },
        {
          name: "প্রিমিয়াম",
          price: "২,৭০,০০০৳",
          features: [
            "সকল ক্লাসিক ফিচার",
            "শিক্ষক ও ছাত্র পোর্টাল",
            "পেমেন্ট সিস্টেম ইন্টিগ্রেশন",
      
            "অ্যাডভান্সড অ্যানালিটিক্স",
            "কাস্টম মডিউল",
            "প্রায়োরিটি সাপোর্ট",
      
          ]
        }
      ],
      ecommerce: {
        special: {
          title: "ইকমার্স স্পেশাল অফার",
          originalPrice: "১,০০,০০০৳",
          discountedPrice: "৫০,০০০৳",
          discount: "৫০% ছাড়",
          features: [
            "ফুল ইকমার্স ওয়েবসাইট",
            "প্রোডাক্ট ম্যানেজমেন্ট",
            "শপিং কার্ট",
           
            "অর্ডার ম্যানেজমেন্ট",
            "কাস্টমার অ্যাকাউন্ট",
            "মেইনটেনেন্স",
            "ফ্রি পেমেন্ট অপশন (বিকাশ/নগদ)"
          ]
        }
      }
    },
    cta: {
      title: "আপনার প্রফেশনাল ওয়েবসাইট বানাতে প্রস্তুত?",
      desc: "আজই শুরু করুন আমাদের সাশ্রয়ী প্যাকেজ দিয়ে",
      buttons: ["প্যাকেজ দেখুন", "যোগাযোগ করুন"],
      phone: "যেকোনো প্রশ্নের জন্য কল করুন: +৮৮ ০১৭৮০৭৫৫৫৩১"
    }
  };

  const currentContent = isBengali ? bengaliContent : content;

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
            padding: '20px 24px',
            boxSizing: 'border-box'
        }}>
            {/* Hero Section */}
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                
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
                        onClick={() => document.getElementById('packages').scrollIntoView({behavior: 'smooth'})}
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
            </section>

            {/* Clients Section */}
            <section style={{
                
                margin: '2rem 0'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    color: primaryColor,
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    {isBengali ? "আমাদের ক্লায়েন্টস" : "Our Clients"}
                </h2>

                           {/* Ecommerce Clients */}
                <div>
                    <h3 style={{
                        color: secondaryColor,
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        fontSize: '1.4rem'
                    }}>
                        {isBengali ? "ইকমার্স ক্লায়েন্টস" : "Ecommerce Clients"}
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {currentContent.clients.ecommerce.map((client, index) => (
                            <div 
                                key={index}
                                style={{
                                    backgroundColor: cardBg,
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    border: `1px solid ${borderColor}`
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = `0 8px 24px rgba(76, 175, 80, 0.15)`;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
                                }}
                            >
                                <img 
                                    src={client.image} 
                                    alt={client.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{ padding: '1.5rem' }}>
                                    <h4 style={{ 
                                        color: secondaryColor, 
                                        marginBottom: '0.5rem',
                                        fontSize: '1.1rem'
                                    }}>
                                        {client.title}
                                    </h4>
                                    <a 
                                        href={client.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: primaryColor,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem'
                                        }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {isBengali ? "ওয়েবসাইট দেখুন" : "Visit Website"} →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* EdTech Clients */}
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{
                        color: secondaryColor,
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        fontSize: '1.4rem'
                    }}>
                        {isBengali ? "এডটেক ক্লায়েন্টস" : "EdTech Clients"}
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {currentContent.clients.edtech.map((client, index) => (
                            <div 
                                key={index}
                                style={{
                                    backgroundColor: cardBg,
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    border: `1px solid ${borderColor}`
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = `0 8px 24px rgba(76, 175, 80, 0.15)`;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
                                }}
                            >
                                <img 
                                    src={client.image} 
                                    alt={client.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'contain'
                                    }}
                                />
                                <div style={{ padding: '1.5rem' }}>
                                    <h4 style={{ 
                                        color: secondaryColor, 
                                        marginBottom: '0.5rem',
                                        fontSize: '1.1rem'
                                    }}>
                                        {client.title}
                                    </h4>
                                    <a 
                                        href={client.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: primaryColor,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem'
                                        }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {isBengali ? "ওয়েবসাইট দেখুন" : "Visit Website"} →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

     
            </section>

            {/* Packages Section */}
            <section id="packages" style={{
                padding: '3rem 0',
                margin: '2rem 0'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    color: primaryColor,
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    {isBengali ? "আমাদের প্যাকেজস" : "Our Packages"}
                </h2>

                 {/* Ecommerce Special Offer */}
                <div>
                    <h3 style={{
                        color: secondaryColor,
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        fontSize: '1.4rem'
                    }}>
                        {isBengali ? "ইকমার্স স্পেশাল অফার" : "Ecommerce Special Offer"}
                    </h3>
                    <div style={{
                        backgroundColor: darkMode ? '#2d2d2d' : '#eaf2f8',
                        padding: '2rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                        border: `2px solid ${secondaryColor}`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '-30px',
                            background: '#ff4444',
                            color: 'white',
                            padding: '5px 40px',
                            transform: 'rotate(45deg)',
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                        }}>
                            {currentContent.packages.ecommerce.special.discount}
                        </div>
                        
                        <h4 style={{ 
                            color: secondaryColor, 
                            marginBottom: '1rem',
                            fontSize: '1.5rem'
                        }}>
                            {currentContent.packages.ecommerce.special.title}
                        </h4>
                        
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{
                                textDecoration: 'line-through',
                                color: '#ff4444',
                                fontSize: '1.2rem',
                                marginRight: '1rem'
                            }}>
                                {currentContent.packages.ecommerce.special.originalPrice}
                            </span>
                            <span style={{
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                color: primaryColor
                            }}>
                                {currentContent.packages.ecommerce.special.discountedPrice}
                            </span>
                        </div>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1rem',
                            marginBottom: '2rem'
                        }}>
                            {currentContent.packages.ecommerce.special.features.map((feature, idx) => (
                                <div 
                                    key={idx}
                                    style={{
                                        backgroundColor: cardBg,
                                        padding: '0.8rem',
                                        borderRadius: '4px',
                                        color: lightText,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    ✔ {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* EdTech Packages */}
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{
                        color: secondaryColor,
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        fontSize: '1.4rem'
                    }}>
                        {isBengali ? "এডটেক ওয়েবসাইট প্যাকেজ" : "EdTech Website Packages"}
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {currentContent.packages.edtech.map((pkg, index) => (
                            <div 
                                key={index}
                                style={{
                                    backgroundColor: cardBg,
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    border: `1px solid ${borderColor}`,
                                    textAlign: 'center'
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
                                <h4 style={{ 
                                    color: secondaryColor, 
                                    marginBottom: '1rem',
                                    fontSize: '1.3rem'
                                }}>
                                    {pkg.name}
                                </h4>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: primaryColor,
                                    marginBottom: '1.5rem'
                                }}>
                                    {pkg.price}
                                </div>
                                <ul style={{
                                    listStyleType: 'none',
                                    padding: '0',
                                    textAlign: 'left'
                                }}>
                                    {pkg.features.map((feature, idx) => (
                                        <li 
                                            key={idx}
                                            style={{
                                                padding: '0.5rem 0',
                                                position: 'relative',
                                                paddingLeft: '1.5rem',
                                                color: lightText
                                            }}
                                        >
                                            ✔ {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
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
        </div>
    </div>
  );
};

export default Edu;