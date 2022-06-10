import { RepositoryItem } from "./RepositiryItem";
import api from "../api/fakeApi.json"

import "../styles/repositories.scss";

//const repository = ["unform","Forms in React","https://github/unform/unform"] Acabei fazendo uma fake api para esses dados

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repositoryName={api.name} repositoryDescription={api.description} repositoryLink={api.link}/>
                <RepositoryItem repositoryName={api.name} repositoryDescription={api.description} repositoryLink={api.link}/>
                <RepositoryItem repositoryName={api.name} repositoryDescription={api.description} repositoryLink={api.link}/>
            </ul>
        </section>
    )
} 