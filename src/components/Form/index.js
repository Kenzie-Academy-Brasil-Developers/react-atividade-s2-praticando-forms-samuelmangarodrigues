import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
const Form = ({ setUsers, isCad }) => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .max(18, "Nome deve ter no máximo 18 caracteres"),
    email: yup.string().required("Email obrigatório").email(),
    password: yup.string().required("Senha obrigatória").min(8),
    passconfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas estão diferentes"),
    country: yup.string().required("Nome da cidade obrigatório").max(18),
    state: yup.string().required("Estado obrigatório").max(18),
    phone: yup.string().required("Telefone obrigatório").max(11),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFuncition = (data) => {
    setUsers(data);
    isCad();
  };
  return (
    <div>
      <h1>Cadastre-se</h1>
      <form className="form" onSubmit={handleSubmit(onSubmitFuncition)}>
        <input {...register("name")} placeholder="Digite seu nome"></input>
        <span>{errors.name?.message}</span>
        <input {...register("email")} placeholder="Digite seu email"></input>
        <span>{errors.email?.message}</span>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite sua senha"
        ></input>
        <span>{errors.password?.message}</span>
        <input
          type="password"
          {...register("passconfirm")}
          placeholder="Repita a senha"
        ></input>
        <span>{errors.passconfirm?.message}</span>
        <input {...register("country")} placeholder="Cidade"></input>
        <span>{errors.country?.message}</span>
        <input {...register("state")} placeholder="Estado"></input>
        <span> {errors.state?.message}</span>
        <input {...register("phone")} placeholder="Telefone"></input>
        <span>{errors.phone?.message}</span>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
export default Form;
