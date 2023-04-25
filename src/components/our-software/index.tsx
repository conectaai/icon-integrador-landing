import './style.scss';
import starIcon from '../../images/star-icon.svg';

export default function OurSoftware() {

  const softwareCards = [
    {id: 1, icon: starIcon, title: 'Maior eficiência', text: 'Tarefas repetitivas e demoradas sejam realizadas em uma fração do tempo necessário para execução manual. Isso aumenta a produtividade da equipe e possibilita que os profissionais de saúde tenham mais tempo para se concentrar em tarefas que exigem sua habilidade e conhecimento.'},
    {id: 2, icon: starIcon, title: 'Maior satisfação', text: 'Torne os processos de atendimento mais ágeis e precisos, reduzindo o tempo de espera e eliminando a necessidade de preenchimento manual. Isso pode melhorar significativamente a experiência do paciente, tornando-o mais satisfeito com o atendimento recebido e aumentando a probabilidade de fidelização.'},
    {id: 3, icon: starIcon, title: 'Redução de custos', text: 'Reduza custos associados à prestação de serviços de saúde, ao minimizar a necessidade de mão de obra e recursos materiais. Isso pode liberar recursos financeiros para investimentos em outras áreas da empresa, como em tecnologias mais avançadas ou na contratação de profissionais especializados. '},
    {id: 4, icon: starIcon, title: 'Menor margem de erros', text: 'Os sistemas automatizados reduzem a probabilidade de erros humanos, o que é particularmente crítico em tarefas relacionadas à saúde. Com menos erros, a qualidade do atendimento ao paciente é aprimorada e os riscos associados à prestação de serviços de saúde são reduzidos.'},
  ];

  const metrics = [
    {id: 1, number: '+70', label: 'Hospitais Parceiros'},
    {id: 2, number: '+30', label: 'Unidades Médicas'},
    {id: 3, number: '+100', label: 'Clínicas e consultórios'},
    {id: 4, number: '+1000', label: 'Pacientes atendidos'},
  ];

  const ourSoftwareCard = (icon: string, title: string, text: string) => (
    <div className="our-software-card">
      <img src={icon} alt="" className="card-icon" />
      <h4 className="text-18-semi-bold my-sm">{title}</h4>
      <p className="text-14-regular">{text}</p>
    </div>
  );

  const metricsCard = (number: string, label: string, lastCard: boolean) => (
    <div className="col-lg-3">
      <div className={`metrics-card d-flex align-items-center justify-content-center ${lastCard && "no-border-right"}`}>
        <p className="metric-number mr-sm title-40-medium">{number}</p>
        <p className="metric-label text-16-medium">{label}</p>
      </div>
    </div>
  );

  return (
    <section className="our-software">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h2 className='title-32-medium'>Por que escolher nosso software de automação?</h2>
          </div>
          <div className="col-lg-8 offset-lg-1">
            <div className="our-software-cards-container">
              {softwareCards.map((item) => (
                ourSoftwareCard(item.icon, item.title, item.text)
              ))}
            </div>
          </div>
        </div>
        <div className="metrics">
          <h3 className='title-32-medium mb-xxlg'>Conheça alguns números</h3>
          <div className="row">
            {metrics.map((item, index) => (
              metricsCard(item.number, item.label, metrics.length === index + 1)
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}