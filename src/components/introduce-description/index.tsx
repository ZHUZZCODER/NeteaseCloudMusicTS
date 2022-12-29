import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { IntroduceDescriptionWrapper } from './style'
import { showhtml } from '@/utils/format'

interface IProps {
  children?: ReactNode
  introduceTitle: string
  description: string
}

const IntroduceDescription: FC<IProps> = (props) => {
  const { introduceTitle = '介绍', description } = props
  //展开收起状态切换
  const [isFlod, setIsFlod] = useState<boolean>(false)
  //是否显示展开收起
  const [showFlod, setShowFlod] = useState<boolean>(true)
  const descriptionList = description.split('\n')

  //介绍没有那么长就不显示展开收起
  useEffect(() => {
    if (descriptionList.length && descriptionList.length < 9) {
      setShowFlod(false)
    }
  }, [description])

  function flodClick() {
    setIsFlod(!isFlod)
  }
  function descriptionCpn() {
    return (
      descriptionList.length &&
      descriptionList
        .slice(0, 9)
        .map((item, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={showhtml(`${item}<br/>`)}
          ></div>
        ))
    )
  }

  return (
    <IntroduceDescriptionWrapper isFlod={isFlod}>
      {introduceTitle}
      <span className="hiddenDesc">
        {!isFlod ? descriptionCpn() : description}
      </span>
      {showFlod && (
        <div className="flodBox">
          <span onClick={flodClick}>
            {!isFlod ? '展开' : '收起'}
            <i className="sprite_icon2 foldIcon"></i>
          </span>
        </div>
      )}
    </IntroduceDescriptionWrapper>
  )
}

export default memo(IntroduceDescription)
