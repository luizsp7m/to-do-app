import React, { useEffect, useState } from 'react';

import { Container, Main, Filters, Tasks } from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import Task from '../../components/Task';

import { Link, Redirect } from 'react-router-dom';

function Home() {

  const [activated, setActivated] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks() {
    await api.get(`/task/filter/${activated}/${isConnected}`).then(response => {
      setTasks(response.data);
    });
  }

  function Notification() {
    setActivated('late');
  }

  useEffect(() => {
    loadTasks();

    if(!isConnected) {
      setRedirect(true);
    }
  }, [activated]);

  return (
    <Container>
      { redirect && <Redirect to="qrcode" /> }
      <Header clickNotification={Notification} />
      <Main>
        <Filters>
          <button onClick={() => setActivated('all')}>
            <Filter title="Todos" activated={activated === 'all'} />
          </button>

          <button onClick={() => setActivated('today')}>
            <Filter title="Hoje" activated={activated === 'today'} />
          </button>

          <button onClick={() => setActivated('week')}>
            <Filter title="Semana" activated={activated === 'week'} />
          </button>

          <button onClick={() => setActivated('month')}>
            <Filter title="Mês" activated={activated === 'month'} />
          </button>

          <button onClick={() => setActivated('year')}>
            <Filter title="Ano" activated={activated === 'year'} />
          </button>
        </Filters>

        <h4>{activated === 'late' ? "Tarefas atrasadas" : "Tarefas"}</h4>

        <Tasks>
          {
            tasks.map((task, index) => (
              <Link to={`/task/${task._id}`}>
                <Task type={task.type} title={task.title} when={task.when} done={task.done} />
              </Link>
            ))
          }
        </Tasks>
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;