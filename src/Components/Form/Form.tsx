import { SubmitHandler, useForm } from "react-hook-form";
import {formInt} from "./form.interface";

const Form = () => {
    const {register, handleSubmit} = useForm<formInt>();
    
    const onSubmitForm: SubmitHandler<formInt> = (data) => {
        console.log(data.value);
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="input-form" action="">
            <input {...register('value')} type="text" id="newTask" className="form-control mr-1"/>
            <button className="btn btn-primary">Добавить</button>
        </form>
    );
};

export default Form;
