import styled from 'styled-components'

export const NewRadioItemWrapper = styled.li`
  width: 150px;
  flex-shrink: 0;
  .radioImgBox {
    display: block;
    width: 150px;
    height: 150px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .radioTitle {
    font-size: 14px;
    margin: 13px 0 6px;
    line-height: 16px;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    > a {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .radioDesc {
    color: ${(props) => props.theme.color.sixColor};
    ${(props) => props.theme.mixin.textNowrap}
  }
`
