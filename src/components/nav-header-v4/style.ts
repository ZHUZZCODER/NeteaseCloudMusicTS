import styled from 'styled-components'

export const NavHeaderV4Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 11px 0;
  border-bottom: 2px solid #c20c0c;
  .leftTitle {
    font-size: 24px;
    font-weight: normal;
    > a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .moreTitle {
    color: ${(props) => props.theme.color.threeColor};
    align-self: center;
    &:hover {
      text-decoration: underline;
    }
  }
`
