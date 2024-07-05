'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import React, { useState } from 'react'
import './navbar-mobile.scss'
import Link from 'next/link'

interface NavbarProps {
  isOpen: boolean
  pathname: string
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavbarMobile({ pathname }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const items = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Membros',
      url: '/membro',
    },
    {
      text: 'Sobre',
      url: '/sobre',
    },
  ]

  return (
    <Drawer open={open}>
      <DrawerTrigger
        className="flex justify-center items-center"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center justify-center">
          <i className="burger-icon icon-[majesticons--menu] w-16 h-16"></i>
        </span>
      </DrawerTrigger>
      <DrawerContent className="pb-8 border-0">
        <DrawerClose
          className="flex items-center justify-center w-fit h-fit p-3 absolute right-0 top-0"
          onClick={() => setOpen(false)}
        >
          <i className="icon-[majesticons--close] text-2xl"></i>
        </DrawerClose>
        <DrawerHeader>
          <h2 className="absolute left-3 top-3 text-left text-xs font-bold">Salve,<br />Valentim!</h2>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <nav>
          <ul className="flex flex-col items-center justify-center gap-2">
            {items &&
              items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center self-stretch"
                >
                  <Link
                    href={item.url}
                    data-active={pathname === item.url}
                    className="flex items-center justify-center cursor-pointer rounded data-[active=true]:text-primary p-2"
                    onClick={() => setOpen(false)}
                  >
                    <p className="font-medium text-xl">{item.text}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
