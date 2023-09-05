
import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../css/ListaDeTarea.css'


function ListaDeTareas () {
  const [tareas, setTareas] = useState ([]);

  const agregarTarea = tarea =>{
    //actualiza la cadena de texto para que no contenga espacio vacio la funcion trim() elimina los espacio al principio y al final 
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      //se crea un arreglo con la tarea nueva crea y con las que ya se crearon
      const tareasActualizada = [tarea,...tareas];
      setTareas(tareasActualizada);
    } 
  }

  const tareaCompletada = id =>{
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);

  }

  return (
    <>
    <TareaFormulario onSubmit={agregarTarea} />
    <div className="tareas-lista-contenedor">
    {
      tareas.map((tarea) =>
      <Tarea
      key={tarea.id}
      id={tarea.id}
      texto = {tarea.texto}
      completada = {tarea.completada}
      tareaCompletada={tareaCompletada}
      eliminarTarea={eliminarTarea}
      />
      )
    }
      </div>
    </>
    
  );
}

export default ListaDeTareas;