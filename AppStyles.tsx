import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 5
  },
  loaderstyle: {
    marginVertical: 16,
    alignItems: 'center'
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    backgroundColor: 'white',
    borderColor: "#ccc",


  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 90,
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: 'white'
  },
  tinyLogo: {
    width: 150,
    height: 50,
    marginLeft: '30%'
  },
  backbutton: {
    width: 50,
    marginTop: 20,
    fontSize: 20
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  list: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingVertical: 5,
  },
  drawerbutton: {
    fontSize: 25,
    // width:'20px',
    margin: 10
  },
  item: {
    paddingVertical: 14,
    marginVertical: 10,
    zIndex: 1,
  },
  hairlineWidth: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 165
  },

  itemText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 18,
    letterSpacing: 2,
    // paddingTop: 50,
    padding: 10,
    fontFamily: 'Quicksand-SemiBold'

    // textDecorationLine:'underline'
  },
  itemText6: {
    color: 'rgb(0, 0, 0)',
    fontSize: 30,
    letterSpacing: 2,
    paddingTop: 50,
    padding: 10,
  },
  articleLogo: {
    width: 16,
    height: 16,
    marginTop: 17,
    marginLeft: 5
  },
  maindiv: {
    flex: 1,
    flexDirection: 'row'
  },
  itemText2: {
    color: 'rgb(0, 0, 0)',
    fontSize: 20,
    letterSpacing: 2,
    paddingTop: 12,
    // fontWeight:'bold'
  },
  itemTextHome: {
    color: 'rgb(0, 0, 0)',
    fontSize: 30,
    letterSpacing: 2,
    paddingTop: 50,
    padding: 10,
    fontFamily: 'Quicksand-SemiBold'

  },
  likeText: {
    color: 'rgb(255, 100, 0)',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 2,
  },
  itemImage: {
    height: 400,
    width: '100%',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 12,
    color: 'rgb(255, 100, 0)',
    fontWeight: '900',
    letterSpacing: 0.2,
    lineHeight: 12,
    textAlign: 'center',
    zIndex: 2,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -24,
  },
  overlayLottie: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
  },
});