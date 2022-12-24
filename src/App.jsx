import UserForm from './components/UserForm'
import UserAddress from './components/UserAddress'
import UserInfo from './components/UserInfo'
import CreatedUser from './components/CreatedUser'
import Steps from './components/Steps'

import { useForm } from './hooks/useForm'
import { useState, useEffect } from 'react'

import {
  Header,
  NextButton,
  PreviousButton,
  Title,
  AppStyle,
  Actions,
  NewUserButton,
  Footer
} from './styles'
import './App.css'

const formTemplate = {
  name: '',
  email: '',
  birthDate: '',
  street: '',
  number: '',
  cep: '',
  district: '',
  city: '',
  reference: ''
}

function App() {
  const [data, setData] = useState(formTemplate)
  const [passwordError, setPasswordError] = useState(false)

  const updateFieldHandler = (key, value) => {
    setData(prev => {
      return { ...prev, [key]: value }
    })    
  }

  useEffect(() => {
       data.password != data.confirmPassword ? setPasswordError(true) : setPasswordError(false)   
  },[setPasswordError, data.password, data.confirmPassword]);



  const reStart = () => {
    window.location.reload(false)
  }

  const steps = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} passwordError={passwordError} />,
    <UserAddress data={data} updateFieldHandler={updateFieldHandler} setData={setData} />,
    <UserInfo data={data} updateFieldHandler={updateFieldHandler} />,
    <CreatedUser data={data} updateFieldHandler={updateFieldHandler} />
  ]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(steps)

  return (
    <AppStyle>
      <div className={!isLastStep ? 'container' : 'lastStepContainer'}>
        {!isLastStep && (
          <Header>
            <Title>Criação de Usuário</Title>
            <Steps currentStep={currentStep} />
          </Header>
        )}

        <form
          onSubmit={event => {
            changeStep(currentStep + 1, event)
          }}
        >
          <div className="inputsContainer">{currentComponent}</div>
          <Actions>
            {!isFirstStep && !isLastStep && (
              <PreviousButton
                type="button"
                onClick={() => changeStep(currentStep - 1)}
              >
                Anterior
              </PreviousButton>
            )}
            {!isLastStep ? (
              <NextButton
                type="submit"
                disabled={passwordError} /*onSubmit={validations()}/*/
              >
                Próximo passo
              </NextButton>
            ) : (
              <Footer>
                <NewUserButton onClick={reStart}>Novo usuário</NewUserButton>
              </Footer>
            )}
          </Actions>
        </form>
      </div>
    </AppStyle>
  )
}

export default App
