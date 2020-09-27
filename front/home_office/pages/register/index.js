export default function Register() {
  return (
    <>
      <div className="main">
        <div className="form_container">
          <form>
            <div>
              <input placeholder="Nombre..." />
              <input placeholder="Apellido paterno..." />
              <input placeholder="Apellido materno..." />
            </div>
            <div>
              <input placeholder="Correo eletronico..." />
              <input placeholder="Confirmar correo..." />
            </div>
            <div>
              <input placeholder="Contraseña..." />
              <input placeholder="Confirmar contraseña..." />
            </div>
            <button>Registrarte</button>
          </form>
        </div>

        <style jsx>{`
          .form_container {
            display: flex;
            width: 500px;
            border: 2px red solid;
          }
        `}</style>
      </div>
    </>
  )
}
