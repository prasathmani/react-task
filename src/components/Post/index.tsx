import React, { useEffect, useState } from "react";
import { Card, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { getAllPostsAction } from "../../actions/dashboard";
import { paginate } from "../../common/utils";

const PAGENATION_COUNT = process?.env?.REACT_APP_PAGENATION_COUNT;

const PostCard = () => {
  const authInfo = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch();
  const { posts } = authInfo;
  const pages = posts?.length ? paginate(posts, PAGENATION_COUNT) : [];

  const [currentPage, setPage] = useState({
    current: 1,
    data: pages[0],
  });

  const handleChange = (no) => {
    setPage({
      current: no,
      data: pages[no - 1],
    });
  };

  useEffect(() => {
    dispatch(getAllPostsAction());
  }, []); // eslint-disable-line

  useEffect(() => {
    setPage({
      current: currentPage.current,
      data: pages[0],
    });
  }, [posts]); // eslint-disable-line

  return (
    <>
      <div className="flex flex-wrap">
        {currentPage.data?.map((item) => (
          <Card title={item?.title} style={{ width: 320 }} key={item.id} className="m-2">
            <p>{item?.body}</p>
          </Card>
        ))}
      </div>
      <Pagination
        current={currentPage.current}
        onChange={handleChange}
        total={50}
      />
    </>
  );
};

export default PostCard;
