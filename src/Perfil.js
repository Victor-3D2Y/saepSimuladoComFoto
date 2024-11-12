function Perfil({ foto, nome, inscricoes, openLoginModal, isLoggedIn }) {
    return (
        <div className="perfil">
            <button onClick={openLoginModal}>
                {isLoggedIn ? "Sair" : "Entrar"}
            </button>
            <img src={foto} id="faculHub" alt={foto} />
            <h1>{nome}</h1>
            <p>Inscrições: {inscricoes}</p>
        </div>
    );
}

export default Perfil;
