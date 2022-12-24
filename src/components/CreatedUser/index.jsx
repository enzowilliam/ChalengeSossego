import { Cep, Email, MidForm, Name, Number, Street, Title } from './styles'

const CreatedUser = ({ data }) => {
  return (
    <div>
      <Title>Usuario criado!</Title>
      <Name>
        <h3>Nome</h3>
        <p>{data.name}</p>
      </Name>
      <Email>
        <h3>Email</h3>
        <p>{data.email}</p>
      </Email>
      <MidForm>
        <Street>
          <h3>Rua</h3>
          <p>{data.street}</p>
        </Street>

        <Number>
          <h3>Número</h3>
          <p>{data.number}</p>
        </Number>
      </MidForm>

      <Cep>
        <h3>CEP</h3>
        <p>{data.cep}</p>
      </Cep>
    </div>
  )
}

export default CreatedUser
/*


<Email>
*/
