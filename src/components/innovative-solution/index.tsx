import './style.scss';
import solutionImage from '../../images/solution-image.png';
import DefaultBtn from '../default-btn';
import Banner from '../banner';

export default function InnovativeSolution() {

  return (
    <section className="innovative-solution">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={solutionImage} alt="" />
          </div>
          <div className="col-lg-6 my-auto">
            <h2 className='title-32-medium mb-sm'>Conheça quem está por trás dessa solução inovadora</h2>
            <p className='mb-xxlg'>
              A Icon é uma empresa de tecnologia médica que oferece soluções inovadoras para melhorar a qualidade dos cuidados de saúde. 
              <br></br>
              <br></br>
              Nossos softwares personalizados permitem o monitoramento em tempo real de pacientes e oferecem análises precisas para apoiar decisões clínicas mais informadas. Com a integração com dispositivos inteligentes e uma abordagem centrada no paciente, estamos ajudando a transformar a forma como as pessoas cuidam da sua saúde.
            </p>
            <DefaultBtn
              title='Saiba mais'
              link='https://www.google.com'
              transparent
            />
          </div>
        </div>
        <Banner
          title="Automatize seus processos com o Integradoor"
        />
      </div>
    </section>
  );
}