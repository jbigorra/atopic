import * as React from "react";
import { FormEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ELoginType, useAuth } from "~modules/login";

export default function LoginView() {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation<{ from: { pathname: string } }>();

  let { from } = location.state || { from: { pathname: "/" } };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const loginType = form.get("type") as ELoginType;
    auth
      .login(loginType)
      .then(() => history.replace(from));
  }

  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="is-fullwidth">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control">
                <button
                  id="google-auth"
                  name="google-auth"
                  className="input"
                  type="submit"
                  data-type={ELoginType.GOOGLE}
                >
                  GOOGLE
                </button>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  id="facebook-auth"
                  name="facebook-auth"
                  className="input"
                  type="submit"
                  data-type={ELoginType.FACEBOOK}
                >
                  FACEBOOK
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
