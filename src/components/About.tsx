import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, useWindowDimensions, Image } from 'react-native'
import axios from 'axios';
import styles from '../../AppStyles'
import RenderHtml from 'react-native-render-html';
// import { pages } from '../apis/pagesapi/getpages';
import { useSelector, useDispatch } from 'react-redux';
import {  getPages } from '../components/redux/actions';

const About = () => {
  const [aboutlist, setAboutlist] = React.useState([])

  const { pagelist } = useSelector((state) => state.pagesReducer);
  const aboutarray = pagelist[1]
  // console.log('pagelist',  aboutarray );

  const dispatch = useDispatch();
  const getallpages = () => dispatch(getPages());

  useEffect(() => {
    getallpages()
  }, []);

  // useEffect(() => {
  //   pages().then(response => {

  //     setAboutlist(response[1])
  //     // console.log("response about", response[1])

  //   }
  //   )
  // }, [])



  const source = {
    html: `${aboutarray ===  undefined ? "Loading..." : aboutarray?.content?.rendered}`
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

      <ScrollView style={styles.scrollView}>

        <Text style={styles.itemText6}>{aboutarray?.title?.rendered}</Text>
        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
        />

      </ScrollView>


    </SafeAreaView>
  )
}

export default About