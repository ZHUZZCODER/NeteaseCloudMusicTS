import styled from 'styled-components'

export const LabelBtnItemWrapper = styled.a.attrs({
  className: 'sprite_button'
})`
  display: block;
  padding: 0 10px 0 0;
  margin: 0 10px 0 0;
  cursor: pointer;
  background-position: right -27px;
  .btnLabel {
    display: block;
    padding: 0px 3px 0 13px;
    height: 22px;
    line-height: 22px;
    background-position: 0 0;
    color: #777;
  }
  :hover {
    background-position: right -1430px;
    .btnLabel {
      background-position: 0 -1400px;
    }
  }
`
