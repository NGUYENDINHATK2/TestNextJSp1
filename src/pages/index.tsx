import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'

import { A } from '@/components'


// ?components
import { TopHeader, Header } from '@/components/HeaderSection'
export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <NextSeo title="Home" />
      <div>
        <main className="">
          <TopHeader />
          <div id="main-content" className="px-64">
            <div id="header" >
              <Header />
            </div>
          </div>
        </main>

      </div>
    </>
  )
}



