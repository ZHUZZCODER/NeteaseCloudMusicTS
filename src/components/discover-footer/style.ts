import styled from 'styled-components'

export const DiscoverFooterWrapper = styled.div`
  position: relative;
  left: -50%;
  transform: translate(50%, 0);
  height: 325px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .footerContent {
    padding: 33px 80px 0;
    .btnBox {
      display: flex;
      justify-content: space-between;
    }
    .descriptionBox {
      margin: 60px 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .txList {
        display: flex;
        .txBox {
          .textLink {
            color: ${(props) => props.theme.color.threeColor};
            cursor: pointer;
            line-height: 24px;
          }
          .line {
            color: #d9d9d9;
            margin: 0 8px;
          }
        }
        .txBox:last-of-type {
          .line {
            display: none;
          }
        }
      }

      .reportInfo {
        line-height: 24px;
        color: ${(props) => props.theme.color.threeColor};
        .reportTx {
          color: ${(props) => props.theme.color.threeColor};
          margin-right: 14px;
        }
      }

      .licenceInfo {
        line-height: 24px;
        color: ${(props) => props.theme.color.threeColor};
        > .licenceLink {
          color: ${(props) => props.theme.color.threeColor};
        }
      }

      .copyrightInfo {
        line-height: 24px;
        color: ${(props) => props.theme.color.threeColor};
        display: flex;
        flex-wrap: nowrap;
        .copyright {
          margin: 0 14px 0 0;
        }
        .onlineLink {
          display: flex;
          align-items: center;
          margin: 0 0 0 5px;
          .police-logo {
            display: block;
            width: 14px;
            height: 14px;

            margin-right: 2px;
            background: url(https://s2.music.126.net/style/web2/img/3rd/police.png?45bc8e7b58bdfcd36e3cf08fd98f32cb)
              no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
`

interface IBTNLI {
  bgP: string
  bgPH: string
}

export const BtnItemWrapper = styled.li<IBTNLI>`
  width: 100px;
  .btnImg {
    display: block;
    width: 45px;
    height: 45px;
    margin: 0 auto;
    background-size: 220px 220px;
    background-position: ${(props) => props.bgP};
    &:hover {
      background-position: ${(props) => props.bgPH};
    }
  }
  .btnTx {
    margin: 10px 0 0 0;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`
