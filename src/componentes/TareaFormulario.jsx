import React, {useState} from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../css/tareaFormulario.css";
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  const [input, setInput] = useState('');
  const manejarCambios = e =>{
    setInput(e.target.value)
  
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada:false
    }
    props.onSubmit(tareaNueva)
  }
  
  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
       type="text"
        className="tarea-input"
        placeholder="ingrese una tarea"
        name="texto"
        onChange={manejarCambios} />
      <button className="tarea-boton">
        Agregar <AiOutlinePlusCircle className="tarea-boton-icono"/>
        </button>
    </form>
  );
}

export  default TareaFormulario;