import styled from 'styled-components'

export const RankingInfoWrapper = styled.div`
  .rankingHeader {
    display: flex;
    padding: 0 0 40px 0;
    .imgBox {
      position: relative;
      width: 150px;
      height: 150px;
      padding: 3px;
      border: 1px solid ${(props) => props.theme.color.fiveColor};
      box-sizing: content-box;
      img {
        width: 100%;
        height: 100%;
      }
      .imgMask {
        position: absolute;
        width: 150px;
        height: 150px;
        left: 4px;
        top: 4px;
        background-position: -230px -380px;
      }
    }
    .rankinginfo {
      padding: 10px 0 0 30px;
      .rankingTitle {
        font-size: 20px;
        font-weight: normal;
        line-height: 24px;
      }
      .timeBox {
        display: flex;
        line-height: 35px;
        margin: 10px 0 20px 0;
        .timeIcon {
          position: relative;
          top: 9px;
          width: 13px;
          height: 13px;
          background-position: -18px -682px;
        }
        .timeUpdate {
          margin: 0 0 0 5px;
          color: ${(props) => props.theme.color.threeColor};
          > span {
            color: ${(props) => props.theme.color.sixColor};
          }
        }
      }
    }
  }
`
