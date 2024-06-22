import styled from 'styled-components'

export interface UserRoleProps {
  role: string
}

const UserRoleComponent = styled.h4`
  text-align: center;
  margin-bottom: 25%;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const UserRole: React.FC<UserRoleProps> = ({ role }) => (
  <UserRoleComponent>{role}</UserRoleComponent>
)

export default UserRole
