import { useState } from "react";

export default function Education(){
    const [userSchool, setUserSchool] = useState({ school: "", major: "", date: ""})
    const [editMode, setEditMode] = useState(true)

    const handleToggleEdit = () =>{
        setEditMode(!editMode)
    }

    if (editMode){
        return(
            <div className="section">
                <h2>Education</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleToggleEdit()}}>
                    <label for="user_firstname">School:</label>
                    <input type="text" id="school_name" name="school" value={userSchool.school} onChange={(e) => setUserSchool({ ...userSchool, school: e.target.value})}></input>
                    <label for="user_email">Major:</label>
                    <input type="text" id="major" name="major" value={userSchool.major} onChange={(e) => setUserSchool({ ...userSchool, major: e.target.value})}></input>
                    <label for="number">Date:</label>
                    <input type="date" id="date" name="date" value={userSchool.date} onChange={(e) => setUserSchool({ ...userSchool, date: e.target.value})}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="section">
                <h2>Education</h2>
                <p><b>School:</b> {userSchool.school}</p>
                <p><b>Major: </b>{userSchool.major} </p>
                <p><b>Date: </b>{userSchool.date}</p>
                <button type="button" onClick={handleToggleEdit}>Edit</button>
            </div>
        )
    }
}