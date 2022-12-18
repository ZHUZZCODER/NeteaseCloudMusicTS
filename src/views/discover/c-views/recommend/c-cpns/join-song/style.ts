import styled from 'styled-components'

export const JoinSongWrapper = styled.div`
  margin: 15px 20px 0;
  .songContent {
    margin: 20px 0 0 0;
    > div {
      margin-bottom: 16px;
    }
  }
  /* 这个比较麻烦 */
  .btnBox {
    display: flex;
    justify-content: center;
    .btn {
      display: inline-block;
      text-align: center;
      line-height: 31px;
      font-weight: bold;
      border-radius: 4px;
      padding: 0 5px 0 0;
      background-position: right -100px;
      > p {
        display: inline-block;
        width: 170px;
        padding: 0 15px 0 20px;
        height: 31px;
        background-position: 0 -59px;
      }
    }
  }
`
