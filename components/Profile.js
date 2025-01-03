import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text, Divider, Button } from "react-native-paper";

export default function Profile() {
  return (
    <PaperProvider>
      <ScrollView>
        <View>
        <Text variant="headlineLarge">Profile</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
