import React from 'react'
import Image from 'next/image'
import card from '../../../../public/assets/banner/card.png';
import thumb from '../../../../public/assets/banner/thumb.png';
import Wrapper from '@/components/Wrapper';
import { PlayIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="banner-section bg-img overflow-hidden relative">
        <Wrapper>
            <div className="w-full banner-wrapper flex flex-col lg:flex-row items-center">
                <div className="banner-content">
                    <h1 className="banner-content__title">THE ONLINE CASINO <span className="text--base text-span">GambaSol</span></h1>
                    <p className="banner-content__subtitle">Play Our Online Casino and Earn Solana Now on GambaSol Platform</p>
                    <div className="button-wrapper">
                        <a href="#" className="cmn--btn active btn--lg">Community</a>
                        <a href="#" className="cmn--btn active btn--lg">Play Now</a>
                    </div>
                    <div className="shape1">
                        <Image src={card} alt=""  />
                    </div>
                    
                </div>
                <div className="banner-thumb">
                    <Image src={thumb} alt="banner" />
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Hero