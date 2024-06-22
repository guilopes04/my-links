import styled from 'styled-components'

export interface UserRoleProps {
  role: string
}

const UserRoleComponent = styled.h4`
  text-align: center;
  margin-bottom: 25%;
`

const UserRole: React.FC<UserRoleProps> = ({ role }) => (
  <UserRoleComponent>{role}</UserRoleComponent>
)

export default UserRole
