import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositiryItem";
import axios from "axios";

import "../styles/repositories.scss";

// https://api.github.com/users/SamuelBalena/repos

export function RepositoryList(){
    const [ repositories, setRepositories ] = useState([])

    useEffect(()=>{
        axios.get("https://api.github.com/users/SamuelBalena/repos")
            .then(response => {
                setRepositories(response.data)
            })
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              {repositories.map(repository => {
                return <RepositoryItem  key={repository.name} repository = {repository} />
              })}
            </ul>
        </section>
    )
} 