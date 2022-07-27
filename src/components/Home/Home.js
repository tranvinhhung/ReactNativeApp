
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View
} from 'react-native';
import { shouldUseActivityState } from 'react-native-screens';
import { useDispatch, useSelector } from 'react-redux';
import { handleTestApi, setMessage } from './../../../src/redux/reducers/testReducer';



const Home = ({ navigation: { navigate } }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([
    {
      key: 'Devin',
    },
    {
      key: 'Dan',
    },
    {
      key: 'Dominic',
    },
    {
      key: 'Jackson',
    },
    {
      key: 'James',
    },
    {
      key: 'Joel',
    },
    {
      key: 'John',
    },
    {
      key: 'Jillian',
    },
    {
      key: 'Jimmy',
    },
    {
      key: 'Julie',
    },
  ]);
  const [valueInput, setValueInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [numberEdit, setNumberEdit] = useState(null);
  const [textEdit, setTextEdit] = useState('');
  const testReducerData = useSelector(state => state?.testReducer?.message);
  const dispatch = useDispatch();
  // console.log(testReducerData);

  useEffect(() => {
    (async () => {
      try {
        let dataa = await dispatch(handleTestApi());
        let dataa2 = unwrapResult(dataa);
        console.log(dataa2);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <View style={styles.sectionContainer}>
      <Text onPress={()=> {navigate('Chuphinh')}} style={styles.sectionTitle}> Ấn vô để qua trang chụp hình </Text>
      <Text style={styles.buttonText}> {testReducerData} </Text>
      <TextInput
        // focusable={true}
        style={styles.textInputStyle}
        value={valueInput}
        onAccessibilityEscape={key => {
          console.log(key);
        }}
        onChangeText={value => {
          setValueInput(value);
        }}
        onSubmitEditing={e => {
          // console.log('submitttttt', e);
          setData([
            {
              key: valueInput,
            },
            ...data,
          ]);
          setValueInput('');
        }}
      />
      <FlatList
        data={data}
        style={{
          display: 'flex',
        }}
        renderItem={({item, index}) => (
          <View style={styles.button}>
            <Text style={styles.buttonText}> {item.key} </Text>

            <Pressable
              style={styles.buttonEdit}
              onPress={() => {
                setTextEdit(item.key);
                setNumberEdit(index);
                setModalVisible(!modalVisible);
              }}>
              <Text style={[styles.buttonColor, styles.textStyle]}> Sửa </Text>
            </Pressable>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                let datanew = [...data];
                datanew.splice(index, 1);
                setData(datanew);
                dispatch(setMessage(Math.floor(Math.random() * 10)));
              }}>
              <Text style={[styles.buttonColor, styles.textStyle]}> Xóa </Text>
            </Pressable>
          </View>
        )}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> text bạn muốn sửa </Text>
            <View>
              <TextInput
                onFocus={e => {
                  // console.log(e);
                }}
                focusable={true}
                style={[styles.textInputStyle, styles.widthFull]}
                value={textEdit}
                onChangeText={value => {
                  setTextEdit(value);
                }}
                onSubmitEditing={e => {
                  // console.log('submitttttt', e);
                  setData([
                    {
                      key: valueInput,
                    },
                    ...data,
                  ]);
                  setTextEdit('');
                }}
              />
            </View>
            <View style={styles.flex}>
              <Pressable
                style={[styles.press, styles.button, styles.buttonClose]}
                onPress={() => {
                  let dataEdit = [...data];
                  dataEdit.splice(numberEdit, 1, {
                    key: textEdit,
                  });
                  setData(dataEdit);
                  setModalVisible(!modalVisible);
                  Alert.alert('Sửa thành công');
                }}>
                <Text style={styles.textStyle}>Chấp nhận</Text>
              </Pressable>
              <Pressable
                style={[styles.press, styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}> Tắt modal </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal: {
    backgroundColor: 'blue',
  },
  widthFull: {
    minWidth: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    maxWidth: '50%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionContainer: {
    padding: 2,
    maxWidth: 458,
    color:"black"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInputStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  button: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 1,
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonColor: {
    color: '#fff',
  },
  buttonEdit: {
    padding: 10,
    borderColor: 'green',
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 'auto',
  },
  buttonClose: {
    // width:"30%",
    padding: 10,
    borderColor: 'blue',
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color:"black"
  },
  modal: {
    width: '50vw',
    height: '50vh',
    margin: 'auto auto',
    backgroundColor: 'red',
  },
  press: {
    width: '50%',
    // textAlign:"center"
  },
  textStyle: {
    textAlign: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
