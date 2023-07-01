import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import FavThings from "./src/screens/FavThings";
import Music from "./src/screens/Music";
import LoginScreen from "./src/screens/LoginScreen";
import LoginSuccesful from "./src/screens/LoginSuccesful";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
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
          } else if (route.name === "Log in") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

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
      <Tab.Screen name="Log in" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const reducer = (state, action) => {
    if (action.type === "changeUsername") {
      return { username: action.payload };
    } else {
      return state;
    }
  };
  const store = createStore(reducer, { username: "No user is set yet" });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen name="LoginSuccesful" component={LoginSuccesful} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
