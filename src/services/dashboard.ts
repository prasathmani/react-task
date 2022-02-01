const API_URL = process?.env?.REACT_APP_API_ENDPOINT;

const getLoginService = async () => {
  const response = await fetch(`${API_URL}/users/1`);
  const userData = await response.json();
  return userData;
};

const getAllPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const userData = await response.json();
  return userData;
};

const get = async (id) => {
  return {};
};

const DashboardService = {
  getLoginService,
  get,
  getAllPosts,
};

export default DashboardService;
