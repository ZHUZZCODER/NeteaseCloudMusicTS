import styled from 'styled-components'

export const NavHeaderV3Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  border-bottom: 2px solid #c20c0c;
  .header-left {
    display: flex;
    h1 {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      margin: 0 20px 0 0;
    }
    span {
      margin: 9px 0 0 0;
    }
  }
  .header-right {
    display: flex;
    .right-link {
      display: flex;
      align-items: center;
      margin: 0 20px 0 0;
      > i {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
      }
      > a {
        display: inline-block;
        color: #4996d1;
        text-decoration: underline;
      }
    }
    .playText {
      color: ${(props) => props.theme.color.threeColor};
      span {
        color: #c20c0c;
        font-weight: bold;
      }
    }
  }
`
