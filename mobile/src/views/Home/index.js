import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

import api from '../../services/api';

export default function Home({ navigation }) {
  const [actived, setActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/00:0a:95:9d:68:16`).then(response => {
      setLateCount(response.data.length);
    });
  }

  function Notification() {
    setActived('late');
  }

  function NewTask() {
    navigation.navigate('Task');
  }

  async function loadTasks() {
    setLoad(true);
    await api.get(`/task/filter/${actived}/00:0a:95:9d:68:16`).then(response => {
      setTasks(response.data);
      setLoad(false);
    });
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [actived]);

  return (
    <View style={styles.container}>
      <Header late={lateCount} pressNotification={Notification} showNotification={lateCount ? true : false} showBack={false} />

      <View style={styles.filter}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setActived('all')}>
          <Text style={actived === 'all' ? styles.filterButtonTextActived : styles.filterButtonText}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => setActived('today')}>
          <Text style={actived === 'today' ? styles.filterButtonTextActived : styles.filterButtonText}>Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => setActived('week')}>
          <Text style={actived === 'week' ? styles.filterButtonTextActived : styles.filterButtonText}>Semana</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => setActived('month')}>
          <Text style={actived === 'month' ? styles.filterButtonTextActived : styles.filterButtonText}>Mês</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={() => setActived('year')}>
          <Text style={actived === 'year' ? styles.filterButtonTextActived : styles.filterButtonText}>Ano</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>
          { actived === 'late' ? 'Tarefas atrasadas' : 'Tarefas' }
        </Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
        {
          load ? <ActivityIndicator color='#ee6b26' size={30} /> :
            tasks.map((task, index) => (
              <TaskCard key={index} title={task.title} when={task.when} done={task.done} type={task.type} />
            ))
        }
      </ScrollView>

      <Footer icon={'add'} onPress={NewTask} />
    </View>
  );
}