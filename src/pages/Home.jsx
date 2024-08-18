import React from 'react'
import Hero from '../componants/Home/Hero'
import RecentlyAddedBook from '../componants/Home/RecentlyAddedBook'

const Home = () => {
  return (
    <div className=' text-white px-10 py-4  '>
        <Hero />
       <RecentlyAddedBook />
    </div>
  )
}

export default Home