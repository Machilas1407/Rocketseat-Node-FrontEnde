import React, { useState } from 'react'

import Hearder from './components/Header';

/**
 * Os três conceitos mais importantes :
 * Componentes
 * Propiedade
 * Estado & Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    // useState retorna um array com 2 posições
    //
    // 1. Variável com o seu valor inicial
    // 2.  Função para atualizarmos esse valor


    function handleAddproject() {
        // projects.push(`Novo Projeto ${Date.now()}`);
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <>
            <Hearder title="Projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type='button' onClick={handleAddproject}>Adicionar Projeto</button>

        </>
    )
}

export default App;