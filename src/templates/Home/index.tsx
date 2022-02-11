import { useState } from 'react'

import { Button, Container, Heading, Modal } from 'components'
import { Base } from 'templates'

import * as S from './styles'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Base>
      <S.Wrapper>
        <Container>
          <Heading align="center" color="black">
            Seja bem-vindo o Jogo de perguntas e respostas
          </Heading>
          <S.ButtonWrapper>
            <Button size="large" onClick={() => setIsOpen(true)}>
              Começar o Jogo
            </Button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
          </S.ButtonWrapper>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default Home
