
// products.style.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 6
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    width:'100%'
  },
  productImage: {
    width: '100%',
    height: 180
  },
  productInfo: {
    padding: 8
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827'
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EF4444',
    marginTop: 4
  },
  productButton: {
    backgroundColor: '#050442',
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 8
  },
  productButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600'
  },
showMoreButton: {
  backgroundColor: '#0B0B1F', 
  paddingVertical: 8,        
  paddingHorizontal: 24,      
  borderRadius: 8,           
  alignItems: 'center',      
  marginTop: 8,         
},

showMoreButtonText: {
  color: '#fff',             
  fontWeight: '700',          
  fontSize: 12,                
  textTransform: 'uppercase',  
  letterSpacing: 0.5,          
},

pickerContainer: {
  backgroundColor: '#fff',
  borderRadius: 12,
  color:"#0B0B1F",
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  marginBottom: 10,
  elevation: 3,
  height: 40,       
  justifyContent: 'center' 
},

picker: {
  width: '100%',
    color:"#0B0B1F",

fontSize:12,
}

});
