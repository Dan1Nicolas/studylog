import { useState, useCallback, useMemo } from "react";
import { StudyForm } from "../components/Study-form";
import type { StudySession } from "../types/study";

export function AddStudy() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const addSession = useCallback((session: StudySession) => {
    setSessions((prev) => [...prev, session]);
  }, []);

  const totalSessions = useMemo(() => sessions.length, [sessions]);

  const totalMinutes = useMemo(() => {
    return sessions.reduce((sum, session) => sum + session.minutes, 0);
  }, [sessions]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Adicionar nova sessão de estudos</h2>
      <p>Total de sessões: {totalSessions}</p>
      <p>Total de minutos estudados: {totalMinutes}</p>

      <StudyForm onAddSession={addSession} />

      {sessions.length > 0 && (
        <ul className="mt-4">
          {sessions.map((s) => (
            <li key={s.id}>
              {s.subject} — {s.minutes} min em {new Date(s.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
