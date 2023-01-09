import styled from 'styled-components'

interface IRADIOCATEGORYWRAPPER {
  activeSlide: boolean
}

export const RadioCategoryWrapper = styled.div<IRADIOCATEGORYWRAPPER>`
  position: relative;
  .slide {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 20px;
    height: 30px;
    cursor: pointer;
    text-indent: -9999px;
    opacity: 0.25;
  }
  .slideLeft {
    left: -26px;
    background-position: 0 -30px;
    opacity: ${(props) => (!props.activeSlide ? 0.08 : 0.25)};
  }
  .slideRight {
    right: -26px;
    background-position: -30px -30px;
    opacity: ${(props) => (!props.activeSlide ? 0.25 : 0.08)};
  }
  .dots {
    bottom: 0;
    li {
      width: 20px;
      height: 20px;
      margin: 0;
      cursor: pointer;
      transition: none;
      background: url(${require('@/assets/img/radio_slide.png')}) no-repeat 0 0;
    }
    .slick-active {
      background-position: -30px 0;
    }
  }
  .categoriesBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .categoryItem {
      display: block;
      width: 70px;
      height: 70px;
      padding: 2px 11px 0;
      flex-shrink: 0;
      margin: 0 10px 25px 10px;
      .categoryTx {
        text-align: center;
        color: #888;
        font-size: ${(props) => props.theme.size.primarySize};
      }
      &:hover {
        background-position: 0 0;
      }
    }
    .activeCategoryItem {
      background-position: -70px 0;
      color: #d35757;
      /* &:hover {
        background-position: none;
      } */
    }
  }
`

interface IRADIOCATEGORYA {
  activeCategory: boolean
  picWebUrl: string
}

export const RadioCategoryA = styled.a<IRADIOCATEGORYA>`
  display: block;
  width: 70px;
  height: 70px;
  padding: 2px 11px 0;
  flex-shrink: 0;
  margin: 0 10px 25px 10px;
  background-position: ${(props) =>
    props.activeCategory ? ' -70px 0' : '0 99999'};
  .picWebBox {
    width: 48px;
    height: 48px;
    background-position: ${(props) =>
      props.activeCategory ? '-48px 0' : '0 0'};
    background-image: url(${(props) => props.picWebUrl});
  }

  .categoryTx {
    text-align: center;
    color: ${(props) => (props.activeCategory ? '#d35757' : '#888')};
    font-size: ${(props) => props.theme.size.primarySize};
  }
  &:hover {
    background-position: ${(props) =>
      !props.activeCategory ? '0 0' : '0 99999'};
  }
`
