import logo from "data-base64:~/assets/logo.png"

export default function Header() {
  return (
    <header className="plasmo-w-full plasmo-flex plasmo-items-center plasmo-justify-center">
      <img className="plasmo-h-32 plasmo-w-48" src={logo} alt="" />
    </header>
  )
}
