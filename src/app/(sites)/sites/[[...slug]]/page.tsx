import React from 'react'
import DynamicViews from './_views'
import {headers} from 'next/headers'
import NotFound from './_not-found'

// apiary limit client request to 120 request per hour
// so wait for an hour if our access getting blocked.
const BASE:string = "https://private-27fdd-telkomapi.apiary-mock.com"
const NAV_URL: string = BASE+"/navigation"

const DynamicPage = async () => {
  try{
    const header = headers()
    const currentPath = header.get('x-current-path')
    // Revalidate data after 10 seconds (caching)
    // const navigation = await (await fetch(NAV_URL, {next: {revalidate: 10}})).json()
    // const pageData = await (await fetch(BASE+currentPath, {next: {revalidate: 10}})).json()

    // Without caching
    const navigation = await (await fetch(NAV_URL, {cache: 'no-store'})).json()
    const pageData = await (await fetch(BASE+currentPath, {cache: 'no-store'})).json()


      return (
        <>
          <DynamicViews navigationData={navigation} pageData={pageData} />
        </>
      )
  }catch(err){
    // console.error(err)
    return (
      <NotFound />
    )
  }
}

export default DynamicPage