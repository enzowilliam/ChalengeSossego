import React from 'react'
import { RiUser5Fill } from 'react-icons/ri'
import { IconStyle } from './styles'

const UserIcon = () => {
  return (
    <IconStyle >
      <RiUser5Fill size={35} className="TextIcon" />
      <p>
        <b>Identificação do usuário</b>
      </p>
    </IconStyle>
  )
}

export default UserIcon
