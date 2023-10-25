import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native'
import Home from './src/components/Home';
import Detail from './src/components/Detail';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Disclaimer from './src/components/Disclaimer';
import Terms from './src/components/Terms';
import Privacy from './src/components/Privacy';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './AppStyles'
import { Animated, SafeAreaView, StatusBar, Text, View, FlatList, StyleSheet, Button, SectionList, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Antdesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import RNPickerSelect from "react-native-picker-select";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()


const Routes = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation()
    const [nesteddraweritem, setNestedDrawerItem] = useState(false)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);


    

    const NestedDrawerItemFUNC = () => {

        if (nesteddraweritem === true) {
            console.log('true')
            setNestedDrawerItem(false)
        }
        else {
            console.log('flase')

            setNestedDrawerItem(true)
        }
    }



    function HomeScreen({ navigation }) {
        return (
            <>
                <View style={styles.container}>
                    {/* <Button onPress={() => navigation.openDrawer()} title="Open drawer" /> */}
                    <Entypo name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ marginLeft: 10, marginTop: 5 }} />
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://myperfectthings.com/wp-content/uploads/2023/02/logo.png',
                        }}
                    />
                    {/* <Antdesign name='bars' style={styles.drawerbutton} onPress={() => navigation.openDrawer()} /> */}


                </View>

                <Home />

            </>

        );
    }

    function AboutScreen({ navigation }) {
        return (
            <>
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

                <About />

            </>

        );
    }

    function ContactScreen({ navigation }) {
        return (
            <>
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

                <Contact />

            </>

        );
    }

    function DisclaimerScreen({ navigation }) {
        return (
            <>
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

                <Disclaimer />

            </>

        );
    }

    function PrivacyScreen({ navigation }) {
        return (
            <>
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

                <Privacy />

            </>

        );
    }

    function TermsScreen({ navigation }) {
        return (
            <>
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

                <Terms />

            </>

        );
    }




    function DetailScreen({ navigation }) {
        return (
            <>
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

                <Detail />

            </>

        );
    }

    const handlePrivacy = () => {
        // console.log('Pressed',privacy )
        navigation.navigate('Privacy')
    }

    const handleDisclaimer = () => {
        // console.log('Pressed',disclaimer)
        navigation.navigate('Disclaimer')
    }

    const handleTerms = () => {
        // console.log('Pressed',terms )
        navigation.navigate('Terms')
    }







    function MyStack() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Stack.Screen
                    name=" "
                    component={HomeScreen}
                    options={{
                        title: `Home`,

                    }}
                />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Privacy" component={Privacy} />
                <Stack.Screen name="Disclaimer" component={Disclaimer} />
                <Stack.Screen name="Terms" component={Terms} />

            </Stack.Navigator>
        );
    }

    function MyStacknew() {
        // console.log("hhh")
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: true
                }}
            >

                <Stack.Screen
                    name=" "
                    component={HomeScreen}
                    options={{
                        title: `Home`,
                        headerShown: false

                    }}
                />
                <Stack.Screen name="Detail" component={Detail} options={{
                    title: ` `,

                }} />
                <Stack.Screen name="Privacy" component={PrivacyScreen} options={{
                    title: `Privacy Policy`,
                    headerShown: true

                }} />
                <Stack.Screen name="Disclaimer" component={DisclaimerScreen} options={{
                    title: `Disclaimer`,
                    headerShown: true

                }} />
                <Stack.Screen name="Terms" component={TermsScreen} options={{
                    title: `Terms & Conditions`,
                    headerShown: true

                }} />



            </Stack.Navigator>
        );
    }

    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props}>

                <DrawerItemList {...props} />

                <DrawerItem
                     icon={({ focused, size }) => (<MaterialCommunityIcons name='dots-grid' size={20} />)}
                    label={({ focused, size }) => (
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'grey' }}>Others</Text>
                            {nesteddraweritem === true ?
                                <Antdesign name="up" size={15} color='black' />
                                : <Antdesign name="down" size={15} color='black' />
                            }
                            {/* {nesteddraweritem === false &&
                                <Antdesign name="down" size={15} color='black' />
                            } */}
                        </View>
                    )}
                    onPress={() => NestedDrawerItemFUNC()}
                />

                {nesteddraweritem === true &&
                    <DrawerItem label="Privacy" onPress={() => handlePrivacy()} icon={({ focused, size }) => (<MaterialCommunityIcons name='shield-lock-outline' size={20} />)} />
                }
                {nesteddraweritem === true &&
                    <DrawerItem label="Terms & Conditions" onPress={() => handleTerms()} icon={({ focused, size }) => (<MaterialCommunityIcons name='text-box-check' size={20} />)} />
                }
                {nesteddraweritem === true &&
                    <DrawerItem label="Disclaimer" onPress={() => handleDisclaimer()} icon={({ focused, size }) => (<AntDesign name='warning' size={20} />)} />
                }

            </DrawerContentScrollView>
        );
    }


    const LeftDrawer = createDrawerNavigator();

    const LeftDrawerScreen = () => {

        return (
            <LeftDrawer.Navigator
                screenOptions={{ drawerPosition: 'left', headerShown: false }}
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                {/* <LeftDrawer.Screen name="Home" component={Home} /> */}
                <LeftDrawer.Screen name='Home' component={MyStacknew}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ focused, size }) => (

                            <AntDesign name="home" size={15} color="black" style={{ marginLeft: 5 }} />
                        ),
                    }}

                />
                <LeftDrawer.Screen name="About us" component={AboutScreen}
                    options={{
                        title: 'About us',
                        drawerIcon: ({ focused, size }) => (

                            <AntDesign name="infocirlceo" size={15} color="black" style={{ marginLeft: 5 }} />
                        ),
                    }}
                />
                <LeftDrawer.Screen name="Contact" component={ContactScreen}
                    options={{
                        title: 'Contact',
                        drawerIcon: ({ focused, size }) => (

                            <AntDesign name="contacts" size={15} color="black" style={{ marginLeft: 5 }} />
                        ),
                    }}
                />
                {/* <LeftDrawer.Screen name="Privacy Policy" component={PrivacyScreen} />
                <LeftDrawer.Screen name="Disclaimer" component={DisclaimerScreen} />
                <LeftDrawer.Screen name="Terms & Conditions" component={TermsScreen} /> */}
                {/* <LeftDrawer.Screen name="Detail" component={Detail} /> */}


            </LeftDrawer.Navigator>
        );
    };

    const RightDrawer = createDrawerNavigator();

    const RightDrawerScreen = () => {
        return (
            <RightDrawer.Navigator
                screenOptions={{ headerShown: false }}

            >
                <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
                {/* <RightDrawer.Screen name="Detail" component={Detail} />
                <RightDrawer.Screen name="Privacy Policy" component={PrivacyScreen} />
                <RightDrawer.Screen name="Disclaimer" component={DisclaimerScreen} />
                <RightDrawer.Screen name="Terms & Conditions" component={TermsScreen} /> */}

            </RightDrawer.Navigator>
        );
    };


    // function MyDrawer() {
    //     return (
    //         <Drawer.Navigator
    //             useLegacyImplementation
    //             drawerContent={(props) => <CustomDrawerContent {...props} />}
    //         >
    //             <Drawer.Screen name="Home" component={MyStack}
    //                 options={{
    //                     title: `Home`,
    //                     drawerIcon: ({ focused, size }) => (

    //                         <Entypo name='home' size={20} />
    //                     ),
    //                 }}
    //             />
    //             <Drawer.Screen name="About" component={AboutScreen}
    //                 options={{
    //                     title: `About`,
    //                     drawerIcon: ({ focused, size }) => (

    //                         <Entypo name='info-with-circle' size={20} />
    //                     ),
    //                 }}
    //             />
    //             <Drawer.Screen name="Contact" component={AboutScreen}
    //                 options={{
    //                     title: `Contact`,
    //                     drawerIcon: ({ focused, size }) => (

    //                         <MaterialIcons name='perm-contact-cal' size={20} />
    //                     ),
    //                 }}
    //             />

    //             {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
    //         </Drawer.Navigator>
    //     );
    // }



    return (
        <>

            {/* <NavigationContainer> */}
            {/* <TabNavigator /> */}
            {/* <DrawerNavigator /> */}
            {/* <MyDrawer /> */}
            {/* <MyStack/> */}

            <RightDrawerScreen />


            {/* </NavigationContainer> */}

        </>


    )

}



