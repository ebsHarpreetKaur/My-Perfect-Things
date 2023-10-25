import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, useWindowDimensions, Image } from 'react-native'
import axios from 'axios';
import styles from '../../AppStyles'
import RenderHtml from 'react-native-render-html';
// import { pages } from '../apis/pagesapi/getpages'
import { useSelector, useDispatch } from 'react-redux';
import { getPages } from '../components/redux/actions';
import { TestIds, InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType, } from 'react-native-google-mobile-ads';

// const adUnitIdForBanner = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


// const adUnitIdForInterstitial = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const interstitial = InterstitialAd.createForAdRequest(adUnitIdForInterstitial, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

// const adUnitIdForRewarded = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const rewarded = RewardedAd.createForAdRequest(adUnitIdForRewarded, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });





const Contact = () => {
  const [contactus, setContactus] = React.useState([])
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
  //     setLoaded(true);
  //     interstitial.show();
  //   });

  //   // Start loading the interstitial straight away
  //   interstitial.load();

  //   // Unsubscribe from events on unmount
  //   return unsubscribe;
  // }, []);

  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

  // const [loadedforreward, setLoadedforreward] = useState(false);

  // useEffect(() => {
  //   const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
  //     setLoadedforreward(true);
  //     rewarded.show();
  //   });
  //   const unsubscribeEarned = rewarded.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //     reward => {
  //       // console.log('User earned reward of ', reward);
  //     },
  //   );

  //   // Start loading the rewarded ad straight away
  //   rewarded.load();

  //   // Unsubscribe from events on unmount
  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };
  // }, []);

  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

  // useEffect(() => {
  //   pages().then(response => {
  //     setContactus(response[3])
  //     // console.log("response contact", response[3])

  //   }
  //   )
  // }, [])

  const { pagelist } = useSelector((state) => state.pagesReducer);
  const contactarray = pagelist[3]
  // console.log('pagelist', contactarray);

  const dispatch = useDispatch();
  const getallpages = () => dispatch(getPages());

  useEffect(() => {
    getallpages()
  }, []);


  const source = {
    html: `${contactarray === undefined ? "Loading.." : contactarray?.content?.rendered}`
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
        <Text style={styles.itemText6}>{contactarray?.title?.rendered}</Text>

        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
        />

      </ScrollView>

      {/* <ScrollView style={styles.scrollView}>
        <Text style={styles.itemText6}>BANNER Ad</Text>
        <BannerAd
          unitId={adUnitIdForBanner}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />

        <Text style={styles.itemText6}>INTERSTITIAL ad works after app reload</Text>
        <Text style={styles.itemText6}>REWARDED ad works after app reload BUT with timing</Text>


      </ScrollView> */}

    </SafeAreaView>
  )
}

export default Contact