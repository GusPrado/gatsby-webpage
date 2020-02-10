import React from 'react'

import whats from '../assets/whatsapp-img.png'

const BtnWhats = () => {
  return (
    <div className='bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row'>
      <img src={whats} alt="Whatsapp"/>
      <div className="ml-2">
        <h3 className="font-bold text-2xl">Orçar seu projeto</h3>
        <p className="text-xs">Projeto e orçamento sem compromisso</p>
        <p className="font-bold">(48) 9999-9999</p>
      </div>
    </div>
  )
}

export default BtnWhats;