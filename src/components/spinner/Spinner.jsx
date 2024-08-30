import spinner from './spinner.gif'

export const Spinner = () => {
  return (
    <div>
        <img
        src={spinner}
        alt='Cargando...'
        style={{width: "150", margin: "auto", paddingTop: "50px", display: "block"}}
        />
    </div>
  )
}
