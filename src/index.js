import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login";
import Pagination from "./pages/Paginate-rtl";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="pagination" element={<Pagination />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
