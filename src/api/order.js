import request from '../utils/request'

/**
 * 获取订单列表
 */
export const getOrderList = data => request.get('/bos/orders', {
  params: data
})

/**
 * 获取订单数量
 */

export const getOrderCount = data => request.get('/bos/orders/count', {
  params: data
});

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => request.get('/shopping/restaurant/' + restaurant_id);

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => request.get('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => request.get('/v1/addresse/' + address_id);
