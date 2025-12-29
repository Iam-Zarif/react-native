  import { Slot } from "expo-router";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useState } from "react";
  import { Navbar } from "../components/Navbar";
  import SideDrawer from "../components/SideDrawer";

  export default function RootLayout() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#eaebedff" }} edges={[ "bottom"]}>
        <Navbar
          onMenuPress={() => setDrawerOpen(true)}
          onProfilePress={() => console.log("Profile pressed")}
        />
        <SideDrawer visible={drawerOpen} onClose={() => setDrawerOpen(false)} />
          <Slot />
      </SafeAreaView>
    );
  }
