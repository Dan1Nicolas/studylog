import type { StudySession } from "../types/study.ts";
import { Link } from "react-router-dom";

interface StudyCardProps {
    study: StudySession
}

export default function StudyCard({ study }: StudyCardProps) {
    return (
        <div>
            <p><Link to={"/session/" + study.id}>{study.subject}</Link></p>
            <p>Minutos: {study.minutes} min</p>
            <p>Data: {study.date}</p>
            {study.notes?.trim() && <p>Notas: {study.notes}</p>}
        </div>
    )
}