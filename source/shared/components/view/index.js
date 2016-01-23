import { connect } from 'react-redux';
import createTitle from 'shared/components/title';
import createTestData from 'shared/components/test-data';

const createApp = React => ({ dispatch, books, title }) => {
  const Title = createTitle(React);
  const DataComponent = createTestData(React);
  return (
    <div>
      <Title title={ title } />
      <DataComponent dispatch={ dispatch } books={ books } />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { title, books } = state;
  return { title, books };
};

// Connect props to component
export default React => {
  const App = createApp(React);
  return connect(mapStateToProps)(App);
};
