import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import productsData from "./products.json";
import { styles } from "../styles/products.style";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 8;
const NUM_COLUMNS = 2;
const CARD_WIDTH = (width - (NUM_COLUMNS + 1) * CARD_MARGIN) / NUM_COLUMNS;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setProducts(productsData.products || []);
  }, []);

  const handleSort = (option) => {
    let sortedProducts = [...(productsData.products || [])];

    switch (option) {
      case "priceLowHigh":
        sortedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "priceHighLow":
        sortedProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "nameAsc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    setProducts(sortedProducts);
    setSortOption(option);
    setVisibleCount(6);
  };

  const handleShowMore = () => setVisibleCount((prev) => prev + 6);

  const renderProduct = ({ item }) => (
    <View style={[styles.productCard, { width: CARD_WIDTH }]}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.productButton}>
          <Text style={styles.productButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.page}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sortOption}
          onValueChange={(itemValue) => handleSort(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Sort By:" value="default" />
          <Picker.Item label="Price: Low to High" value="priceLowHigh" />
          <Picker.Item label="Price: High to Low" value="priceHighLow" />
          <Picker.Item label="Name: A to Z" value="nameAsc" />
          <Picker.Item label="Name: Z to A" value="nameDesc" />
        </Picker>
      </View>

      <FlatList
        data={products.slice(0, visibleCount)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: CARD_MARGIN,
        }}
        renderItem={renderProduct}
      />
      {visibleCount < products.length && (
        <TouchableOpacity
          style={styles.showMoreButton}
          onPress={handleShowMore}
        >
          <Text style={styles.showMoreButtonText}>Show More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
