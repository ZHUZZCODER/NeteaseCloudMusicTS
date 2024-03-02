import styled from 'styled-components'

const MusicInfoWrapper = styled.div`
  width: 414px;
  .singeInfo {
    margin: 10px 0;
    color: ${(props) => props.theme.color.sixColor};
  }
`

const LyricWrapper = styled.p`
  line-height: 23px;
  position: relative;
  overflow: hidden;
  padding-bottom: 23px;
  &::before {
    content: '';
    width: 100px;
    height: 100%;
    float: left;
  }
  .lyricContent {
    width: 100%;
    margin-left: -100px;
    float: right;
    max-height: 144px;
    overflow: hidden;
    -webkit-mask: linear-gradient(red 150px, transparent 200px);
  }
  .selectLabel {
    float: right;
    position: absolute;
    left: 0;
    bottom: 0;
    &::before {
      content: '展开';
    }
  }
  .selectInput:checked + .lyricContent {
    max-height: fit-content;
    -webkit-mask: none;
  }
  .selectInput:checked ~ .selectLabel {
    &::before {
      content: '收起';
    }
  }
`

export { MusicInfoWrapper, LyricWrapper }
