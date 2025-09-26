import StudyCard from "../components/study-card";
import type { StudySession } from "../types/study";
import { useMemo } from "react";

interface HomeProps {
    sessions: StudySession[];
    
}

export default function Home({ sessions }: HomeProps) {

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
            <h2 className="font-bold text-black text-2xl p-3 flex justify-center items-center ">Página Inicial - Estudos</h2>

            <div className="font-medium text-black flex flex-col justify-center items-center gap-2 p-2">
                <p>Total de sessões: {totalSessions}</p>
                <p>Total de minutos: {totalMinutes}</p>
                <p>Média de minutos por sessão: {averageMinutes}</p>
            </div>

            {sessions.length === 0
            ? (<p className="flex justify-center items-center p-2 m-auto w-md bg-red-600 text-white font-medium rounded-md">Nenhuma sessão de estudo cadastrada ainda</p>)
            : (sessions.map(session => (
                <StudyCard study={session} key={session.id} />
            )))
        }
        </>
    )
}