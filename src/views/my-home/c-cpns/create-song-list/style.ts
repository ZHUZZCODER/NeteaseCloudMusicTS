import styled from 'styled-components'

export const CreateSongListWrapper = styled.div`
  .playlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: -49px;
    * > {
      flex-shrink: 0;
    }
    .normal-i {
      width: 140px;
      margin-right: 49px;
    }
  }
`
