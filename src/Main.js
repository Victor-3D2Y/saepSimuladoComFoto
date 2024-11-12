import Postagem from "./Postagem";

function Main({ usuarioLogado }) {
    return (
        <div id="tudo">
            <h2>Cursos</h2>
            <Postagem 
                nomeCurso="Eletromecânica" 
                fotoMain="eletromecanica.png" 
                instituicao="PUC-MG" 
                usuarioLogado={usuarioLogado}
            />
            <Postagem 
                nomeCurso="Inteligência Artificial" 
                fotoMain="inteligencia_artificial.png" 
                instituicao="PUC-MG" 
                usuarioLogado={usuarioLogado}
            />
        </div>
    )
}

export default Main;
