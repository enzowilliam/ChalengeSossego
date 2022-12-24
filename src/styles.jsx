import styled from 'styled-components'

export const AppStyle = styled.div`
  padding: 2rem;

  .container {
    width: 63.5rem;
    height: 46rem;
    margin: 0 auto;
    background: #ffffff;
    border: 0.12rem solid #f0f2f6;
    box-shadow: 0px 4px 31px #eef1f5;
    border-radius: 0.5rem;
  }

  .lastStepContainer {
    width: 34rem;
    height: 46rem;
    margin: 0 auto;
    background: #ffffff;
    border: 0.12rem solid #f0f2f6;
    box-shadow: 0px 4px 31px #eef1f5;
    border-radius: 0.5rem;
  }
`
export const Footer = styled.div``

export const NewUserButton = styled.button`
  margin-right: 1.5rem;
  margin-top: 8rem;
  color: #fff;
  width: 20rem;
  height: 3.5rem;
  background: #5357b1;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #4247a8;
  }
`

export const Actions = styled.div`
  margin-right: 6rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  input:invalid {
    background: red;
  }
`

export const NextButton = styled.button`
  color: #fff;
  width: 14rem;
  height: 3.5rem;
  background: #5357b1;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #4247a8;
  }
`

export const Header = styled.div`
  margin-top: 2.5rem;
`
export const Title = styled.h2`
  margin: 2rem;
  margin-left: 4rem;
`

export const PreviousButton = styled.button`
  color: #fff;
  width: 14rem;
  height: 3.5rem;
  background: #8c98a9;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`
