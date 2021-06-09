import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {FONT_MED, FONT_BOLD, FONT_SIZES} from '@components/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Calendar} from 'react-native-calendars';
import {PrimaryButton} from '@components/Button';
import {asin} from 'react-native-reanimated';

export default function index() {
  const [valueDateStart, setvalueDateStart] = useState(''); // เก็บค่าเริ่มต้น
  const [valueDateEnd, setvalueDateEnd] = useState(''); // เก็บค่าสิ้นสุด

  const [datestart, setdatestart] = useState(false); // handle การเปิดปิด ของปฎิทิน เริ่มต้น
  const [dateend, setDateend] = useState(false); // handle การเปิดปิด ของปฎิทิน สิ้นสุด
  const [btnSearch, setbtnSearch] = useState(true);

  const checkDateBetweenValue = (start, end) => {
    console.log(start, end);
    if (start != '' && end != '') {
      setbtnSearch(false);
    } else {
      setbtnSearch(true);
    }
  };

  return (
    <View style={{padding: 10}}>
      <View style={{backgroundColor: '#fff', height: 'auto', borderRadius: 10}}>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 10,
            fontFamily: FONT_BOLD,
            fontSize: FONT_SIZES['500'],
          }}>
          ค้นหาข้อมูล
        </Text>
        <View style={{padding: 15}}>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 0.5,
            }}
          />
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.5}}>
              <Text style={{fontFamily: FONT_MED}}>เริ่มต้น</Text>
            </View>
            <View style={{flex: 2}}>
              <TextInput
                value={valueDateStart}
                on={() => setdatestart(true)}
                onBlur={() => setdatestart(false)}
                onFocus={() => setdatestart(true)}
                style={{fontFamily: FONT_MED}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <Icon
                name="calendar"
                size={25}
                onPress={() => setdatestart((prevState) => !prevState)}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 0.5,
            }}
          />
        </View>

        {datestart ? (
          <Calendar
            onDayPress={async (day) => {
              setdatestart(false);
              setvalueDateStart(day.dateString);
              checkDateBetweenValue(day.dateString, valueDateEnd);
            }}
          />
        ) : (
          <View></View>
        )}

        <View style={{paddingLeft: 15, paddingRight: 15}}>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 0.5,
            }}
          />
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.5}}>
              <Text style={{fontFamily: FONT_MED}}>สิ้นสุด</Text>
            </View>
            <View style={{flex: 2}}>
              <TextInput
                value={valueDateEnd}
                on={() => setDateend(true)}
                onBlur={() => setDateend(false)}
                onFocus={() => setDateend(true)}
                style={{fontFamily: FONT_MED}}
              />
            </View>
            <View style={{flex: 0.3}}>
              <Icon
                name="calendar"
                size={25}
                onPress={() => setDateend((prevState) => !prevState)}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 0.5,
            }}
          />
        </View>

        {dateend ? (
          <Calendar
            onDayPress={(day) => {
              setDateend(false);
              setvalueDateEnd(day.dateString);
              checkDateBetweenValue(valueDateStart, day.dateString);
            }}
            style={{zIndex: 999}}
          />
        ) : (
          <View></View>
        )}
        <View style={{padding: 10}}>
          <PrimaryButton title="ค้นหา" disabled={btnSearch} />
        </View>
      </View>
    </View>
  );
}
