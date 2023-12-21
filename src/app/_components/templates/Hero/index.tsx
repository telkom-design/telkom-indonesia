import Image from "next/image"
import { IconArrowUpRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { Flex, Box, Button, Text } from "../../atoms"

import './hero.scss'

const BgLiniear = 'linear-gradient(42deg, #F9FAFB 57.8%, rgba(249, 250, 251, 0.00) 64.53%);'
export const Hero = () => {
  return (
    <Flex alignX='space-between' width='1328px' margin='24px 0'>
      <Box width="990px" height="649px" radius="24px" background={BgLiniear} style={{ position: 'relative'}}>
        {/* fixed text */}
        <Box pt='224px' pl="56px" style={{ position: 'absolute', zIndex: '1'}}>
          <Text size="30px" weight="300" color="basewhite"><Text color="primary500">#</Text>ElevatingYourFuture</Text>
          <Text as='h3' size="104px" weight="800" height="102.885%" color="basewhite">Elevating Your</Text>
        </Box>

        {/* carousel */}
        <div className="hero-carousel hero-carousel--landscape">
          <ul className="hero-carousel__img">
              <li className="active">
                <Image
                  src={`/home/hero-landscape.jpg`}
                  alt='hero-lanscape-1'
                  priority={true}
                  width={990}
                  height={409}
                />
              </li>
              <li>
                <Image
                  src={`/home/hero-landscape.jpg`}
                  alt='hero-lanscape-2'
                  priority={true}
                  width={990}
                  height={409}
                />
              </li>
              <li>
                <Image
                  src={`/home/hero-landscape.jpg`}
                  alt='hero-lanscape-3'
                  priority={true}
                  width={990}
                  height={409}
                />
              </li>
          </ul>
          <ul className="hero-carousel__text">
              <li className="active">
                <Text as="h4" size="104px" height="102.885%" weight="800" margin="0">Business</Text>
                <Flex alignY='center'>
                  <Text color="tertiary500" size="18px" mr="24px" height="155.556%" weight="400">Providing the fastest way to reach your desired audiences<br/>and boosting the growth of your business.</Text>
                  <Button iconRight={<IconArrowUpRight/>}>Explore Now</Button>
                </Flex>
              </li>
              <li>
                <Text as="h4" size="104px" height="102.885%" weight="800" margin="0">Venture</Text>
                <Flex alignY='center'>
                  <Text color="tertiary500" size="18px" mr="24px" height="155.556%" weight="400">Building one more prosperos and competitive nation as well as deliver the best value to the stakeholders.</Text>
                  <Button iconRight={<IconArrowUpRight/>}>Explore Now</Button>
                </Flex>
              </li>
              <li>
                <Text as="h4" size="104px" height="102.885%" weight="800" margin="0">Activities</Text>
                <Flex alignY='center'>
                  <Text color="tertiary500" size="18px" mr="24px" height="155.556%" weight="400">Follow our jouney in building the best digital world for the people and country</Text>
                  <Button iconRight={<IconArrowUpRight/>}>Explore Now</Button>
                </Flex>
              </li>
          </ul>
          <div className="hero-carousel__counter">
            <span className="hero-carousel__counter__amount">1 / 5</span>
            <span className="hero-carousel__counter__indicator" style={{ width: 'calc(100% - 5)'}}></span>
          </div>
          <Flex alignY='center' padding="24px 32px" radius="24px" className="button-next-prev hero-carousel__nav">
            <Button variant="outline" color='tertiary' iconLeft={<IconChevronLeft/>} />
            <Button variant="outline" color='tertiary' iconLeft={<IconChevronRight/>} />
          </Flex> 
        </div>
      </Box>
      <Box width="314px" style={{ position: 'relative'}}>
        {/* carousel i*/}
        <div className="hero-carousel">
          <ul className="hero-carousel__img">
            {[1,2,3].map((item) => (
              <li key={item} className={item === 1 ? 'active' : ''}>
                <Image
                  src={`/home/hero-potrait.jpg`}
                  alt={`hero-potrait-${item}`}
                  priority={true}
                  width={314}
                  height={409}
                />
              </li>
            ))}
          </ul>
          <ul className="hero-carousel__text">
            {[1,2,3].map((item) => (
              <li key={item} className={item === 1 ? 'active' : ''}>
                <Text size='14' color="tertiary300" weight="400" height="142.857%">Elevating Your</Text>
                <Text as='h4' color="basewhite" size='24px' weight="800" height="150%">Venture</Text>
              </li>
            ))}
          </ul>
        </div>
        {/* navigation */}
        <Box as="nav" className="hero-nav">
          <Text as="h2" mt="16px" color="tertiary700" size="16px" height="150%" weight="700" mb="6px">Discover Our Company</Text>
          <a href="#telkom-for-indonesia">Telkom for Indonesia</a>
          <a href="#telkom-in-years">Telkom In Years</a>
          <a href="#subsidiaries">Subsidiaries</a>
          <a href="#reports">Reports</a>
          <a href="#new-and-events">News & Events</a>
        </Box>
      </Box>
    </Flex>
  )
}
