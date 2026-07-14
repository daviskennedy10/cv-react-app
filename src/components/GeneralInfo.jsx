import { useState } from "react";

export default function GeneralInfo(){
    const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: ""})
    const [editMode, setEditMode] = useState(true)

    const handleToggleEdit = () =>{
        setEditMode(!editMode)
    }


    if(editMode){
        return(
            <div className="section">
                <h2>General Information</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleToggleEdit()}}>
                    <label for="user_firstname">Name:</label>
                    <input type="text" id="first_name" name="Name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value})}></input>
                    <label for="user_email">Email:</label>
                    <input type="email" id="user_email" name="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value})}></input>
                    <label for="number">Phone Number:</label>
                    <input type="number" id="phone_number" name="phone" value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value})}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="section">
                <h2>General information</h2>
                <p>Name: {userInfo.name}</p>
                <p>Email: {userInfo.email} </p>
                <p>Phone: {userInfo.phone}</p>
                <button type="button" onClick={handleToggleEdit}>Edit</button>
            </div>
        )
    }
}