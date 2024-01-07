"use client"

import { Footer, Navigation, NavigationData, StickyView } from '@/app/_components/organisms'
import { Hero, News, Reports, Subsidiaries, TelkomForIndonesia, TelkomInYears } from '@/app/_components/templates'
import { LegionProvider, ScrollContext } from '@/app/_libs/providers'
import React, { CSSProperties } from 'react'
import SingleView from './_single-view'
import { useParams } from 'next/navigation'

const DynamicViews = ({navigationData, pageData}: {navigationData: NavigationData[], pageData: any}) => {
  const params = useParams()
  const isAnyParams = !!Object.keys(params).length
  const mainStyle = isAnyParams ? undefined : { flexGrow: 1, overflowY: "auto", overflowX: "hidden" } as CSSProperties

  const [scrollingElement, setScrollingElement] =
    React.useState<HTMLDivElement>();

  function scrollingElRef(ref: HTMLDivElement) {
    setScrollingElement(ref);
  }

  React.useEffect(() => {
    if(!isAnyParams){
      document.body.style.display = "flex";
      document.body.style.flexDirection = "column";
      document.body.style.height = "100dvh";
      document.body.style.overflowY = "hidden";
    }
    return () => {
      if(!isAnyParams){
        document.body.style.removeProperty("display");
        document.body.style.removeProperty("flex-direction");
        document.body.style.removeProperty("height");
        document.body.style.removeProperty("overflow-y");
      }
    };
  }, [isAnyParams]);

  // React.useEffect(()=>{
  //   console.log(pageData)
  // }, [pageData])

  return (
    <LegionProvider>
        <ScrollContext.Provider value={{ scrollingElement }}>
        <Navigation data={navigationData} grip={scrollingElement} />
          <main
            style={mainStyle}
            ref={scrollingElRef}>
              {!isAnyParams &&
                <>
                  <Hero />
                  <StickyView height={4000}>
                    {(proportion)=><TelkomForIndonesia proportion={proportion} />}
                  </StickyView>
                  <StickyView height={4000}>
                    {(proportion)=><TelkomInYears proportion={proportion} />}
                  </StickyView>
                  <StickyView height={4000}>
                    {(proportion)=><Subsidiaries proportion={proportion} />}
                  </StickyView>
                  <Reports />
                  <News news={pageData?.news?.flat() || []} />
                </>
              }
              {isAnyParams &&
                <>
                  <SingleView data={pageData} />
                </>
              }
              <Footer />
          </main>
        </ScrollContext.Provider>
    </LegionProvider>
  )
}

export default DynamicViews