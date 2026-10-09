import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DoctoresEspecialidad extends Component {
    selectEspecialidad = React.createRef();
    url = Global.urlApiDoctores;
    state = {
        especialidades: [],
        doctores: []
    }
    
    loadEspecialidades = () => {
        let request = "api/Doctores/Especialidades"
        axios.get(this.url + request).then((response) => {
            this.setState({
                especialidades: response.data
            })
        })

    }

    componentDidMount = () => {
        this.loadEspecialidades();
    }

    mostrarDoctores = (event) => {
        event.preventDefault(); 
        console.log("holaaaaa")
        let request = "api/doctores/DoctoresEspecialidad/" + this.selectEspecialidad.current.value
        axios.get(this.url + request).then((response) => {
            this.setState({
                doctores: response.data
            })
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <h1>Doctores Especialidad</h1>
                <form>
                    <label>Especialidad: </label> 
                    <select ref={this.selectEspecialidad}> 
                        {
                            this.state.especialidades.map((esp, index) => {
                                return(
                                    <option key={index}>{esp}</option>
                                )
                            })
                        }
                    </select> 
                    <button onClick={this.mostrarDoctores}>Mostrar Doctores</button>
                </form>
                {
                    this.state.doctores &&
                    <ul>
                        {
                            this.state.doctores.map((doc, index) => {
                                return(
                                    <li key={index}>Apellido: {doc.apellido} | Especialidad: {doc.especialidad}</li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        )
    }
}
