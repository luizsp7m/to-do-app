import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import icon from '../../assets/default.png' 

export default function TaskCard({ done }) {
  return (
    <TouchableOpacity style={[styles.container, done && styles.disabled]}>
      <View style={styles.left}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.text}>Entregar relátorio</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.date}>16/03/2021</Text>
        <Text style={styles.hour}>15:00</Text>
      </View>
    </TouchableOpacity>
  );
}