import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <nav>
        <div><Link to="/">메인페이지로 이동</Link></div>
        <div><Link to="/video">video 페이지로 이동</Link></div>
      </nav>
    </header>
  )
}