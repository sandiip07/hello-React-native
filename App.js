// on the top of this code we have imported all the components which is we are using in our task

import { StatusBar } from "expo-status-bar"; // status bar are manage the display the current time,and network information.
import { StyleSheet, Text, View, Button } from "react-native"; //here we have imported our UI and core components, which we are going to use in our application.
export default function App() {
  //This is the function It has all UI & other component which is shown in users screen.
  return (
    // view elment are treated  like a container , it has all part which is shown in users screen.

    <View style={styles.container}>
      {/* above style={styles.container} we have declared the name of container by (container) which has all th designing properties  */}
      <View>
        <Text> piese of text and this is something</Text>
        {/* this is text part in our application it work like h1 h2 h3 ...*/}
      </View>
      <Text style={{ margin: 10, borderWidht: 2, borderColor: "orange" }}>
        Another piese of text
      </Text>
      <Button title="click me" />
      {/*Button tag is a self closing elment here ,
        inside the title attribute the string are shows in side the like {click me , submit}
        */}
    </View>
  );
}
{
  /*below we have designed our UI we have to wrap all of the style in styles section ,
   ans all styling are exist in the StyleSheet object*/
}
const styles = StyleSheet.create({
  container: {
    // container is the name of designing variable and it can be anything
    flex: 1,
    // In The react native a number is treated as self unit like (px , vh , vw ...)
    backgroundColor: "white",
  
    alignItems: "center",
    justifyContent: "center",
  },
});
