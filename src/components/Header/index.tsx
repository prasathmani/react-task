import { PageHeader, Tag, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { getLoginAction } from "../../actions/dashboard";
import { GET_LOGIN } from "../../actions/types";

const Header = () => {
  const authInfo = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();
  const { auth } = authInfo;

  const handleLogin = () => {
    if (auth?.name) {
      dispatch({
        type: GET_LOGIN,
        payload: [],
      });
    } else {
      dispatch(getLoginAction());
    }
  };

  return (
    <PageHeader
      title={auth?.name || "Hi"}
      className="site-page-header"
      subTitle={"Welcome to Infra Cloud"}
      tags={<Tag color="blue">Online</Tag>}
      extra={[
        <Button key="1" type="primary" onClick={handleLogin}>
          {auth?.name ? "Logout" : "Login"}
        </Button>,
      ]}
      avatar={{
        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
      }}
    />
  );
};

export default Header;
