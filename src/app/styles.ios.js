import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef235f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'yellow',
    width: width/2,
    height: width/2,
    borderRadius: width/4,
    marginBottom: 100
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Arial'
  }
});
