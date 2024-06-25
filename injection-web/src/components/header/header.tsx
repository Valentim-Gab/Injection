'use client'

import React, { Suspense, useEffect, useState } from 'react'
import './header.scss'
import { usePathname } from 'next/navigation'
import Navbar from './navbar'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <header className="justify-between items-center h-28 px-16 hidden lg:flex">
      <Image
        width={0}
        height={0}
        alt="logo"
        src="/images/logos/logo.png"
        className="h-[80px] w-fit object-contain drop-shadow"
      />
      <div className="flex justify-end items-center gap-8 2xl:gap-32">
        <Navbar pathname={pathname} />
        <button className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full">
          <i className="icon-[majesticons--search] w-10 h-10 text-white"></i>
        </button>
        <h2 className="text-lg font-bold">Salve, Valentim!</h2>
      </div>
    </header>
  )
}
