import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const CompanyInfo = lazy(() => import("../presentation/CompanyInfo"));
const CompanyProfile = lazy(() => import("../presentation/CompanyProfile"));

const routes = [
  {
    id: "company_info",
    children: <CompanyInfo />,
    path: "/",
  },
  {
    id: "company_details",
    children: <CompanyProfile />,
    path: "/company-details/:id",
  },
];

const Routing = () => {
  return (
      <Routes>
        {routes.map((data) => (
          <Route key={data?.id} path={data?.path} element={data?.children} />
        ))}
      </Routes>
  );
};

export default Routing;
