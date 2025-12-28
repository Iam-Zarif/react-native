import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileData from "./profile.json";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native";


export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile(profileData);
  }, []);


if (!profile) {
  return (
    <SafeAreaView style={styles.loaderSafe}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#a78bfa" />
        <Text style={styles.loaderText}>Loading profile…</Text>
      </View>
    </SafeAreaView>
  );
}


  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        stickyHeaderIndices={[0]}
      >
        <View style={styles.stickyName}>
          <Text style={styles.name}>{profile.basic.name}</Text>
        </View>

        <View style={styles.header}>
          <View style={styles.nicknameWrapper}>
            <LinearGradient
              colors={["#38bdf8", "#a78bfa", "#f472b6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.nicknameGradientText}>
                Nickname: {profile.basic.nickname}
              </Text>
            </LinearGradient>
          </View>
          <Text style={styles.role}>
            {profile.basic.role} at XPARTEX Limited
          </Text>
          <Text style={styles.muted}>{profile.basic.location}</Text>
        </View>

        <Section title="Career Summary">
          <Text style={styles.text}>{profile.summary}</Text>
        </Section>

        <Section title="Contact">
          <Text style={styles.text}>📧 {profile.basic.email}</Text>
          <Text style={styles.text}>📞 {profile.basic.phone}</Text>
        </Section>

        <Section title="Frontend Skills">
          {profile.skills.frontend.map((s) => (
            <Tag key={s} text={s} />
          ))}
        </Section>

        <Section title="Backend Skills">
          {profile.skills.backend.map((s) => (
            <Tag key={s} text={s} />
          ))}
        </Section>

        <Section title="Tools & Platforms">
          {profile.skills.tools.map((s) => (
            <Tag key={s} text={s} />
          ))}
        </Section>

        <Section title="Professional Experience">
          {profile.experience.map((exp, i) => (
            <View key={i} style={styles.experienceCard}>
              <Text style={styles.expCompany}>{exp.company}</Text>
              <Text style={styles.expRole}>
                {exp.role} · {exp.type}
              </Text>
              <Text style={styles.expDuration}>{exp.duration}</Text>

              {/* Projects */}
              <View style={styles.expBlock}>
                <Text style={styles.expSubtitle}>Projects</Text>
                {exp.projects.map((p, idx) => (
                  <Text key={idx} style={styles.expItem}>
                    • {p.name} — {p.description}
                  </Text>
                ))}
              </View>

              {/* Responsibilities */}
              <View style={styles.expBlock}>
                <Text style={styles.expSubtitle}>Responsibilities</Text>
                {exp.responsibilities.map((r, idx) => (
                  <Text key={idx} style={styles.expItem}>
                    • {r}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </Section>

        <Section title="Projects">
          {profile.projects.map((p, i) => (
            <View key={i} style={styles.block}>
              <Text style={styles.bold}>{p.name}</Text>
            </View>
          ))}
        </Section>

        <Section title="Education">
          <Text style={styles.text}>{profile.education.degree}</Text>
          <Text style={styles.muted}>{profile.education.institution}</Text>
        </Section>

        <Section title="Languages">
          {profile.languages.map((l) => (
            <Tag key={l} text={l} />
          ))}
        </Section>

        <Section title="Strengths">
          <Tag text="Scalable Architecture" />
          <Tag text="SEO Optimization" />
          <Tag text="Performance Focused" />
          <Tag text="Clean UI/UX" />
          <Tag text="Production Ready Code" />
        </Section>

        {/* Footer Note */}
        <Text style={styles.footerNote}>
          ⚠️ Data rendered from static (fake) JSON for development & UI testing.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}


const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.wrap}>{children}</View>
  </View>
);

const Tag = ({ text }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{text}</Text>
  </View>
);


const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0f172a" },
  container: { padding: 20, paddingBottom: 40 },

  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  stickyName: {
    backgroundColor: "#0f172a",
    paddingVertical: 12,
    alignItems: "center",
    width: "100%",
    zIndex: 10,
  },
  nicknameWrapper: {
    marginBottom: 4,
  },

  nicknameGradientText: {
    fontSize: 14,
    fontWeight: "700",
    padding: 5,
    backgroundColor: "transparent",
    color: "transparent",
  },
  loaderSafe: {
    flex: 1,
    backgroundColor: "#020617", // dark slate
  },
  experienceCard: {
    marginBottom: 12,
  },

  expCompany: {
    fontSize: 14,
    fontWeight: "800",
    color: "#fff",
  },

  expRole: {
    fontSize: 12,
    color: "#a5b4fc",
    marginTop: 2,
  },

  expDuration: {
    fontSize: 11,
    color: "#94a3b8",
    marginBottom: 6,
  },

  expBlock: {
    marginTop: 6,
  },

  expSubtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 4,
  },

  expItem: {
    fontSize: 12,
    color: "#cbd5f5",
    lineHeight: 18,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loaderText: {
    marginTop: 12,
    fontSize: 12,
    color: "#94a3b8",
    letterSpacing: 0.5,
  },

  name: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
  },
  gradient: {
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  role: {
    fontSize: 14,
    color: "#a5b4fc",
  },

  muted: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 2,
  },

  text: {
    fontSize: 13,
    color: "#cbd5f5",
    lineHeight: 20,
  },

  section: {
    marginTop: 10,
    backgroundColor: "#020617",
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1e293b",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 8,
  },

  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  tag: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginRight: 6,
    marginBottom: 6,
  },

  tagText: {
    fontSize: 12,
    color: "#a5b4fc",
    fontWeight: "600",
  },

  block: { marginBottom: 8 },

  bold: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  footerNote: {
    marginTop: 24,
    fontSize: 11,
    color: "#64748b",
    textAlign: "center",
  },
});

