import { headers } from 'next/headers'
import React from 'react'

const AboutTelkom = async() => {
  try{
    const header = headers()
    const {json} = await fetch('https://telkom-co-id-tciops-dev.apps.osh.telkom.co.id'+header.get('x-current-path'))
    const data = await json()
    console.log(data)
    return (
      <div>{JSON.stringify(data)}</div>
    )
  }catch(err){
    //err handling
  }
}

export default AboutTelkom