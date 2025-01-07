import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import {
  PaperProvider,
  Banner,
  Divider,
  Text,
  Card,
  DataTable,
} from "react-native-paper";
import {
  courses,
  marks as marksData,
  subjects as subjectsData,
} from "../assets/StudentsDb";

const windowWidth = Dimensions.get("window").width;
export default function Subjects({ student }) {
  const course = courses.find((course) => course.id === student.course_id);
  const marks = marksData.filter((mark) => mark.student_id === student.id);
  const subjects = subjectsData.filter((s) =>
    marks.map((m) => m.subject_id).includes(s.id)
  );

  const averageMarks =
    marks.reduce((acc, m) => acc + m.marks, 0) / marks.length;

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
          <View>
            <Card style={styles.card}>
              <Text style={styles.text} variant="headlineMedium">
                {course.name}
              </Text>
              <Text style={styles.details} variant="titleMedium">
                {marks.length} Subjects | Average: {averageMarks.toFixed()}
              </Text>
              <Divider style={styles.divider} />
              <Text style={styles.detailhead} variant="titleLarge">
                Marks Information
              </Text>
              <View>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>Subjects</DataTable.Title>
                    <DataTable.Title numeric>Mark</DataTable.Title>
                  </DataTable.Header>

                  {subjects.map((subject) => {
                    return (
                      <DataTable.Row key={subject.id}>
                        <DataTable.Cell>{subject.name}</DataTable.Cell>
                        <DataTable.Cell numeric>
                          {
                            marks.find((mark) => mark.subject_id === subject.id)
                              .marks
                          }
                        </DataTable.Cell>
                      </DataTable.Row>
                    );
                  })}
                </DataTable>
              </View>
            </Card>
          </View>
          <View style={styles.footer}>
            <Text variant="titleMedium" style={styles.footerText}>
              UOV © 2025
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },
  divider: {
    marginTop: 30,
    marginBottom: 0,
  },
  details: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
  card: {
    flex: 4,
    padding: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
  },
  detailhead: {
    flex: 1,
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: "#79027d",
    flex: 1,
    width: "100%",
    height: 40,
    padding: 10,
    alignItems: "center",
    marginTop: 150,
  },
  footerText: {
    color: "#fff",
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: 95,
    alignSelf: "center",
  },
  divider: {
    marginTop: 30,
    marginBottom: 30,
  },
  divider: {
    marginTop: 30,
  },
});
