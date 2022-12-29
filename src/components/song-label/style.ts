import styled from 'styled-components'

export const SongLabelWrapper = styled.div`
  display: flex;
  margin: 0 0 12px;
  .labelImg {
    width: 54px;
    height: 24px;
    background-position: 0 -243px;
  }
  .labelText {
    margin-left: 10px;
    line-height: 24px;
    flex: 1;
    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      vertical-align: middle;
      font-weight: normal;
      font-size: ${(props) => props.theme.size.threeSize};
    }
  }
`
