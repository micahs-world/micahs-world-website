import './header-component.scss';
import localFont from "next/font/local";

const rustyHooksFont = localFont({
  src: '../../fonts/RustyHooks.ttf',
  display: 'swap'
})

export default function HeaderComponent({ title }) {
  return (
    <header>
      <h1 className={rustyHooksFont.className}>
        {title}
      </h1>
    </header>
  )
}