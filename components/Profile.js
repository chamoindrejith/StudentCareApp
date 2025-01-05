import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { PaperProvider, Banner, Divider, Text } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;

export default function Profile(profile) {
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
          </View>
          <View style={styles.body}>
            <View style={styles.profile}>
              <Image source={profile.profile_pic} style={styles.profile_pic} />
              <Text style={styles.text} variant="headlineMedium">{profile.name}</Text>
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
  body: {
    flex: 3,
    width: "100%",
    textAlign: "center",
    padding: 5,
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
  image: {
    flex: 1,
    width: windowWidth,
    height: 95,
    alignSelf: "center",
  },
  profile: {
    flex: 1,
    width: windowWidth,
    height: 95,
    alignSelf: "center",
  },
});
