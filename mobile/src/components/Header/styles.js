import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20295f',
    borderBottomWidth: 5,
    borderBottomColor: '#ee6b26',
  },

  logo: {
    width: 100,
    height: 30
  },

  notification: {
    position: 'absolute',
    right: 20,
  },

  notificationImage: {
    width: 30,
    height: 35,
  },

  notificationText: {
    color: '#ee6b26',
    fontWeight: 'bold',
  },

  circle: {
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 13,
    bottom: 13,
  },

  leftIcon: {
    position: 'absolute',
    left: 20,
  },

  leftIconImage: {
    width: 25,
    height: 25,
  },
});

export default styles;