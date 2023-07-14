export default function Book(props) {
      return(
            <div>
            <h2>{(props.name) ? <span>{props.name}</span> : 'default book'}</h2>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <p>{props.children}</p>
            </div>
      )
}