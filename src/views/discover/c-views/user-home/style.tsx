import styled from 'styled-components'

export const UserHomeWrapper = styled.div.attrs({
  className: 'wrap-v2'
})`
  padding: 40px;
  background-color: ${(props) => props.theme.color.nineColor};
  border: 1px solid ${(props) => props.theme.color.tenColor};
  border-top: none;
  border-bottom: none;
  .singerLogo {
    width: 180px;
    height: 180px;
    padding: 3px;
    border: 1px solid ${(props) => props.theme.color.eightColor};
    box-sizing: content-box;
  }
`

export const SingerNavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 43px;
`
