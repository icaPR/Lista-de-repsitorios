interface RepositoryItrmProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function ReposirotyItem(props: RepositoryItrmProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar</a>
    </li>
  );
}
