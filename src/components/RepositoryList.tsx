import { ReposirotyItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  html_url: string;
  description: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos").then(
      (response) => response.json().then((data) => setRepositories(data))
      /*.then((data) => setRepositories(data))*/
    );
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <ReposirotyItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
