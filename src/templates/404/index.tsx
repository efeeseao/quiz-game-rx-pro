import { Link } from 'react-router-dom'

import { Base } from 'templates'

import * as S from './styles'

const NotFoundPage = () => (
  <Base>
    <S.Wrapper>
      <h1>Página não encontrada!</h1>
      <p>Parece que você acabou de acessar uma routa que não existe.</p>
      <Link to="/">Voltar no Início</Link>
    </S.Wrapper>
  </Base>
)

export default NotFoundPage
