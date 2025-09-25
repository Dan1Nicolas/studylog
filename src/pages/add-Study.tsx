import { StudyForm } from "../components/Study-form";
import type { StudySession } from "../types/study";

interface AddStudyProps {
  sessions: StudySession[];
  onAddSession: (session: StudySession) => void;
}

export function AddStudy({ sessions, onAddSession }: AddStudyProps) {
  const totalMinutes = sessions.reduce((sum, s) => sum + s.minutes, 0);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Adicionar nova sessão de estudos</h2>
      <p>Total de sessões: {sessions.length}</p>
      <p>Total de minutos estudados: {totalMinutes}</p>

      <StudyForm onAddSession={onAddSession} />

      {sessions.length > 0 && (
        <ul className="mt-4">
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
