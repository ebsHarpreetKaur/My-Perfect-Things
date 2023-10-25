import LottieView from 'lottie-react-native';
import React, { useRef, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native'

import { Animated, FlatList, Image, Pressable, SafeAreaView, ScrollView, SectionList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../AppStyles';
import Assets from '../../assets';
import { useWindowDimensions } from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { Divider } from "@react-native-material/core";
import { useFonts } from 'expo-font';


export const ImageCard = ({ data }) => {

  const [fontsLoaded] = useFonts({
    'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Light': require('../../assets/fonts/Quicksand-Light.ttf'),

    'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),

  });

  const systemFonts = [...defaultSystemFonts, 'Quicksand-Regular']
  const navigation = useNavigation()

  // console.log("data", data.id)
  const [selectedId, setSelectedId] = useState();

  const source = {
    html: `${data?.content?.rendered.substring(1, 210) + "..."}`
  };
  const { width } = useWindowDimensions();


  const tagsStyles = {
    body: {
      // whiteSpace: 'normal',
      color: 'rgb(0, 0, 0)',
      fontSize: 13,
      letterSpacing: 1,
      paddingLeft: 10,
      fontFamily: 'Quicksand-Regular'
    },
    a: {
      color: 'green'
    }
  };


  return (
    <SafeAreaView style={styles.container4} >

      <ScrollView style={styles.scrollView} >

        <View style={styles.maindiv}>
          <Image
            style={styles.articleLogo}
            source={require('../../assets/articlelogo.png')}
          />
          <Text style={styles.itemText} >{data?.title?.rendered}</Text>
        </View>

        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
          systemFonts={systemFonts}
        />
        {/* <Divider /> */}
        <Divider style={{ marginTop: 10 }} leadingInset={16} />
      </ScrollView>


    </SafeAreaView>



    // <Pressable
    //   key={data?.id}
    //   style={styles.item}
    //   onLongPress={() => showAnimation()}>
    //   {processing && (
    //     <Animated.View
    //       style={[
    //         styles.overlayLottie,
    //         {
    //           opacity: animationProgress.interpolate({
    //             inputRange: [0, 0.1, 0.9, 1],
    //             outputRange: [0, 1, 1, 0],
    //             extrapolate: 'clamp',
    //           }),
    //         },
    //       ]}>
    //       <LottieView
    //         progress={animationProgress}
    //         source={
    //           isLiked ? Assets.lottieFiles.unLike : Assets.lottieFiles.like
    //         }
    //       />
    //     </Animated.View>
    //   )}
    //   <Image
    //     source={{ uri: data?.img }}
    //     resizeMode={'cover'}
    //     style={styles.itemImage}
    //   />
    //   <Text style={styles.itemText}>{data?.modified}</Text>
    //   <View style={styles.cardRow}>
    //     <Text style={styles.itemText}>{data?.modified}</Text>
    //     <Text style={styles.likeText}>{isLiked ? 'Dislike' : 'Like'}</Text>
    //   </View>

    // </Pressable>
  );
};