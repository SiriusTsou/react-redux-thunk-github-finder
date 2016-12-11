import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import * as dataActions from '../../reducers/data/dataActions';

const mapStateToProps = (state) => ({
  // 從 store 取得 data state
  userId: state.getIn(['data', 'userId']),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(dataActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
