import styled from 'styled-components'

export const NavHeaderV4Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 11px 0;
  border-bottom: 2px solid #c20c0c;
  .leftBox {
    display: flex;
    .leftTitle {
      font-size: 24px;
      font-weight: normal;
      > a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .tabList {
      margin: 12px 0 0 20px;
      .tabItem {
        color: ${(props) => props.theme.color.threeColor};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .line {
        margin: 0 10px;
        color: #c7c7c7;
      }
      .line:last-of-type {
        display: none;
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
