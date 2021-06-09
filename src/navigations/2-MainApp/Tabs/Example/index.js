import React from 'react';
import {View, Text} from 'react-native';
import Header from '@components/Header';
import {ListItem, Avatar} from 'react-native-elements';
import {FONT_BOLD, FONT_MED} from '@components/styles';
import {withTheme} from 'react-native-elements';

const list = [
  {
    name: 'แผนที่',
    icon: require('@assets/images/tab/settings/map.png'),
    subtitle: 'การใช้งานแผนที่',
    routeName: 'Map',
  },
  {
    name: 'กล้อง',
    icon: require('@assets/images/tab/settings/camera.png'),
    subtitle: 'การใช้งานกล้อง',
    routeName: 'Camera',
  },
  {
    name: 'คิวอาร์โค้ด',
    icon: require('@assets/images/tab/settings/qr-code.png'),
    subtitle: 'QR CODE',
    routeName: 'Qrcode',
  },
  {
    name: 'ปุ่ม',
    icon: require('@assets/images/tab/settings/button.png'),
    subtitle: '',
    routeName: 'Button',
  },
  {
    name: 'ออกจากระบบ',
    icon: require('@assets/images/tab/settings/logout.png'),
    subtitle: '',
    routeName: 'Logout',
  },
];

function index(props) {
  const {theme} = props;
  return (
    <>
      <Header title="ตัวอย่าง" />
      <View
        style={{
          backgroundColor: theme.colors.white,
          flex: 1,
        }}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => props.navigation.navigate(l.routeName)}>
            <Avatar source={l.icon} />
            <ListItem.Content>
              <ListItem.Title
                style={{fontFamily: FONT_BOLD, color: theme.colors.black}}>
                {l.name}
              </ListItem.Title>
              <ListItem.Subtitle
                style={{
                  fontFamily: FONT_MED,
                  color: theme.colors.black,
                }}>
                {l.subtitle}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </>
  );
}

export default withTheme(index);
