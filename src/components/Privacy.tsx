import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, useWindowDimensions, Image } from 'react-native'
import axios from 'axios';
import styles from '../../AppStyles'
import RenderHtml from 'react-native-render-html';
// import { pages } from '../apis/pagesapi/getpages'
import { useSelector, useDispatch } from 'react-redux';
import {  getPages } from '../components/redux/actions';


const Privacy = () => {
  const [privacy, setPrivacy] = React.useState([])

  // useEffect(() => {
  //   pages().then(response => {
  //     setPrivacy(response[4])
  //     // console.log("response privacy", response[4])

  //   }
  //   )
  // }, [])
  const { pagelist } = useSelector((state) => state.pagesReducer);
  const privacyarray = pagelist[4]
  // console.log('pagelist',  privacyarray );

  const dispatch = useDispatch();
  const getallpages = () => dispatch(getPages());

  useEffect(() => {
    getallpages()
  }, []);




  const source = {
    html: `${privacyarray === undefined ? "Loading..." : privacyarray?.content?.rendered}`
  };
  const { width } = useWindowDimensions();


  const tagsStyles = {
    body: {
      // whiteSpace: 'normal',
      color: 'rgb(0, 0, 0)',
      fontSize: 15,
      letterSpacing: 1,
      padding: 10,

    },
    a: {
      color: 'green'
    }
  };


  return (
    <SafeAreaView style={styles.container4}>
      {/* <Text >{listdata.data.title.rendered}</Text> */}
      {/* <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://myperfectthings.com/wp-content/uploads/2023/02/logo.png',
          }}
        /> */}
      <ScrollView style={styles.scrollView}>
        {/* <Text style={styles.itemText6}>{privacyarray?.title?.rendered}</Text> */}


        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
        />

      </ScrollView>


    </SafeAreaView>
  )
}

export default Privacy