import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}
