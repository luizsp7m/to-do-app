import React, { useEffect, useState } from 'react';

import { Container, Main, Filters, Tasks } from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import Task from '../../components/Task';

function Home() {

  const [activated, setActivated] = useState('today');
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    await api.get(`/task/filter/${activated}/00:0a:95:9d:68:16`).then(response => {
      setTasks(response.data);
    });
  }

  useEffect(() => {
    loadTasks();
    console.log(tasks);
  }, [activated]);

  return (
    <Container>
      <Header />
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
        <Tasks>
          {
            tasks.map(task => (
              <Task type={task.type} title={task.title} when={task.when} when={task.when} />
            ))
          }
        </Tasks>
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;