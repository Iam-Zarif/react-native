import { Text, ScrollView, Image, View } from "react-native";
import { Styles } from "../styles/about.style";

const About = () => {
  return (
    <View style={Styles.container}>
      <Image
        source={{
          uri: "https://cdn.dribbble.com/userupload/16917298/file/original-574516417cc0641cc9911b0179accae3.jpg?resize=400x0",
        }}
        style={Styles.image}
        resizeMode="cover"
      />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 30 }}
      >
        <Text style={Styles.subtitle}>
          Quality Products, Delivered with Care
        </Text>
        <Text style={Styles.paragraph}>
          Welcome to our e-commerce store! We pride ourselves on offering a
          curated selection of products that meet the highest standards of
          quality and value. Our team works tirelessly to ensure you have the
          best shopping experience possible.
        </Text>
        <Text style={Styles.paragraph}>
          From electronics to fashion, every item in our store is carefully
          selected to bring you both style and functionality. Customer
          satisfaction is our top priority.
        </Text>
        <Text style={Styles.paragraph}>
          Thank you for choosing us. We are committed to providing you with an
          enjoyable shopping experience and fast, reliable delivery.
        </Text>

        <Text style={Styles.sectionTitle}>Our Mission</Text>
        <Text style={Styles.paragraph}>
          Our mission is to make high-quality products accessible to everyone
          while delivering exceptional customer service. We believe in
          transparency, sustainability, and supporting communities through
          ethical sourcing.
        </Text>
        <Text style={Styles.paragraph}>
          We constantly innovate and improve our product selection based on
          customer feedback to ensure your shopping experience is seamless and
          enjoyable.
        </Text>

        <Text style={Styles.sectionTitle}>Why Choose Us</Text>
        <Text style={Styles.paragraph}>
          We prioritize quality over quantity. Each product is carefully
          curated to meet our strict standards.
        </Text>
        <Text style={Styles.paragraph}>
          Our customer support team is available 24/7 to assist you with any
          questions or concerns. We ensure fast delivery and easy returns so
          you can shop with confidence.
        </Text>

        <Text style={Styles.sectionTitle}>Our Customer Promise</Text>
        <Text style={Styles.paragraph}>
          Your satisfaction is our top priority. We promise timely deliveries,
          hassle-free returns, and products that match the description and
          quality you expect.
        </Text>
        <Text style={Styles.paragraph}>
          Shopping with us is secure and easy, whether you’re browsing on
          mobile or desktop. We are committed to making your experience smooth
          and enjoyable.
        </Text>
      </ScrollView>
    </View>
  );
};

export default About;
