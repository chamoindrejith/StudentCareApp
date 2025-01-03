import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Profile from "./components/Profile";
import Course from "./components/Course";
import Subjects from "./components/Subjects";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="Subjects" component={Subjects} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
