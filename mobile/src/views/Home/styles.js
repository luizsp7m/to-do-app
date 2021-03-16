import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  filter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 70,
  },

  filterButton: {

  }, 

  filterButtonText: {
    fontWeight: 'bold',
    color: '#aaa',
    fontSize: 15,
  },

  filterButtonTextActived: {
    fontWeight: 'bold',
    color: '#ee6b26',
    fontSize: 15,
  },

  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#20295f',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  titleText: {
    color: '#20295f',
    fontSize: 18,
    position: 'relative',
    top: 11,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },

  content: {
    width: '100%',
    marginBottom: 95,
  }
});

export default styles;