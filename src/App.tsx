import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.page';
import ProductPage from './pages/products.page';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SidebarComp from './components/sidebar.comp';
import Taskbar from "./components/taskbar.comp";
import ContactModal from "./components/contact.comp";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <Router>
            <div className="relative min-h-screen">
                <Taskbar openModal={openModal} toggleSidebar={toggleSidebar} />
                <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
                <SidebarComp isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {/* Main Content */}
                <div className={`transition-transform duration-300 ${isSidebarOpen ? 'ml-64' : ''}`}>
                    <button onClick={toggleSidebar} className="p-4 text-gray-800 md:hidden">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductPage />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
