import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { PiBookOpenTextLight } from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import BookSingleCard from './BookSingleCard'
const BookCard = ({books}) => {
  return (
    <div className = 'grid sm:grid-cols-2 lg:grid-cols-3 xl-cols-4'>
      {books.map((item) =>(
        <BookSingleCard book={item}/>
        
      ))}
      </div>
  )
}

export default BookCard
