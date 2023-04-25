import './style.scss';

import hero from '../../images/hero.svg';
import DefaultBtn from '../default-btn';
import partners from '../../images/partners.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="hero-text-container">
              <span className='hero-span mb-sm'>Transforme a saúde digitalmente</span>
              <h1 className='hero-title'>Automação Inteligente para Sistemas de Saúde</h1>
              <p className='text-18-regular'>Automatize processos, aumente a eficiência e melhore a experiência do paciente com nossa tecnologia de ponta.</p>
              <DefaultBtn
                title='Teste gratuitamente'
                link='https://google.com'
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="img-container">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="col-lg-8 mx-auto">
          <img src={partners} alt="parceiros" />
        </div>
      </div>
    </section>
  );
}