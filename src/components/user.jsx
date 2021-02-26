import { useQuery } from "react-query";
import { List, Avatar } from "antd";
import axios from "axios";

function User() {
  const baseUrl = "https://devsgnr-voting-app-api.wl.r.appspot.com/";

  const { isLoading, isError, isFetching, data, error } = useQuery(
    "users",
    async () => {
      const { data } = await axios.get(baseUrl);
      return data;
    },
    { refetchInterval: 1000 * 30 }
  );

  return isLoading ? (
    <div>loading...</div>
  ) : isError ? (
    <div>An error occured: {error.message}</div>
  ) : isFetching ? (
    <div className="mt-5 pb-5">updating...</div>
  ) : (
    <div>
      <div className="App">
        <div className="mt-5 pb-5">
          <p>Updated every 30 seconds</p>
          <List
            header={<div>Voters</div>}
            bordered
            dataSource={data.voters}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar />}
                  title={<a href={`mailto:${item.email}`}>{item.email}</a>}
                  description={item.email}
                />
                <div>{String(item.hasVoted)}</div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default User;
