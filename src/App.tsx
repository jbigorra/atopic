import { SearchBar } from "@components/forms/SearchBar";
import { Navbar } from "@components/navbar/Navbar";
import * as React from "react";
import './styles.scss';


function App() {
  return (
    <>
      <Navbar />
      <div className="container is-fluid">
        <div className="columns">
          <div className="column">
            <SearchBar />
          </div>
          <div className="column is-2 is-mobile">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Software Craftmanship</p>
              </div>
              <div className="card-content">
                <div className="content">
                  Saved items: 5
                  <br></br>
                  Tags: #SOFTWARE #DDD #TDD
                </div>
              </div>
              <div className="card-footer">
                <button className="button is-link is-fullwidth is-square">Edit</button>
              </div>
            </div>
          </div>
          <div className="column is-2 is-mobile">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Software Craftmanship</p>
              </div>
              <div className="card-content">
                <div className="content">
                  Saved items: 5
                  <br></br>
                  Tags: #SOFTWARE #DDD #TDD
                </div>
              </div>
              <div className="card-footer">
                <button className="button is-link is-fullwidth is-square">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
