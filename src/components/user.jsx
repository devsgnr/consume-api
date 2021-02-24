import { useQuery, useQueryClient } from 'react-query';
import { Button, Input, List, Avatar } from 'antd';
import { useState } from 'react';
import axios from 'axios';

function User() {
    const baseUrl = "https://devsgnr-voting-app-api.wl.r.appspot.com/";
    const voterUrl = "https://api-demo-voting.herokuapp.com/addVoters";

    const [voterEmail, setVoterEmail] = useState('');
  
    const queryClient = useQueryClient();
  
    const { isLoading, isError, data, error } = useQuery('users', async () => {
      const { data } = await axios.get(baseUrl);
      return data;
    });
    
    const addVoter = () => {
        console.log({ email: voterEmail });
        axios.post(voterUrl, {email: voterEmail})
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    }

    if(isLoading) {
      return <span>fetching new lists...</span>
    }
  
    if(isError) {
      return <span>Error: {error.message}</span>
    }
  
    return (
      <div>
        <div className="App">
            <div>
                <Input onChange={(e) => setVoterEmail(e.target.value)}></Input>
                <Button type="primary" onClick={addVoter}>Send Email</Button>
            </div>

            <div className="mt-3">
                <List
                    header={<div>Voters</div>}
                    bordered
                    dataSource={data.voters}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                            avatar={
                                <Avatar />
                            }
                            title={<a href={`mailto:${item.email}`}>{item.email}</a>}
                            description={item.email}
                            />
                            <div>hasVoted ~ {new String(item.hasVoted)}</div>
                        </List.Item>
                    )}
                />
            </div>
        </div>
      </div>
    )
  }

  export default User;