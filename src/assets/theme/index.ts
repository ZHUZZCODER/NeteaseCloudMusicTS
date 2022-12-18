const theme = {
  color: {
    primaryColor: '#C20C0C',
    secondColor: '#000000',
    threeColor: '#666666',
    fourColor: '#333333'
  },
  size: {
    primarySize: '12px',
    secondSize: '14px'
  },
  mixin: {
    wrapv1: `
    width: 1100px;
    margin: 0 auto;`,
    textNowrap: `
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `
  }
}

export default theme
