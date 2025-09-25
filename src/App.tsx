
import { AddStudy } from "./pages/add-Study";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudyForm } from "./components/Study-form";
import { Home } from './pages/home';
import { NotFound } from './components/not-found';
import { useState } from 'react';
import type { StudySession } from './types/study';


function App() {
  const [sessions, setSessions] = useState<StudySession[]>([])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home sessions={sessions} />}></Route>
        <Route path='/add' element={<StudyForm />}></Route>
        <Route path='/session/:id' element={<div>Detalhes</div>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;