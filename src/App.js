import React from "react";
import { connect } from "react-redux";
import { fetchLambda } from "./actions/apiActions";

function App(props) {
  const fetchInfo = () => props.fetchLambda();
  const ShowResponse = () => {
    if (props.loading) {
      return <pre>Loading</pre>;
    } else if (!!props.error) {
      return <pre>Error: {props.error}</pre>;
    } else {
      return <pre>{JSON.stringify(props.data)}</pre>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="button is-large is-info" onClick={() => fetchInfo()}>
          FETCH API
        </button>
        <br />
        <ShowResponse />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.fetchLambda.data,
  loading: state.fetchLambda.loading,
  error: state.fetchLambda.error,
  storeObject: state.fetchLambda,
});

const mapDispatchToProps = {
  fetchLambda,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
