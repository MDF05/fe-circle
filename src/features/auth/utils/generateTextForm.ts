export default function generateTextForm(page: String) {
    let textForm: String = ""

    if (page == "login") {
        textForm = "login to circle"
    } else if (page == "register") {
        textForm = "register to circle"
    } else if (page == "forgot password") {
        textForm = "forgot password"
    } else {
        textForm = "reset password"
    }

    return textForm
}