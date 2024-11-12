import React, { useState, useEffect } from 'react';

function Postagem({ fotoMain, nomeCurso, instituicao, usuarioLogado }) {
    const [inscrito, setInscrito] = useState(false);
    const [numeroInscricoes, setNumeroInscricoes] = useState(0);

    useEffect(() => {
        // Busque do banco de dados se o usuário está inscrito neste curso
        if (usuarioLogado) {
            // Suponha uma função que verifica inscrições
            verificarInscricaoUsuario();
        }
    }, [usuarioLogado]);

    const verificarInscricaoUsuario = async () => {
        // Simule a lógica de verificação
        const inscritoUsuario = false; // substitua pela lógica real
        setInscrito(inscritoUsuario);
    }

    const handleInscricao = () => {
        if (inscrito) {
            // Lógica para remover inscrição
            setInscrito(false);
            setNumeroInscricoes(numeroInscricoes - 1);
        } else {
            // Lógica para adicionar inscrição
            setInscrito(true);
            setNumeroInscricoes(numeroInscricoes + 1);
        }
        // Atualize o banco de dados conforme necessário
    };

    const flecha = inscrito ? "./flecha_cima_cheia.svg" : "./flecha_cima_vazia.svg";
    const chat = "chat.svg";

    return (
        <>
            <div className="titlePubli">
                <p>{nomeCurso}</p>
                <p>{instituicao}</p>
            </div>
            <img src={fotoMain} id="eletromecanica" alt="eletromecanica" />
            <div className="flechaChat">
                <div className="leftMain">
                    <img src={flecha} alt="flecha" onClick={handleInscricao} />
                    <p>{numeroInscricoes}</p>
                </div>
                <div className="leftMain">
                    <img src={chat} alt="chat" />
                    <p>1</p>
                </div>
            </div>
        </>
    );
}

export default Postagem;
