import styled from 'styled-components'

export const LoginBarWrapper = styled.div.attrs({
  className: 'logo-bar-box'
})`
  .ant-dropdown-arrow::before {
    background-color: #2b2b2b;
  }
  .ant-dropdown-menu {
    width: 158px;
    background: #2b2b2b;

    .ant-dropdown-menu-item {
      color: ${(props) => props.theme.color.fiveColor};
    }
  }

  .img-logo {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  .menuitem {
    display: flex;
    .menutext {
      margin-left: 10px;
    }
  }
`
