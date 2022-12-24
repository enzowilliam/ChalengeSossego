import styled from 'styled-components'

export const IconStyle = styled.div`
  display: flex;
  flex-direction: row;

  .TextIcon {
    background-color: rgb(222, 222, 223);
    border-radius: 100%;
    margin-right: 10px;
    padding: 7px;
    ${({ active }) => active && `background: #00AE63 `};
    
  }
`
