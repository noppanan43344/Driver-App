import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL } from '@utils/config';
const login = async(val)=>{
    console.log(URL+'driver/login');
    try {
        const {data} = await axios.post(URL+'driver/login',val)
        return data;
    } catch (err) {
        return false;
    }
}
const setusername = async (token) => {
    try {
        await AsyncStorage.setItem('@username', JSON.stringify(token));
    } catch (e) {
        return null;
    }
};

const getusername = async () => {
    try {
        const value = await AsyncStorage.getItem('@username');
        return value != null ? JSON.parse(value) : null;
    } catch (e) {
        return null;
    }
};

export default {
    setusername,
    getusername,
    login,
}