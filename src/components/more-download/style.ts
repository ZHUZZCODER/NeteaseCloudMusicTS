import styled from 'styled-components'

export const MoreDownloadWrapper = styled.div`
  margin: 20px 0;
  .moreDownloadContent {
    .iconBox {
      height: 65px;
      background: url(${require('@/assets/img/sprite_download.png')}) no-repeat
        0 -392px;
      margin: 20px 0 10px 0;
      display: flex;
      > a {
        height: 48px;
        text-indent: -9999px;
      }
      .ios,
      .android {
        width: 42px;
      }
      .windows {
        flex: 1;
        overflow: hidden;
        :hover {
          background-position: -42px -472px;
        }
      }
      .ios:hover {
        background-position: 0px -472px;
      }
      .android:hover {
        background-position: -158px -472px;
      }
    }
    .downloadDesc {
      display: block;
      color: #999;
      text-align: center;
    }
  }
`
