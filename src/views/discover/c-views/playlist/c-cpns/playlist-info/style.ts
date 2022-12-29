import styled from 'styled-components'

export const PlayListInfoWrapper = styled.div`
  display: flex;
  .imgBox {
    width: 200px;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .imgMask {
      width: 208px;
      height: 208px;
      position: absolute;
      background-position: 0 -1285px;
      top: -4px;
      left: -4px;
    }
  }
  .info {
    margin-left: 22px;
    flex: 1;
    .labelBox {
      display: flex;
      color: #666;
      align-items: center;
      line-height: 22px;
      margin: 0 0 8px 0;
    }
  }
`
