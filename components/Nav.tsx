'use client'
import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const sections = [
    { hash: '#about', ref: React.createRef() },
    { hash: '#experience', ref: React.createRef() },
    { hash: '#projects', ref: React.createRef() },
    { hash: '#education', ref: React.createRef() },
    { hash: '#interests', ref: React.createRef() },
    { hash: '#contact', ref: React.createRef() },
  ];

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const sectionRefs = sections.reduce((acc: any, { hash, ref }) => {
      acc[hash] = ref;
      return acc;
    }, {});

    const handleScroll = () => {
      let foundSection = '';
      for (const { hash, ref } of sections) {
        const element: any = ref.current;
        if (element && element?.offsetTop <= window.scrollY + window.innerHeight / 2) {
          foundSection = hash;
        } else {
          break; // Stop the loop if we've passed the current scroll position
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on component mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavLinkClick = (e: any) => {
    const hash = e.currentTarget.hash;
    if (hash && document.querySelector(hash)) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      {/* Navbar brand and toggler code */}
      <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={handleNavLinkClick}>
        <span className="d-block d-lg-none">David Hoffmann</span>
        <span className="d-none d-lg-block">
          <img height={160} width={160} className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/images/me.png" alt="" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav">
          {/* Nav items with active class logic */}
          {['about', 'experience', 'projects', 'education', 'interests', 'contact'].map((section) => (
            <li className={`nav-item ${activeSection === `#${section}` ? 'active' : ''}`} key={section}>
              <a className="nav-link js-scroll-trigger" href={`#${section}`} onClick={handleNavLinkClick}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}