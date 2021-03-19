import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch
} from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import typeIcons from '../../utils/typeIcons';

import styles from './styles';

export default function Task() {
  const [done, setDone] = useState(false);

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Header showBack={true} />
      <ScrollView style={{ width: '100%' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {typeIcons.map((icon, index) => (
            icon != null &&
            <TouchableOpacity key={index}>
              <Image source={icon} style={styles.imageIcon} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.label}>Título</Text>
        <TextInput style={styles.input} maxLength={30} placeholder="Título da tarefa" />

        <Text style={styles.label}>Detalhes</Text>
        <TextInput style={styles.inputArea} multiline={true} maxLength={200} placeholder="Detalhes da tarefa" />

        <View style={styles.inline}>
          <View style={styles.inputInline}>
            <Switch value={done} onValueChange={ () => setDone(!done) } thumbColor={ done ? '#00761b' : '#ee6b26' } />
            <Text style={styles.switchLabel}>Concluído</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.removeLabel}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Footer icon={'save'} />
    </KeyboardAvoidingView>
  );
}