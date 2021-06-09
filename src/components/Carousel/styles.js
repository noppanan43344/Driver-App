import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    height: 320,
    paddingBottom: 5,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: '90%',
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    color: '#0095f6',
    paddingHorizontal: 2,
    fontSize: 30,
  },
});

export default styles;
