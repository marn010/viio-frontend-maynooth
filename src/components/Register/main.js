
export default function Register(){
  return(
    <div>
      <form>
        <label >Name</label><br/>
        <input type="text" id="name" name="name" placeholder="Name" /><br/>

        <label >LastName</label><br/>
        <input type="text" id="lastname" name="lastname" placeholder="LastName" /><br/>

        <label >Email</label><br/>
        <input type="email" id="email" name="email" placeholder="E-mail" /><br/>

        <button type="submit" >
          Send
        </button>
      </form>
    </div>
  )
}