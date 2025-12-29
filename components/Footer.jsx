import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2025 ShopEase. All rights reserved.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: { padding: 16, alignItems: "center", backgroundColor: "#FFFFFF" },
  footerText: { fontSize: 11, color: "#6B7280" },
});
