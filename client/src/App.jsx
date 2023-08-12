import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chats from './components/Chats';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="chats" element={<Chats />} />
            </Routes>
        </>
    );
}

export default App;
