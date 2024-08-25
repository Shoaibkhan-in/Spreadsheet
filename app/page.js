import Search from '@/components/Search'
import Grid from '@/components/Grid'
import GridControls from '@/components/GridControls'

import React from 'react'
import PaginationControls from '@/components/PaginationControls'
const page = () => {
  return (
    <div>
      <span className='flex items-center text-2xl font-bold ml-36'>Spreadsheet by Soyab</span>
      <div className="container mx-auto p-4">
      
      <Search />
      <GridControls />
      <Grid />
      <PaginationControls />
      </div>
    </div>
  )
}

export default page
