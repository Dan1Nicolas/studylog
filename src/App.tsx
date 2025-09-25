import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./components/not-found";
import { useState } from "react";
import type { StudySession } from "./types/study";
import { Layout } from "./components/layout";
import SessionDetails from "./pages/session-details";
import { AddStudy } from "./pages/add-Study";

function App() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const handleAddSession = (session: StudySession) => {
    setSessions((prev) => [...prev, session]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home sessions={sessions} />} />
          <Route path="add" element={<AddStudy sessions={sessions} onAddSession={handleAddSession} />} />
          <Route path="session/:id" element={<SessionDetails sessions={sessions} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
