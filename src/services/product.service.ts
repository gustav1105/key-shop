import axiosInstance from '../axios-instance';

interface ProductDetails {
  id: string ;
  details: string;
}

const productDetailsService = {
  getProducts: async (): Promise<ProductDetails[]> => {
    try {
      const response = await axiosInstance.get('/products');
      return response.data;
    } catch (error) {
      handleError(error);
      return []; // Return an empty array or a fallback value
    }
  },

  getProductById: async (id: number): Promise<ProductDetails> => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
      return null as any;
    }
  },

  createProduct: async (productData: ProductDetails): Promise<ProductDetails> => {
    try {
      const response = await axiosInstance.post('/products', productData);
      return response.data;
    } catch (error) {
      handleError(error);
      return null as any; // Return null or a fallback value
    }
  },

  updateProduct: async (id: number, productData: Partial<ProductDetails>): Promise<ProductDetails> => {
    try {
      const response = await axiosInstance.put(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      handleError(error);
      return null as any; // Return null or a fallback value
    }
  },

  deleteProduct: async (id: number): Promise<void> => {
    try {
      await axiosInstance.delete(`/products/${id}`);
    } catch (error) {
      handleError(error);
    }
  },
};

const handleError = (error: any): void => {
  // Handle error appropriately
  console.error('API call failed:', error);
  // Optionally, throw the error to propagate it up the call stack
  // throw error;
};

export default productDetailsService;
