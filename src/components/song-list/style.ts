import styled from 'styled-components'

export const SongListWrapper = styled.div`
  table {
    /* width: 100%; */
    /* .trWrap1 {
      height: 38px;
      th,
      .icon {
        background-color: #f7f7f7;
        background-position: 0 0;
        background-repeat: repeat-x;
        color: ${(props) => props.theme.color.threeColor};
      }
      .icon {
        display: block;
        height: 38px;
        line-height: 38px;
        padding: 0 0 0 10px;
      }
      .iconLeft {
        padding: 0 0 0 3px;
        background-position: 0 -56px;
        background-repeat: no-repeat;
        text-align: left;
      }
      .thCol1 {
        width: 74px;
      }
      .thCol2 {
      }
      .thCol3 {
        width: 111px;
      }
      .thCol4 {
        width: 14%;
      }
      .thCol5 {
        width: 20%;
      }
    }
    .trWrap2 {
      height: 30px;
      td {
        height: 30px;
      }
      .tdCol1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 15px;
        .col1Num {
          width: 25px;
          color: #999;
          vertical-align: middle;
        }
        .col1Icon {
          width: 17px;
          height: 17px;
          background-position: 0 -103px;
          cursor: pointer;
          :hover {
            background-position: 0 -128px;
          }
        }
      }
      .tdCol2 {
        .col2Box {
          padding: 0 0 0 10px;
          width: 99%;
          ${(props) => props.theme.mixin.textNowrap}
          .col2SongTitle {
            color: #aeaeae;
          }
        }
      }
    } */
    width: 100%;
    table-layout: fixed;
    tr {
      /* width: 100%; */
      th {
        height: 38px;
        background-color: #f7f7f7;
        text-align: left;
        background-position: 0 0;
        background-repeat: repeat-x;
        .thIcon {
          display: block;
          height: 38px;
          line-height: 38px;
          padding: 0 0 0 10px;
          background-position: 0 -56px;
          color: ${(props) => props.theme.color.threeColor};
        }
      }
      .Col1 {
        width: 74px;
      }
      .Col2 {
      }
      .Col3 {
        width: 111px;
      }
      .Col4 {
        width: 14%;
      }
      .Col5 {
        width: 20%;
      }
    }

    tr {
      td {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
      }
      .tdCol1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tdCol1Num {
          width: 25%;
          color: #999999;
          padding: 0 0 0 5px;
        }
        .tdCol1Icon {
          width: 17px;
          height: 17px;
          display: block;
          background-position: 0 -103px;
          cursor: pointer;
          :hover {
            background-position: 0 -128px;
          }
        }
        .iconPlay {
          background-position: -20px -128px;
        }
      }
      .tdCol2 {
        .titleContent {
          display: flex;
          align-items: center;
          .titleBox {
            overflow: hidden;
            margin-right: 20px;
            ${(props) => props.theme.mixin.textNowrap}
            a {
              vertical-align: middle;
              line-height: 17px;
            }
            span {
              color: #aeaeae;
              vertical-align: middle;
              line-height: 17px;
            }
          }
          .mvIcon {
            width: 23px;
            height: 17px;
            background-position: 0 -151px;
            margin: 1px 0 0 0;
          }
        }
      }
      .tdCol3 {
        .timeDuration {
          ${(props) => props.theme.mixin.textNowrap}
        }
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
          .deleteIcon {
            background-position: -51px 0;
            :hover {
              background-position: -51px -20px;
            }
          }
        }
      }

      .abox {
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }

      .tdCol4 {
        > a {
          display: block;
          ${(props) => props.theme.mixin.textNowrap}
        }
      }

      .tdCol5 {
        > a {
          display: block;
          ${(props) => props.theme.mixin.textNowrap}
        }
      }

      &:hover {
        .timeIconList {
          display: flex;
        }
        .timeDuration {
          display: none;
        }
      }
    }
  }
`
