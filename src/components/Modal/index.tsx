import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Close } from '@styled-icons/material-outlined/Close'

import { Button, Heading, InputField } from 'components'

import * as S from './styles'

type ModalProps = {
  setIsOpen: (isOpen: boolean) => void
}

const Modal = ({ setIsOpen }: ModalProps) => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsOpen(false)

    try {
      navigate(`/game`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <S.Wrapper>
      <S.Centered>
        <S.Modal>
          <S.Header>
            <Heading align="center" color="black">
              Informe seu nome para começar o jogo
            </Heading>
          </S.Header>
          <S.CloseButton>
            <Close
              size={24}
              style={{ marginBottom: '-3px' }}
              onClick={() => setIsOpen(false)}
            />
          </S.CloseButton>
          <S.FormWrapper onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
            />
            <S.ButtonWrapper>
              <Button fullWidth size="large">
                Ir para o Jogo
              </Button>
            </S.ButtonWrapper>
          </S.FormWrapper>
        </S.Modal>
      </S.Centered>
    </S.Wrapper>
  )
}

export default Modal
