const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  avatar: state => state.user.adminInfo.avatar,
  name: state => state.user.adminInfo.user_name
}
export default getters
