import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Styles } from "../styles/contact.style";

const Contact = () => {
  return (
    <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
      <Text style={Styles.title}>Contact Us</Text>
      <Text style={Styles.subtitle}>
        We’re here to help! Reach out to us using the information below.
      </Text>

      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Email</Text>
        <Text style={Styles.sectionText}>support@yourstore.com</Text>
      </View>

      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Phone</Text>
        <Text style={Styles.sectionText}>+1 234 567 890</Text>
      </View>

      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Address</Text>
        <Text style={Styles.sectionText}>
          123 E-Commerce St, Suite 100, San Francisco, CA 94105
        </Text>
      </View>

      <View style={Styles.section}>
        <Text style={Styles.sectionTitle}>Send Us a Message</Text>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Open Contact Form</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Contact;
