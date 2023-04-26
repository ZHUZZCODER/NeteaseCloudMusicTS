import styled from 'styled-components'

export const SingerInfoNavWrapper = styled.div`
  .singerInfo {
    display: flex;
    justify-content: space-between;
    width: 670px;
    .leftInfo {
      display: flex;
      .showInfo {
        display: flex;
        align-items: center;
        .singer_name {
          max-width: 260px;
          color: ${(props) => props.theme.color.secondColor};
          font-size: ${(props) => props.theme.size.fourSize};
          font-weight: normal;
          line-height: 30px;
          margin: 3px 0 0 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: normal;
        }
        .grade {
          display: flex;
          height: 19px;
          line-height: 21px;
          vertical-align: middle;
          font-size: ${(props) => props.theme.size.secondSize};
          color: ${(props) => props.theme.color.elevenColor};
          font-weight: bold;
          font-style: italic;
          margin: 0 0 0 10px;
          padding: 0 0 0 29px;
          background-position: -135px -190px;
          .gradeIcon {
            width: 9px;
            height: 19px;
            background-position: -191px -190px;
          }
        }
        .sexIcon {
          width: 20px;
          height: 20px;
          background-position: -41px -27px;
          margin: 0 0 0 8px;
        }
        .sendMessage {
          width: 75px;
          height: 31px;
          font-size: 12px;
          line-height: 31px;
          margin: 0 0 0 15px;
          will-change: background-position;
          background-position: 0 -810px;
          &:hover {
            cursor: pointer;
            background-position: 0 -845px;
          }
          .iconText {
            padding: 0 0 0 30px;
          }
        }
        .attention {
          width: 40px;
          height: 31px;
          font-size: 12px;
          background-position: 0 -720px;
          color: ${(props) => props.theme.color.nineColor};
          line-height: 31px;
          padding: 0 0 0 30px;
          margin: 0 0 0 15px;
          box-sizing: content-box;
          will-change: background-position;
          &:hover {
            background-position: -80px -720px;
          }
        }
      }
    }
    .seeSingerBtn {
      height: 31px;
      line-height: 31px;
      padding: 0 5px 0 0;
      color: #333;
      background-position: right -100px;
      will-change: background-position;
      .seeText {
        display: block;
        padding: 0 15px 0 20px;
        background-position: 0 -59px;
        will-change: background-position;
      }
      &:hover {
        background-position: right -182px;
        .seeText {
          background-position: 0 -141px;
        }
      }
    }
  }
  .singerAuthentication {
    margin: 8px 0 10px 0;
    padding: 0 0 12px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.color.twelveColor};
    .authenticationIcon {
      width: 68px;
      height: 20px;
      background-position: 0 -480px;
    }
    .authenDesc {
      margin: 0 0 0 6px;
      font-size: ${(props) => props.theme.color.threeColor};
      color: ${(props) => props.theme.size.secondSize};
    }
  }
  .singerState {
    display: flex;
    .stateLi {
      padding: 0 40px 0 20px;
      .stateText {
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme.color.fourColor};
        will-change: color;
        cursor: pointer;
        strong {
          font-size: ${(props) => props.theme.size.fiveSize};
          font-weight: normal;
        }
        &:hover {
          color: ${(props) => props.theme.color.thirteenColor};
        }
      }
    }
    .stateLi:first-child {
      padding-left: 0px;
    }
    .stateLi:nth-child(-n + 2) {
      border-right: 1px solid ${(props) => props.theme.color.twelveColor};
    }
  }
  .singerIntroduce {
    margin: 15px 0 5px 0;
    line-height: 21px;
    color: ${(props) => props.theme.color.threeColor};
  }
  .singerAddress {
    color: ${(props) => props.theme.color.threeColor};
    line-height: 21px;
  }
`
