import type { Metadata } from 'next'
import './globals.css'
import Provider from './provider'
import Header from '@/components/Header'
import ToastContainer from '@/components/thirdParty/react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/AuthContext';
import * as actions from "@/actions/index"

export const metadata: Metadata = {
  title: {
   default:"آژانس مسافرتی لونا گشت آریا - مجری مستقیم تور مسافرتی",
   template: "%s - لونا گشت آریا "
  },
  description: 'آژانس مسافرتی شرکت خدماتی و گردشگری لونا گشت آریا ارائه دهنده تورهای خارجی، داخلی، تور های هوایی، تور های لحظه آخری با بهترین قیمت',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="fa" dir="rtl">
      <body className='font-Dana'>
        <AuthProvider>
          <Provider>
            <Header/>
            <main>

              {children}

              <ToastContainer />
            </main>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  )
}
