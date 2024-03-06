import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";

const home = () => {
  return (
    <div className='header'>
      <div className='container mx-auto'>
        <div className='header-bottom'>
          <div className='header-bottom-area align-items-center'>
            <div className='logo'>
              <a href='index.html'>
                <Image src={logo} alt='logo' />
              </a>
            </div>
            <ul className='menu'>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='about.html'>About</a>
              </li>
              <li>
                <a href='games.html'>
                  Games{" "}
                  <span className='badge badge--sm badge--base text-dark'>
                    NEW
                  </span>
                </a>
              </li>
              <li>
                <a href='faq.html'>Faq</a>
              </li>
              <li>
                <a href='#0'>Pages</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='dashboard.html'>User Dashboard</a>
                  </li>
                  <li>
                    <a href='game-details.html'>Game Details</a>
                  </li>
                  <li>
                    <a href='policy.html'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='terms-conditions.html'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='sign-in.html'>Sign In</a>
                  </li>
                  <li>
                    <a href='sign-up.html'>Sign Up</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#0'>Blog</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='blog.html'>Blog</a>
                  </li>
                  <li>
                    <a href='blog-details.html'>Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
              </li>
              <button className='btn-close btn-close-white d-lg-none'></button>
            </ul>
            {/* <div className='header-trigger-wrapper d-flex d-lg-none align-items-center'>
              <div className='header-trigger me-4'>
                <span></span>
              </div>
              <a
                href='sign-in.html'
                className='cmn--btn active btn--md d-none d-sm-block'>
                Sign In
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
