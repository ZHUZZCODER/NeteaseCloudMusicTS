import styled from 'styled-components'

interface INEWALBUMITEMWRAPPER {
  imgWidth: string | undefined
  imgHeight: string | undefined
  bgP: string | undefined
  titleSize: string | undefined
}

export const NewAlbumItemWrapper = styled.div<INEWALBUMITEMWRAPPER>`
  .albumItemBox {
    width: ${(props) => (props.imgWidth ? props.imgWidth : '118px')};
    .albumItemHeader {
      height: ${(props) => (props.imgHeight ? props.imgHeight : '100px')};
      margin-bottom: 7px;
      position: relative;
      .albumImgBox {
        position: relative;
        width: ${(props) => (props.imgHeight ? props.imgHeight : '100px')};
        height: ${(props) => (props.imgHeight ? props.imgHeight : '100px')};
        .albumImage {
          width: 100%;
          height: 100%;
        }
        .albumPlay {
          display: none;
          width: ${(props) => (props.imgWidth ? '28px' : '22px')};
          height: ${(props) => (props.imgWidth ? '28px' : '22px')};
          position: absolute;
          right: 5px;
          bottom: 5px;
          background-position: ${(props) =>
            props.imgWidth ? '0 -140px' : '0 -85px'};
          cursor: pointer;
        }
      }

      .albumCover {
        width: ${(props) => (props.imgWidth ? props.imgWidth : '118px')};
        height: ${(props) => (props.imgHeight ? props.imgHeight : '100px')};
        position: absolute;
        top: 0;
        left: 0;
        background-position: ${(props) => (props.bgP ? props.bgP : '0 -570px')};
      }

      .bottomCover {
        position: absolute;
        bottom: -9px;
        width: ${(props) => (props.imgWidth ? '0px' : '104px')};
        height: 9px;
        background-position: 0 -819px;
        transform: rotate(180deg);
      }
      &:hover {
        .albumPlay {
          display: block;
        }
      }
    }
    .albumItemFooter {
      font-family: Arial, Helvetica, sans-serif;
      .name {
        color: ${(props) => props.theme.color.secondColor};
        font-size: ${(props) =>
          props.titleSize ? props.titleSize : props.theme.size.primarySize};
        cursor: pointer;
        ${(props) => props.theme.mixin.textNowrap}
        margin: ${(props) => (props.imgWidth ? '0 0 5px 0' : '0px')};
        &:hover {
          text-decoration: underline;
        }
      }
      .footName {
        color: ${(props) => props.theme.color.threeColor};
        font-size: 12px;
        cursor: pointer;
        ${(props) => props.theme.mixin.textNowrap}
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
