import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  PaperProvider,
  Text,
  TextInput,
  Banner,
  Divider,
  Button,
  Icon,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {students} from "../assets/StudentsDb"

const windowWidth = Dimensions.get("window").width;

export default function Login() {
  const navigation = useNavigation();
  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const [isSecure, setIsSecure] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!data.username || !data.password){
      setError("Please check your username and password");
      return
    }
    const student = students.find((student)=>student.username === data.username)

    if(!student || student.password !== data.password){
      setError("Please check your username and password");
      return
    }
    navigation.navigate("BottomNav", {student})
  }

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      ><TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <View>
              <Banner visible={true}>
                <Image
                  source={require("../assets/UoV.png")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Banner>
            </View>
            <View>
              <Text variant="headlineLarge" style={styles.header}>
                STUDENT LOGIN
              </Text>
            </View>
            <View >
              <TextInput
                label="Username"
                value={data.username}
                onChangeText={(username) => setData({ ...data, username: username })}
                style={styles.input}
              />
              <TextInput
                label="Password"
                value={data.password}
                onChangeText={(password) => setData({ ...data, password: password })}
                right={<TextInput.Icon icon="eye" onPress={()=>setIsSecure(!isSecure)}/>}
                secureTextEntry={isSecure}
                
              />
              
            </View>
            <View style={styles.button}>
              <Button
                mode="contained"
                buttonColor="#79027d"
                onPress={handleLogin}
              >
                Login
              </Button>
            </View>
           
            {error && (
              <View style={styles.error}>
                <Icon source="alert-circle" size={20} style={styles.icon}/>
                <Text >{error}</Text>
              </View>
            )}
          </View>

          <View style={styles.footer}></View>
        </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
  },
  header: {
    flex: 3,
    width: "100%",
    textAlign: "center",
    padding: 5,
    marginBottom: 70,
    marginTop: 70,
  },
  scrollView: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#79027d",
    flex: 1,
    width: "100%",
    height: "10%",
    alignItems: "baseline",
    marginTop: 120,
  },
  input: {
    padding: 5,
    marginBottom: 5,
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: 95,
    alignSelf: "center",
  },
  button: {
    padding: 10,
    marginBottom: 2,
  },
  error: {
    padding: 10,
    marginBottom: 2,
    marginTop: 10,
    color: "red",
    flexDirection: "f4edf7",
    gap :6,
    borderRadius: 5,
  },
});
