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

export const Icon = styled.div`
  //display: flex;
`

export const CurrentStep = styled.div`
  //text-align: center;
  //width: 120px;
  //padding: 0.5rem;
  //margin-bottom: 0.2rem;
  //${({ active }) => active && `background: #00AE63 `};
`

export const ActiveStep = styled.div``
