
import React, { Suspense } from "react";
import Headers from "./Header";

import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = (props) => {
  const { pathname } = useLocation();

  return (
    <div>
      <Headers />
      <div >
        <div>
          <div>
            <Suspense fallback="loading">
              <Outlet></Outlet>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
