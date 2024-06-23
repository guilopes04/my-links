// src/components/ButtonTypes.tsx
import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  href: string
  icon?: React.ComponentType<{ size: number }>
  text: string
  downloadName?: string
}

const Button = styled.a`
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

const RedirectButton: React.FC<ButtonProps> = ({
  href,
  icon: IconComponent,
  text
}) => (
  <Button
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    {IconComponent && <IconComponent size={20} />}
    {text}
  </Button>
)

const DownloadButton: React.FC<ButtonProps> = ({
  href,
  icon: IconComponent,
  text,
  downloadName
}) => (
  <Button
    href={href}
    download={downloadName ? downloadName : text}
    style={{ textDecoration: 'none' }}
  >
    {IconComponent && <IconComponent size={20} />}
    {text}
  </Button>
)

export { RedirectButton, DownloadButton }
