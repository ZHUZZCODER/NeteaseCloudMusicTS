import styled from 'styled-components'

export const SingerItemWrapper = styled.div`
  width: 130px;
  padding: 0 0 30px 0;
  flex-shrink: 0;
  .imgBox {
    position: relative;
    width: 130px;
    height: 130px;
    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .imgMask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 -680px;
      cursor: pointer;
    }
  }
  .singerinfo {
    margin: 8px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .singerName {
      max-width: 80%;
      color: ${(props) => props.theme.color.secondColor};
      ${(props) => props.theme.mixin.textNowrap}
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .singerIcon {
      .iconLogo {
        display: block;
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
        cursor: pointer;
      }
    }
  }
`
