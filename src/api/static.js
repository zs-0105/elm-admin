import request from '@/utils/request'
/**
 * api请求量
 */

export const apiCount = date => request.get('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => request.get('/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => request.get('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => request.get('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => request.get('/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => request.get('/statis/admin/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => request.get('/admin/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => request.get('/admin/count');
/**
 * 获取用户数量
 */

export const getUserCount = data => request.get('/v1/users/count', data);

/**
 * 获取订单数量
 */

export const getOrderCount = data => request.get('/bos/orders/count', data);
