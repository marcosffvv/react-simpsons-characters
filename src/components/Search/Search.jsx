import { useForm } from "react-hook-form";
import "./Search.scss";

export default function Search({ onSubmit }) {

    const { register, handleSubmit } = useForm();

    const submit = ({ text }) => {
        console.log(text)
        onSubmit(text);
    }
    return <form className="buscador" onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("text")} />
        <button>Buscar</button>
    </form>
}