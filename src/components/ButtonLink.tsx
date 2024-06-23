import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaBehance, FaFilePdf } from 'react-icons/fa' // Importe os ícones desejados
import { IconType } from 'react-icons'

export interface ButtonLinkProps {
  text: string
  link: string
  icon?: 'linkedin' | 'github' | 'behance' | 'pdf'
}

const ButtonComponent = styled.a`
  display: flex; /* Mostra o botão como um flex container */
  align-items: center; /* Alinha itens verticalmente */
  justify-content: center; /* Centraliza conteúdo horizontalmente */
  padding: 15px 20px;
  background-color: black;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: rgb(221, 221, 221);
  transition: background-color 0.3s ease;
  margin-bottom: 1.5rem; /* Adiciona espaço entre os botões */
  &:hover {
    background-color: rgb(84, 84, 84);
  }

  svg {
    margin-right: 10px; /* Espaçamento entre o ícone e o texto */
  }
`

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, link, icon }) => {
  let IconComponent: IconType | null = null

  switch (icon) {
    case 'linkedin':
      IconComponent = FaLinkedin
      break
    case 'github':
      IconComponent = FaGithub
      break
    case 'behance':
      IconComponent = FaBehance
      break
    case 'pdf':
      IconComponent = FaFilePdf
      break
    default:
      break
  }

  return (
    <ButtonComponent href={link} target="_blank" rel="noopener noreferrer">
      {IconComponent && <IconComponent size={20} />}
      {text}
    </ButtonComponent>
  )
}

export default ButtonLink
