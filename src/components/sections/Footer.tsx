import Wrapper from "../Wrapper";
import logo from "../../../public/assets/logo.png";
import footerImage from "../../../public/assets/footer/shape.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className='footer-section bg_img'>
      <div className='footer-top'>
        <Wrapper>
          <div className='footer-wrapper flex flex-col lg:flex-row wrap items-center md:justify-between justify-center'>
            <div className='logo mb-3 mb-md-0'>
              <a href='index.html'>
                <Image src={logo} alt='logo' /> 
              </a>
            </div>
            <ul className='footer-links flex wrap justify-center'>
              <li>
                <a href='#'>Twitter</a>
              </li>
              <li>
                <a href='#'>Telegram</a>
              </li>
              <li>
                <a href='#'>Medium</a>
              </li>
            </ul>
          </div>
        </Wrapper>
      </div>
      <div className='footer-bottom'>
        <Wrapper>
          <div className='footer-wrapper d-flex flex-wrap justify-content-center align-items-center text-center'>
            <p className='copyright text-white'>
              Copyrights &copy; 2024 All Rights Reserved by{" "}
              <a href='#' className=' text--base ms-2'>
                GambaSol
              </a>
            </p>
          </div>
        </Wrapper>
      </div>
      <div className='shapes'>
        <div className="shape1">
          <Image
          src={footerImage}
          alt='footer'
        />
        </div>
        
      </div>
    </footer>
  );
}
