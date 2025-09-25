import type { StudySession } from "../types/study";

interface HomeProps {
    study: StudySession[];
    
}

export function Home({ study }: HomeProps) {
    return (
        <>
            <h2>Página Inicial - Estudos</h2>
        </>
    )
}