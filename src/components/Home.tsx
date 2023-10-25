import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import { Animated, SafeAreaView, StatusBar, Text, LogBox, View, FlatList, StyleSheet, Button, SectionList, Pressable, Image } from 'react-native';
import styles from '../../AppStyles';
import Assets from '../../assets';
import { ImageCard } from '../components/ImageCard';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { BASE_URL_FOR_POSTS } from '../config'
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, getPages } from '../components/redux/actions';
import { ActivityIndicator } from 'react-native-paper';
import { getCurrentWeather } from '../components/redux/actions';
let weathericon = ''
let weathertemp = ''
let wind = ''
let windgusts = ''


const Home = () => {
  LogBox.ignoreAllLogs();
  let limit = 10
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();


  const { weatherdata } = useSelector((state) => state.weatherReducer);
  if (weatherdata.length === 0) {
    weathericon = 'https://static.thenounproject.com/png/2718430-200.png'
    weathertemp = '-- '
    wind = '--'
    windgusts = '--'

    // console.log("wait for data", weatherdata.length)
  } else {
    console.log('weather list', weatherdata);
    // weathericon = `http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`
    weathericon = `http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@4x.png`

    let decimal = Math.trunc(weatherdata.main.temp)
    weathertemp = decimal
    wind = weatherdata.wind.speed
    windgusts = weatherdata.wind.gust
    // console.log('speed', wind, windgusts);

  }
  const getCurrentWeatherDataList = () => dispatch(getCurrentWeather());
  useEffect(() => {
    getCurrentWeatherDataList()
  }, []);

  const handleScroll = ({ nativeEvent }) => {
    const calculatedScrollPosition =
      nativeEvent.contentOffset.y /
      (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height);
    scrollPosition.setValue(calculatedScrollPosition);
  };

  const handleDetail = (item) => {
    // console.log('Pressed', item)
    navigation.navigate('Detail', item)
  }

  useEffect(() => {
    getdata()
  }, []);
  const getdata = () => {
    setLoading(true)
    let query = `?per_page=${limit}&page=${page}`;
    fetch(`${BASE_URL_FOR_POSTS}${query}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setLoading(false)

        if (data.length > 0) {
          // console.log("data.length", responseData.length, "page", page)
          setData([...data, ...responseData])

        } else if (data.length === undefined) {
          setLoading(true)

        }
        else {
          setData(responseData)
          setLoading(false)

        }

      })
      .catch((error) => {

        console.warn("error", error)

      }


      );
  }



  // const renderLoader = () => {
  //   return (
  //     {loading ?
  //       <View style={styles.loaderstyle}>
  //         <ActivityIndicator size='large' color='#aaa' />
  //       </View>
  //        : 
  //        null
  //       }
  //   )
  // }

  const onEndReached = () => {
    getdata()
    setPage(page + 1)
  }

  const renderItem = useCallback(
    ({ item }) => <Pressable onPress={() => handleDetail(item)}>
      <ImageCard data={item} />
    </Pressable>, []
  );

  const keyExtractor = useCallback((item) => item.id.toString(), [])

  const ITEM_HEIGHT = 200

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index

    })
    , []
  );

  //----------------------------------------------------------------------- return -------------------------------------------------------------------------------------

  return (
    <View >
      <SafeAreaView >
        <StatusBar></StatusBar>
        {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Total : {data.length}</Text> */}

        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          onEndReached={onEndReached}
          onEndReachedThreshold={1}
          getItemLayout={getItemLayout}
        />
        {
          loading ? <View style={{ marginTop: 10, alignItems: 'center' }}>
            <ActivityIndicator size='small' color='null' />
          </View> : null
        }

      </SafeAreaView>
    </View>

  )
}
export default Home
// onScroll={handleScroll}

  // const { posts } = useSelector((state) => state.postsReducer);
  // console.log('posts', posts.length);
  // const dispatch = useDispatch();
  // const getallposts = () => dispatch(getPosts());


  // useEffect(() => {
  //   getallposts()
  // }, []);
