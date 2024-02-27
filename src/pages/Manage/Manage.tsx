import FormRegisterCategories from "../../components/FormRegisterCategories";
import FormRegisterGame from "../../components/FormRegisterGame";
import MenuAdmIsLogged from "../../components/MenuAdmIsLogged";
import MenuIsLogged from "../../components/MenuIsLogged";

const Manage = () => {
  const userInStorage = localStorage.getItem("loggedUser");
  let user;
  if (userInStorage) {
    user = JSON.parse(userInStorage);
  }

  return (
    <div className="manage">
      {user.isAdm ? <MenuAdmIsLogged /> : <MenuIsLogged />
      //se o usuario for um administrador eu renderizo um componente
      //se não for eu renderizo outro
      }
      <h2 className="manage__title"></h2>
      <FormRegisterGame />
      <FormRegisterCategories />
    </div>
  );
};

export default Manage;
