import styled from 'styled-components'

interface IINTRODUCEPROPS {
  isFlod: boolean
}

export const IntroduceDescriptionWrapper = styled.div<IINTRODUCEPROPS>`
  span {
    display: block;
    white-space: pre-wrap;
  }
  .hiddenDesc {
  }
  .flodBox {
    display: flex;
    justify-content: flex-end;
    color: #0c73c2;
    span {
      display: flex;
      align-items: center;
      cursor: pointer;
      .foldIcon {
        width: 11px;
        height: 8px;
        display: block;
        background-position: ${(props) =>
          !props.isFlod ? '-65px -520px' : '-45px -520px'};
      }
    }
  }
`
