import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import typeIcons from '../../utils/typeIcons';

import { format } from 'date-fns';

export default function TaskCard({ done, title, when, type }) {
  return (
    <TouchableOpacity style={[styles.container, done && styles.disabled]}>
      <View style={styles.left}>
        <Image source={typeIcons[type]} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.date}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
        <Text style={styles.hour}>{format(new Date(when), 'HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
}