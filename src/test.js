class football extends React.Component {
    shoot = (a,b)=>{
        alert(b.type)
    }
    render () {
        return(
            <button onClick={(ev)=>this.shoot("click",ev)}  >Click me</button>
        )
    }
}