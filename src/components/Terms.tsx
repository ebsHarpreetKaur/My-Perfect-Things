import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, useWindowDimensions, Image } from 'react-native'
import axios from 'axios';
import styles from '../../AppStyles'
import RenderHtml from 'react-native-render-html';
// import { pages } from '../apis/pagesapi/getpages'
import { useSelector, useDispatch } from 'react-redux';
import {  getPages } from '../components/redux/actions';

const Terms = () => {
  const [terms, setTerms] = React.useState([])

  // useEffect(() => {
  //   pages().then(response => {
  //     setTerms(response[2])
  //     // console.log("response terms", response[2])

  //   }
  //   )
  // }, [])

  const { pagelist } = useSelector((state) => state.pagesReducer);
  const termsarray = pagelist[2]
  // console.log('pagelist',  termsarray );

  const dispatch = useDispatch();
  const getallpages = () => dispatch(getPages());

  useEffect(() => {
    getallpages()
  }, []);




  const source = {
    html: `${termsarray === undefined ? "Loading..." : termsarray?.content?.rendered}`
  };

  const source2 = {
    html: `${termsarray === undefined ? "Loading..." : termsarray?.title?.rendered}`
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

  const tagsStyles2 = {
    body: {
      // whiteSpace: 'normal',
      color: 'rgb(0, 0, 0)',
      fontSize: 30,
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
        {/* <Text style={styles.itemText}>{termsarray?.title?.rendered}</Text> */}
        {/* <RenderHtml
          contentWidth={width}
          source={source2}
          tagsStyles={tagsStyles2}
        /> */}


        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
        />

      </ScrollView>


    </SafeAreaView>
  )
}

export default Terms