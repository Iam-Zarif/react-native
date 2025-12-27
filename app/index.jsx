import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  RefreshControl,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUsers();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => {
    const expanded = expandedId === item.id;

    return (
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>@{item.username}</Text>
          </View>

          <Pressable
            style={styles.toggleBtn}
            onPress={() => setExpandedId(expanded ? null : item.id)}
          >
            <Text style={styles.toggleText}>
              {expanded ? "Hide" : "View"}
            </Text>
          </Pressable>
        </View>

        {expanded && (
          <View style={styles.details}>
            <Text style={styles.detail}>Email: {item.email}</Text>
            <Text style={styles.detail}>Phone: {item.phone}</Text>
            <Text style={styles.detail}>City: {item.address.city}</Text>
            <Text style={styles.detail}>Company: {item.company.name}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Users Directory</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.listContent}
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Developed by Mostofa Fatin</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  navbar: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(21, 20, 20, 1)",
    backdropFilter: "blur(10px)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.2)",
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: Platform.OS === "android" ? 6 : 0,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  username: {
    fontSize: 13,
    color: "#cbd5f5",
    marginTop: 2,
  },
  toggleBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
  },
  toggleText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
  details: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.25)",
  },
  detail: {
    fontSize: 14,
    color: "#e5e7eb",
    marginBottom: 4,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(21, 20, 20, 1)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.2)",
  },
  footerText: {
    fontSize: 10,
    color: "#e5e7eb",
  },
});
