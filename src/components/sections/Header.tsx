// src/components/sections/Header.tsx

import {
  GambaUi,
  TokenValue,
  useCurrentPool,
  useUserBalance,
} from "gamba-react-ui-v2";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import slogo from "../../../public/assets/logom.png";
import Link from "next/link";
import { Modal } from "@/components/Modal";
import TokenSelect from "./TokenSelect";
import { UserButton } from "./UserButton";
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Wrapper from "../Wrapper";

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'FAQs', href: '#', current: false },
  { name: 'Twitter', href: '#', current: false },
  { name: 'Telegram', href: '#', current: false },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const pool = useCurrentPool();
  const balance = useUserBalance();
  const [bonusHelp, setBonusHelp] = useState(false);
  const [jackpotHelp, setJackpotHelp] = useState(false);

  return (
    <>
      {bonusHelp && (
        <Modal onClose={() => setBonusHelp(false)}>
          <h1>You have a bonus!</h1>
          <p>
            You have{" "}
            <b>
              <TokenValue amount={balance.bonusBalance} />
            </b>{" "}
            worth of free plays. This bonus will be applied automatically when
            you play.
          </p>
        </Modal>
      )}
      {jackpotHelp && (
        <Modal onClose={() => setJackpotHelp(false)}>
          <h1>Jackpot</h1>
          <p>
            There&apos;s{" "}
            <strong className='text-purple-400'>
              <TokenValue amount={pool.jackpotBalance} />
            </strong>{" "}
            in the Jackpot.
          </p>
          <p>
            The Jackpot is a prize pool that grows with every bet made. As the
            Jackpot grows, so does your chance of winning. Once a winner is
            selected, the value of the Jackpot resets and grows from there until
            a new winner is selected.
          </p>
          <GambaUi.Button main>
            <a
              href={`https://explorer.gamba.so/pool/${pool.publicKey.toString()}`}
              target='_blank'
              rel='noreferrer'>
              View Pool
            </a>
          </GambaUi.Button>
        </Modal>
      )}
      <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <Wrapper>
            <div className="relative flex h-10 lg:h-20 items-center justify-between">
              
              <div className="flex flex-1 lg:items-center justify-between sm:items-stretch md:justify-between">
                <div className="hidden lg:flex items-center h-8 w-20 lg:w-auto cursor-pointer">
                  <Link href='/'>
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>

                <div className="flex lg:hidden items-center h-12 w-12 lg:w-auto">
                  <Image src={slogo} alt="logo" />
                </div>
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-yellow' : 'text-white hover:text-yellow',
                          'rounded-md px-3 font-medium a'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        
                      </a>
                    ))}
                  </div>
                </div>

                <div className='max-sm:text-xs max-sm:gap-1 flex gap-2.5 items-center relative'>
                  {pool.jackpotBalance > 0 && (
                    <button
                      onClick={() => setJackpotHelp(true)}
                      className='hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white'>
                      <TokenValue amount={pool.jackpotBalance} />
                    </button>
                  )}
                  {balance.bonusBalance > 0 && (
                    <button
                      onClick={() => setBonusHelp(true)}
                      className='hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white'>
                      +<TokenValue amount={balance.bonusBalance} />
                    </button>
                  )}
                  <TokenSelect />
                  <UserButton />
                  <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                </div>
              </div>

              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
                
              </div> */}
            </div>
          </Wrapper>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium a'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  );
}
