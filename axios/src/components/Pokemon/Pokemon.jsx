const Pokemon = ({id, name, src}) =>{
    return (<li key={id}><img src={src}/> {name}</li>)
}

export {Pokemon};