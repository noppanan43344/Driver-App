import React from 'react';
import { View, Text, Image } from 'react-native';
import CardList from '@components/Card/CardList';
import CardColumn from '@components/Card/CardColumn';
import CardColumnSlide from '@components/Card/CardColumnSlide';
import CardPost from '@components/Card/CardPost';
import { ScrollView } from 'react-native-gesture-handler';
import getExcerpt from '@utils/excerpt';
import currencyFormat from '@utils/currencyFormat';
import Carousel from '@components/Carousel';
import CardBanner from '@components/Card/CardBanner';
import CardListButton from '@components/Card/CardListButton';
import { COLORS } from '@components/styles';

export default function index() {
    return (
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={{ fontSize: 22, marginBottom: 10 }}>List Card</Text>
            <CardList
                image={require('@assets/images/product/macbook-pro-m1.jpg')}
                // or image={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                title="Macbook Pro M1 256GB"
                excerpt="MacBook Pro รุ่น 13 นิ้ว มีความเร็วและขุมพลังเหลือร้ายได้ขั้นนี้
          ด้วยประสิทธิภาพ CPU เพิ่มขึ้น"
                price={currencyFormat(49990)}
            />
            <Text style={{ fontSize: 22, marginBottom: 10, marginTop: 20 }}>
                Column Card
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}>
                <CardColumn
                    image={require('@assets/images/product/macbook-pro-m1.jpg')}
                    // or image={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    title="Macbook Pro M1 256GB"
                    excerpt={getExcerpt(
                        'MacBook Pro รุ่น 13 นิ้ว มีความเร็วและขุมพลังเหลือร้ายได้ขั้นนี้ ด้วยประสิทธิภาพ CPU เพิ่มขึ้น',
                        50,
                    )}
                />
                <CardColumn
                    image={require('@assets/images/product/k6.jpg')}
                    title="KeyChron K6"
                    excerpt={getExcerpt(
                        'คีย์บอร์ด ดีที่สุด สำหรับ Mac และ Windows K6 มีฟังก์ชั่นขนาดเต็มในการออกแบบที่กะทัดรัด',
                        50,
                    )}
                />
            </View>
            <Text style={{ fontSize: 22, marginBottom: 10, marginTop: 20 }}>
                Column Slider
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CardColumnSlide
                    image={require('@assets/images/product/macbook-pro-m1.jpg')}
                    // or image={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    title="Macbook Pro M1 256GB"
                    excerpt="MacBook Pro รุ่น 13 นิ้ว มีความเร็วและขุมพลังเหลือร้ายได้ขั้นนี้
          ด้วยประสิทธิภาพ CPU เพิ่มขึ้น"
                />
                <CardColumnSlide
                    image={require('@assets/images/product/k6.jpg')}
                    title="KeyChron K6"
                    excerpt="คีย์บอร์ด ดีที่สุด สำหรับ Mac และ Windows K6 มีฟังก์ชั่นขนาดเต็มในการออกแบบที่กะทัดรัด "
                />
                <CardColumnSlide
                    image={require('@assets/images/product/iphone-12-blue.jpg')}
                    title=" iPhone 12"
                    excerpt="ด้วยความเร็วระดับ 5G, ชิพที่เร็วที่สุดในสมาร์ทโฟนอย่าง A14 Bionic, จอภาพ OLED แบบขอบจรดขอบ"
                />
            </ScrollView>

            <Carousel
                style="slides"
                itemsPerInterval={1}
                items={[
                    {
                        image: {
                            uri:
                                'https://cdn.dribbble.com/users/45541/screenshots/7092945/media/f011dfac73aaf9793d284165bd938c91.jpg?compress=1&resize=800x600',
                        },
                    },
                    {
                        image: {
                            uri:
                                'https://cdn.dribbble.com/users/3320958/screenshots/13928553/media/c6cbae0ae11c7e98b52eef3b4eee129e.jpeg?compress=1&resize=1000x750',
                        },
                    },
                ]}
            />

            <View style={{ marginBottom: 10 }}>
                <CardPost
                    like={10}
                    identity="เซียนฟาร์ม"
                    name="Sirichai Chulee"
                    time=" 2 ชม. ที่แล้ว"
                    avatar={{
                        uri:
                            'https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.0-1/p320x320/51014042_2168833966509960_3103295904958906368_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGI5uOCUTj2I2l_eX_4xjS4N5vCB-bCg8s3m8IH5sKDy8alQfMHgLQLkRWQDwhNeKKvYtU1t9flytgKaezJSIwc&_nc_ohc=sD-QALiWAxkAX-3VEfF&_nc_ht=scontent.fkkc2-1.fna&tp=6&oh=fc22e4d979e5ff8637bafa05b7c179bb&oe=6031D11E',
                    }}
                    images={[
                        {
                            image: {
                                uri:
                                    'https://www.whdlo.com/wp-content/uploads/2018/05/%E0%B9%82%E0%B8%84%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%82%E0%B8%84%E0%B8%81%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B9%E0%B8%A3%E0%B8%93%E0%B9%8C_%E0%B9%91%E0%B9%98%E0%B9%90%E0%B9%95%E0%B9%93%E0%B9%90_0002.jpg',
                            },
                        },
                        {
                            image: {
                                uri:
                                    'https://cdn.dribbble.com/users/3320958/screenshots/13928553/media/c6cbae0ae11c7e98b52eef3b4eee129e.jpeg?compress=1&resize=1000x750',
                            },
                        },
                    ]}
                    excerpt="แอปพลิเคชันสำหรับสัตวแพทย์ รับการแจ้งสัตว์ป่วยจากแอปพลิเคชันเซียนแดรี่ฟาร์ม เพื่อบันทึกข้อมูลประวัติการรักษา ดูพิกัดฟาร์มที่ท่านต้องไปรักษาบนแผนที่"
                    heart={true}
                    comments={[
                        {
                            id: 1,
                            name: 'Zyan Vets',
                            detail:
                                'ติดต่อเจ้าหน้าที่ผ่านแอพพลิเคชั่นได้เลยครับ',
                        },
                        {
                            id: 2,
                            name: 'Zyan Vets',
                            detail:
                                'ติดต่อเจ้าหน้าที่ผ่านแอพพลิเคชั่นได้เลยครับ',
                        },
                        {
                            id: 3,
                            name: 'Zyan Vets',
                            detail:
                                'ติดต่อเจ้าหน้าที่ผ่านแอพพลิเคชั่นได้เลยครับ',
                        },
                        {
                            id: 4,
                            name: 'Zyan Vets',
                            detail:
                                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
                        },
                    ]}
                />
                <CardPost
                    like={10}
                    identity="เซียนฟาร์ม"
                    name="Sirichai Chulee"
                    time=" 2 ชม. ที่แล้ว"
                    avatar={{
                        uri:
                            'https://scontent.fkkc2-1.fna.fbcdn.net/v/t1.0-1/p320x320/51014042_2168833966509960_3103295904958906368_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGI5uOCUTj2I2l_eX_4xjS4N5vCB-bCg8s3m8IH5sKDy8alQfMHgLQLkRWQDwhNeKKvYtU1t9flytgKaezJSIwc&_nc_ohc=sD-QALiWAxkAX-3VEfF&_nc_ht=scontent.fkkc2-1.fna&tp=6&oh=fc22e4d979e5ff8637bafa05b7c179bb&oe=6031D11E',
                    }}
                    excerpt="แอปพลิเคชันสำหรับสัตวแพทย์ รับการแจ้งสัตว์ป่วยจากแอปพลิเคชันเซียนแดรี่ฟาร์ม เพื่อบันทึกข้อมูลประวัติการรักษา ดูพิกัดฟาร์มที่ท่านต้องไปรักษาบนแผนที่"
                    heart={true}
                    comments={[
                        {
                            id: 1,
                            name: 'Zyan Vets',
                            detail:
                                'ติดต่อเจ้าหน้าที่ผ่านแอพพลิเคชั่นได้เลยครับ',
                        },
                        {
                            id: 2,
                            name: 'Zyan Vets',
                            detail:
                                'ติดต่อเจ้าหน้าที่ผ่านแอพพลิเคชั่นได้เลยครับ',
                        },
                        {
                            id: 3,
                            name: 'Zyan Vets',
                            detail:
                                'ติดต่อเจ้าหน้าที่ผ่านแอพพลิเคชั่นได้เลยครับ',
                        },
                        {
                            id: 4,
                            name: 'Zyan Vets',
                            detail:
                                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
                        },
                    ]}
                />
            </View>
            <Text style={{ fontSize: 22, marginBottom: 10, marginTop: 20 }}>
                Card Banner
            </Text>
            <CardBanner
                title="Tesla Model S"
                rightTitle="$98,000"
                subTitle="New York City"
                // imageUri="https://www.elecpress.com/wp-content/uploads/2020/09/tesla-model-s.jpg"
                onPress={() => alert('You clicked CardBanner')}
            />

            <Text style={{ fontSize: 22, marginBottom: 10, marginTop: 20 }}>
                Card List Button
            </Text>
            <CardListButton
                title="reddit"
                color={COLORS.BLACK}
                icon="reddit"
                titleButton="Connect"
            />
        </ScrollView>
    );
}
