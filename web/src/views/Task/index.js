import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';
import { format } from 'date-fns';

import typeIcons from '../../utils/typeIcons';

import { Container, Form, TypeIcons, Input, Row, Save } from './styles';

import { Redirect } from 'react-router-dom';

import isConnected from '../../utils/isConnected';

function Task({ match }) {

  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();

  async function loadTaskDetails() {
    await api.get(`/task/${match.params.id}`).then(response => {
      setType(response.data.type);
      setTitle(response.data.title);
      setDone(response.data.done);
      setDescription(response.data.description);
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
      setHour(format(new Date(response.data.when), 'HH:mm'));
    });
  }

  async function handleSave() {
    if (!type) return alert('Você precisa informar o tipo da tarefa');
    if (!title) return alert('Você precisa informar o título da tarefa');
    if (!description) return alert('Você precisa informar a descrição da tarefa');
    if (!date) return alert('Você precisa informar a data da tarefa');
    if (!hour) return alert('Você precisa informar a hora da tarefa');

    if (match.params.id) {
      await api.put(`/task/${match.params.id}`, {
        macaddress: isConnected,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true));
    } else {
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true));
    }
  }

  async function Remove() {
    const res = window.confirm('Deseja realmente remover a tarefa?');
    if (res === true) {
      await api.delete(`/task/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    if(!isConnected) setRedirect(true);

    loadTaskDetails();
  }, []);

  return (
    <Container>
      { redirect && <Redirect to='/' />}
      <Header clickNotification={Notification} />
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
          <input type="text" placeholder="Título da tarefa" onChange={e => setTitle(e.target.value)} value={title} />
        </Input>

        <Input>
          <span>Descrição</span>
          <textarea rows="5" placeholder="Descrição da tarefa" onChange={e => setDescription(e.target.value)} value={description} />
        </Input>

        <Input>
          <span>Data</span>
          <input type="date" placeholder="Título da tarefa" onChange={e => setDate(e.target.value)} value={date} />
        </Input>

        <Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da tarefa" onChange={e => setHour(e.target.value)} value={hour} />
        </Input>

        <Row>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
            <span>Concluido</span>
          </div>

          { match.params.id && (
            <button onClick={Remove}>Excluir</button>
          ) }

        </Row>

        <Save>
          <button onClick={handleSave}>Salvar</button>
        </Save>
      </Form>
      <Footer />
    </Container>
  );
}

export default Task;