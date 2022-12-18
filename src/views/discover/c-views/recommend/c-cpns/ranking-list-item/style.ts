import styled from 'styled-components'

export const RankingListItemWrapper = styled.div`
  &:nth-child(-n + 2) {
    width: 230px;
  }
  &:last-child {
    width: 228px;
  }
  .rankingTop {
    display: flex;
    margin: 20px 0 0 20px;
    .rangkingImg {
      width: 80px;
      height: 80px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .rankingCover {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-position: -145px -57px;
      }
    }
    .topText {
      padding: 6px 0 0 10px;
      .text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 600;
      }
      .iconBox {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .icon {
          width: 22px;
          height: 22px;
        }
        .iconLeft {
          margin-right: 10px;
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .iconRight {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .rankingBottom {
    margin-top: 20px;
    .rankingItem {
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      padding-left: 25px;
      .rankingNum {
        font-size: 16px;
      }
      &:nth-child(-n + 3) {
        color: #c10d0c;
      }
      .rankingTitle {
        margin-left: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex: 1;
        color: ${(props) => props.theme.color.secondColor};
        &:hover {
          text-decoration: underline;
        }
      }
      .rankingIcon {
        display: none;
      }
      &:hover {
        .rankingIcon {
          display: flex;
          align-items: center;
          .btn {
            width: 17px;
            height: 17px;
            margin-right: 8px;
            cursor: pointer;
          }
          .iconPlay {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .iconAdd {
            background-position: 1px -699px;
            &:hover {
              background-position: -21px -699px;
            }
          }
          .iconCollect {
            background-position: -297px -269px;
            &:hover {
              background-position: -297px -289px;
            }
          }
        }
      }
    }
    .seeAll {
      width: 100%;
      height: 32px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 32px;
      color: ${(props) => props.theme.color.secondColor};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
