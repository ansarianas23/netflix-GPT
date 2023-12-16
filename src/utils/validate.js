export const checkValidateData = (email, password)=>{
    // const isNameValid = /^[a-zA-Z_.]+$/.test(name);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "User Name is not Valid";
    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}