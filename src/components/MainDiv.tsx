import styled from 'styled-components'

const MainDiv = styled.div`
  background-color: rgb(103, 199, 102);
  padding: 3rem 10rem; /* 3rem de padding superior e inferior, 10rem de padding esquerda e direita para navegadores */
  max-width: 15rem; /* Largura máxima da div para navegadores */
  margin: 3% auto; /* Margem de 3% superior e inferior e 'auto' para centralizar horizontalmente para navegadores */
  border-radius: 2%;
  max-height: 65vh; /* Altura máxima da div */

  @media (max-width: 768px) {
    /* Ajustes para dispositivos móveis */
    padding: 5rem 3rem; /* Reduz padding para 3rem superior e inferior, 2rem esquerda e direita */
    max-width: 100%; /* Permite que a div ocupe toda a largura disponível */
    margin: 0% auto; /* Mantém a margem de 3% superior e inferior e centraliza horizontalmente */
    border-radius: 0%;
    min-height: 82.8vh;
  }
`

export default MainDiv
