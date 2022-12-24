import React from 'react'
import { RiHome4Fill } from 'react-icons/ri'
import { IconStyle } from './styles'

const AddressIcon = () => {
  return (
    <IconStyle >
      <RiHome4Fill size={35} className="TextIcon" />
      <p>
        <b>Endereço do usuário</b>
      </p>
    </IconStyle>
  )
}

export default AddressIcon
