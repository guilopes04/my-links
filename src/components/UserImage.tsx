// src/components/UserImage.tsx
import React from 'react'
import styled from 'styled-components'

export interface UserImageProps {
  src: string
  alt: string
}

const ImageContainer = styled.div`
  margin-bottom: 10%; /* Adiciona espaço inferior para afastar dos elementos abaixo */
  width: 100%; /* Ajuste conforme necessário */
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */

  img {
    width: 50%; /* Define a largura da imagem */
    height: auto; /* Mantém a proporção da imagem */
    border-radius: 15%;

    @media (max-width: 768px) {
      width: 65%; /* Reduz a largura da imagem em dispositivos móveis */
    }
  }
`

const UserImage: React.FC<UserImageProps> = ({ src, alt }) => (
  <ImageContainer>
    <img src={src} alt={alt} />
  </ImageContainer>
)

export default UserImage
