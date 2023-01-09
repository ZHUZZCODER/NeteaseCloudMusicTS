import styled from 'styled-components'

export const ProgramRankingItemWrapper = styled.li`
  display: flex;
  padding: 10px 0;
  .numBox {
    width: 47px;
    align-self: center;
    text-align: center;
    .counter {
      display: block;
      color: ${(props) => props.theme.color.sixColor};
      text-align: center;
      font-size: ${(props) => props.theme.size.secondSize};
    }
    .iconBox {
      font-size: 10px;
      padding: 0 0 0 8px;
      background-position: -74px -270px;
    }
  }
  .imgBox {
    position: relative;
    width: 40px;
    height: 40px;
    .imgLogo {
      display: block;
      width: 100%;
      height: 100%;
    }
    .imgMask {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
      visibility: hidden;
    }
  }
  .txBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 208px;
    margin: 0 0 0 10px;
    line-height: 12px;
    .aNormal {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .txTitle {
      font-size: 100%;
      font-weight: normal;
      ${(props) => props.theme.mixin.textNowrap}
    }
    .txDesc {
      ${(props) => props.theme.mixin.textNowrap}
      > a {
        color: ${(props) => props.theme.color.sixColor};
      }
    }
  }
  .progressBox {
    position: relative;
    top: 15px;
    display: block;
    width: 100px;
    height: 8px;
    background-position: 0 -240px;
    .progressContent {
      display: block;
      width: 92%;
      height: 8px;
      padding: 0 0 4px 0;
      background-position: right -318px;
      .progressChild {
        display: block;
        height: 8px;
        margin-left: -4px;
        margin-right: 4px;
        padding: 0 0 0 4px;
        background-position: 0 -304px;
      }
    }
  }

  &:hover {
    .imgMask {
      visibility: visible;
    }
    background-color: #eee !important;
  }

  &:nth-of-type(-n + 3) {
    .counter {
      color: #da4545;
    }
  }
`
