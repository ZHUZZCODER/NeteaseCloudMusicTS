import styled from 'styled-components'

export const RadioRankingItemWrapper = styled.li`
  display: flex;
  flex-shrink: 0;
  width: 435px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  .radioImgBox {
    display: block;
    width: 120px;
    height: 120px;
    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .radioTxBox {
    margin-left: 20px;
    .radioTitle {
      height: 64px;
      line-height: 64px;
      font-size: 18px;
    }
    .userInfo {
      display: flex;
      align-items: center;
      margin: 0 0 6px 0;
      .iconUser {
        width: 14px;
        height: 15px;
        background-position: -50px -300px;
        ${(props) => props.theme.mixin.textNowrap}
      }
      .username {
        margin: 0 0 0 5px;
        line-height: 16px;
      }
      .iconLogo {
        display: block;
        width: 13px;
        height: 13px;
      }
    }
    .radioDesc {
      color: ${(props) => props.theme.color.sixColor};
    }
  }
`
