import React, { ReactNode } from 'react'

import "./globals.scss";

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      {children}
    </>
  )
}

export default MainLayout