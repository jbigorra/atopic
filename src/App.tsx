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
            <div className="field">
              <p className="control has-icons-left">
                <input className="input is-big is-primary" type="text" placeholder="Search..." />
                <span className="icon is-small is-left is-flex is-align-items-center is-justify-content-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
                    <path fill="#85D0CC" d="M13.0002 12.9999C13.3907 12.6094 14.0239 12.6094 14.4144 12.9999L20.7072 19.2928C21.0977 19.6833 21.0977 20.3165 20.7072 20.707C20.3166 21.0975 19.6835 21.0975 19.2929 20.707L13.0002 14.4141C12.6096 14.0236 12.6096 13.3904 13.0002 12.9999Z" clipRule="evenodd" fillRule="evenodd" strokeWidth="1.5"></path>
                    <path fill="#98EED5" d="M14.2426 5.75736C16.5858 8.1005 16.5858 11.8995 14.2426 14.2426C11.8995 16.5858 8.1005 16.5858 5.75736 14.2426C3.41421 11.8995 3.41421 8.1005 5.75736 5.75736C8.1005 3.41421 11.8995 3.41421 14.2426 5.75736Z" strokeWidth="1.5"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fcffff" d="M6.46439 10.707C6.46439 10.707 6.46439 11.4141 7.52505 12.4748C8.58571 13.5354 9.29282 13.5354 9.29282 13.5354"></path>
                  </svg>
                </span>
              </p>
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
