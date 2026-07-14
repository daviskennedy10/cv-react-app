import { useState } from "react";

export default function Experience(){
    const [userExp, setUserExp] = useState({ company: "", role: "", responsibilities: ""})
    const [editMode, setEditMode] = useState(true)

    const handleToggleEdit = () =>{
        setEditMode(!editMode)
    }

    if (editMode){
        return(
            <div className="section">
                <h2>Experience</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleToggleEdit()}}>
                    <label for="company">Company:</label>
                    <input type="text" id="company" name="company" value={userExp.company} onChange={(e) => setUserExp({ ...userExp, company: e.target.value})}></input>
                    <label for="role">Role:</label>
                    <input type="text" id="role" name="role" value={userExp.role} onChange={(e) => setUserExp({ ...userExp, role: e.target.value})}></input>
                    <label for="duties">Responsibilities:</label>
                    <textarea id="duties" name="duties" value={userExp.responsibilities} onChange={(e) => setUserExp({ ...userExp, responsibilities: e.target.value})}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="section">
                <h2>Experience</h2>
                <p><b>Company:</b> {userExp.company}</p>
                <p><b>Role: </b>{userExp.role} </p>
                <p><b>Responsibilities: </b>{userExp.responsibilities}</p>
                <button type="button" onClick={handleToggleEdit}>Edit</button>
            </div>
        )
    }
}