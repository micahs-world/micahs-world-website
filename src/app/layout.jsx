import './globals.scss'
import { Andika } from 'next/font/google'
import HeaderComponent from "@/app/components/header/HeaderComponent";
import NavComponent from "@/app/components/nav/NavComponent";
import {FooterComponent} from "@/app/components/footer/FooterComponent";

const andika = Andika({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap'
})

export const metadata = {
  title: "Micah's World",
  description: 'Information, projects, and thoughts from Micah',
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={andika.className}>
        <div id="header-navs">
          <HeaderComponent title="Micah's" />
          <NavComponent />
        </div>

        <main>
          <article className="primary">
            {props.children}
          </article>
        </main>

        {props.modal}

        <FooterComponent />
      </body>
    </html>
  )
}
