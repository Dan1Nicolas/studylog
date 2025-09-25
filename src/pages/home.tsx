import StudyCard from "../components/study-card";
import type { StudySession } from "../types/study";

interface sessions {
    study: StudySession[];
    
}

export function Home({}: sessions) {
    return (
        <>
            <h2>Página Inicial - Estudos</h2>
            {sessions.map(session => (
                <StudyCard study={session} key={session.id} />
                ))}
        </>
    )
}