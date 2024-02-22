import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const activeTag = (e) => {
    const els = document.querySelectorAll('.desktop-list a');
    els.forEach(el => {
      el.classList.remove('active');
    });
    e.target.classList.add('active');
  };

  return (
    <div className='nav-container'>
      <p>Tina Lin</p>
      <ul className='desktop-list'>
        <li>
          <a 
            href="#home" 
            className='active'
            onClick={(e) => { activeTag(e) }}
          >首頁</a>
        </li>
        <li>
          <a href="#about-me" onClick={(e) => { activeTag(e) }}>履歷</a>
        </li>
        <li>
          <a href="#contact-me" onClick={(e) => { activeTag(e) }}>聯絡方式</a>
        </li>
      </ul>

      <Button variant="primary" onClick={handleShow}>
        <i class="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas 
        show={show} 
        onHide={handleClose} 
        placement="top" 
        className="menu"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a 
            href="#home"
            onClick={handleClose}
          >首頁</a>
          <a 
            href="#about-me" 
            onClick={handleClose}
          >履歷</a>
          <a 
            href="#contact-me" 
            onClick={handleClose}
          >聯絡方式</a>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Nav