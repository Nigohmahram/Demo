export default function Book(props) {
      // if(!props.name){
      //       return null
      // }else{
      //       document.body.textContent = 'salom'
      // }
      // return !props.name ?(
      //       <div>
      //       <h2>{(props.name) ? <span>{props.name}</span> : 'default book'}</h2>
      //       <p>{props.year}</p>
      //       <p>{props.price}</p>
      //       <p>{props.children}</p>
      //       </div>
      // ) : (
      //       <h1>Ma'lumot topilmadi</h1>
      // )
      return(
            <div>
            <h2>{(props.name) ? <span>{props.name}</span> : 'default book'}</h2>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <p>{props.children}</p>
            </div>
      )
}