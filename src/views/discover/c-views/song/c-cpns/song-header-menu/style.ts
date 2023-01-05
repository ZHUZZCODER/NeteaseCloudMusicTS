import styled from 'styled-components'

export const SongHeaderMenuWrapper = styled.div`
  position: absolute;
  width: 720px;
  top: 33px;
  left: -100px;
  z-index: 1;
  .menuHeader {
    height: 32px;
    background-position: 0 0;
    .icn {
      display: block;
      position: absolute;
      top: 2px;
      left: 132px;
      width: 24px;
      height: 11px;
      background-position: -48px 0;
    }
  }
  .menuContent {
    padding: 0 10px;
    background-position: -720px 0;
    background-repeat: repeat;
    .allStyle {
      font-weight: normal;
      padding: 0 0 10px 26px;
      height: 37px;

      border-bottom: 1px solid #e6e6e6;
      .allStyleBtn {
        display: block;
        width: 75px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        color: ${(props) => props.theme.color.secondColor};
        background-position: 0 -64px;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
  .menuCategory {
    .dlCg {
      display: flex;
      padding: 0 0 0 27px;
      .dtCg {
        display: flex;
        width: 70px;

        padding: 15px 0 0 0;
        font-weight: bold;
        border-right: 1px solid #e6e6e6;
        .iconCategory {
          display: block;
          width: 23px;
          height: 23px;

          margin: 0 8px 4px 0;
        }
        span {
          position: relative;
          top: 6px;
        }
      }
      .ddCg {
        flex: 1;
        line-height: 24px;
        .ulCg {
          padding: 16px 15px 0 15px;
          display: flex;
          flex-wrap: wrap;
          .liCg {
            display: flex;
            > a {
              white-space: nowrap;
              cursor: pointer;
              :hover {
                text-decoration: underline;
              }
            }
            .divider {
              color: #d8d8d8;
              margin: 0 8px 0 10px;
            }
            .activeA {
              background: #a7a7a7;
              color: #fff;
              padding: 0px 6px;
            }
          }
        }
      }
    }

    .cg0 {
      .iconCategory {
        background-position: -20px -735px;
      }
    }

    .cg1 {
      .iconCategory {
        background-position: 0 -60px;
      }
    }

    .cg2 {
      .iconCategory {
        background-position: -1px -88px;
      }
    }

    .cg3 {
      .iconCategory {
        background-position: 0 -117px;
      }
    }

    .cg4 {
      .iconCategory {
        background-position: 0 -141px;
      }
    }
  }
  .menuBottom {
    height: 20px;
    background-position: -1440px -12px;
  }
`
