export default function Navbar() {
  return (
    <>
      <nav>
        <h1>Home Office</h1>
        <div className="menu">
          <div className="menu_tareas">
            <h5>Buscar tareas</h5>
            <h5>Publicar</h5>
          </div>
          <div className="menu_perfil">
            <h5>Iniciar sesion</h5>
            <h5>Registrate</h5>
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

        h1 {
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
          margin: 0 30px;
          justify-content: space-between;
          width: 180px;
        }
      `}</style>
    </>
  )
}
