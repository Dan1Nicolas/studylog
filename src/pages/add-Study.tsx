import { useState } from "react";
import type { StudySession } from "../types/StudySession"; 

export function AddStudy() {
     const [studies, setStudies] = useState<StudySession[]>([]);

  return (
    <>
      <h2>Adicionar nova sessão de estudos</h2>
       <p>Total de tarefas: {studies.length}</p>
      <p>Tempo de tarefas:</p>
    </>
  );
}

