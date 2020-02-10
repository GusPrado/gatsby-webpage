import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import './styles.css'
import BtnWhats from '../components/BtnWhats'
import Logo from '../components/Logo'
import img from '../assets/img-gen.png'
import selo from '../assets/selo.png'


const Header = ({ children }) => {
  return (
    <div className='p-4 bg-indigo-800 sm:flex justify-between items-center'>
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
        <div>
          <h5>Lima Móveis</h5>
          <p>Rua X, bairro Y</p>
        </div>
        <BtnWhats />
      </div>
  )
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="px-8 py-2">
          <h2 className="font-bold text-2xl ">Móveis planejados</h2>
          <p className="text-xl">Comerciais e residenciais para todos os ambientes</p>
          <p className="text-gray-700">Atendemos Pouso Alegre e região</p>
        </div>
        <img src={img} alt="Imagem principal"/>
      </div>
  )
}

const Index = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetaData {
          title
        }
      }
    }
  `)
  const selos = [1,2,3,4]
  const projetos = [1,2,3]

  return (
    <div>
      <Helmet>
        <title>{site.siteMetaData.title}</title>
      </Helmet>
      <Header>
          <Logo />
        <div>
          <BtnWhats />       
        </div>
      </Header>
      <Hero />
      <div className="flex flex-col items-center sm:flex-row justify-around">
        {
          selos.map(() => {
            return <img src={selo} alt="selos" className="my-4"/>
            })
        }
      </div>
      <div>
        <h2 className="p-8 text-2xl font-bold">Projetos executados</h2>
        <div className="flex flex-wrap ">
            {
              projetos.map( proj => {
                return (
                  <div className="max-w-sm">
                    <div className="m-2 rounded shadow-lg">
                      <img src={img} alt="projetos"/>
                      <div className="px-6 py-4">
                      <p className="font-bold text-xl mb-2">Projeto {proj}</p>
                        <p>Descrição</p>
                    </div>
                  </div>
            </div>
                )
              })
            }
          </div>   
      </div>
      <Footer />   
    </div>
  )
}

export default Index;