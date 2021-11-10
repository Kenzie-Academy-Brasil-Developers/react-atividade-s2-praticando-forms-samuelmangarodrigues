const Card = ({ users, isCad }) => {
  return (
    <div className="container">
      <div>
        <h1>Informações do usuário</h1>
        <strong>Nome: </strong>
        {users.name}
      </div>
      <div>
        <strong>Cidade: </strong>
        {users.country}
      </div>
      <div>
        <strong>Estado: </strong> {users.state}
      </div>
      <button onClick={isCad}>Sair</button>
      <div></div>
    </div>
  );
};
export default Card;
