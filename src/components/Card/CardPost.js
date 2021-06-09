import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {FONT_MED, FONT_BOLD} from '@components/styles';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import getExcerpt from '@utils/excerpt';
import {TextInput} from 'react-native-gesture-handler';
import {ThemeContext} from 'react-native-elements';
import Carousel from '@components/Carousel';

function renderComments(comments) {
  const commentsNumber = comments.length;
  if (commentsNumber == 3) {
    return (
      <View
        key={comments[commentsNumber - 1].id}
        style={{flexDirection: 'row', marginTop: 2}}>
        <Text style={{fontFamily: FONT_BOLD, fontSize: 12}}>
          {comments[commentsNumber - 1].name}
        </Text>
        <Text style={{fontFamily: FONT_MED, fontSize: 12, marginLeft: 5}}>
          {getExcerpt(comments[commentsNumber - 1].detail, 50)}
        </Text>
      </View>
    );
  } else if (commentsNumber > 3) {
    return (
      <>
        <View
          key={comments[commentsNumber - 1].id}
          style={{flexDirection: 'row', marginTop: 2}}>
          <Text style={{fontFamily: FONT_BOLD, fontSize: 12}}>
            {comments[commentsNumber - 1].name}
          </Text>
          <Text style={{fontFamily: FONT_MED, fontSize: 12, marginLeft: 5}}>
            {getExcerpt(comments[commentsNumber - 1].detail, 50)}
          </Text>
        </View>
        <View
          key={comments[commentsNumber - 2].id}
          style={{flexDirection: 'row', marginTop: 2}}>
          <Text style={{fontFamily: FONT_BOLD, fontSize: 12}}>
            {comments[commentsNumber - 2].name}
          </Text>
          <Text style={{fontFamily: FONT_MED, fontSize: 12, marginLeft: 5}}>
            {getExcerpt(comments[commentsNumber - 2].detail, 60)}
          </Text>
        </View>
      </>
    );
  } else {
    return comments.map((comment) => {
      return (
        <View key={comment.id} style={{flexDirection: 'row', marginTop: 2}}>
          <Text style={{fontFamily: FONT_BOLD, fontSize: 12}}>
            {comment.name}
          </Text>
          <Text style={{fontFamily: FONT_MED, fontSize: 12, marginLeft: 5}}>
            {getExcerpt(comment.detail, 50)}
          </Text>
        </View>
      );
    });
  }
}

function commentMore(comments) {
  if (comments != undefined && comments.length > 2) {
    return (
      <Text
        style={{
          fontFamily: FONT_MED,
          marginRight: 10,
          fontSize: 12,
          color: '#99979c',
        }}>
        ดูความเห็นทั้ง {comments.length - 2} รายการ
      </Text>
    );
  }
}

export default function CardPost(props) {
  const [hearto, sethearto] = useState(false);
  const {
    avatar,
    images,
    name,
    identity,
    excerpt,
    heart,
    like,
    comments,
    time,
  } = props;
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    sethearto(heart);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        height: 'auto',
        borderRadius: 10,
        marginTop: 10,
        paddingBottom: 20,
      }}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 0.3, marginLeft: 10}}>
          <Avatar size="medium" rounded source={avatar} />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontFamily: FONT_MED}}>{name}</Text>
          <Text style={{fontFamily: FONT_MED, fontSize: 11, color: '#222'}}>
            {identity}
          </Text>
        </View>
        <View style={{flex: 0.5}}></View>
      </View>

      <View>
        {/* <Image
          style={{
            width: '100%',
            height: 315,
            borderRadius: 10,
          }}
          source={image}
          resizeMode="contain"
        /> */}
        {images != undefined ? (
          <Carousel style="slides" itemsPerInterval={1} items={images} />
        ) : (
          <View style={{marginTop: 20}}></View>
        )}
      </View>

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            paddingLeft: 15,
            flex: 0.22,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Icon
              name={hearto ? 'heart' : 'hearto'}
              size={25}
              onPress={() => sethearto((prevCheck) => !prevCheck)}
            />
          </View>
          <View>
            <Icon name="message1" size={25} />
          </View>
          <View></View>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Text
            style={{
              fontFamily: FONT_MED,
              marginRight: 10,
              fontSize: 11,
              color: '#99979c',
            }}>
            {time}
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          marginTop: 10,
          flexDirection: 'column',
        }}>
        {like == 0 ? (
          <View></View>
        ) : (
          <Text style={{fontFamily: FONT_MED}}>{like} ถูกใจ</Text>
        )}
        <View>
          <Text style={{fontFamily: FONT_MED}}>
            {name + ' '}
            <Text style={{fontSize: 12}}>{getExcerpt(excerpt, 100)}</Text>
          </Text>
        </View>

        {commentMore(comments)}

        {comments == undefined ? <View></View> : renderComments(comments)}
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flex: 5}}>
            <TextInput
              style={{
                borderBottomColor: '#ccc',
                borderBottomWidth: 0.5,
                fontSize: 11,
                height: 40,
                fontFamily: FONT_MED,
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Pressable
              style={{
                backgroundColor: theme.colors.primary,
                height: 40,
                padding: 10,
              }}
              onPress={() => console.log(1)}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontFamily: FONT_MED,
                }}>
                โพสต์
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
