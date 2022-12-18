import styled from 'styled-components'

export const SongItemWrapper = styled.div`
  .itemContent {
    width: 100%;
    height: 62px;
    display: flex;
    .songItemImg {
      width: 62px;
      height: 62px;
    }
    .songItemRight {
      width: 100%;
      padding-left: 14px;
      border: 1px solid #e9e9e9;
      border-left: none;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      overflow: hidden;
      span {
        width: 90%;
      }
      span:nth-child(1) {
        font-size: 14px;
        font-weight: bold;
        ${(props) => props.theme.mixin.textNowrap}
      }
      span:nth-child(2) {
        color: ${(props) => props.theme.color.threeColor};
        ${(props) => props.theme.mixin.textNowrap}
      }
    }
  }
`
