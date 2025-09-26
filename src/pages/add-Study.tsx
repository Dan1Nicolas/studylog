import { useCallback } from "react";
import { StudyForm } from "../components/Study-form";
import type { StudySession } from "../types/study";

interface AddStudyProps {
  sessions: StudySession[];
  onAddSession: (session: StudySession) => void;
}

export function AddStudy({ sessions, onAddSession }: AddStudyProps) {
  const totalMinutes = sessions.reduce((sum, s) => sum + s.minutes, 0);

  const handleAddSession = useCallback(
    (session: StudySession) => {
      onAddSession(session);
    },
    [onAddSession]
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">Adicionar nova sessão de estudos</h2>
      <p className="flex justify-center items-center font-medium p-1">Total de sessões: {sessions.length}</p>
      <p className="flex justify-center items-center font-medium p-1">Total de minutos estudados: {totalMinutes}</p>

      <StudyForm onAddSession={handleAddSession} />

      {sessions.length > 0 && (
        <ul className="mt-4 border border-gray-500 p-2 rounded-md font-medium">
          {sessions.map((s) => (
            <li key={s.id}>
              {s.subject} — {s.minutes} min em {new Date(s.date).toLocaleDateString("pt-BR")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
