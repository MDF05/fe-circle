

// interface Errors {
//     password: {
//         message: string;
//     };
//     newPassword: {
//         message: string;
//     };
//     email: {
//         message: string;
//     };
//     fullName: {
//         message: string;
//     };
// }


export default interface AuthFormProps {
    page: string,
    handleSubmit: Function,
    submitData: Function,
    hookForm: Function,
    errors: any,
    datas: any
}
