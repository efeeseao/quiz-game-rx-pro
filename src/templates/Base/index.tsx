import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => <S.Wrapper>{children}</S.Wrapper>

export default Base
