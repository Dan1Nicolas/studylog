import StudyCard from "../components/study-card";
import type { StudySession } from "../types/study";
import { useMemo } from "react";

interface HomeProps {
    sessions: StudySession[];
    
}

export function Home({ sessions }: HomeProps) {

    const totalSessions = useMemo(() => {
        return sessions.length;
    }, [sessions]);

    const totalMinutes = useMemo(() => {
        return sessions.reduce((soma, session) => soma + session.minutes, 0);
    }, [sessions]);

    const averageMinutes = useMemo(() => {
        if (sessions.length === 0) return 0;
        return totalMinutes / totalSessions;
    }, [sessions, totalMinutes, totalSessions])

    return (
        <>
            <h2>Página Inicial - Estudos</h2>
            <p>Total de sessões: {totalSessions}</p>
            <p>Total de minutos: {totalMinutes}</p>
            <p>Média de minutos por sessão: {averageMinutes}</p>

            {sessions.length === 0
            ? (<p>Nenhuma sessão de estudo cadastrada ainda</p>)
            : (sessions.map(session => (
                <StudyCard study={session} key={session.id} />
            )))
        }
        </>
    )
}