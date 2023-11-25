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
`

export { MusicInfoWrapper, LyricWrapper }
