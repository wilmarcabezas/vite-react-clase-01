import { useState, useEffect } from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";



function Students() {
    //El objeto datos recibe toda la informacion del API y solo la funcion setDatos lo modifica
    const [datos, setDatos] = useState([]);
    const [id, setId] = useState(0);
    const [nombreestudiante, setNombreEstudiante]=useState('');
    const [usuarioestudiante, setUsuarioEstudiante]=useState('');
    const [correoestudiante, setCorreoEstudiante]=useState('');

    

    useEffect(() => {
        if (id != 0) {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => response.json())
                .then(data => {
                    setDatos(data);
                })
        }
        else {
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then(response => response.json())
                .then(data => {
                    setDatos(data);
                })
        }

    }, [id])

    const verdetalle = (valorid) => {
        setId(valorid);
    }

    const textoModificado = (event) => {
        setId(event.target.value)
    }

    const restablecerLista = () => {
        setId(0)
    }

    const editarEstudiante=(n)=>{
        setNombreEstudiante(n.name);
        setCorreoEstudiante(n.email); 
        setUsuarioEstudiante(n.username); 
        console.log(n)
    }

    return (
        <>
            <h1>Estudiantes</h1>
            <br />
            Buscar por Id: <input type="text" onChange={textoModificado} name="buscador" />

            <GrPowerReset onClick={restablecerLista} />
            <hr />
            {datos.map(dato => (
                <div key={dato.id}>
                    <MdModeEditOutline onClick={()=>editarEstudiante(dato)} />
                    <RiDeleteBin2Line  />
                    <BiDetail onClick={() => verdetalle(dato.id)} />
                    {dato.name}: ID:<b>{dato.id}</b>
                </div>
            ))}
            <hr/>
            <form>
            Nombre: <input type="text" name="nombre" id="nombre" value={nombreestudiante} />
            Usuario: <input type="text" name="nombre" id="nombre" value={usuarioestudiante} />
            Correo: <input type="text" name="nombre" id="nombre" value={correoestudiante} />
            <FaRegSave />
            </form>
            
        </>
    )
}

export default Students;
