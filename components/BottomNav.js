import { useState } from "react"
import { BottomNavigation } from "react-native-paper"


export default function BottomNav() {
    const {student} = route.params;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "profile", title: "Profile", unfocusedIcon:"account-outline" ,focusedIcon: "account" },
    { key: "subjects", title: "Subjects", unfocusedIcon:"school-outline" ,focusedIcon: "book-open" },
    { key: "course", title: "Course", unfocusedIcon:"book-open-outline" ,focusedIcon: "school" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: ()=> <Profile student={student} />,
    subjects: ()=> <Subjects student={student} />,
    course: ()=> <Course student={student} />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}