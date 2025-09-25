
import { AddStudy } from "../src/components/Study-form";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudyForm } from "./components/Study-form";
import { Home } from './pages/home';
import { NotFound } from './components/not-found';
import { useState } from 'react';
import type { StudySession } from './types/study';
import { Layout } from "./components/layout";

function App() {
  const [sessions, setSessions] = useState<StudySession[]>([])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home sessions={sessions} />}></Route>
        <Route path='/add' element={<StudyForm />}></Route>
        <Route path='/session/:id' element={<div>Detalhes</div>}></Route>
        <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;