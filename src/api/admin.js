import request from '../utils/request'


/**
 * 管理员列表
 */

export const adminList = data => request.get('/admin/all', {
  params: data
});

/**
 * 管理员数量
 */

export const adminCount = () => request.get('/admin/count');
