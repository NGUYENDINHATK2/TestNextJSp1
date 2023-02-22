import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'

import { A } from '@/components'


// ?components
import { TopHeader, Header, TopBarMenu,HeaderSection } from '@/components/HeaderSection'
export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <div id="main" className="w-screen ">
        <TopHeader />
        <header className='w-full  mx-0 md:px-30 sm:px-8 xl:px-64'>
          {/*  */}
          <HeaderSection />
          <TopBarMenu />
        </header>
      </div>

    </>
  )
}



