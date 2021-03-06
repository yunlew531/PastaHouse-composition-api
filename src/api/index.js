import getShopImg from './frontend/AboutUs';
import getProductInfo from './frontend/Product';
import {
  getCarts, putCartQty, deleteCart, deleteAllCarts, postAddCart,
} from './frontend/shared';
import postLogin from './backend/Login';
import { postCheck, getUser } from './backend/Backstage';
import { getPageProducts, getAllProducts } from './frontend/Products';
import { postUploadImg, postAddProduct, putEditProduct } from './backend/AddProduct/index';
import getCustOrders from './frontend/Orders';
import getCustOrder from './frontend/Order';
import LogOut from './backend/shared/index';
import { getProducts, getAllAdminProducts, deleteProduct } from './backend/Products';
import { postCheckout, postCoupon } from './frontend/Checkout';
import { getOrders, deleteAllOrders } from './backend/Orders';
import { putEditOrder, delOrder } from './backend/Order';
import {
  postAddCoupon, getCoupons, editCoupon, deleteCoupon,
} from './backend/Coupon';

// frontend
export const apiGetProductInfo = getProductInfo;
export const apiGetCarts = getCarts;
export const apiGetPageProducts = getPageProducts;
export const apiGetAllProducts = getAllProducts;
export const apiPutCartQty = putCartQty;
export const apiGetCustOrders = getCustOrders;
export const apiGetCustOrder = getCustOrder;
export const apiDeleteCart = deleteCart;
export const apiDeleteAllCarts = deleteAllCarts;
export const apiPostAddCart = postAddCart;
export const apiGetShopImg = getShopImg;
export const apiPostCheckout = postCheckout;
export const apiPostCoupon = postCoupon;

// backend
export const apiPostLogin = postLogin;
export const apiPostCheck = postCheck;
export const apiGetUser = getUser;
export const apiPostUploadImg = postUploadImg;
export const apiPostAddProduct = postAddProduct;
export const apiLogOut = LogOut;
export const apiGetProducts = getProducts;
export const apiGetAllAdminProducts = getAllAdminProducts;
export const apiDeleteProduct = deleteProduct;
export const apiPutEditProduct = putEditProduct;
export const apiGetOrders = getOrders;
export const apiDelOrder = delOrder;
export const apiDeleteAllOrders = deleteAllOrders;
export const apiPutEditOrder = putEditOrder;
export const apiPostAddCoupon = postAddCoupon;
export const apiGetCoupons = getCoupons;
export const apiPutEditCoupon = editCoupon;
export const apiDeleteCoupon = deleteCoupon;
