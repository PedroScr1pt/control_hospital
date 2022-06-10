import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Hospital 🩸
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="./ingresar">
                <a className="nav-link">Ingresar</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/registro">
                <a className="nav-link">Registrarse</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/somos">
                <a className="nav-link">¿Quienes somos?</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
