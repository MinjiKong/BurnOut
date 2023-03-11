import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


function Navbar() {

  const navBarLinks = [
    {
        id: 1,
        name: 'profile',
        pic: '../images/person.svg',
        link: '/'

    },
    {
        id: 2,
        name: 'Community',
        pic: '../images/community_2.svg',
        link: '/community'


    },
  //   {
  //       id: 3,
  //       name: 'Scrapbook',
  //       pic: '../images/favorite.svg',
  //       link: '/Scrapbook'


  //   },
    {
        id: 4,
        name: 'Navbar',
        pic: '../images/leaderboard.svg',
        link: '/leaderboard'
    },

]
  return (
    <div className="nav">
        <div className='flex items-center w-full h-20 text-white fixed bottom-0 bg-dark-navy rounded-t'>
            {navBarLinks.map(({ id, link, pic, name }) => (
                <Link className=' flex-col w-1/3' key={id} to={link}>
                    {/* <div className="flex-col w-1/3"> */}
                        <div className="text-center active:bg-violet-100 rounded-full max-w-md color-white">
                            <object className="mx-auto my-auto" type="image/svg+xml" data={pic} alt={name}></object>
                        </div>
                    {/* </div> */}
                </Link>
            ))}
        </div>

    </div>  )
}

export default Navbar