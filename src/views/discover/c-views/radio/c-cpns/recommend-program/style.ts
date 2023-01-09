import styled from 'styled-components'

export const RecommendProgramWrapper = styled.div`
  width: 426px;
  .programBox {
    border: 1px solid ${(props) => props.theme.color.sevenColor};
    border-top: 0;
    > li:nth-of-type(2n) {
      background-color: #f7f7f7;
    }
  }
`
