import React from 'react'
import Card from '../components/Card'

const ListPost = () => {
  return (
    <div className='p-8 align-middle'>
      <div className='flex gap-8 flex-wrap items-center justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default ListPost