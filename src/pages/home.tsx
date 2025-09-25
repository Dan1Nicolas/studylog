import StudyCard from "../components/study-card";
import type { StudySession } from "../types/study";

interface HomeProps {
    sessions: StudySession[];
    
}

export function Home({ sessions }: HomeProps) {
    return (
        <>
            <h2>Página Inicial - Estudos</h2>

            {sessions.length === 0
            ? (<p>Nenhuma sessão de estudo cadastrada ainda</p>)
            : (sessions.map(session => (
                <StudyCard study={session} key={session.id} />
            )))
        }
        </>
    )
}