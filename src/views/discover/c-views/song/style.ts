import styled from 'styled-components'

export const SongWrapper = styled.div`
  .songContent {
    padding: 40px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    .songListBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-right: -49px;
      * > {
        flex-shrink: 0;
      }
    }
  }
`
