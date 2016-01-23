import { connect } from 'react-redux';
import createNavigation from 'shared/components/navigation';

const createContainer = React => ({ nav, children }) => {
  const Navigation = createNavigation(React);

  return (
    <div>
      <Navigation nav={nav} />
      {children}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { nav } = state;
  return { nav };
};

// Connect props to component
export default React => {
  const Container = createContainer(React);
  return connect(mapStateToProps)(Container);
};
