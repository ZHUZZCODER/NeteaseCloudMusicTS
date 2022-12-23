import styled from 'styled-components'

export const PanelHeaderWrapper = styled.div`
  height: 41px;
  background: url(${require('@/assets/img/playpanel_bg.png')}) repeat-y;
  display: flex;
  align-items: center;
`

export const HeaderLeftWrapper = styled.div`
  width: 553px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 25px;

  .headerTitle {
    color: #e2e2e2;
    font-size: 14px;
    height: 39px;
    line-height: 39px;
  }
  .collectAndClear {
    display: flex;
    align-items: center;
    .icon {
      margin: 0 6px 0 0;
      width: 16px;
      height: 16px;
    }
    .iconText {
      display: inline-block;
      color: #ccc;
      height: 15px;
      line-height: 15px;
      :hover {
        text-decoration: underline;
      }
    }
    .collectAll {
      display: flex;
      align-items: center;
      cursor: pointer;
      .collectIcon {
        background-position: -24px 0;
        :hover {
          background-position: -24px -20px;
        }
      }
    }
    .clearAll {
      display: flex;
      align-items: center;
      cursor: pointer;
      .clearIcon {
        background-position: -51px 0px;
        :hover {
          background-position: -51px -20px;
        }
      }
    }
    .line {
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
      margin: 0 10px;
    }
  }
`

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  .iconLeft {
    width: 30px;
    height: 41px;
    position: relative;
    /* 设置分割线样式 */
    .line {
      position: absolute;
      top: 0;
      left: 0;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
      height: 30px;
    }
  }
  .lyricTitle {
    flex: 1;
    color: #fff;
    text-align: center;
    font-size: 14px;
    word-wrap: normal;
    ${(props) => props.theme.mixin.textNowrap}
  }
  .iconRight {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    background-position: -196px 10px;
    cursor: pointer;
    :hover {
      background-position: -196px -20px;
    }
  }
`
