export function RepositoryItem (props) {
    return (
        <li>
            <strong>{props.repositoryName}</strong>
            <p>{props.repositoryDescription}</p>

            <a href="">
                {props.repositoryLink}
            </a>
        </li>
    )
}