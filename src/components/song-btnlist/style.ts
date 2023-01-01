import styled from 'styled-components'

export const SongBtnlistWrapper = styled.div`
  display: flex;
  margin: 0 0 25px 0;
  height: 31px;
  a {
    cursor: pointer;
  }
  > a {
    margin: 0 6px 0 0;
  }
  i {
    font-family: simsun;
  }
  .btnPlay {
    display: flex;
    margin-right: 5px;
    .playIcon {
      display: flex;
      align-items: center;
      width: 61px;
      height: 31px;
      padding: 0 6px;
      background-position: 0 -387px;
      :hover {
        background-position: 0 -469px;
        .play {
          background-position: -28px -1622px;
        }
      }
      color: #fff;
      .play {
        width: 20px;
        height: 18px;
        margin-right: 2px;
        background-position: 0 -1622px;
      }
      span {
        vertical-align: middle;
        line-height: 18px;
      }
    }
    .playAddIcon {
      .add {
        display: block;
        width: 31px;
        height: 31px;
        background-position: 0 -1588px;
        :hover {
          background-position: -40px -1588px;
        }
      }
    }
  }
  .iconBox {
    padding: 0 5px 0 0;
    background-position: right -1020px;
    > i {
      display: block;
      min-width: 23px;
      height: 31px;
      line-height: 31px;
      padding-left: 28px;
      white-space: nowrap;
    }
    :hover {
      background-position: right -1106px;
    }
  }

  .collectBox {
    background-position: right -1020px;
    .collectIcon {
      background-position: 0 -977px;
    }
    :hover {
      .collectIcon {
        background-position: 0 -1063px;
      }
    }
  }
  .shareBox {
    .shareIcon {
      background-position: 0 -1225px;
    }
    :hover {
      .shareIcon {
        background-position: 0 -1268px;
      }
    }
  }
  .downloadBox {
    .downloadIcon {
      background-position: 0 -2761px;
      padding-right: 2px;
    }
    :hover {
      .downloadIcon {
        background-position: 0 -2805px;
      }
    }
  }
  .commentBox {
    .commentIcon {
      background-position: 0 -1465px;
    }
    :hover {
      .commentIcon {
        background-position: 0 -1508px;
      }
    }
  }
`
