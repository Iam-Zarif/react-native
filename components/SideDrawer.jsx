import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", route: "/", icon: "home-outline" },
  { label: "Products", route: "/products", icon: "cube-outline" },
  { label: "About Us", route: "/about", icon: "information-circle-outline" },
  { label: "Contact Us", route: "/contact", icon: "call-outline" },
];

const DRAWER_WIDTH = 260;

const SideDrawer = ({ visible, onClose }) => {
  const router = useRouter();
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [activeRoute, setActiveRoute] = useState("/");

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: visible ? 0 : -DRAWER_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: visible ? 1 : 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, [visible]);

  return (
    <View style={styles.overlay} pointerEvents={visible ? "auto" : "none"}>
      <Animated.View style={[styles.backdrop, { opacity }]}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.route === activeRoute;
          return (
            <TouchableOpacity
              key={item.route}
              style={[
                styles.item,
                isActive && { backgroundColor: "#050442", borderRadius: 8 },
              ]}
              onPress={() => {
                setActiveRoute(item.route);
                router.push(item.route);
                onClose();
              }}
              activeOpacity={0.7}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color={isActive ? "#FFFFFF" : "#E5E7EB"}
              />
              <Text
                style={[
                  styles.label,
                  isActive && { color: "#FFFFFF", fontWeight: "600" },
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 40,
    height: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2000,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  drawer: {
    width: DRAWER_WIDTH,
    backgroundColor: "#020617",
    paddingTop: 100,
    paddingHorizontal: 16,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginBottom: 8,
    gap: 12,
  },
  label: {
    fontSize: 12,
    color: "#E5E7EB",
    fontWeight: "500",
  },
});
