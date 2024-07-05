'use client'

import React, { useState } from 'react'
import './header-mobile.scss'
import { usePathname } from 'next/navigation'
import NavbarMobile from './navbar-mobile'
import Image from 'next/image'

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  function showItems() {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header-mobile flex justify-between items-center self-stretch h-16 pl-2 text-white bg-transparent sticky sm:h-16 lg:hidden">
      <Image
        width={0}
        height={0}
        alt="logo"
        src="/images/logos/logo.png"
        priority
        className="h-[62px] sm:h-[70px] w-fit object-contain drop-shadow"
      />
      <div className="flex justify-center items-center">
        <NavbarMobile
          isOpen={isOpen}
          setActive={setIsOpen}
          pathname={pathname}
        />
      </div>
    </header>
  )
}
