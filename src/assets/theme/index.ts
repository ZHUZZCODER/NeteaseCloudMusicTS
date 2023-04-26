const theme = {
  color: {
    primaryColor: '#C20C0C',
    secondColor: '#000000',
    threeColor: '#666666',
    fourColor: '#333333',
    fiveColor: '#ccc',
    sixColor: '#999999',
    sevenColor: '#e2e2e2',
    eightColor: '#d5d5d5',
    nineColor: '#fff',
    tenColor: '#d3d3d3',
    elevenColor: '#e03a24',
    twelveColor: '#ddd',
    thirteenColor: '#0c73c2',
    fourteenColor: '#aeaeae'
  },
  size: {
    primarySize: '12px',
    secondSize: '14px',
    threeSize: '20px',
    fourSize: '22px',
    fiveSize: '24px',
    sixSize: '16px'
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
