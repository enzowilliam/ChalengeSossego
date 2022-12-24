import styled from 'styled-components'


export const UserFormStyle = styled.div`
   margin-top: 100px;
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2rem;
  span{
    color: red;
  }
`

export const NameInput = styled.input`
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background: #f0f2f6;
  width: 54rem;
`

export const PasswordInput = styled.input`
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background: #f0f2f6;
  width: 25rem;
`

export const EmailInput = styled.input`
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background: #f0f2f6;
  width: 25rem;
`

export const BirthDateInput = styled.input`
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background: #f0f2f6;
  width: 25rem;
`

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`
