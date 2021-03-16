import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 10,
    marginBottom: 20,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  
  text: {
    fontWeight: 'bold',
    color: '#555',
  },

  right: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '95%',
  },

  date: {
    color: '#ee6b26',
    fontWeight: 'bold',
  },

  hour: {
    color: '#999',
  },

  disabled: {
    opacity: .5,
  }
});

export default styles;