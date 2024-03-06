import Wrapper from "../Wrapper";
import logo from "../../../public/assets/logo.png";
import footerImage from "../../../public/assets/footer/shape.png";
import Image from "next/image";

export default function Footer() {
  return (
    // <footer className="bg-black rounded-t-2xl shadow dark:bg-gray-900">
    //   <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <a
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         href="https://gamba.so/"
    //         className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
    //       >
    //         <img src="/logo.svg" className="h-10" alt="Gamba Logo" />
    //       </a>
    //       <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
    //         <li>
    //           <a
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             href="https://explorer.gamba.so/create"
    //             className="hover:underline me-4 md:me-6"
    //           >
    //             🚀 Create Pool
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             href="https://github.com/BankkRoll/Gamba-V2-Next.js"
    //             className="hover:underline me-4 md:me-6"
    //           >
    //             👨‍💻 Build your own
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             href="https://gamba.so/docs"
    //             className="hover:underline me-4 md:me-6"
    //           >
    //             📖 Gamba Docs
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             href="https://discord.com/invite/HSTtFFwR"
    //             className="hover:underline"
    //           >
    //             💬 Join Discord
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //     <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //       © 2023 Made with ❤️ by{" "}
    //       <a
    //         href="https://twitter.com/bankkroll_eth"
    //         className="hover:underline"
    //       >
    //         Bankk™
    //       </a>
    //     </span>
    //   </div>
    // </footer>

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
              Copyrights &copy; 2023 All Rights Reserved by{" "}
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
