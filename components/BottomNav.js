import { useState } from "react"
import { BottomNavigation } from "react-native-paper"
import Subjects from "./Subjects"
import Course from "./Course"
import Profile from "./Profile"


export default function BottomNav({route}) {
    const {student} = route.params;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "profile", title: "Profile", unfocusedIcon:"account-outline" ,focusedIcon: "account" },
    { key: "course", title: "Course", unfocusedIcon:"book-open-outline" ,focusedIcon: "school" },
    { key: "subjects", title: "Subjects", unfocusedIcon:"school-outline" ,focusedIcon: "book-open" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: ()=> <Profile student={student} />,
    course: ()=> <Course student={student} />,
    subjects: ()=> <Subjects student={student} />,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}