import styled from 'styled-components'

export const HotSongItemWrapper = styled.div`
  display: flex;
  margin: 0 0 15px 0;
  .songImg {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .songTx {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 0 0 10px;
    .songTitle {
      width: 140px;
      font-size: ${(props) => props.theme.size.secondSize};
      ${(props) => props.theme.mixin.textNowrap}
    }
    .songDescription {
      display: flex;
      a {
        color: ${(props) => props.theme.color.threeColor};
      }
      .descriptionIcon {
        display: block;
        width: 13px;
        height: 13px;
        margin: 0 0 0 2px;
      }
    }
  }
`
