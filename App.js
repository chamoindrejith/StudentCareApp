import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./components/BottomNav";
import Login from "./components/Login";
import { ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const headerOptions = {
  title: "UoV Student Care",
  headerStyle: {
    backgroundColor: "#79027d",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
};

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={headerOptions} />
      <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingView}
          >
            <ScrollView contentContainerStyle={styles.scrollView}>
            <RootStack />
            </ScrollView>
          </KeyboardAvoidingView>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});
