import { FieldErrors } from "react-hook-form";
import FormInputTypes from "../../../types/form-input-type";


type Errors = {
    typeInput: string;
    inputName: string;
    placeHolder: string;
}


export default interface AuthFormProps {
    page: string,
    handleSubmit: Function,
    submitData: Function,
    hookForm: Function,
    datas: FormInputTypes[],
    errors: FieldErrors<Errors> | any,
    succesMessage?: string,
    errorMessage?: string,
    isLoading? : boolean
}


