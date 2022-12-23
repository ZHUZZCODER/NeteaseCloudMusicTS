import styled from 'styled-components'

export const PanelLyricWrapper = styled.div`
  flex: 1;
  height: 260px;
  overflow: hidden;
  overflow-y: auto;
  padding: 21px 0 20px 0;
  position: relative;
  z-index: 4;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #868686;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: ${(props) => props.theme.color.secondColor};
  }
  &::-webkit-scrollbar-corner {
    background: #179a16;
  }
  .lyricItem {
    color: #989898;
    text-align: center;
    min-height: 32px;
    line-height: 32px;
  }
  .activeLyricItem {
    color: #ffffff;
    font-size: 14px;
    transition: all ease 10ms;
  }
`
