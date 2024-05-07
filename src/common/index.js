const backendDomin = "http://localhost:8080";

const SummaryApi = {
  signUP: {
    url: "https://reca.azurewebsites.net/api/v1/auth/signup",
    method: "post",
  },
  signIn: {
    url: "https://reca.azurewebsites.net/api/v1/auth/login",
    method: "post",
  },
  current_user: {
    url: "https://reca.azurewebsites.net/api/v1/users/getMe",
    method: "get",
  },
  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: "https://reca.azurewebsites.net/api/v1/users",
    method: "get",
  },
  updateUser: {
    url: "https://reca.azurewebsites.net/api/v1/users",
    method: "put",
  },
  uploadProduct: {
    url: "https://reca.azurewebsites.net/api/v1/subcategories",
    method: "post",
  },
  allProduct: {
    url: "https://reca.azurewebsites.net/api/v1/products",
    method: "get",
  },
  updateProduct: {
    url: "https://reca.azurewebsites.net/api/v1/products",
    method: "PUT",
  },
  categoryProduct: {
    url: "https://reca.azurewebsites.net/api/v1/categories",
    method: "get",
  },

  productDetails: {
    url: "https://reca.azurewebsites.net/api/v1/products",
    method: "get",
  },
  addToCartProduct: {
    url: "https://reca.azurewebsites.net/api/v1/cart",
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomin}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: "https://reca.azurewebsites.net/api/v1/cart",
    method: "get",
  },
  updateCartProduct: {
    url: "https://reca.azurewebsites.net/api/v1/cart",
    method: "put",
  },
  deleteCartProduct: {
    url: "https://reca.azurewebsites.net/api/v1/cart",
    method: "delete",
  },
  clearCartProduct: {
    url: "https://reca.azurewebsites.net/api/v1/cart",
    method: "delete",
  },
  getAllSubCategories: {
    url: "https://reca.azurewebsites.net/api/v1/subcategories",
    method: "get",
  },

  searchProduct: {
    url: "https://reca.azurewebsites.net/api/v1/products",
    method: "get",
  },
  filterProduct: {
    url: `${backendDomin}/api/filter-product`,
    method: "post",
  },
  createCheckoutSession: {
    url: "https://reca.azurewebsites.net/api/v1/orders/checkout-session",
    method: "post",
  },
  createCashOrder: {
    url: "https://reca.azurewebsites.net/api/v1/orders",
    method: "post",
  }
  
};

export default SummaryApi;
