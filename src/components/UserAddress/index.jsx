import { PreviousButton } from '../../styles'
import {
  MediumInput,
  SmalInput,
  LargeInput,
  FormControl,
  FirstContainer,
  Cep,
  Street,
  MidForm,
  InputSizes,
  District,
  Number,
  City,
  UserAddressStyle,
  Reference
} from './styles'

const UserAddress = ({ data, updateFieldHandler }) => {

  return (
    <UserAddressStyle>
      <FirstContainer>
        <Cep>
          <label htmlFor="cep">CEP</label>
          <MediumInput
            styles
            type="text"
            name="cep"
            id="cep"
            required
            value={data.cep || ''}
            onChange={e => updateFieldHandler('cep', e.target.value)}
          />
        </Cep>
        <Street>
          <label htmlFor="street">Rua</label>
          <MediumInput
            type="text"
            name="street"
            id="street"
            required
            value={data.street || ''}
            onChange={e => updateFieldHandler('street', e.target.value)}
          />
        </Street>
      </FirstContainer>
      <MidForm>
        <InputSizes>
          <Number>
            <label htmlFor="number">Numero</label>
            <SmalInput
              type="number"
              name="email"
              id="number"
              required
              value={data.number || ''}
              onChange={e => updateFieldHandler('number', e.target.value)}
            />
          </Number>

          <District>
            <label htmlFor="district">Bairro</label>
            <SmalInput
              type="text"
              name="district"
              id="district"
              required
              value={data.district || ''}
              onChange={e => updateFieldHandler('district', e.target.value)}
            />
          </District>
        </InputSizes>
        <City>
          <label htmlFor="city">Cidade</label>
          <MediumInput
            type="city"
            name="city"
            id="city"
            required
            value={data.city || ''}
            onChange={e => updateFieldHandler('city', e.target.value)}
          />
        </City>
      </MidForm>
      <Reference>
        <label htmlFor="reference">Ponto de referencia</label>
        <LargeInput
          type="text"
          name="reference"
          id="reference"
          required
          value={data.reference || ''}
          onChange={e => updateFieldHandler('reference', e.target.value)}
        />
      </Reference>
    </UserAddressStyle>
  )
}

export default UserAddress
