import { useRef ,useState} from 'react'

export default function Login() {
    const [isDisabled, setisDisabled] = useState(false)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const isValid = ()=>{
        return nameRef.current.value && emailRef.current.value && passwordRef.current.value
    }
    return (
        <div>
            <h2>Login</h2>
            <form onChange={()=>setisDisabled(isValid())} onSubmit={(e)=>{
              e.preventDefault()
              let name = nameRef.current.value  
              let email = emailRef.current.value  
              let password = passwordRef.current.value
              if (isValid()) {
                  console.log({name,email,password});
              }  
            }}>
                <input ref={nameRef} type="text"/><br/>
                <input ref={emailRef} type="email"/><br/>
                <input ref={passwordRef} type="number"/><br/>
                <button disabled={!isDisabled} type="submit">Login</button>
            </form>
        </div>
    )
}
