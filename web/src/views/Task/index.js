import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

import typeIcons from '../../utils/typeIcons';

import { Container, Form, TypeIcons, Input, Row, Save } from './styles';

function Task() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState('00:0a:95:9d:68:16');

  async function lateVerify() {
    await api.get(`/task/filter/late/00:0a:95:9d:68:16`).then(response => {
      setLateCount(response.data.length);
    });
  }

  async function Save() {
    await api.post('/task', {
      macaddress,
      type,
      description,
    })
  }

  useEffect(() => {
    lateVerify();
  }, []);

  return (
    <Container>
      <Header lateCount={lateCount} clickNotification={Notification} />
      <Form>
        <TypeIcons>
          {
            typeIcons.map((icon, index) => (
              index > 0 && <img src={icon} alt="Icon" onClick={() => setType(index)} className={type && index === type && 'activated'} />
            ))
          }
        </TypeIcons>

        <Input>
          <span>Título</span>
          <input type="text" placeholder="Título da tarefa" onChange={ e => setTitle(e.target.value) } value={title} />
        </Input>

        <Input>
          <span>Descrição</span>
          <textarea rows="5" placeholder="Descrição da tarefa" onChange={ e => setDescription(e.target.value) } value={description} />
        </Input>

        <Input>
          <span>Data</span>
          <input type="date" placeholder="Título da tarefa" onChange={ e => setDate(e.target.value) } value={date} />
        </Input>

        <Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da tarefa" onChange={ e => setHour(e.target.value) } value={hour} />
        </Input>

        <Row>
          <div>
            <input type="checkbox" checked={done} onChange={ () => setDone(!done) } />
            <span>Concluido</span>
          </div>

          <button>Excluir</button>
        </Row>

        <Save>
          <button>Salvar</button>
        </Save>
      </Form>
      <Footer />
    </Container>
  );
}

export default Task;