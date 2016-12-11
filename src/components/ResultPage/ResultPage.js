import React from 'react';
import GithubBox from '../../components/GithubBox';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const ResultPage = ({
  location,
  data,
  spinnerVisible,
}) => (
  <div>
    {(spinnerVisible ?
    <RefreshIndicator
      percentage={0}
      size={40}
      left={10}
      top={0}
      status="loading"
      style={style.refresh}
    />
    :
     <GithubBox data={data} userId={location.query.userId} />
    )}
  </div>
);

export default ResultPage;
