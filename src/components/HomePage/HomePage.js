import React from 'react';
// 使用 react-router 的 Link 當做超連結，傳送 userId 當作 query
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const HomePage = ({
  userId,
  actions,
}) => (
  <div>
    <TextField
      hintText="Please Key in your Github User Id."
      onChange={actions.onChangeUserId}
    />
    <Link to={{ 
      pathname: '/result',
      query: { userId: userId },
    }}>
      <RaisedButton label="Submit" onClick={() => (actions.onSubmitUserId(userId))} primary={true}/>
    </Link>
  </div>
);

export default HomePage;
