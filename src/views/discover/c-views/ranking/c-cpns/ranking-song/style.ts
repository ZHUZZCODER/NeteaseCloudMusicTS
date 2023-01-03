import styled from 'styled-components'

export const RankingSongWrapper = styled.div`
  .tableBox {
    width: 100%;
    table-layout: fixed;
    border: 1px solid #d9d9d9;
    .theadBox {
      height: 38px;
      .col1w {
        width: 77px;
      }
      .col2w {
      }
      .col3w {
        width: 91px;
      }
      .col4w {
        width: 26%;
      }
      .commonTh {
        text-align: left;
        background-color: #f7f7f7;
        background-position: 0 0;
        background-repeat: repeat-x;
        .divisionIcon {
          display: block;
          height: 38px;
          line-height: 38px;
          padding: 0 0 0 10px;
          background-position: 0 -56px;
          color: ${(props) => props.theme.color.threeColor};
        }
      }
    }
    .contentTr {
      .commonTd {
        padding: 5px 10px;
      }
      .orderBox {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .numBox {
          width: 25px;
          text-align: center;
          color: ${(props) => props.theme.color.sixColor};
        }
        .iconBox {
          width: 16px;
          height: 17px;
          background-position: -67px -283px;
        }
      }
      .titleBox {
        display: flex;
        .titleImgBox {
          width: 50px;
          height: 50px;
          .titleImg {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .titleContent {
          margin: 0 0 0 16px;
          display: flex;
          align-items: center;
          .playIcon {
            width: 17px;
            height: 17px;
            cursor: pointer;
            background-position: 0 -103px;
            &:hover {
              background-position: 0 -128px;
            }
          }
          .activePlayIcon {
            background-position: -20px -128px;
          }
          .songTitle {
            margin: 0 0 0 8px;
            position: relative;
            top: 2px;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
          .mvIcon {
            width: 23px;
            height: 17px;
            background-position: 0 -151px;
            cursor: pointer;
            &:hover {
              background-position: -30px -151px;
            }
          }
        }
      }
      .timeBox {
        display: flex;
        .timeIconList {
          display: none;
          .icon {
            width: 16px;
            height: 16px;
            margin: 0 0 0 6px;
            cursor: pointer;
          }
          .icon:first-of-type {
            margin: 0 0 0 0;
          }
          .addPlayIcon {
            background-position: 2px -699px;
            :hover {
              background-position: -20px -699px;
            }
          }
          .addIcon {
            background-position: -24px 0;
            :hover {
              background-position: -24px -20px;
            }
          }
          .shareIcon {
            background-position: 0 0;
            :hover {
              background-position: 0 -20px;
            }
          }
          .downloadIcon {
            background-position: -57px -50px;
            :hover {
              background-position: -80px -50px;
            }
          }
        }
      }
      .singerBox {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .contentTr:hover {
      .timeTx {
        display: none;
      }
      .timeIconList {
        display: flex;
      }
    }

    .contentTr:nth-child(2n + 1) {
      background-color: #f7f7f7;
    }
  }
`
