import React, { useEffect } from 'react'
import './App.css'
import MainDiv from './components/MainDiv'
import ButtonLink, { ButtonLinkProps } from './components/ButtonLink'
import UserInfo from './components/UserInfo'

interface User {
  imageSrc: string
  name: string
  role: string
  buttonLinks?: ButtonLinkProps[] // tornando buttonLinks opcional
}

const App: React.FC = () => {
  let apiCalled = false
  useEffect(() => {
    const api =
      'https://rvpf4aupl8.execute-api.us-east-1.amazonaws.com/v1/site-access'
    if (!apiCalled) {
      fetch(api, {
        method: 'POST'
      })
    }
    apiCalled = true
  }, [])

  const user: User = {
    imageSrc: process.env.PUBLIC_URL + '/user_photo.jpg', // Caminho da imagem na pasta public
    name: 'Guilherme Lopes',
    role: 'Desenvolvedor Back-End',
    buttonLinks: [
      {
        text: 'Linkedin',
        link: 'https://www.linkedin.com/in/guilherme-lopes-18ab09210/',
        icon: 'linkedin'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/guilopes04',
        icon: 'github'
      }
    ]
  }

  return (
    <MainDiv>
      <UserInfo
        src={user.imageSrc}
        alt="User Image"
        name={user.name}
        role={user.role}
      ></UserInfo>
      {user.buttonLinks &&
        user.buttonLinks.map((buttonLink, index) => (
          <ButtonLink
            key={index}
            text={buttonLink.text}
            link={buttonLink.link}
            icon={buttonLink.icon}
          />
        ))}
    </MainDiv>
  )
}

export default App
