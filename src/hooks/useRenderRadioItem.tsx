import React from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import RadioItem from '@/views/discover/c-views/radio/c-cpns/radio-item'

export default function useRenderRadioItem(id: number) {
  const { djRadiosList } = useAppSelector(
    (state) => ({
      djRadiosList: state.radio.djRadiosList
    }),
    shallowEqual
  )

  if (djRadiosList.length) {
    const songRadioList = djRadiosList.filter((item) => item.categoryId === id)
    return songRadioList
      .slice(0, 4)
      .map(({ id, name, rcmdtext, dj: { avatarUrl } }) => {
        return (
          <RadioItem
            key={id}
            itemData={{ id, name, desc: rcmdtext, avatarUrl }}
          />
        )
      })
  } else {
    return <div></div>
  }
}
