import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Alert
} from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import typeIcons from '../../utils/typeIcons';

import styles from './styles';

import api from '../../services/api';

export default function Task({ navigation }) {
  const [done, setDone] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState('00:0a:95:9d:68:15');

  async function New() {
    if(!type) return Alert.alert('Defina um tipo para a tarefa');
    if(!title) return Alert.alert('Defina o nome para a tarefa');
    if(!description) return Alert.alert('Defina a descrição para a tarefa');
    if(!date) return Alert.alert('Defina uma data para a tarefa');
    if(!hour) return Alert.alert('Defina um horário para a tarefa');

    console.log({
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    });

    await api.post('/task', {
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then(() => {
      navigation.navigate('Home')
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    /* behavior='padding' */
    <KeyboardAvoidingView style={styles.container}>
      <Header showBack={true} navigation={navigation} />
      <ScrollView style={{ width: '100%', marginBottom: 85 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {typeIcons.map((icon, index) => (
            icon != null &&
            <TouchableOpacity key={index} onPress={() => setType(index)}>
              <Image source={icon} style={[styles.imageIcon, type && type === index && styles.imageIconActived]} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          maxLength={30}
          placeholder="Título da tarefa"
          onChangeText={text => setTitle(text)}
          value={title}
        />

        <Text style={styles.label}>Detalhes</Text>
        <TextInput
          style={styles.inputArea}
          multiline={true}
          maxLength={200}
          placeholder="Detalhes da tarefa"
          onChangeText={text => setDescription(text)}
          value={description}
        />

        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          maxLength={10}
          placeholder="22/03/2021"
          onChangeText={text => setDate(text)}
          value={date}
        />

        <Text style={styles.label}>Horário</Text>
        <TextInput
          style={styles.input}
          maxLength={5}
          placeholder="18:00"
          onChangeText={text => setHour(text)}
          value={hour}
        />

        <View style={styles.inline}>
          <View style={styles.inputInline}>
            <Switch value={done} onValueChange={() => setDone(!done)} thumbColor={done ? '#00761b' : '#ee6b26'} />
            <Text style={styles.switchLabel}>Concluído</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.removeLabel}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Footer icon={'save'} onPress={New} />
    </KeyboardAvoidingView>
  );
}