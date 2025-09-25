import type { StudySession } from "../types/study";
import { Link } from "react-router-dom";

interface StudyCardProps {
    study: StudySession
}

export default function StudyCard({ study }: StudyCardProps) {
    return (
        <div className="p-4 mb-2 border rounded bg-white shadow hover:shadow-md transition">
            <p>
              <Link to={`/session/${study.id}`} className="text-blue-500 hover:underline">
                {study.subject}
              </Link>
            </p>
            <p>Minutos: {study.minutes} min</p>
            <p>Data: {new Date(study.date).toLocaleDateString()}</p>
            {study.notes?.trim() && <p>Notas: {study.notes}</p>}
        </div>
    )
}
