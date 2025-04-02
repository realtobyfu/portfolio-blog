import { ProjectsList } from '@/components/ProjectsList';

export default function ProjectsPage() {
    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {ProjectsList.map((project, idx) => (
                    <li key={idx}>
                        <img src={project.image} alt={project.name} />
                        <h2>{project.name}</h2>
                        <p>{project.skills}</p>
                        <a href={project.link}>View Live</a> |{' '}
                        <a href={project.github}>GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
