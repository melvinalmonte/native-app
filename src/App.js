import React from "react";
import { connect } from "react-redux";
import { fetchLambda } from "./actions/apiActions";
import { fetchFast } from "./actions/fastActions";
import { ToastContainer, Slide } from "react-toastify";

function App(props) {
  const fetchApiHandler = () => props.fetchLambda();
  const fetchFastHandler = () => props.fetchFast();

  return (
    <div className="App">
      <header className="App-header">
        <div className="columns">
          <div className="column">
            <button
              className="button is-large is-info is-rounded"
              onClick={() => fetchApiHandler()}
            >
              FETCH API
            </button>
          </div>
          <did className="column">
            <button
              className="button is-large is-info is-rounded"
              onClick={() => fetchFastHandler()}
            >
              FETCH FAST API
            </button>
          </did>
        </div>
        <br />
        {props.loading ? (
          <span className="loader is-loading" />
        ) : (
          <pre>{JSON.stringify(props.data)}</pre>
        )}
        <br />
        {props.fastLoading ? (
          <span className="loader is-loading" />
        ) : (
          <pre>{JSON.stringify(props.fastData)}</pre>
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
  fastData: state.fetchFast.data,
  fastLoading: state.fetchFast.loading,
  fastError: state.fetchFast.error,
});

const mapDispatchToProps = {
  fetchLambda,
  fetchFast,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
