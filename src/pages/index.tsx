import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'

import { A } from '@/components'


// ?components
import { TopHeader, FormPrint, TopBarMenu, HeaderSection } from '@/components/HeaderSection'
import { LeftSection, CenterSection, RightSection } from '@/components/BodySection'
import Footer from '@/components/Footer/Footer'
export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <div id="main" className="w-screen ">
        <TopHeader />
        <header className='w-full  mx-0 md:px-2 sm:px-8 xl:px-64'>
          {/*  */}
          <HeaderSection />
          <TopBarMenu />
          <FormPrint />
        </header>
        <main className='w-full  mx-0 md:px-2 sm:px-8 xl:px-64 flex my-5  '>
          <LeftSection />
          <CenterSection />
          <RightSection />
        </main>
      </div>

    </>
  )
}



