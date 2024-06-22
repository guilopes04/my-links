// src/components/UserName.tsx
import React from 'react'
import styled from 'styled-components'

export interface UserNameProps {
  name: string
}

const NameContainer = styled.h2`
  text-align: center;
`

const UserName: React.FC<UserNameProps> = ({ name }) => (
  <NameContainer>{name}</NameContainer>
)

export default UserName
