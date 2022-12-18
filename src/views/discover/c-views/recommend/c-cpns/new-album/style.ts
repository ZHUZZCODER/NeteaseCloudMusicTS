import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  .newAlbumContent {
    height: 184px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn {
      position: relative;
      top: -12px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .leftBtn {
      background-position: -265px -77px;
      &:hover {
        background-position: -285px -77px;
      }
    }
    .rightBtn {
      background-position: -298px -77px;
      &:hover {
        background-position: -318px -77px;
      }
    }
    .albumCenter {
      width: 645px;

      /* margin-right: 17px; */
      .albumList {
        display: flex;
        justify-content: space-between;
        margin-right: 16px;
      }
    }
  }
`
