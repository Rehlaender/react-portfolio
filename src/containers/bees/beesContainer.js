import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addNewBee,
  changeBeePosition,
  changeBeeMood,
  changeBeeTimer
} from '../../actions/BeesActions';

import { beesDisplay } from './beesDisplay';

const mapStateToProps = state => ({
  bees: state.beesReducer.bees,
  lastId: state.beesReducer.bees.length
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us'),
      addNewBee: lastId => addNewBee(lastId),
      changeBeePosition: data => changeBeePosition(data),
      changeBeeMood: bee => changeBeeMood(bee),
      changeBeeTimer: bee => changeBeeTimer(bee)
    },
    dispatch
  );

export const BeesContainer = connect(mapStateToProps, mapDispatchToProps)(
  beesDisplay
);

export default BeesContainer;
