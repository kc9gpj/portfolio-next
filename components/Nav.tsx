'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const sections = [
    { hash: '#about', ref: useRef() },
    { hash: '#experience', ref: useRef() },
    { hash: '#projects', ref: useRef() },
    { hash: '#education', ref: useRef() },
    { hash: '#interests', ref: useRef() },
    { hash: '#contact', ref: useRef() },
  ];

  const router = useRouter();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const handleScroll = () => {
      let foundSection = '';
      for (const { hash, ref } of sections) {
        const element: any = ref.current;
        if (element && element.offsetTop <= window.scrollY + window.innerHeight / 2) {
          foundSection = hash;
        } else {
          break;
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);


  const handleNavLinkClick = (e: any) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href.startsWith('#')) {
      if (window.location.pathname.startsWith('/blog')) {
        router.push(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      router.push(href);
    }

    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
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
          {['about', 'experience', 'projects', 'education', 'interests', 'contact'].map((section) => (
            <li className={`nav-item ${activeSection === `#${section}` ? 'active' : ''}`} key={section}>
              <a className="nav-link js-scroll-trigger" href={`#${section}`} onClick={handleNavLinkClick}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a className="nav-link" href="/blog" onClick={handleNavLinkClick}>Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
