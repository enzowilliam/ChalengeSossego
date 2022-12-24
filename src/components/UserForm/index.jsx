import {
  FormControl,
  FirstContainer,
  NameInput,
  PasswordInput,
  EmailInput,
  BirthDateInput,
  UserFormStyle
} from './styles'

const UserForm = ({ data, updateFieldHandler, passwordError }) => {
  return (
    <UserFormStyle>
      <FormControl>
        <label htmlFor="name">Nome</label>
        <NameInput
          type="text"
          name="text"
          id="name"
          required
          value={data.name || ''}
          onChange={e => updateFieldHandler('name', e.target.value)}
        />
      </FormControl>
      <FirstContainer>
        <FormControl>
          <label htmlFor="password">Senha</label>
          <PasswordInput
            styles
            type="password"
            name="password"
            id="password"
            required
            value={data.password || ''}
            onChange={e => updateFieldHandler('password', e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="password">Confirmar Senha</label>
          <PasswordInput
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            value={data.confirmPassword || ''}
            onChange={e =>
              updateFieldHandler('confirmPassword', e.target.value)
            }
          />
          {passwordError && <span>as Senhas não coincidem</span>}
        </FormControl>
      </FirstContainer>
      <FirstContainer>
        <FormControl>
          <label htmlFor="email">E-mail</label>
          <EmailInput
            type="email"
            name="email"
            id="email"
            required
            value={data.email || ''}
            onChange={e => updateFieldHandler('email', e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="birthdate">Data de nascimento</label>
          <BirthDateInput
            type="date"
            id="birthData"
            name="birthData"
            max="2022-12-31"
            required
            value={data.birthdate || ''}
            onChange={e => updateFieldHandler('birthdate', e.target.value)}
          />
        </FormControl>
      </FirstContainer>
    </UserFormStyle>
  )
}

export default UserForm
