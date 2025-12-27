import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    title: "React Native Basics",
    description: "Core concepts you should understand first.",
    points: ["Components", "Props & State", "Styling"],
  },
  {
    title: "Cross Platform UI",
    description: "How layouts behave across platforms.",
    points: ["Flexbox", "SafeArea", "Platform differences"],
  },
  {
    title: "Expo Workflow",
    description: "Tools that speed up development.",
    points: ["Live Reload", "OTA Updates", "EAS Build"],
  },
  {
    title: "Navigation",
    description: "Moving between screens efficiently.",
    points: ["Stack Navigator", "Tab Navigator", "Drawer Navigator"],
  },
  {
    title: "State Management",
    description: "Managing app state in large projects.",
    points: ["useState & useReducer", "Context API", "Redux"],
  },
  {
    title: "API Integration",
    description: "Fetching and handling data from servers.",
    points: ["Fetch API", "Axios", "Error Handling"],
  },
  {
    title: "Forms & Validation",
    description: "User input handling made simple.",
    points: ["TextInput", "Formik", "Yup Validation"],
  },
  {
    title: "Animations",
    description: "Adding smooth UI interactions.",
    points: ["React Native Reanimated", "LayoutAnimation", "Gesture Handler"],
  },
  {
    title: "Performance Optimization",
    description: "Make your app fast and smooth.",
    points: ["FlatList Optimization", "Memoization", "Lazy Loading"],
  },
  {
    title: "Deployment",
    description: "Prepare your app for users.",
    points: ["Android APK", "iOS IPA", "App Store / Play Store Submission"],
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.name}>Mostofa Fatin</Text>
        {DATA.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>

            {item.points.map((point, i) => (
              <View key={i} style={styles.bulletRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{point}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
     backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
      backgroundColor: "#fff",
  },
  card: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  name: {
    fontSize: 40,
    paddingBottom: 20,
    textAlign:"center",
    fontWeight:"700"
  },
  desc: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  bullet: {
    marginRight: 8,
    fontSize: 16,
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
});
