import React from 'react'
import styled from 'styled-components'
import {
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaFilePdf,
  FaAppleAlt
} from 'react-icons/fa' // Importe os ícones desejados
import { IconType } from 'react-icons'
import ButtonComponent from './ButtonComponent'

export interface ButtonLinkProps {
  text: string
  link: string
  icon?: 'linkedin' | 'github' | 'behance' | 'pdf'
  downloadName?: string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  link,
  icon,
  downloadName
}) => {
  let IconComponent: IconType = FaAppleAlt

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
    <ButtonComponent
      href={link}
      icon={IconComponent}
      text={text}
      downloadName={downloadName}
    ></ButtonComponent>
  )
}

export default ButtonLink
