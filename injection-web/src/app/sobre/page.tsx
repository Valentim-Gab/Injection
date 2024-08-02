import React, { ReactNode } from 'react'

interface About {
  title: string | ReactNode
  description: string | ReactNode
}

export default function About() {
  const about: About = {
    title: 'Sobre o Inject',
    description: (
      <p className="max-w-[1000px] text-shadow-custom font-medium text-base leading-7 sm:text-xl sm:leading-8 2xl:text-2xl 2xl:leading-10">
        Este site foi desenvolvido para um projeto da disciplina ELC924 -
        SISTEMAS DE BANCOS DE DADOS, ministrada pelo professor Dr. João Carlos
        Damasceno Lima (Caio), na Pós-graduação Stricto Sensu - Mestrado em
        Ciência da Computação da Universidade Federal de Santa Maria (UFSM).
        <br />
        <br />O objetivo do projeto é desenvolver sites e apis para testes de
        SQL Injection em tecnolgias diferentes. No caso deste site, o foco é o
        Next.js, um framework de React no Frontend e tecnologias como Node.js e
        Spring (Java) no Backend. Para banco de dados está sendo utilizado o
        PostgreSQL.
        <br />
        <br />
        Além disso, há outro site para os mesmos teste, mas esse outro site foi
        desenvolvido em PHP (Frontend e Backend) e MySQL (Banco de Dados).
      </p>
    ),
  }

  return (
    <main className="main main-container flex flex-col items-center gap-8 pb-8 px-8 sm:px-16">
      <h1 className="mt-8 text-center break-words text-shadow-custom text-primary uppercase font-bold text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl">
        {about.title}
      </h1>
      {about.description}
    </main>
  )
}
