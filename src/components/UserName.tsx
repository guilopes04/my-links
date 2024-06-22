// src/components/UserName.tsx
import React from 'react'
import styled from 'styled-components'

export interface UserNameProps {
  name: string
}

const NameContainer = styled.h2`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const UserName: React.FC<UserNameProps> = ({ name }) => (
  <NameContainer>{name}</NameContainer>
)

export default UserName
