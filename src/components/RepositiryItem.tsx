interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem (props: RepositoryItemProps) {
    return (
        <li className="card">
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a className="btn" href={props.repository.html_url}>
                Acessar
            </a>
        </li>
    )
}