import styled from 'styled-components'

export const RecommendProgramItemWrapper = styled.li`
  display: flex;
  padding: 10px 0 10px 20px;
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
    width: 254px;

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
  .tag {
    height: 16px;
    line-height: 16px;
    padding: 0 6px;
    margin: 0 0 0 10px;
    border: 1px solid ${(props) => props.theme.color.sixColor};
    overflow: hidden;
    color: ${(props) => props.theme.color.sixColor};
    align-self: center;
    cursor: pointer;
    &:hover {
      border-color: ${(props) => props.theme.color.threeColor};
      color: ${(props) => props.theme.color.threeColor};
      text-decoration: none;
    }
  }

  &:hover {
    .imgMask {
      visibility: visible;
    }
    background-color: #eee !important;
  }
`
