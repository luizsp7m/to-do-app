import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

// Icons
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png';

export default function Header({ late, pressNotification,showNotification, showBack }) {
  return (
    <View style={styles.container}>
      { showBack ? (
        <TouchableOpacity style={styles.leftIcon}>
          <Image source={back} style={styles.leftIconImage} />
        </TouchableOpacity>
      ) : (
          <TouchableOpacity style={styles.leftIcon}>
            <Image source={qrcode} style={styles.leftIconImage} />
          </TouchableOpacity>
        )}

      <Image source={logo} style={styles.logo} />

      { showNotification && (
        <TouchableOpacity style={styles.notification} onPress={pressNotification}>
          <Image source={bell} style={styles.notificationImage} />
          <View style={styles.circle}>
            <Text style={styles.notificationText}>{late}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}