// src/components/ButtonComponent.tsx
import React from 'react'
import { RedirectButton, DownloadButton } from './ButtonTypes'

interface ButtonProps {
  href: string
  icon?: React.ComponentType<{ size: number }>
  text: string
  downloadName?: string
}

const ButtonComponent: React.FC<ButtonProps> = ({
  href,
  icon: IconComponent,
  text,
  downloadName
}) => {
  const isPdf = href.toLowerCase().includes('.pdf')

  return isPdf ? (
    <DownloadButton
      href={href}
      icon={IconComponent}
      text={text}
      downloadName={downloadName}
    />
  ) : (
    <RedirectButton href={href} icon={IconComponent} text={text} />
  )
}

export default ButtonComponent
