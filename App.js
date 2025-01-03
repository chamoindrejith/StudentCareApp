import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./components/Profile";
import Course from "./components/Course";
import Subjects from "./components/Subjects";

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
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: "#9370db" },
      }}
    >
      <Stack.Screen name="Profile" component={Profile} options={headerOptions} />
      <Stack.Screen
        name="Course"
        component={Course}
        options={headerOptions}
      />
      <Stack.Screen
        name="Subjects"
        component={Subjects}
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
          <RootStack />
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
