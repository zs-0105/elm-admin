import request from '@/utils/request'


/**
 * 获取定位城市
 */

export const cityGuess = () => request.get('/v1/cities', {
  params: {
    type: 'guess'
  }
});

/**
 * 获取餐馆列表
 */

export const getResturants = data => request.get('/shopping/restaurants', {
  params: data
});

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => request.get('/shopping/restaurants/count');

/**
 * category 种类列表
 */

export const foodCategory = (latitude, longitude) => request.get('/shopping/v2/restaurant/category');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => request.post('/shopping/updateshop', data);

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => request.get('/v1/pois', {
  params: {
    type: 'search',
    city_id: cityid,
    keyword: value
  }
});

/**
 * 删除餐馆
 */

export const deleteResturant = restaurant_id => request.delete('/shopping/restaurant/' + restaurant_id);

/**
 * 添加商铺
 */

export const addShop = data => request.post('/shopping/addShop', data);
