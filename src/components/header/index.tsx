import './style.scss';

import logo from '../../images/logo.svg';

export default function Header() {
  return (
    <header className="container d-flex align-items-center justify-content-between">
      <img src={logo} alt="logo" />
      <div className="d-flex align-items-center">
        <a href="https://google.com" target='_blank' rel="noreferrer" className='transparent-btn d-flex align-items-center justify-content-center'>
          Entrar
        </a>
        <a href="https://google.com" target='_blank' rel="noreferrer" className='default-btn header-btn'>
          Teste grátis
        </a>
      </div>
    </header>
  );
}