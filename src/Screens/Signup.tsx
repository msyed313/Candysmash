import {useState} from 'react';
import React from 'react';
import {
  ImageBackground,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';

function Signup({navigation}: {navigation: any}) {
  const [avatarSource, setAvatarSource] = useState(null);
  const [passView, setPassView] = useState(false);
  const [selectedCity, setSelectedCity] = useState('select city');
  const [modalVisible, setModalVisible] = useState(false);
  const city = ['Islamabad', 'Peshawar', 'Lahore', 'Quetta'];
  return (
    <ImageBackground
      source={require('../assets/CloudsBackground.png')}
      style={styles.ImageBackground}>
      <StatusBar backgroundColor="skyblue" barStyle="dark-content" />

      <View style={styles.v1}>
        <Text style={styles.t1}>Create new Account</Text>
        <View style={styles.imgview}>
          {avatarSource ? (
            <Image source={avatarSource} style={styles.img} />
          ) : (
            <Image
              source={require('../assets/icons/user.png')}
              style={styles.img}
            />
          )}
          <Pressable style={styles.btn}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
              Select Image
            </Text>
          </Pressable>
        </View>
        <TextInput placeholder="uname" style={styles.input} />
        <TextInput placeholder="email" style={styles.input} />
        <TextInput
          placeholder="password"
          style={[styles.input, {position: 'relative'}]}
          secureTextEntry={passView ? false : true}
        />
        {passView ? (
          <Pressable onPress={() => setPassView(false)}>
            <Image
              source={require('../assets/icons/hide.png')}
              style={styles.icon}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => [setPassView(true)]}>
            <Image
              source={require('../assets/icons/view.png')}
              style={styles.icon}
            />
          </Pressable>
        )}
        <Pressable style={styles.press2} onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 18, color: 'black'}}>{selectedCity}</Text>
          <Image
            source={require('../assets/icons/down.png')}
            style={{width: 40, height: 40}}
          />
        </Pressable>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable>
                {city.map((item, index) => (
                  <Pressable
                    key={index}
                    onPress={() => [
                      setModalVisible(false),
                      setSelectedCity(item),
                    ]}>
                    <Text style={styles.modalText}>{item}</Text>
                  </Pressable>
                ))}
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable style={styles.press}>
          <Text style={[styles.t1, {color: 'white'}]}>Signup</Text>
        </Pressable>
        <Pressable>
          <Text
            style={[styles.t1, {fontSize: 15}]}
            onPress={() => navigation.navigate('login')}>
            Already have account ? Login
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  v1: {
    width: '95%',
    borderWidth: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#7E25D7',
    backgroundColor: '#02A4ED',
    borderRadius: 30,
    alignItems: 'center',
  },
  t1: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    paddingVertical: 5,
  },
  imgview: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  img: {
    width: '30%',
    height: 50,
    resizeMode: 'contain',
    borderRadius: 75,
  },
  btn: {
    borderWidth: 1,
    borderRadius: 30,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C5CACB',
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 30,
    fontSize: 18,
    color: 'black',
    padding: 10,
    marginVertical: 5,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: -45,
    marginLeft: 90,
  },
  press2: {
    width: '90%',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    //alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'red',
  },
  press: {
    backgroundColor: '#7E25D7',
    width: '70%',
    alignItems: 'center',
    borderRadius: 50,
    padding: 5,
    margin: 5,
  },
});
export default Signup;
