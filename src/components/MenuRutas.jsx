import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <a href="/">Home |</a>
                    </li>
                    <li>
                        <a href="/doctoresEspecialidad">doctores Especialidad |</a>
                    </li>
                </ul>
            </div>
        )
    }
}
