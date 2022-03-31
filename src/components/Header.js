import React from "react";

//O children pega o todo conteudo que a tag recebeu

export default function Hearder({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}