import { SetStateAction, useState } from 'react'

import { Button } from 'components'

import { data } from 'constants/data'

import * as S from './styles'

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [myAnswer, setMyAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [finish, setFinish] = useState(false)
  const [show, setShow] = useState(false)
  const [clickAnswer, setClickAnswer] = useState(false)

  const checkAnswer = (variant: SetStateAction<string>) => {
    setMyAnswer(variant)
    setClickAnswer(true)
  }

  const checkCorrectAnswer = () => {
    if (myAnswer === data[currentQuestion].answer) {
      setScore(score + 1)
    }
  }

  const showAnswer = () => {
    setShow((show) => !show)
  }
  const reset = () => {
    setShow(false)
    setClickAnswer(false)
  }

  const finishHandler = () => {
    if (currentQuestion === data.length - 1) {
      setFinish(true)
    }
  }

  const startOver = () => {
    setCurrentQuestion(0)
    setFinish(false)
    setMyAnswer('')
    setScore(0)
  }

  if (finish) {
    return (
      <S.Wrapper>
        <S.Title>
          {`Jogo terminou! tua pontuação foi ${score}/${data.length - 1}`}
        </S.Title>
        <Button onClick={() => startOver()}>Começar de novo</Button>
      </S.Wrapper>
    )
  } else {
    return (
      <S.GameWrapper>
        <S.QuestionTitle>{data[currentQuestion].question}</S.QuestionTitle>
        <S.CurrentQuestion>
          {`${currentQuestion}/${data.length - 1}`}
        </S.CurrentQuestion>
        {data[currentQuestion].variants.map((variant, index) => (
          <S.MyAnswer key={index}>
            <p
              className={`variant ${
                myAnswer === variant
                  ? myAnswer === data[currentQuestion].answer
                    ? 'correctAnswer'
                    : 'incorrectAnswer'
                  : null
              }`}
              onClick={() => checkAnswer(variant)}
            >
              {variant}
            </p>
          </S.MyAnswer>
        ))}
        {clickAnswer && (
          <Button size="large" fullWidth onClick={() => showAnswer()}>
            Mostrar resposta
          </Button>
        )}
        {show && (
          <p className="answer">
            Resposta correta: {data[currentQuestion].answer}
          </p>
        )}
        {currentQuestion < data.length - 1 && (
          <S.ButtonWrapper>
            <Button
              size="large"
              fullWidth
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1)
                checkCorrectAnswer()
                reset()
              }}
            >
              Próxima pergunta
            </Button>
          </S.ButtonWrapper>
        )}

        {currentQuestion === data.length - 1 && (
          <Button size="large" onClick={() => finishHandler()}>
            Terminar
          </Button>
        )}
      </S.GameWrapper>
    )
  }
}

export default Game
