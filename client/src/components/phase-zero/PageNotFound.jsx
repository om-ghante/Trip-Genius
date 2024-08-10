import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex justify-center'>
        <Typography>Sorry ur entered path is wrong</Typography>
        <Typography>404 Page Not Found</Typography>
        <Button onClick={()=>navigate('/')}>Home</Button>
      </div>
    </>
  )
}

export default PageNotFound
