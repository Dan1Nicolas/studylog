import type { StudySession } from "../types/study.ts";
import { Link } from "react-router-dom";

interface StudyCardProps {
    study: StudySession
}

export default function StudyCard({ study }: StudyCardProps) {
    return (
        <div className="p-5 gap-1 border border-gray-400 rounded bg-white shadow hover:shadow-md 
      transition flex flex-col w-2xl mx-auto items-start">
            <p className="text-2xl font-bold mb-4">
              <Link to={`/session/${study.id}`} className="text-blue-500 hover:underline">
                {study.subject}
              </Link>
            </p>
            <p className="font-semibold">Minutos: {study.minutes} min</p>
            <p className="font-semibold">Data: {new Date(study.date).toLocaleDateString()}</p>
            {study.notes?.trim() && <p className="font-semibold">Notas: {study.notes}</p>}
        </div>
    )
}