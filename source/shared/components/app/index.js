import { connect } from 'react-redux';
import createTitle from 'shared/components/title';
import createHelloWorld from 'shared/components/helloworld';

const createApp = React => ({ title }) => {
  const Title = createTitle(React);
  const HelloWorld = createHelloWorld(React);

  return (
    <div>
      <Title title={ title } />
      <HelloWorld />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { title } = state;
  return { title };
};

// Connect props to component
export default React => {
  const App = createApp(React);
  return connect(mapStateToProps)(App);
};
