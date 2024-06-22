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
`

const UserImage: React.FC<UserImageProps> = ({ src, alt }) => (
  <ImageContainer>
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: '100%', borderRadius: '25%' }}
    />
  </ImageContainer>
)

export default UserImage
