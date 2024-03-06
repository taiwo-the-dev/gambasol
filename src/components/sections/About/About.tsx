import React from 'react'
import about from '../../../../public/assets/about/shape.png';
import aboutShape from '../../../../public/assets/about/thumb.png'
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';

const About = () => {
  return (
    <section className="about-section padding-top padding-bottom overflow-hidden">
        <Wrapper>
            <div className="row w-full flex flex-col lg:flex-row items-center justify-between">
                <div className="flex col-lg-6 basis-1/2">
                    <div className="about-content">
                        <div className="section-header">
                            <h2 className="section-header__title">About The Casino</h2>
                            <p>A casino is a facility for certain types of gambling. Casinos are often built near or combined with hotels, resorts, restaurants, retail shopping, cruise ships, and other tourist attractions. Some casinos are also known for hosting live entertainment, such as stand-up comedy, concerts, and sports.</p>
                        </div>
                        <a href="#" className="cmn--btn active">Join Our Community</a>
                    </div>
                </div>
                <div className="flex col-lg-6 basis-1/2">
                    <div className="aobut-thumb section-thumb ms-lg-5">
                        <Image src={aboutShape} alt="about" />
                    </div>
                </div>
            </div>
        </Wrapper>
        <div className="shapes">
            <div className='shape shape1'>
                <Image src={about} alt="about"/>
            </div>
        </div>
    </section>
  )
}

export default About