import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  width: 100%;
  height: 126px;
  background-position: 0 0;
  .loginHeader {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: ${(props) => props.theme.color.threeColor};
  }
  .loginBtn {
    display: flex;
    justify-content: center;
    .login {
      width: 100px;
      height: 31px;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;
      font-size: 12px;
      background-color: transparent;
      text-align: center;
      line-height: 31px;
      :hover {
        background-position: -110px -195px;
      }
    }
  }
`
