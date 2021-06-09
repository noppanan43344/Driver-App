import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Example from './index';
import MapStack from '@navigations/example/map/Mapstack';
import CameraStack from '@navigations/example/camera/CameraStack';
import QRCodeStack from '@navigations/example/Qrcode/QrcodeStack';
import Button from '@navigations/example/button';
import Logout from '@navigations/Logout';

const Stack = createStackNavigator();

export default ExampleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExampleScreen"
        component={Example}
        options={{ headerShown: false }}>
      </Stack.Screen>
      <Stack.Screen
        name="Map"
        component={MapStack}
        options={{
          title: 'แผนที่',
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraStack}
        options={{
          title: 'กล้อง',
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Qrcode"
        component={QRCodeStack}
        options={{
          title: 'คิวอาร์โค้ด',
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Button"
        component={Button}
        options={{
          title: 'ปุ่ม',
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'ออกจากระบบ',
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
