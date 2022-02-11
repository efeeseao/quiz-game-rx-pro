import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  align?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium',
  align = 'left'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineBottom={lineBottom}
    lineColor={lineColor}
    lineLeft={lineLeft}
    size={size}
    align={align}
  >
    {children}
  </S.Wrapper>
)

export default Heading
