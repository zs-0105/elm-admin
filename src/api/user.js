import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/admin/signout',
    method: 'get'
  })
}

/**
 * 获取用户列表
 */

export const getUserList = data => request.get('/v1/users/list', {
  params: data
});

/**
 * 获取用户分布信息
 */

export const getUserCity = () => request.get('/v1/user/city/count');
