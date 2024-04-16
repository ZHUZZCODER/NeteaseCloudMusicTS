import styled from 'styled-components'

export const NewSonglistWrapper = styled.section`
  padding: 40px 0 40px 30px;
  .inputContainer {
    font-size: ${(props) => props.theme.size.primarySize};
    color: ${(props) => props.theme.color.fourColor};
    .inputBox {
      vertical-align: middle;
      width: 330px;
      height: 19px;
      margin: 0;
      padding: 5px 6px 6px;
      border: 1px solid #cdcdcd;
      border-radius: 2px;
      line-height: 19px;
      box-sizing: content-box;
      outline: none;
      background-color: #fff;
    }
  }

  .newSonglistTx {
    margin: 8px 0 20px 48px;
    color: ${(props) => props.theme.color.sixColor};
  }
  .songBtn {
    margin-left: 48px;
    .btn {
      width: 80px;
      height: 31px;
      font-size: ${(props) => props.theme.size.primarySize};
      border-radius: 4px;
    }
    .cancelBtn {
      margin-left: 20px;
    }
  }
`
