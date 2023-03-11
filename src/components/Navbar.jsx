import React from 'react'

function Navbar() {

  const links = [
    {
        id: 1,
        name: 'Applications',
        pic: '../images/coffee.svg',
        link: '/'

    },
    {
        id: 2,
        name: 'Community',
        pic: '../images/privacy-policy.svg',
        link: '/friends'


    },
  //   {
  //       id: 3,
  //       name: 'Scrapbook',
  //       pic: '../images/favorite.svg',
  //       link: '/Scrapbook'


  //   },
    {
        id: 4,
        name: 'Profile',
        pic: '../images/setting.svg',
        link: '/settings'


    },

]
  return (
    <div>Navbar</div>
  )
}

export default Navbar