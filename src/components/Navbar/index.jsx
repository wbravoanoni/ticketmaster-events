import {useState} from "react"

const Navbar = () => {

    const [search, setSearch] = useState('')

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    console.log(search);

    return (
        <div>
            <p>Mi Boletera</p>
            <input 
            placeholder="Busca tu evento favorito" 
            onChange={handleInputChange}
            value={search}
            ></input>   
        </div>
    ) 

};

export default Navbar;