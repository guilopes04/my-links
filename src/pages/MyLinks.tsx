import ButtonLink, { ButtonLinkProps } from '../components/ButtonLink'
import MainDiv from '../components/MainDiv'
import UserInfo from '../components/UserInfo'

export interface User {
  imageSrc: string
  name: string
  role: string
  buttonLinks?: ButtonLinkProps[] // tornando buttonLinks opcional
}

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
    },
    {
      text: 'Currículo/CV',
      downloadName: 'guilhermelopes_cv',
      link: '/guilhermelopes_cv.pdf',
      icon: 'pdf'
    }
  ]
}

const MyLinks: React.FC = () => {
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
            downloadName={buttonLink.downloadName}
          />
        ))}
    </MainDiv>
  )
}
export default MyLinks
