import { useState } from "react";
import type { StudySession } from "../types/study";

interface StudyFormProps {
  onAddSession: (session: StudySession) => void;
}

export function StudyForm({ onAddSession }: StudyFormProps) {
  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState<number>(0);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newSession: StudySession = {
      id,
      subject,
      minutes,
      date,
      notes: notes || undefined,
    };

    onAddSession(newSession);
    setId("");
    setSubject("");
    setMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-white border border-gray-400 hover:border-blue-600 p-3 rounded-2xl">
      <label className="font-bold">ID da Matéria</label>
      <input
        className="flex p-1 rounded-md border border-gray-400 hover:border-blue-600"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID da Matéria"
        required
      />

      <label className="font-bold">Nome da Matéria</label>
      <input
        className="bg-white flex p-1 rounded-md border border-gray-400 hover:border-blue-600"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Nome da Matéria"
        required
      />

      <label className="font-bold">Duração (minutos)</label>
      <input
        className="bg-white flex p-1 rounded-md border border-gray-400 hover:border-blue-600"
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        placeholder="Duração"
        required
      />

      <label className="font-bold">Data</label>
      <input
        className="bg-white flex p-1 rounded-md border border-gray-400 hover:border-blue-600"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label className="font-bold">Notas (opcional)</label>
      <input
      className="bg-white flex p-1 rounded-md border border-gray-400 hover:border-blue-600"
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notas"
      />

      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Adicionar Sessão
      </button>
    </form>
  );
}
