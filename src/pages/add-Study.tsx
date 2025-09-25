import { useState, useCallback, useMemo } from "react";
import { StudyForm } from "../components/Study-form";
import type { StudySession } from "../components/Study-form";

export function AddStudy() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const addSession = useCallback((session: StudySession) => {
    setSessions((prev) => [...prev, session]);
  }, []);

const totalSessions = useMemo(() => {
  return sessions.length;
}, [sessions]);

const totalMinutes = useMemo(() => {
  let totalMinutes: number = 0;

  sessions.forEach((session) => {
    totalMinutes += session.minutes;
  });

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}min`;
}, [sessions]);

  return (
    <>
      <h2>Adicionar nova sessão de estudos</h2>
      <p>Total de sessões: {totalSessions}</p>
      <p>Tempo total estudado: {totalMinutes} min</p>

      <StudyForm onAddSession={addSession} />
        
    </>
  );
}

