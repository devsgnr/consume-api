import Text from "antd/lib/typography/Text";
import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import "../App.css";

const Form: React.FC<{}> = () => {
  const voterUrl = "https://api-demo-voting.herokuapp.com/addVoters";

  const [voterEmail, setVoterEmail] = useState("");

  const mutation: any = useMutation((newVoter) =>
    axios.post(voterUrl, newVoter)
  );

  return (
    <div>
      <p>
        Send your email to voter database ~{" "}
        {mutation.isLoading ? <span>adding voter</span> : null}
        {mutation.isSuccess ? <Text type="success">added voter!</Text> : null}
      </p>
      <Input
        placeholder="Enter email address"
        onChange={(e) => setVoterEmail(e.target.value)}
      ></Input>
      <Text type="danger">
        {mutation.isError ? `Error occured: ${mutation.error.message}` : null}{" "}
      </Text>
      <Button
        className="mt-2"
        type="primary"
        onClick={() => mutation.mutate({ email: voterEmail })}
      >
        Send Email
      </Button>
    </div>
  );
};

export default Form;
