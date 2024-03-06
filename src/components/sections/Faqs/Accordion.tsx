import { ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface AccordionType {
  title: string;
  content: string;
}
const Accordion = ({ title, content }: AccordionType) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='faq-wrapper row justify-content-between'>
      <div className='col-lg-6'>
        <div className='faq-item'>
          <div
            className='faq-item__title flex justify-between items-center'
            onClick={() => setOpen(!open)}>
            <h5 className='title'>{title}</h5>
            <div>{open ?<ArrowUpIcon className="block h-5 w-5" aria-hidden="true" /> : <ArrowDownIcon className="block h-5 w-5" aria-hidden="true" />}</div>
          </div>
          {open && (
            <div className={`faq-item__content : ""}`}>
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
