import { headers } from 'next/headers'
import React from 'react'
import parse from 'html-react-parser';

const AboutTelkom = async() => {
  try{
    const header = headers()
    const req = await fetch('https://telkom-co-id-tciops-dev.apps.osh.telkom.co.id'+header.get('x-current-path'))
    const data = await req.json()
    const title = data.detailPage.content_attr[1].attr_value[0].content_val_attr_template
    const body = data.detailPage.content_attr[2].attr_value[0].content_val_attr_template
    return (
      <div className="detail-content">
        <h1>{title}</h1>
        {parse(body)}
      </div>
    )
  }catch(err){
    console.error(err)
  }
}

export default AboutTelkom