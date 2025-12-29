import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FAFAFA" },

  hero: { alignItems: "center", marginBottom: 20 },
  heroImage: { width: "100%", height: 200, borderRadius: 0 },
  heroTitle: { fontSize: 20, fontWeight: "700", color: "#111827", marginTop: 10, paddingHorizontal: 16 },
  heroSubtitle: { fontSize: 14, color: "#4B5563", textAlign: "center", marginTop: 4, paddingHorizontal: 16 },

  section: { paddingVertical: 16 },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#1F2937", marginBottom: 12, paddingHorizontal: 16 },

  categoryCard: { width: 80, alignItems: "center", marginRight: 12 },
  categoryImage: { width: 50, height: 50, borderRadius: 25 },
  categoryName: { marginTop: 6, fontSize: 12, color: "#374151", textAlign: "center" },

  productsGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 16 },
  productCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
    paddingBottom:6
  },
  productImage: { width: "100%", height: 130, borderRadius: 6, marginBottom: 8 },
  productName: { fontSize: 14, fontWeight: "600", color: "#111827", paddingHorizontal: 8 },
  productPrice: { fontSize: 14, fontWeight: "700", color: "#EF4444", marginVertical: 2, paddingHorizontal: 8 },
  productButton: { backgroundColor: "#050442", paddingVertical: 6, borderRadius: 6, marginTop: 6, marginHorizontal: 8 },
  productButtonText: { textAlign: "center", color: "#FFFFFF", fontSize: 12, fontWeight: "600" },

  horizontalCard: { width: 140, backgroundColor: "#FFFFFF", borderRadius: 8, marginRight: 12, alignItems: "center", borderWidth: 1, borderColor: "#E5E7EB", shadowColor: "#000", shadowOpacity: 0.04, shadowRadius: 4, elevation: 2 },
  productImageHorizontal: { width: "100%", height: 120, borderRadius: 6, marginBottom: 6 },
  productNameHorizontal: { fontSize: 14, fontWeight: "600", color: "#111827", paddingHorizontal: 8 },
  productPriceHorizontal: { fontSize: 14, fontWeight: "700", color: "#EF4444", marginBottom: 6, paddingHorizontal: 8 },

  showMoreBtn: { justifyContent: "center", alignItems: "center", paddingHorizontal: 16, paddingVertical: 40 },
  showMoreText: { color: "#050442", fontWeight: "700" },
  showMoreBtnSmall: { marginTop: 8, backgroundColor: "#050442", paddingHorizontal: 14, paddingVertical: 6, borderRadius: 6 },
  showMoreTextSmall: { color: "#FFFFFF", fontWeight: "600" },

  discountCardModern: { width: 160,paddingBottom:6, backgroundColor: "#FFFFFF", borderRadius: 12, marginRight: 12, alignItems: "center", borderWidth: 1, borderColor: "#E5E7EB", shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  discountImageModern: { width: '100%', height: 120, borderRadius: 10, marginBottom: 10 },
  discountTitle: { fontSize: 14, fontWeight: "600", color: "#111827", textAlign: "center", paddingHorizontal: 6 },
  discountPrice: { fontSize: 13, fontWeight: "700", color: "#DC2626", marginTop: 4 },

  testimonialCardModern: { width: 260, backgroundColor: "#FFFFFF", borderRadius: 12, marginRight: 12, borderWidth: 1, borderColor: "#E5E7EB", shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 6, elevation: 2, padding: 16 },
  testimonialText: { fontSize: 13, color: "#374151", fontStyle: "italic" },
  testimonialAuthor: { marginTop: 10, fontSize: 12, fontWeight: "600", color: "#111827", textAlign: "right" },

  brandCard: { width: 100, height: 80, marginRight: 16, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 12, borderWidth: 1, borderColor: "#E5E7EB", shadowColor: "#000", shadowOpacity: 0.04, shadowRadius: 4, elevation: 2 },
  brandLogo: { width: 80, height: 50, resizeMode: "contain" },

  blogCardModern: { width: 200, backgroundColor: "#FFFFFF", borderRadius: 12, marginRight: 12, borderWidth: 1, borderColor: "#E5E7EB", shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  blogImageModern: { width: "100%", height: 100, borderRadius: 8, marginBottom: 8 },
  blogTitle: { fontWeight: "700", fontSize: 14, color: "#111827", paddingHorizontal: 8 },
  blogDate: { fontSize: 12, color: "#6B7280", paddingHorizontal: 8 },
});
