import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  imageIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 7,
    marginVertical: 15,
    opacity: .5,
  },

  label: {
    color: '#707070',
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 5,
  },

  input: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#EE6B26',
    marginHorizontal: 10,
  },

  inputArea: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderWidth: 1,
    borderColor: '#EE6B26',
    marginHorizontal: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'top',
  },

  inline: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  inputInline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  switchLabel: {
    fontWeight: 'bold',
    color: '#EE6B26',
    fontSize: 16,
    paddingLeft: 5,
  },

  removeLabel: {
    fontWeight: 'bold',
    color: '#20295f',
    fontSize: 16,
  },

  imageIconActived: {
    opacity: 1,
  },
});

export default styles;