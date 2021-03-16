import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20295f',
    borderTopWidth: 5,
    borderTopColor: '#ee6b26',
    position: 'absolute',
    bottom: 0,
  },

  button: {
    position: 'absolute',
    top: -33,
  },

  buttonIcon: {
    height: 66,
    width: 66,
  },

  text: {
    color: '#fff',
    marginTop: 25,
  },
});

export default styles;