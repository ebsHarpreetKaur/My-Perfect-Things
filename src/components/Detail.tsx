import LottieView from 'lottie-react-native';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

import { Animated, Button, FlatList, Image, StatusBar, Pressable, Dimensions, SafeAreaView, ScrollView, SectionList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../AppStyles';
import Assets from '../../assets';
import { useWindowDimensions } from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import Entypo from 'react-native-vector-icons/Entypo';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { useFonts } from 'expo-font';

//=========================================================================================================================================================================================
const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-4827503647379875/7550497352';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
});
//=========================================================================================================================================================================================



const { height } = Dimensions.get('window')
// console.log("screen", {height} )
const Detail = (data) => {
    const [fontsLoaded] = useFonts({
        'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
        'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
        'Quicksand-Light': require('../../assets/fonts/Quicksand-Light.ttf'),

        'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),

    });
    const systemFonts = [...defaultSystemFonts, 'Quicksand-SemiBold']

    //=========================================================================================================================================================================================
    const [loaded, setLoaded] = useState(false);
    const [contentheit, setContentHeight] = useState(0);


    useEffect(() => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            // setLoaded(true);

            // rewarded.show();
        });
        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                //   console.log('User earned reward of ', reward);
            },
        );

        // Start loading the rewarded ad straight away
        rewarded.load();

        // Unsubscribe from events on unmount
        return () => {
            // unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, []);

    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
        // setLoaded(true);
        rewarded.show();
    });
    //=========================================================================================================================================================================================

    const navigation = useNavigation()

    // console.log("data here", data.route.params)
    const source = {
        html: `${data?.route.params === undefined ? "Please wait while loading data..." : data?.route?.params?.content?.rendered}`
    };
    const { width } = useWindowDimensions();

    const tagsStyles = {
        body: {
            // whiteSpace: 'normal',
            color: 'rgb(0, 0, 0)',
            fontSize: 15,
            letterSpacing: 1,
            padding: 10,
            fontFamily: 'Quicksand-SemiBold'
        },
        a: {
            color: 'green'
        }
    };


    const handleScroll = (event) => {
        // console.log('content height ', contentheit)

        const positionX = event.nativeEvent.contentOffset.x;
        const positionY = event.nativeEvent.contentOffset.y;
        // https://reactnative.dev/docs/scrollview.html#scrolleventthrottle


        const currentheight = 50 / 100 * contentheit
        // console.log('positionY', positionY)
        // console.log('current', currentheight)

        // console.log('position x', positionX)
        // console.log('position y', positionY)
        if (positionY > 390 && positionY < 430) {
            // console.log("greater")
            setLoaded(true);
            unsubscribeLoaded()
        } else {
            setLoaded(false);
            // console.log("hellooooooo")

        }

    };


    const onContentSizeChange = (contentWidth, contentHeight) => {
        // console.log('content height ', contentHeight)
        // console.log('content width ', contentWidth)

        setContentHeight(contentHeight)
    }

    return (
        <SafeAreaView style={styles.container4}>
            <StatusBar></StatusBar>
            <View style={styles.container}>
                <Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ marginLeft: 10, marginTop: 5 }} />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://myperfectthings.com/wp-content/uploads/2023/02/logo.png',
                    }}
                />
                {/* <Antdesign name='bars' style={styles.drawerbutton} onPress={() => navigation.openDrawer()} /> */}

            </View>

            <ScrollView
                style={styles.scrollView}
                onContentSizeChange={onContentSizeChange}
                onScroll={handleScroll}

            >
                <Text style={styles.itemTextHome}>{data?.route?.params?.title?.rendered}</Text>

                <RenderHtml
                    contentWidth={width}
                    source={source}
                    tagsStyles={tagsStyles}
                    systemFonts={systemFonts}

                />

            </ScrollView>
        </SafeAreaView>

    )
}

export default Detail