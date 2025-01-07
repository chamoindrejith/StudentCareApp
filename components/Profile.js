import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { PaperProvider, Banner, Divider, Text, Card } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;

export default function Profile({student}) {
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
          <Card style={styles.card}>
          <View style={styles.body}>
            <View style={styles.profile}>
              <Image source={student.profile_pic} style={styles.profile_pic} />
              <Text style={styles.text} variant="headlineMedium">{student.name}</Text>
              <Text style={styles.details} variant="titleMedium">Age : {student.age} | Gender : {student.gender}</Text>
              <Text style={styles.detailhead} variant="titleMedium">Contact Details</Text>
              <View style={styles.detaildescription}>
                <Text  variant="titleMedium">Email : {student.email}</Text>
                <Text  variant="titleMedium">Phone : {student.phone}</Text>
                <Text  variant="titleMedium">Address : {student.address}</Text>
              </View>
              <Divider style={styles.divider} />
              <Text style={styles.detailhead} variant="titleMedium">Biological Information</Text>
              <View style={styles.detaildescription}>
                <Text  variant="titleMedium">Gender : {student.gender}</Text>
                <Text  variant="titleMedium">Age : {student.age}</Text>
                <Text  variant="titleMedium">Blood Group : {student.blood_group}</Text>
              </View>
            </View>
          </View>
          </Card>
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
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 90,
    marginTop: 20,
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
        marginTop: 40,
        marginBottom: 10,
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
    card:{
        flex: 1,
        width: "96%",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 0,
    },
    divider:{
        marginTop: 30,
        marginBottom: 0,
    }
});
