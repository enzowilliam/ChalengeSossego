import React from 'react'
import { FiFileText } from 'react-icons/fi'
import { IconStyle } from './styles'

const AboutIcon = ({ currentStep }) => {
  return (
    <IconStyle active={currentStep > 2 ? true : false}>
      <FiFileText size={35} className="TextIcon" />
      <p>
        <b>Sobre você</b>
      </p>
    </IconStyle>
  )
}

export default AboutIcon
