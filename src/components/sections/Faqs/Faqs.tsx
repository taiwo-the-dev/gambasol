import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { faqsData } from "./faqs-data";
import Accordion from "./Accordion";

const Faqs = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className='faq-section padding-top padding-bottom overflow-hidden'>
      <Wrapper>
        <div className='row justify-content-center'>
          <div className='col-lg-7 col-xl-6'>
            <div className='section-header text-center'>
              <h2 className='section-header__title'>
                Frequently Asked Questions
              </h2>
              <p>
                A casino is a facility for certain types of gambling. Casinos
                are often built combined with hotels, resorts.
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-4'>
        {faqsData.map((faqs) => (
        
          <Accordion
            key={faqs.id}
            title={faqs.title}
            content={faqs.content}
          />
        ))}</div>
        <div className='shapes'>
          <img src="../../../../public/assets/images/faq/shape.png" alt="faq" className="shape shape1" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Faqs;
