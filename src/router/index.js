import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'el-icon-s-home'
      }
    }]
  },
  {
    path: '/data',
    name: "Data",
    component: Layout,
    meta: {
      title: '数据管理',
      icon: 'el-icon-document'
    },
    children: [{
        path: "userList",
        name: "userList",
        component: () => import('../views/dataInfo/userList.vue'),
        meta: {
          title: '用户列表'
        }
      }, {
        path: "shopList",
        name: "shopList",
        component: () => import('../views/dataInfo/shopList.vue'),
        meta: {
          title: '商家列表'
        }
      },
      {
        path: "foodList",
        name: "foodList",
        component: () => import('../views/dataInfo/foodList.vue'),
        meta: {
          title: '食品列表'
        }
      },
      {
        path: "orderList",
        name: "orderList",
        component: () => import('../views/dataInfo/orderList.vue'),
        meta: {
          title: '订单列表'
        }
      },
      {
        path: "adminList",
        name: "adminList",
        component: () => import('../views/dataInfo/adminList.vue'),
        meta: {
          title: '管理员列表'
        }
      },
    ]
  },

  {
    path: '/add',
    name: "Add",
    component: Layout,
    meta: {
      title: '添加数据',
      icon: 'el-icon-plus'
    },
    children: [{
        path: 'addshop',
        name: 'addshop',
        component: () => import('../views/add/addShop.vue'),
        meta: {
          title: '添加商铺'
        }
      },
      {
        path: 'addgoods',
        name: 'addgoods',
        component: () => import('../views/add/addGoods.vue'),
        meta: {
          title: '添加商品'
        }
      }
    ]
  },
  {
    path: '/chart',
    name: "chart",
    component: Layout,
    meta: {
      title: '图表',
      icon: 'el-icon-pie-chart'
    },
    children: [{
      path: 'userDistribution',
      name: 'userDistribution',
      component: () => import('../views/charts/userDistribution.vue'),
      meta: {
        title: '用户分布',
        icon: 'el-icon-user'
      }
    }]
  },
  {
    path: '/set',
    name: "set",
    component: Layout,
    meta: {
      title: '设置',
      icon: 'el-icon-setting'
    },
    children: [{
      path: 'adminSet',
      name: 'adminSet',
      component: () => import('../views/set/adminSet.vue'),
      meta: {
        title: '管理员设置',
        icon: 'el-icon-setting'
      }
    }]
  },
  {
    path: '/explain',
    name: "explain",
    component: Layout,
    meta: {
      title: '说明',
      icon: 'el-icon-warning'
    },
    children: [{
      path: 'explain',
      name: 'explain',
      component: () => import('../views/explain.vue'),
      meta: {
        title: '说明',
        icon: 'el-icon-warning'
      }
    }]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
