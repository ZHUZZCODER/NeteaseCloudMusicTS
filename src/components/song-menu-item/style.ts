import styled from 'styled-components'

export const SongMenuItemWrapper = styled.div`
  width: 140px;
  margin: 15px 0;
  .songHeader {
    width: 140px;
    height: 140px;
    position: relative;
    .imgBox {
      width: 100%;
      height: 100%;
    }
    .cover {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-position: 0 0;
    }
    .cover_bottom {
      width: 100%;
      height: 27px;
      position: absolute;
      left: 0;
      bottom: 0;
      color: #ccc;
      background-position: 0 -537px;
      .bottomContent {
        position: absolute;
        width: 100%;
        height: 27px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hearBox {
          .hear {
            display: inline-block;
            margin: 0 5px 0 10px;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
            vertical-align: top;
          }
          p {
            display: inline-block;
          }
        }
        .play {
          width: 16px;
          height: 17px;
          margin-right: 10px;
          background-position: 0 0;
          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }
  }
  .songFooter {
    a {
      display: inline-block;
      vertical-align: middle;
      font-size: 14px;
      margin: 8px 0 3px;
      line-height: 1.4;
    }
  }
`
