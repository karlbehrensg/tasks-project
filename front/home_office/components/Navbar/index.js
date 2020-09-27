import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">
          <a className="brand">Home Office</a>
        </Link>
        <div className="menu">
          <div className="menu_tareas">
            <h5>Buscar tareas</h5>
            <h5>Publicar</h5>
          </div>
          <div className="menu_perfil">
            <Link href="/login">
              <a>Iniciar sesion</a>
            </Link>
            <Link href="/register">
              <a>Registrate</a>
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          border: 1px red solid;
          height: 64px;
        }

        .brand {
          margin-left: 20px;
          min-width: 150px;
          width: 10%;
        }

        .menu {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .menu_tareas {
          display: flex;
          margin: 0 10px;
          justify-content: space-between;
          width: 180px;
        }

        .menu_perfil {
          display: flex;
          align-items: center;
          margin: 0 30px;
          justify-content: space-between;
          width: 180px;
        }
      `}</style>
    </>
  )
}
