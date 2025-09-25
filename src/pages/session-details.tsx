import { useParams, Link } from "react-router-dom";
import type { StudySession } from "../types/study";

interface SessionDetailsProps {
  sessions: StudySession[];
}

export default function SessionDetails({ sessions }: SessionDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const session = sessions.find((s) => s.id === id);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-xl font-bold text-red-500">Sessão não encontrada</h2>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">{session.subject}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Duração:</span> {session.minutes} minutos
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Data:</span> {new Date(session.date).toLocaleDateString()}
      </p>
      {session.notes && (
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Anotações:</span> {session.notes}
        </p>
      )}
      <Link
        to="/"
        className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Voltar
      </Link>
    </div>
  );
}
