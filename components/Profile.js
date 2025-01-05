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
              <Image source={require(`../assets/profilepic/1.jpg`)} style={styles.profile_pic} />
              <Text style={styles.text} variant="headlineMedium">Alice Johnson</Text>
              <Text style={styles.details} variant="titleMedium">Age : 21 | Gender : Female</Text>
              <Text style={styles.detailhead} variant="titleMedium">Contact Details</Text>
              <View style={styles.detaildescription}>
                <Text  variant="titleMedium">Email : alice.jhonson@example.com</Text>
                <Text  variant="titleMedium">Phone : 0771234567</Text>
                <Text  variant="titleMedium">Address : 123, Galle Road, Colombo 03</Text>
              </View>
              <Text style={styles.detailhead} variant="titleMedium">Biological Information</Text>
              <View style={styles.detaildescription}>
                <Text  variant="titleMedium">Gender : Female</Text>
                <Text  variant="titleMedium">Age : 21</Text>
                <Text  variant="titleMedium">Blood Group : O+</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
          <Text  variant="titleMedium" style={styles.footerText}>UOV © 2025</Text>
          </View>
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
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: 95,
    alignSelf: "center",
  },
  profile_pic: {
    flex: 1,
    width: 160,
    height: 160,
    alignSelf: "center",
  },
  text:{
    flex: 1,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    marginTop:5,
  },
    details:{
        flex: 1,
        width: "100%",
        textAlign: "center",
    },
    detailhead:{
        flex: 1,
        width: "100%",
        textAlign: "left",
        fontWeight: "bold",
        marginTop:5,
        marginLeft: 10,
        marginTop: 50,
    },
    detaildescription:{
        flex: 1,
        width: "100%",
        textAlign: "left",
        marginLeft: 10,
    },
    footerText:{
        color: "#fff",
    },
});
