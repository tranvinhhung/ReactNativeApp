import React, { useState } from 'react';
import {
  Button, Image, StatusBar, StyleSheet, Text, View
} from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Chup = ({navigation: {navigate}}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [urlImg, setUrlImg] = React.useState('');
  const [urlGallery, setUrlGallery] = useState('');
  const renderItem = ({item}) => <Item title={item.title} />;

  const dispatch = useDispatch();

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User cancalled image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setUrlImg(data.uri);
        console.log(res.assets);
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, res => {
      console.log(res);
      if (res.didCancel) {
        console.log('User cancalled image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setUrlGallery(data.uri);
        console.log(res.assets);
      }
    });
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{width: '20%'}}>
        <Button
          style={styles.button}
          title="Open camera"
          onPress={openCamera}
        />
        <Button
          style={styles.button}
          title="Open Gallery"
          onPress={openGallery}
        />
      </View>
      <View>
        {urlImg != null && (
          <Image style={{width: 200, height: 200}} source={{uri: urlImg}} />
        )}
        {urlGallery != null && (
          <Image style={{width: 200, height: 200}} source={{uri: urlGallery}} />
        )}
      </View>
      {/* <View onPress={() => navigate('Home')}> <Text>quay về home</Text></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    backgroundColor: 'red',
  },
  button: {
    width: 20,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
});

export default Chup;
