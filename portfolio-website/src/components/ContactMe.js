import React from 'react'

const ContactMe = ({ desktop }) => {
  const show = (tar) => {
    if (desktop) {
      tar.nextSibling.classList.add('show');
    }
  };
  const hide = (tar) => {
    if (desktop) {
      tar.nextSibling.classList.remove('show');
    }
  };

  return (
    <div className='ContactMe-container'>
      <div className='mobile'>
        <i 
          class="fa-solid fa-mobile-retro"
          onMouseEnter={(e) => {show(e.target)}}
          onMouseLeave={(e) => {hide(e.target)}}
        ></i>
        <p>0970146141</p>
      </div>
      <div className='email'>
        <i 
          class="fa-solid fa-envelope"
          onMouseEnter={(e) => {show(e.target)}}
          onMouseLeave={(e) => {hide(e.target)}}
        ></i>
        <p>chrc06241@gmail.com</p>
      </div>
      <div className='line'>
        <i 
          class="fa-brands fa-line"
          onMouseEnter={(e) => {show(e.target)}}
          onMouseLeave={(e) => {hide(e.target)}}
        ></i>
        <p>ms.maital</p>
      </div>
    </div>
  )
}

export default ContactMe