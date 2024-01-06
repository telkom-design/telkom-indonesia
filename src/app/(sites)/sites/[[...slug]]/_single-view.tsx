import React from 'react'
import parse from 'html-react-parser';

import './_single-view.scss'

import { Box, Image, Text, Flex } from "@/app/_components/atoms";
import Link from 'next/link';
import { checkActiveLink } from '@/app/_utils';
import { usePathname } from 'next/navigation';


const SingleView = ({data}: {data: any}) => {
  const pathname = usePathname()

  if(typeof data === "object"){
    const {title, banner, tabs, content} = data
    return (
      <div className='main-content'>
        {banner && <Box mt="32px" className="banner">
          <Image
            src={banner.image}
            width="100%"
            height="100%"
            radius="24px 24px 0px 0px"
            alt={banner.title}
          />
          <Box
            background="#fff"
            width="720px"
            height="280px"
            className="banner-mask"
          />
          <Box className="banner-text">
            <Text as="h3">{banner.title}</Text>
            <Text as="p" color="tertiary500">
              {banner.description}
            </Text>
          </Box>
        </Box>}
        {tabs && <>
          <Box className="tabs" background="tertiary50">
            <Flex className="tabs-items">
              {tabs && <>
              {tabs.map((item: any) =>(
                <Link key={`tabs_${item.id}`}
                  className={checkActiveLink(
                    item.url,
                    pathname
                  )}
                  href={item.url}
                >
                <Text as="p">{item.title}</Text>
              </Link>
              ))}
              </>}
            </Flex>
          </Box>
        </>}
        <Box className='content' mt="56px" mb="56px">
          {parse(content)}
        </Box>
      </div>
    )
  }else{
    <>{data}</>
  }
}

export default SingleView