import React from 'react';
import Form from '../components/Form';
// import DropDown from '../components/DropDown';
import '../styles/Home.css';
import Tasks from '../components/Tasks';

function Home() {
  return (
    <div>
      <h1 className="home-title">Ebytr - Sistema de registro de tarefas</h1>
      <div>
        <Form />
        {/* <DropDown /> */}
      </div>
      <Tasks />
    </div>
  )
}

export default Home;
