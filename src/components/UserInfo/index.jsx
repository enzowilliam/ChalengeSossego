import { FormControl } from "./styles"

const UserForm = (data) => {
  return (
    <FormControl>
      <h3>Nos conte mais sobre você</h3>
      <textarea name="aboutMe" id="aboutMe"></textarea>
    </FormControl>
  )
}

export default UserForm