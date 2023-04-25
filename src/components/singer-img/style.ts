import styled from 'styled-components'

interface ISINGERIMGWRAPPERPROPS {
  imgWH: number
  imgPad?: number
}

export const SingerImgWrapper = styled.div<ISINGERIMGWRAPPERPROPS>`
  width: ${(props) => `${props.imgWH}px`};
  height: ${(props) => `${props.imgWH}px`};
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .imgMask {
    width: ${(props) => `${props.imgWH}px`};
    height: ${(props) => `${props.imgWH}px`};
    padding: ${(props) => (props.imgPad ? `${props.imgPad}px` : '4px')};
    position: absolute;
    background-position: 0 -1285px;
    top: -4px;
    left: -4px;
    box-sizing: content-box;
  }
`
