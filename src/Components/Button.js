import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, color , link}) => {
  return (
    <Link to={link} className={`font-medium rounded-lg py-2 px-3 ${color ? 'bg-yellow-50 text-black':'bg-richblack-700 text-white '} myshadow`}>{children}</Link>
  )
}

export default Button