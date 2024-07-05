import Link from 'next/link'
import React from 'react'

interface NavbarProps {
  pathname: string
}

export default function Navbar({ pathname }: NavbarProps) {
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
    <nav className='px-8'>
      <ul className="flex items-center justify-center gap-8 2xl:gap-16">
        {items &&
          items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center self-stretch"
            >
              <Link
                href={item.url}
                data-active={pathname === item.url}
                className="flex items-center justify-center cursor-pointer rounded data-[active=true]:text-primary"
              >
                <p className="font-medium">{item.text}</p>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
