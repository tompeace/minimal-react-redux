import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ children, ...props }) => (
  <NavLink
    {...props}
    className='mr-4 border-b-2 border-transparent cursor-pointer' 
    activeClassName='font-extrabold border-black'>
    {children}
  </NavLink>
)

export default function Navigation(props) {
  return (
    <Fragment>
      <div className='mx-2 px-2 py-4'>
        <Link exact to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <div className="mx-4 border-b border-gray-500" />
    </Fragment>
  )
}