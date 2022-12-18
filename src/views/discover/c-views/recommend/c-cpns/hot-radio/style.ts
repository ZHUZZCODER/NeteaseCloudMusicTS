import styled from 'styled-components'

export const HotRadioWrapper = styled.div`
  margin: 30px 0 0;
  padding: 20px;
  .hotRadioContent {
    margin-top: 20px;
    .item {
      display: flex;
      margin: 0 0 10px 0;
      .hotRadioLeft {
        img {
          width: 40px;
          height: 40px;
          box-shadow: 0 0 1px #333333 inset;
        }
      }
      .hotRadioRight {
        padding-left: 10px;
        width: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .rightName {
          color: ${(props) => props.theme.color.secondColor};
          max-width: 88%;
          ${(props) => props.theme.mixin.textNowrap}
          line-height: 21px;
        }
        .rightTitle {
          width: 100%;
          color: ${(props) => props.theme.color.threeColor};
          ${(props) => props.theme.mixin.textNowrap}
          line-height: 21px;
        }
      }
    }
  }
`
