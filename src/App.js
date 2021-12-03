
import './App.css';
import FormInput from './components/FormInput';
import {useState} from "react" ; 


const  App = () => {

  const [values, setValues] = useState({

  username: "" ,
  email: "" ,
  birthday: "" ,
  password: "" ,
  confirmPassword: "" ,

  });

  const inputs = [
 {
id :1,
name : "username",
type : "text",
placeholder : "username",
errorMessage :
 "username should be 3-16 caracteres and should'nt include any spacial character ! " ,
label: "Username" ,
pattern: "^[A-Za-z0-9]{3,50}", /*quand on ajoute une lettre le input change le padding et le text disparu */
required: true ,

},

{
  id :2,
  name : "email",
  type : "email",
  placeholder : "email",
  errorMessage : "it should be a valid email" ,
  label  : "email" ,
  required : true ,

  
  },
  {
    id :3,
    name : "birthday",
    type : "date",
    placeholder : "Birthay",
    label  : "birthday" 
    
    },
    {
      id : 4,
      name : "password",
      type : "text",
      placeholder : "Password",
      errorMessage : "Password should be  8-20 characters and include at least 1 letter , 1 number and 1 special character" ,
      label  : "Password" ,

      pattern : `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required : true ,

      
      },

      {
        id: 5,
        name : "confirmPassword",
        type : "text",
        placeholder : "confirmPassword",
        errorMessage : "Passwords don't match ! " ,
        label : "confirmPassword" ,
        pattern : values.password,
        required: true ,

        
        }

]



  


 

  const handleSubmit = (e)=> {

      e.preventDefault() ;
   
  }

  const onChange = (e) => {

    setValues({...values,  [e.target.name]: e.target.value})
  }
  
  console.log(values);
  return (
  
<>
    <div className="App">
   <form onSubmit={handleSubmit}>
  <h1> Register </h1>
     {inputs.map((input) => (
  <FormInput key={input.id} {...input} value={values[input.name]}  onChange={onChange}  />
     ))}
  <button>Sublmit</button>
   </form>
   </div>
 
  </>
  );

}

export default App;
