import styled from 'styled-components'

export const SongHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 8px 0;
  border-bottom: 2px solid #c20c0c;
  .songLeft {
    display: flex;
    .songHeaderTitle {
      font-size: 24px;
      font-weight: normal;
    }
    .selectclassify {
      margin: 0 0 0 12px;
      position: relative;
      .classify {
        height: 31px;
        padding: 0;
        margin: 0;
        padding: 0 5px 0 0;
        border: none;
        border-radius: 0;
        position: relative;
        background: url(${require('@/assets/img/sprite_button.png')}) right -100px
          no-repeat;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        transition: none;
        :hover {
          background-position: right -182px;
          & > span:not(:first-child) {
            background-position: 0 -141px;
          }
        }
        .anticon {
          color: ${(props) => props.theme.color.fourColor};
          position: absolute;
          top: 50%;
          right: 7px;
          transform: translate(0, -50%);
        }
        & > span:not(:first-child) {
          display: block;
          padding: 0 17px;
          height: 31px;
          line-height: 31px;
          margin-inline-start: 0px;
          background-color: #c20c0c;
          color: #0c73c2;
          text-align: left;
          background: url(${require('@/assets/img/sprite_button.png')}) 0 -59px;
        }
      }
    }
  }
  .songRight {
    width: 46px;
    height: 29px;
    color: #fff;
    line-height: 29px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    background-position: 0 0;
    :hover {
      text-decoration: underline;
    }
  }
`
