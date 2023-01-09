import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongRadioWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useRenderRadioItem } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const SongRadio: FC<IProps> = (props) => {
  // const { djRadiosList } = useAppSelector(
  //   (state) => ({
  //     djRadiosList: state.radio.djRadiosList
  //   }),
  //   shallowEqual
  // )

  // function SongRadioItem() {
  //   if (djRadiosList.length) {
  //     const songRadioList = djRadiosList.filter((item) => item.categoryId === 2)
  //     console.log(songRadioList)
  //     return songRadioList
  //       .slice(0, 4)
  //       .map(({ id, name, rcmdtext, dj: { avatarUrl } }) => {
  //         return (
  //           <RadioItem
  //             key={id}
  //             itemData={{ id, name, desc: rcmdtext, avatarUrl }}
  //           />
  //         )
  //       })
  //   } else {
  //     return <div></div>
  //   }
  // }

  return (
    <SongRadioWrapper>
      <NavHeaderV4 navTitle="音乐推荐·电台" moreLink="#" />
      <div className="songRadioContent">{useRenderRadioItem(2)}</div>
    </SongRadioWrapper>
  )
}

export default memo(SongRadio)
