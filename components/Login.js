import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { useState } from "react";
import {
  PaperProvider,
  Text,
  TextInput,
  Banner,
  Divider,
  Button,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {students} from "../assets/StudentsDb"

const windowWidth = Dimensions.get("window").width;

export default function Profile() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    let foundUser = null;
    students.map((user) => {
      if (user.username === userName && user.password === password) {
        foundUser = user;
      }
    })
    if (foundUser) {
      setProfile(foundUser)
      navigation.navigate("Profile", {profile} )
    } else {
      setError("Please check your username and password");
      setProfile(null);
    }
  };
  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
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
            <View style={styles.input}>
              <TextInput
                label="Username"
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
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
            <View>
            {error ? <Text style={styles.error} >{error}</Text> 
            : null}
            </View>
          </View>

          <View style={styles.footer}></View>
        </ScrollView>
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
    marginTop: 170,
  },
  input: {
    padding: 10,
    marginBottom: 2,
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
    color: "red",
  },
});
