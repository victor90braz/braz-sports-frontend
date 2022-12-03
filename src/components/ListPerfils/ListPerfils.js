import { useSelector } from "react-redux";
import Perfil from "../Perfil/Perfil";

const ListPerfils = () => {
  const { allPlayers } = useSelector((status) => status.player);

  return (
    <>
      <h3>All Perfils</h3>

      {allPlayers.map((getUser, keyUser) => (
        <Perfil user={getUser} key={keyUser} />
      ))}
    </>
  );
};

export default ListPerfils;
