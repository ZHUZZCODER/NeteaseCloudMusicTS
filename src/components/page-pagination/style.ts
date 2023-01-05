import styled from 'styled-components'

interface IPAGINATION {
  isFirst: boolean
  isNext: boolean
}

export const PaginationWrapper = styled.div<IPAGINATION>`
  margin: 30px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .pagebtn {
    display: block;
    width: 57px;
    height: 24px;
    line-height: 24px;
    text-align: left;
    font-size: 12px;
    border-radius: 2px;
    box-sizing: content-box;
    border: 1px solid #ccc;
  }
  .prev {
    width: 47px;
    background-position: ${(props) =>
      props.isFirst ? '0 -620px' : '0 -560px'};
    color: ${(props) => (props.isFirst ? '#cacaca' : '#333')};
    cursor: ${(props) => (props.isFirst ? 'default' : 'pointer')};
    padding-left: 22px;
  }
  .next {
    background-position: ${(props) =>
      props.isNext ? '-75px -620px' : '-75px -560px'};
    color: ${(props) => (props.isNext ? '#cacaca' : '#333')};
    cursor: ${(props) => (props.isNext ? 'default' : 'pointer')};
    padding-left: 12px;
  }
  .paginationBox {
    .ant-pagination-item {
      min-width: 0px;
      padding: 0 8px;
      height: 22px;
      line-height: 22px;
      background-color: #fff;
      margin: 2px 1px 0 2px;
      border: 1px solid ${(props) => props.theme.color.fiveColor};
      border-radius: 2px;
      font-size: 12px;
      > a {
        padding: 0px;
      }
    }
    .ant-pagination-item-active {
      background-color: transparent;
      background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat 0 -650px;
      border-color: #a2161b;
      cursor: default;
      > a {
        color: #fff;
      }
    }
    .ant-pagination-prev {
      height: 24px;
      margin-right: 6px;
    }
    .ant-pagination-next {
      margin-left: 6px;
      height: 24px;
    }
  }
`
