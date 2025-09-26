import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useState, Suspense } from "react";
import type { StudySession } from "./types/study";
import { Layout } from "./components/layout";

const Home = lazy(() => import("./pages/home"));
const AddStudy = lazy(() => import("./pages/add-Study"));
const SessionDetails = lazy(() => import("./pages/session-details"));
const NotFound = lazy(() => import("./components/not-found"));


function App() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const handleAddSession = (session: StudySession) => {
    setSessions((prev) => [...prev, session]);
  };

  return (
    <BrowserRouter>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home sessions={sessions} />} />
          <Route path="add" element={<AddStudy sessions={sessions} onAddSession={handleAddSession} />} />
          <Route path="session/:id" element={<SessionDetails sessions={sessions} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
