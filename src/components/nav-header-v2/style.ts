import styled from 'styled-components'

export const NavHeaderV2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  .song {
    color: ${(props) => props.theme.color.fourColor};
    font-weight: bold;
  }
  .seeAll {
    color: ${(props) => props.theme.color.threeColor};
  }
`
