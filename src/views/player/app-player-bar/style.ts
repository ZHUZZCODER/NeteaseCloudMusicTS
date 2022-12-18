import styled from 'styled-components'

//定义动态传入属性类型
interface APPPLAYBAR {
  isPlay: boolean
  playMode: number
}

export const AppPlayerBarWrapper = styled.div<APPPLAYBAR>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  .playContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 4px;
    .playLeft {
      width: 108px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .playCut {
        width: 28px;
        height: 28px;
      }
      .playPrev {
        background-position: -2px -131px;
        :hover {
          background-position: -32px -131px;
        }
      }
      .playStop {
        width: 36px;
        height: 36px;

        background-position:  ${(props) =>
          props.isPlay ? '-2px -166px' : '-2px -205px'};
        &:hover {
          background-position: ${(props) =>
            props.isPlay ? '-42px -166px' : '-42px -205px'};
        }
      }
      .playNext {
        background-position: -82px -131px;
        :hover {
          background-position: -112px -131px;
        }
      }
    }
    .playCenter {
      display: flex;
      margin-left: 20px;
      .imgBox {
        width: 34px;
        height: 35px;
        position: relative;
        border-radius: 5px;
        margin-right: 15px;
        > img {
          width: 100%;
          height: 100%;
        }
        .imgCover {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-position: 0 -80px;
        }
      }
      .centerInfo {
        width: 581px;
        .infoHeader {
          display: flex;
          align-items: center;
          .headerName {
            display: inline-block;
            max-width: 300px;
            color: #e8e8e8;
          }
          .headerTitle {
            display: inline-block;
            max-width: 220px;

            margin-left: 15px;
            ${(props) => props.theme.mixin.textNowrap}
            > a {
              color: #9b9b9b;
            }
          }
          .headerLink {
            display: inline-block;
            width: 14px;
            height: 15px;
            margin: 0px 0px 0px 13px;
            background-position: -110px -103px;
            :hover {
              background-position: -130px -103px;
            }
          }
        }
        .infoBottom {
          display: flex;
          align-items: center;
          .infoSlider {
            width: 446px;
            margin: 0;
            .ant-slider-track {
              background: url(${require('@/assets/img/progress_bar.png')})
                no-repeat 0 -66px;
              height: 9px;
            }
            .ant-slider-rail {
              background: url(${require('@/assets/img/progress_bar.png')})
                no-repeat right -30px;
              height: 9px;
            }
            .ant-slider-handle::after {
              width: 22px;
              height: 24px;
              background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px ;
              position: absolute;
              top: -4px;
              box-shadow: none;
              &:hover {
                background: url(${require('@/assets/img/sprite_icon.png')}) 0 -280px;
              }
            }
            ant-slider-handle::before {
              display: none:  !important;;
            }
          }
          .timeBox {
            font-size: 14px;
            margin-left: 10px;
            .timeLeft {
              color: #a1a1a1;
            }
            .timeRight {
              color: #797979;
            }
          }
        }
      }
    }
    .playRight {
      display: flex;
      align-items: center;
      .wh {
        width: 25px;
        height: 25px;
        margin: 0 2px 0 0;
      }
      .mini {
        background: url(${require('@/assets/img/pip_icon')});
      }
      .add {
        background-position: -89px -163px;
        &:hover {
          background-position: -89px -189px;
        }
      }
      .share {
        background-position: -115px -163px;
        &:hover {
          background-position: -115px -189px;
        }
      }
      .fgx {
        width: 13px;
        height: 25px;
        color: ${(props) => props.theme.color.fourColor};
        background-position: -147px -248px;
      }
      .voice {
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .mode {
        background-position:${(props) => {
          switch (props.playMode) {
            case 1:
              return '-66px -248px'
            case 2:
              return '-66px -344px'
            default:
              return '-3px -344px'
          }
        }};
        &:hover {
          background-position: ${(props) => {
            switch (props.playMode) {
              case 1:
                return '-93px -248px'
              case 2:
                return '-93px -344px'
              default:
                return '-33px -344px'
            }
          }} ;
        }
      }
      .num {
        width: 59px;
        height: 25px;
        background-position: -45px -70px;
        &:hover {
          background-position: -45px -100px;
        }
      }
    }
  }
`

export const ABC = styled.div``
