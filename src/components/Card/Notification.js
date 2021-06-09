import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FONT_MED, FONT_BOLD} from '@components/styles';

export default function Notification(props) {
  const [readStatus, setreadStatus] = useState(false);
  const {read} = props;
  useEffect(() => {
    () => {
      setreadStatus(read);
    };
  }, []);
  return (
    <TouchableOpacity
      onPress={() => setreadStatus(true)}
      style={{
        backgroundColor: readStatus ? '#fff' : '#ebf7ff',
        height: 'auto',
        width: 'auto',
        padding: 15,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image
            source={require('@assets/images/notification/star.png')}
            style={{width: 50, height: 50}}
          />
        </View>
        <View style={{flex: 5}}>
          <Text style={{fontFamily: FONT_BOLD}}>
            ให้คะแนนบริการที่คุณได้รับ
          </Text>
          <Text style={{fontFamily: FONT_MED, fontSize: 12}}>
            คุณชอบแอพพลิเคชั่นของเราไหมให้คะแนนความพอใจ
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
