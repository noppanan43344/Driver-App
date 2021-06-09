import messaging from '@react-native-firebase/messaging';

export const firebaseMessengingPermission = async function requestPermissionFCM() {
  const granted = await messaging().requestPermission({
    alert: true,
    announcement: false,
    badge: true,
    carPlay: true,
    provisional: false,
    sound: true,
  });
  if (granted) {
    const fcmToken = await messaging().getToken();
    console.log('fcmToken:', fcmToken);
  } else {
  }
};
