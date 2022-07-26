import request from '@/utils/request'

/**
 * 获取食品列表
 */

export const getFoods = data => request.get('/shopping/v2/foods', {
  params: data
});

/**
 * 获取食品数量
 */

export const getFoodsCount = data => request.get('/shopping/v2/foods/count', {
  params: data
});

/**
 * 获取menu列表
 */

export const getMenu = data => request.get('/shopping/v2/menu', {
  params: data
});

/**
 * 更新食品信息
 */

export const updateFood = data => request.post('/shopping/v2/updatefood', data);

/**
 * 删除食品
 */

export const deleteFood = food_id => request.delete('/shopping/v2/food/' + food_id);

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => request.get('/shopping/restaurant/' + restaurant_id);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => request.get('/shopping/v2/menu/' + category_id);

/**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => request.get('/shopping/getcategory/' + restaurant_id);

/**
 * 添加食品种类
 */

export const addCategory = data => request.post('/shopping/addcategory', data);

/**
 * 添加食品
 */

export const addFood = data => request.post('/shopping/addfood', data);
