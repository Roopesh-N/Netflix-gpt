

export const checkLoginDetails = (email,pwd) => {
    // Validate email and password(Login Form details)
    const isemailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispwdValid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(pwd)
    if (!isemailValid) return "Email Invalid"   
    if (!ispwdValid) return "Password Invalid"
    return null;
}

export const checkSignUpForm=(name,email,pwd)=>{
    // Vlaidate signup form fields
    const isnameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const result=checkLoginDetails(email,pwd)
    if(!isnameValid) return "Name Invalid"
    if(result) return result
    return null;
}

 