import { connect } from 'react-redux';
import ResultPage from '../../components/ResultPage';

const mapStateToProps = (state, ownProps) => ({
  // 從 store 取得 data state
  location: ownProps.location,
  spinnerVisible: state.getIn(['ui', 'spinnerVisible']),
  data: state.getIn(['data', 'data']),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPage);
