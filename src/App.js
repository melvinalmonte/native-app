import React from "react";
import { connect } from "react-redux";
import { fetchLambda } from "./actions/apiActions";
import { ToastContainer, Slide } from "react-toastify";

function App(props) {
  const fetchInfo = () => props.fetchLambda();

  return (
    <div className="App">
      <header className="App-header">
        <button className="button is-large is-info" onClick={() => fetchInfo()}>
          FETCH API
        </button>
        <br />
        {props.loading ? (
          <span className="loader is-loading" />
        ) : (
          <pre>{JSON.stringify(props.data)}</pre>
        )}
        <ToastContainer transition={Slide} />
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
