import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  slide: {
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 300,
  },
  slideText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
});

export default styles;
