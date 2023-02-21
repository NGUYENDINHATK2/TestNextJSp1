import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'

import { A } from '@/components'


// ?components
import { TopHeader, Header,TopBarMenu } from '@/components/HeaderSection'
export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <div id="main" className="w-screen ">
      <TopHeader />
        <header className='md:mx-64 mx-0'>
          {/*  */}
          <TopBarMenu/>
        </header>
      </div>

    </>
  )
}



