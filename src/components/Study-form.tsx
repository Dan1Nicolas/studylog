import { useState } from "react";

export interface StudySession {
  id: string;
  subject: string;
  minutes: number;
  date: string;
  notes?: string;
}

interface StudyFormProps {
  onAddSession: (session: StudySession) => void;
}

export function StudyForm({ onAddSession }: StudyFormProps) {
  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState<number>(0);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newSession: StudySession = {
      id,
      subject,
      minutes: duration,
      date,
      notes: notes || undefined,
    };

    onAddSession(newSession);
    setId("");
    setSubject("");
    setDuration(0);
    setDate("");
    setNotes("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Study-id">ID da matéria</label>
      <input
        type="text"
        id="Study-id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID da Matéria"
        required
      />

      <label htmlFor="Study-subject">Nome da Matéria</label>
      <input
        type="text"
        id="Study-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Nome da Matéria"
        required
      />

      <label htmlFor="Study-duration">Duração (minutos)</label>
      <input
        type="number"
        id="Study-duration"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        placeholder="Duração (minutos)"
        required
      />

      <label htmlFor="Study-date">Data</label>
      <input
        type="date"
        id="Study-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Dia da tarefa"
      />

      <label htmlFor="Study-notes">Descrição</label>
      <input
        type="text"
        id="Study-notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Descrição"
      />

      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}
