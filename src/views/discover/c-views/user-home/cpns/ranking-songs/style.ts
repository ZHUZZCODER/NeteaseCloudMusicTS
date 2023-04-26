import styled from 'styled-components'

export const RankingSongsWrapper = styled.div`
  .totalMusicBox {
    display: flex;
    align-items: center;
    .totalMusic {
      color: ${(props) => props.theme.color.threeColor};
      line-height: 26px;
    }
    .iconBox {
      margin: 0 0 0 8px;
      .icon {
        position: relative;
        top: -1px;
        display: block;
        width: 18px;
        height: 18px;
        background-position: 0 -50px;
        will-change: background-position;
        &:hover {
          background-position: -20px -50px;
        }
      }
    }
  }
  .rightActionBox {
    display: flex;
    margin: 0 0 3px 0;
    .cutLine {
      width: 1px;
      height: 12px;
      margin: 0 8px;
      background-color: ${(props) => props.theme.color.sixColor};
      align-self: center;
    }
    li {
      line-height: 26px;
    }
    .time {
      cursor: pointer;
      will-change: font-weight;
    }
    .activeTime {
      font-weight: 700;
    }
  }
  .rankingSongList {
    .rankingSongItem {
      display: flex;
      height: 38px;
      .songLeft {
        width: 72px;
        display: flex;
        .numIndex {
          width: 37px;
          padding: 0 8px 0 5px;
          font-size: ${(props) => props.theme.size.sixSize};
          text-align: right;
          align-self: center;
        }
        .playIcon {
          position: relative;
          top: -1px;
          width: 17px;
          height: 17px;
          cursor: pointer;
          align-self: center;
          background-position: 0 -103px;
          will-change: background-position;
          &:hover {
            background-position: 0 -128px;
          }
        }
      }
      .songCenter {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px 0 0;
        .connectLine {
          margin: 0 5px;
        }
        .singerName {
          color: ${(props) => props.theme.color.fourteenColor};
        }
        .iconList {
          display: flex;
          li {
            width: 18px;
            height: 16px;
            cursor: pointer;
            margin: 0 0 0 8px;
          }
          li:first-child {
            margin: 0px;
          }
          .addPlay {
            display: block;
            width: 13px;
            height: 13px;
            .playLink {
              display: block;
              height: 100%;
              background-position: 0 -700px;
              will-change: background-position;
              &:hover {
                background-position: -22px -700px;
              }
            }
          }
          .collect {
            background-position: 0 -174px;
            will-change: background-position;
            &:hover {
              background-position: -20px -174px;
            }
          }
          .share {
            will-change: background-position;
            background-position: 0 -195px;
            &:hover {
              background-position: -20px -195px;
            }
          }
          .download {
            background-position: -81px -174px;
            will-change: background-position;
            &:hover {
              background-position: -104px -174px;
            }
          }
        }
      }
      .songRight {
        width: 319px;
        align-self: center;
      }
    }
  }
`
