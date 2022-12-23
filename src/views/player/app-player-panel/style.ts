import styled from 'styled-components'

export const AppPlayerPanelWrapper = styled.div`
  width: 986px;
  height: 301px;
  position: absolute;
  top: -294px;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: hidden;
  .panelBottom {
    display: flex;
    width: 984px;
    background: url(${require('@/assets/img/playpanel_bg.png')}) repeat-y 100%;
    background-position: -1014px 0;
    position: relative;
    left: 0px;

    .bgImg {
      width: 980px;
      height: auto;
      position: absolute;
      opacity: 0.2;
      top: 0px;
      left: 2px;
      z-index: 1;
    }
  }
`
