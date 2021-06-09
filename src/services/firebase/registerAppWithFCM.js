import messaging from '@react-native-firebase/messaging';

export default async function registerAppWithFCM() {
  await messaging().registerDeviceForRemoteMessages();
}
