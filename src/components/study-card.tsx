import type { StudySession } from "../types/study.ts";

interface StudyCardProps {
    study: StudySession
}

export default function StudyCard({ study }: StudyCardProps) {
    return (
        <div>
            <p>{study.subject}</p>
            <p>Minutos: {study.minutes} min</p>
            <p>Data: {study.date}</p>
            <p>Notas: {study.notes}</p>
        </div>
    )
}