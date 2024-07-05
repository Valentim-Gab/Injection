'use client'

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useRouter } from 'next/navigation'
import './member.scss'

export default function Members() {
  const members = [
    {
      id: 2,
      name: 'Gabriel Valentim',
      description: 'Adoro esportes e jogar sinuca',
    },
    {
      id: 3,
      name: 'Eduarda Gripa',
      description:
        'Apaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vidaApaixonada por vôlei, gosta de beber e dançar. Uma amante da vida',
    },
    {
      id: 4,
      name: 'Yuyu',
      description: 'Jogador de vôlei e mestre em RPG',
    },
  ]

  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredMembers, setFilteredMembers] = useState<
    Array<{
      id: number
      name: string
      description: string
    }>
  >(members)

  const columns = [
    {
      name: 'Nome',
    },
    {
      name: 'Descrição',
    },
  ]

  const handleMemberClick = (id: number) => {
    router.push(`/membro/${id}`)
  }

  const getCroppedName = (name: string) => {
    return name.length > 20 ? `${name.slice(0, 20)}...` : name
  }

  const getCroppedDescription = (description: string) => {
    return description.length > 100
      ? `${description.slice(0, 100)}...`
      : description
  }

  const filterMembers = (value: string) => {
    if (value === '') {
      setFilteredMembers(members)
    } else {
      const filtered = members.filter((member) =>
        member.name.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredMembers(filtered)
    }
  }

  const handleSearch = () => {
    if (!searchValue) setSearchOpen(!searchOpen)
    else console.log('searching...')
  }

  return (
    <main className="min-h-screen lg:p-16 overflow-x-auto">
      <section className="flex flex-col items-end mt-8 pb-2 px-2 sm:px-4">
        <div className="flex justify-center items-center bg-white/50 rounded-full">
          <button
            className="flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full"
            onClick={handleSearch}
          >
            <i className="icon-[majesticons--search] w-10 h-10 text-black/50"></i>
          </button>
          <span
            data-searchopen={searchOpen}
            className="flex justify-center w-48 h-full pl-2 pr-4 rounded-r-full duration-200 ease-in-out transition-all data-[searchopen=false]:w-0 data-[searchopen=false]:p-0 sm:w-64 lg:w-52 2xl:w-72"
          >
            <input
              type="text"
              className="w-full h-full text-black text-sm bg-transparent outline-none placeholder:text-black/50 lg:text-base"
              // onChange={changeSearch}
              placeholder="Buscar membro"
              onChange={(e) => {
                filterMembers(e.target.value)
              }}
            />
          </span>
        </div>
      </section>
      <section className="px-2 sm:px-4">
        <div className="min-w-full bg-background-transparent-dark p-4 rounded">
          <Table className="min-w-full mb-4">
            <TableCaption>Visuelize os nossos membros</TableCaption>
            <TableHeader>
              <TableRow>
                {columns.map((column, index) => (
                  <TableHead key={index} className="text-primary 2xl:text-lg">
                    {column.name}
                  </TableHead>
                ))}
                <TableHead className="text-right hidden" />
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-x-scroll">
              {filteredMembers.map((member) => (
                <TableRow
                  key={member.id}
                  className="border-b-0 cursor-pointer hover:rounded hover:bg-background"
                  onClick={() => {
                    handleMemberClick(member.id)
                  }}
                >
                  <TableCell className="align-top w-[140px] sm:w-[180px] lg:w-[220px] 2xl:w-[260px] 2xl:text-lg">
                    {getCroppedName(member.name)}
                  </TableCell>
                  <TableCell className="text-sm sm:text-base align-top min-w-[200px] max-w-[320px] overflow-hidden text-ellipsis 2xl:text-lg">
                    {getCroppedDescription(member.description)}
                  </TableCell>
                  <TableCell className="flex justify-end text-right p-0 w-full">
                    <span className="flex items-center justify-center p-4 w-fit cursor-pointer">
                      <i className="icon-[majesticons--eye] text-2xl lg:text-3xl"></i>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
              {!filteredMembers ||
                (filteredMembers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={columns.length + 1} className="text-center">
                      Nenhum membro encontrado
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  )
}
