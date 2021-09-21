import React from 'react';

// components
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

function PanelLayout({ children }) {
  return (
    <div className="wrapper">

      <Sidebar />

      <main className="main">
        <Navbar />
          
        <div className="content">
          {children}
        </div>

        <Footer />
      </main>

    </div>
  )
}

export default PanelLayout;