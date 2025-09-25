import type { StudySession } from "../types/study.ts";
import { Link } from "react-router-dom";

interface StudyCardProps {
    study: StudySession
}

export default function StudyCard({ study }: StudyCardProps) {
    return (
        <div>
            <p>{study.id}</p>
            <p>Minutos: {study.minutes} min</p>
            <p>Data: {study.date}</p>
            <p>Notas: {study.notes}</p>
        </div>
    )
}