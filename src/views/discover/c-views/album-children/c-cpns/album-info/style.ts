import styled from 'styled-components'

export const AlbumInfoWrapper = styled.div`
  .infoHeader {
    display: flex;
    .headerRight {
      display: flex;
      flex-direction: column;
      margin: 0 0 0 52px;
      .info {
        margin: 0 0 20px 0;
        .songinfo:nth-of-type(-n + 2) {
          margin: 0 0 7px 0;
        }
        .songinfo {
          color: ${(props) => props.theme.color.threeColor};
          .infoname {
            color: #0c73c2;
          }
        }
      }
    }
  }
  .descriptionBox {
    margin: 20px 0 0 0;
  }
`
