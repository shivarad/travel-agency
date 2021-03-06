import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
const ResortsListPage = lazy(() => import("./pages/ResortsPage/Resorts"));
const ResortDetailPage = lazy(() => import("./pages/ResortDetailsPage/ResortDetail"));
const BucketPage = lazy(() => import("./pages/BucketPage/Bucket"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFound"));

function App() {
  return (
    <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<ResortsListPage />} />
          <Route path="/resorts/:ResortId" element={<ResortDetailPage />} />
          <Route path="/bucket" element={<BucketPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
