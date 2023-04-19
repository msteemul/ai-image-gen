import React, {useState,useEffect} from 'react'
import {Loader, Card, FormField} from '../components'

const Home = () => {
   const [loading, setLoading] = useState(false)
    const [allPost, setallPost] = useState(null)
    const [searchText, setSearchText] = useState('')
  return (
   <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community showcase</h1>
      <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
        browse through a collection of imaginative and visually stunning images generated from DALL-E AI.
      </p>
    </div>
    <div className='mt-16 '>
      <FormField />
    </div>
    <div className='mt-10'>
      {loading? (
        <div className='flex justify-center items-center'>
          <Loader />
        </div>
      ):(
        <>
        {searchText && (
          <h2></h2>
        )}
        
        </>
      )}
    </div>

   </section>
  )
}

export default Home