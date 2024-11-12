import React, { useState } from 'react';
import Header from './Header';
import Perfil from './Perfil';
import Main from './Main';
import LoginModal from './LoginModal';

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const handleLoginSuccess = (user) => {
        setUsuarioLogado(user);
        // Redirecionar ou fazer outra ação após login bem-sucedido
    };

    const handleLogout = () => {
        setUsuarioLogado(null);
        // Qualquer outra ação necessária ao deslogar
    };

    return (
        <div className="App">
            <Header />
            <div id="principal">
                <Perfil 
                    foto={usuarioLogado?.foto || "logo_faculhub.png"} 
                    nome={usuarioLogado?.nome || "FaculHub"} 
                    inscricoes={usuarioLogado?.inscricoes || 0} 
                    openLoginModal={usuarioLogado ? handleLogout : openModal} 
                    isLoggedIn={!!usuarioLogado}
                />
                <Main usuarioLogado={usuarioLogado} />

                <LoginModal
                    showModal={isModalVisible}
                    closeModal={closeModal}
                    onLoginSuccess={handleLoginSuccess}
                />
            </div>
        </div>
    );
}

export default App;
