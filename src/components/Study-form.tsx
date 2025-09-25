import { useState } from "react";

export function StudyForm() {
  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form>
      <label htmlFor="Study-id">ID da matéria</label>
      <input
        type="text"
        id="Study-id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID da Matéria"
      />

      <label htmlFor="Study-subject">Nome da Matéria</label>
      <input
        type="text"
        id="Study-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Nome da Matéria"
      />

      <label htmlFor="Study-duration">Duração</label>
      <input
        type="number"
        id="Study-duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duração (minutos)"
      />

      <label htmlFor="Study-date">Data</label>
      <input
        type="date"
        id="Study-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Dia do Estudo"
      />

      <label htmlFor="Study-notes">Descrição</label>
      <input
        type="text"
        id="Study-notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Descrição"
      />

      <button type="submit">Adicionar Estudo</button>
    </form>
  );
}
