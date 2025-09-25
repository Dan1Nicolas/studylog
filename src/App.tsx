import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudyForm } from "./components/Study-form";
import { Home } from "./pages/home";
import { NotFound } from "./components/not-found";
import { useState } from "react";
import type { StudySession } from "./types/study";
import { Layout } from "./components/layout";
import SessionDetails from "./pages/session-details";


function App() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home sessions={sessions} />} />
          <Route path="add" element={<StudyForm />} />
          <Route
            path="session/:id"
            element={<SessionDetails sessions={sessions} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
