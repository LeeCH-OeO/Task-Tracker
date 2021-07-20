import Button from "./Button"
const Header = ({name, onAdd, showAdd}) => {

    return (
        <header className='header'>
          <h1>{name}</h1>
         
          <Button onClick = {onAdd} text={showAdd ? 'expand_less' : 'add_task'}/>
          
          
        </header>
    )
}

export default Header
