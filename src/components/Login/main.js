
export default function Login(){
  return(
    <div className="">
      <h1>MAYNOOTH</h1>
      <form>
        <label for="email">
          Email
        </label><br/>
        <input type="email" name="email" id="email" placeholder="your@email.com"/><br/>

        <label for="password">
          Password
        </label><br/>
        <input type="password" name="password" id="password" placeholder="Password" /><br/>

        <input type="checkbox" id="rememberme" name="rememberme" val="rememberme" />
        <label for="rememberme" >
          Remember me
        </label>

        <a href="/forgot">
          Forgot password?
        </a><br/>

        <button type="submit">Log in</button>

        <p>Or</p>

        <button type="submit">
          Continue with Google
        </button>
        <button type="submit">
          Continue with Facebook
        </button>

        <p>Don't have an account? <a href="/register">Sign up</a></p>
      </form>
    </div>
  )
}