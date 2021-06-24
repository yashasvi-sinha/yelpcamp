const signup = (props) => {
    const {onSubmit,  firstname,
        onInput,
        lastname,
        email,
        password,
        about,
        gender} = props
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>First Name</label>
                    <input onChange={onInput} value={firstname} type="text" placeholder="FirstName" name="firstname"></input>
                </div>

                <div>
                    <label>Last Name</label>
                    <input onChange={onInput}  value={lastname} type="text"  placeholder="lastName" name="lastname"></input>
                </div>

                <div>
                    <label>Email</label>
                    <input onChange={onInput}  value={email} type="email" placeholder="Email" name="email"></input>
                </div>

                <div>
                    <label>Gender</label>
                    <select name="gender" onChange={onInput}  value={gender}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                    </select>
                </div>

                <div>
                    <label>About</label>
                    <textarea onChange={onInput}  name="about"  value={about}> </textarea>
                </div>

                <div>
                    <label>Password</label>
                    <input onChange={onInput} value={password} type="password" placeholder="password" name="password"></input>
                </div>

                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default signup