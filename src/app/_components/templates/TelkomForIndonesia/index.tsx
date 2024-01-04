// atoms
import React from "react";
import { Box, Flex, Image, Text } from "../../atoms";

function round(value: number, precision: number): number {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export const TelkomForIndonesia = ({proportion}: {proportion: number}) => {
  const imageScale = (proportion <= 0.5) ? 5 - 8 * proportion : 1
  const [active, setActive] = React.useState(-1)
  const [images] = React.useState([
    "https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg?auto=compress&cs=tinysrgb&w=2000",
    "https://images.pexels.com/photos/1679551/pexels-photo-1679551.jpeg?auto=compress&cs=tinysrgb&w=2000",
    "https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&w=2000"
  ])

  React.useEffect(()=>{
    const len = [...Array(images.length)]
    len.forEach((_, index)=>{
      const pos = round(proportion, 1) === round(0.5 + (index * 0.16), 1)
      if(pos && (active !== index)){
        console.log(index)
        setActive(index)
      }
    })
  }, [proportion, images, active])

  React.useEffect(()=>{
    console.log(proportion)
  }, [proportion])
  
  return (
    <Flex
      direction="row"
      style={{ rowGap: "56px", transform: `scale(${proportion < 0 ? 1.2 : proportion < 0.04 ? 1.2 - 5 * proportion : 1})`, overflow: "hidden", height: "636px", borderRadius: "32px", position: 'relative' }}
      background="tertiary50"
      margin="200px 0 0"
    >
      <Box style={{display: 'flex', position: 'relative'}} width="100%" height="100%">
        {images.map((item, index) => (
          <Image key={item} style={{transform: `scale(${imageScale})`, zIndex: (10 - index), width: `calc(100%/${index === 0 ? 2 : images.length + 0.5})`, transition: 'opacity 0.5s'}} fit="cover" src={item} height="100%" alt="" />
        ))}
      </Box>

      <Box style={{transform: `translate(0px, ${proportion < 0.5 ? 250 - 500 * proportion:0}px)`,zIndex: 11, backgroundColor: 'rgba(255,255,255,0.9)', boxShadow: '-39px -1px 72px 13px rgba(255,255,255,0.75)', opacity: (proportion - 0.2) / 0.3, position: 'absolute', right: 0}} width="50%" height="100%" padding="48px 56px">
        <Text as="h2" mb="16px">
          Telkom for Indonesia
        </Text>
        <Text as="p" mb="32px" color="tertiary500">
          Advancing technology further beyond. We build advanced digital world
          where everyone can be reachable and grow.
        </Text>

        <Box style={{ borderLeft: "1px solid #d0d5dd" }}>
          <Box padding="16px 24px" style={{ borderLeft: active === 0  ? "3px solid #e42313" : "3px solid transparent" }}>
            <Text as="h4" color={active === 0 ? "primary400": "tertiary400"}>
              200.000+ Tower Across Indonesia
            </Text>
            {active === 0 && <Text as="p">
              Telkom provide your business the most extensive way to reach more
              than 120 million users.
            </Text>}
          </Box>

          <Box padding="16px 24px" style={{ borderLeft: active === 1  ? "3px solid #e42313" : "3px solid transparent" }}>
            <Text as="h4" color={active === 1 ? "primary400": "tertiary400"}>
              170.000+ km Optic Fibre in Indonesia and Abroad
            </Text>
            {active === 1 && <Text as="p">
              Telkom provide your business the most extensive way to reach more
              than 120 million users.
            </Text>}
          </Box>

          <Box padding="16px 24px" style={{ borderLeft: active === 2  ? "3px solid #e42313" : "3px solid transparent" }}>
            <Text as="h4" color={active === 2 ? "primary400": "tertiary400"}>
              100+ Data Center Around The World
            </Text>
            {active === 2 &&<Text as="p">
              Telkom provide your business the most extensive way to reach more
              than 120 million users.
            </Text>}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
