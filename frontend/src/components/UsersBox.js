export default function UserBox({ name, password, id }) {
    return (
        <article>
            <h3>{name}</h3>
            <p>{password}</p>
            <p>{id}</p>
        </article>
    )
}