export default Routes





    // const LeftDrawer = createDrawerNavigator();

    // const LeftDrawerScreen = () => {
    //     const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    //     return (
    //         <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left', headerShown: false }}>
    //             {/* <LeftDrawer.Screen name="Home" component={Home} /> */}
    //             <LeftDrawer.Screen name='Home' component={HomeScreen}
    //                 options={{
    //                     title: 'Home',
    //                     drawerIcon: ({ focused, size }) => (

    //                         <Icon name="down" size={15} color={focused ? 'black' : 'light grey'} style={{ marginLeft: 5 }} onPress={handleDrawerDropdown} />
    //                     ),
    //                 }}

    //             />
    //             <LeftDrawer.Screen name="About us" component={AboutScreen} />
    //             <LeftDrawer.Screen name="Contact" component={ContactScreen} />
    //             <LeftDrawer.Screen name="Privacy Policy" component={PrivacyScreen} />
    //             <LeftDrawer.Screen name="Disclaimer" component={DisclaimerScreen} />
    //             <LeftDrawer.Screen name="Terms & Conditions" component={TermsScreen} />
    //             {/* <LeftDrawer.Screen name="Detail" component={Detail} /> */}


    //         </LeftDrawer.Navigator>
    //     );
    // };

    // const RightDrawer = createDrawerNavigator();

    // const RightDrawerScreen = () => {
    //     return (
    //         <RightDrawer.Navigator
    //             screenOptions={{ headerShown: false }}
    //         >
    //             <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    //             <LeftDrawer.Screen name="Detail" component={Detail} />

    //         </RightDrawer.Navigator>
    //     );
    // };