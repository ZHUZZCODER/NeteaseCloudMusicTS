import styled from 'styled-components'

export const RadioItemWrapper = styled.li`
  display: flex;
  width: 435px;
  padding: 20px 0;
  flex-shrink: 0;
  /* border: 1px solid #e7e7e7; */
  .imgItemBox {
    width: 120px;
    height: 120px;
    cursor: pointer;
    .imgItem {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .radioDescBox {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 20px;
    .radioTitle {
      font-size: 18px;
      margin: 16px 0 20px;
      > a {
        display: block;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .radioDesc {
      line-height: 20px;
      color: ${(props) => props.theme.color.sixColor};
    }
  }
`
