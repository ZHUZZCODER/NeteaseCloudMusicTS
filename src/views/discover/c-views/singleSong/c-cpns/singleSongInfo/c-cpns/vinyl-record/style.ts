import styled from 'styled-components'

interface IVinyRecordProps {
  bgWH: number
  imgWH: number
}

const VinylRecordWrapper = styled.div<IVinyRecordProps>`
  position: relative;
  width: ${(props) => `${props.bgWH}px`};
  height: ${(props) => `${props.bgWH}px`};
  .vinyImg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => `${props.imgWH}px`};
    height: ${(props) => `${props.imgWH}px`};
    z-index: 1;
  }
  .vinyBg {
    position: absolute;
    z-index: 2;
    width: ${(props) => `${props.bgWH}px`};
    height: ${(props) => `${props.bgWH}px`};
    background-position: -144px -584px;
  }
`

export { VinylRecordWrapper }
