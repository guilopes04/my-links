import styled from 'styled-components'
import UserImage, { UserImageProps } from './UserImage'
import UserName, { UserNameProps } from './UserName'
import UserRole, { UserRoleProps } from './UserRole'

const UserInfoComponent = styled.div``

type UserInfoProps = UserImageProps & UserNameProps & UserRoleProps

const UserInfo: React.FC<UserInfoProps> = ({ src, alt, name, role }) => (
  <UserInfoComponent>
    <UserImage src={src} alt={alt}></UserImage>
    <UserName name={name}></UserName>
    <UserRole role={role}></UserRole>
  </UserInfoComponent>
)

export default UserInfo
