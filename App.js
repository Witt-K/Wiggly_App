import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import FavThings from "./src/screens/FavThings";
import Music from "./src/screens/Music";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "About") {
              iconName = focused ? "ios-happy" : "ios-happy-outline";
            } else if (route.name === "FavThings") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
            } else if (route.name === "Music") {
              iconName = focused ? "ios-headset" : "ios-headset-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="FavThings" component={FavThings} />
        <Tab.Screen name="Music" component={Music} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
