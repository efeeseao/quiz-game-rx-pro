import { Container, Game } from 'components'
import { Base } from 'templates'

import * as S from './styles'

const GameTemplate = () => (
  <Base>
    <Container>
      <S.Wrapper>
        <Game />
      </S.Wrapper>
    </Container>
  </Base>
)

export default GameTemplate
