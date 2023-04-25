import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './style.scss';

import operatorInterface from '../../images/operator-interface.svg';
import DefaultBtn from '../default-btn';

export default function OurInterfaces() {
  const [key, setKey] = useState('operator');

  const tabNavigator = (
    <Tabs
      defaultActiveKey="profile"
      id="interface-tab"
      activeKey={key}
      onSelect={(k: any) => setKey(k)}
    >
      <Tab eventKey="operator" title="Operador">
        <img src={operatorInterface} alt="" className='mb-xxxlg w-100' />
      </Tab>
      <Tab eventKey="supervisor" title="Supervisor">
        <img src={operatorInterface} alt="" className='mb-xxxlg w-100' />
      </Tab>
    </Tabs>
  );

  return (
    <section className="our-interfaces">
      <div className="container">
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <h2 className='title-40-medium mb-sm'>Conheça nossas interfaces</h2>
          <p className='text-18-regular mb-xxlg'>Maximize o potencial da sua clínica com recursos inteligentes e personalizados para atender melhor seus pacientes</p>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {tabNavigator}
            </div>
          </div>
          <DefaultBtn
            title='Teste gratuitamente'
            link='https://www.google.com'
          />
        </div>
      </div>
    </section>
  );
}