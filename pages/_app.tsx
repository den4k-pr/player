import { wrapper } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"

const App: React.FC<AppProps> = ({ Component, pageProps }) =>  {
  return (
    <Layout>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default wrapper.withRedux(App);



