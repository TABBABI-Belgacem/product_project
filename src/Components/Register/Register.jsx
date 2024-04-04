import Styles from "./Register.module.css";
import * as Yup from "yup"
import { useFormik } from "formik";
function Register() {

  function submitRegister() {}
  
   const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
   let validationSchema = Yup.object({
     name:Yup.string().min(3,"minlength is 3").max(10,"maxlength is 10").required("name is required"),
    email:Yup.string().min(3,"minlength is 3").max(20,"maxlength is 20").required("email is required"),
     phone:Yup.string().matches(phoneRegExp,"phone is invalid").required("phone is required"),
     password:Yup.string().matches(/^[A-Z][a-z0-9]{8,15}$/,"password start with uppercase").required("password is required"),
       rePassword:Yup.string().oneOf([Yup.ref("password")]).required("rePassword is required")
   })
  /* function validate(value){
    let phoneRgex=/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
    let errors = {}
     if(value.name.length < 3){
        errors.name = "name minlength is 3"
     }else if(value.name.value == ""){
         errors.name = " name is  required"
     }else if(value.name.length > 10){
      errors.name = " name maxlength is 10"
  }
  if(value.phone.value == " "){
    errors.phone = "phone is required"
  }else if(!phoneRgex.test(phoneRgex)){
    errors.phone = " phone number is invalid"
  }
  return errors;
  } */

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: submitRegister
  });


  return (
    <>
    <div className="w-75 py-5 mx-auto">
      <h3 className="my-2"> Register Now</h3>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          type="text"
          id="name"
        />
        {formik.errors.name && formik.touched.name ?   ( <div className="alert alert-danger mt-2 p-2">
        {formik.errors.name}
             </div> ): "" }
      
          <label htmlFor="phone">phone</label>
        <input
          className="form-control"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="phone"
          type="tel"
          id="phone"
        />
        {formik.errors.phone && formik.touched.phone ?   ( <div className="alert alert-danger mt-2 p-2">
            {formik.errors.phone} </div> ): "" }
          <label htmlFor="email">email</label>
        <input
          className="form-control"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          type="email"
          id="email"
        />  
        {formik.errors.email && formik.touched.email ?   ( <div className="alert alert-danger mt-2 p-2">
        {formik.errors.email}
             </div> ): "" }
          <label htmlFor="password">password</label>
        <input
          className="form-control"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          type="password"
          id="password"
        />  
        {formik.errors.password && formik.touched.password ?   ( <div className="alert alert-danger mt-2 p-2">
        {formik.errors.password}
             </div> ): "" }
          <label htmlFor="rePassword">rePassword</label>
        <input
          className="form-control"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="rePassword"
          type="Password"
          id="rePassword"
        />  
        {formik.errors.rePassword && formik.touched.rePassword ?   ( <div className="alert alert-danger mt-2 p-2">
        {formik.errors.rePassword}
             </div> ): "" }
        
      <button disabled={!formik.isValid}type="submit"className="btn bg-main mt-3 text-white">Register</button>
      </form>
    </div>
      
    </>
  );
}

export default Register;
