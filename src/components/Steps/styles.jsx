import styled from 'styled-components'

export const Step = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  .svg {
    ${({ active }) => active && `fill: #00AE63 `};
  }
  margin-left: -125px
`
export const CurrentStep = styled.div`

`


