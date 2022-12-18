import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

//定义props类型
interface IProps {
  name: string
  age?: number
}

//定义state类型
interface IState {
  message: string
  counter: number
}

//定义组件更新之前返回的state类型
interface ISnapShow {
  address: string
}

class DemoCompoment extends PureComponent<IProps, IState, ISnapShow> {
  //定义成员变量
  name = 'aaaa'
  //成员变量定义state类型
  state = {
    message: 'Hello World',
    counter: 99
  }

  // getSnapshotBeforeUpdate() {
  //   return { address: '庐山' }
  // }

  // componentDidUpdate(
  //   prevProps: Readonly<IProps>,
  //   prevState: Readonly<IState>,
  //   snapshot?: ISnapshot | undefined
  // ): void {}

  constructor(props: IProps) {
    //默认会进行constructor和super操作
    super(props)

    // this.state = {
    //   message: 'Hello World',
    //   counter: 100
    // }
  }

  render(): React.ReactNode {
    const { name, age } = this.props
    return (
      <div>
        name: {this.props.name}
        age: {this.props.age}
        message: {this.state.message}
        counter: {this.state.counter}
      </div>
    )
  }

  static get propTypes() {
    return {
      name: PropTypes.string,
      age: PropTypes.number
    }
  }
}
