import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import landingData from "./landing.json";
import { styles } from "../styles/index.styles";

export default function Home() {
  const data = landingData;

  if (!data) {
    return (
      <View
        style={[
          styles.page,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <View style={styles.hero}>
        <Image source={{ uri: data.hero.image }} style={styles.heroImage} />
        <Text style={styles.heroTitle}>{data.hero.title}</Text>
        <Text style={styles.heroSubtitle}>{data.hero.subtitle}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        >
          {data.categories.map((cat) => (
            <View key={cat.id} style={styles.categoryCard}>
              <Image source={{ uri: cat.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{cat.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={styles.productsGrid}>
          {data.featuredProducts.map((prod) => (
            <View key={prod.id} style={styles.productCard}>
              <Image source={{ uri: prod.image }} style={styles.productImage} />
              <Text style={styles.productName}>{prod.name}</Text>
              <Text style={styles.productPrice}>{prod.price}</Text>
              <TouchableOpacity style={styles.productButton}>
                <Text style={styles.productButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={{
            marginTop: 16,
            paddingVertical: 8,
            paddingHorizontal: 20,
            backgroundColor: "#0B0B1F",
            borderRadius: 12,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={[styles.productButtonText, { textAlign: "center" }]}>
            All Products
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        >
          {data.newArrivals.map((item) => (
            <View key={item.id} style={styles.horizontalCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.productImageHorizontal}
              />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.showMoreBtn}>
            <Text style={styles.showMoreText}>Show More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Sellers</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        >
          {data.bestSellers.map((item) => (
            <View key={item.id} style={styles.horizontalCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.productImageHorizontal}
              />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.showMoreBtn}>
            <Text style={styles.showMoreText}>Show More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Discounts</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        >
          {data.discounts.map((item) => (
            <View key={item.id} style={styles.discountCardModern}>
              <Image
                source={{ uri: item.image }}
                style={styles.discountImageModern}
              />
              <Text style={styles.discountTitle}>{item.title}</Text>
              <Text style={styles.discountPrice}>{item.discount}</Text>
              <TouchableOpacity style={styles.showMoreBtnSmall}>
                <Text style={styles.showMoreTextSmall}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>From Our Blog</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        >
          {data.blog.map((post) => (
            <View key={post.id} style={styles.blogCardModern}>
              <Image
                source={{ uri: post.image }}
                style={styles.blogImageModern}
              />
              <Text style={styles.blogTitle}>{post.title}</Text>
              <Text style={styles.blogDate}>{post.date}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.showMoreBtn}>
            <Text style={styles.showMoreText}>Show More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
