import React from "react"
import Sidebar from "./Sidebar"
import Editor from "./Editor"
import Split from "react-split"
import "./notes.css"
import {onSnapshot,addDoc,doc,deleteDoc,setDoc} from "firebase/firestore"
import {notesCollection,db} from "./firebase";

export default function Notes() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )

    const [currentNoteId, setCurrentNoteId] = React.useState("")
    
    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]

    const [tempNoteText, setTempNoteText] = React.useState("");

    const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt)

    React.useEffect(()=>{       
        if(currentNote){
            setTempNoteText(currentNote.body)
        }
    },[currentNote])

    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection,function(snapshot){
            // sync up our local notes array with the snapshot data
            const notesArray=snapshot.docs.map(doc=>({
                ...doc.data(),
                id:doc.id
            }))
            
            setNotes(notesArray);
        })
        return unsubscribe
    }, [])

    React.useEffect(()=>{
        if(!currentNoteId){
            setCurrentNoteId(notes[0]?.id)
        }
    },[currentNoteId,notes])

    React.useEffect(()=>{
        const timeoutID=setTimeout(()=>{
            if(tempNoteText!==currentNote.body){ // so that switching notes doesn't update and make chosen note first
                updateNote(tempNoteText)
            }            
        },500)
        return ()=>clearTimeout(timeoutID);
    },[currentNote,tempNoteText])

    async function createNewNote() {
        const currDate=Date.now();
        const newNote = {            
            body: "# Type your markdown note's title here",
            createdAt: currDate,
            updatedAt: currDate
        }
        const newNoteRef=await addDoc(notesCollection,newNote)
        setCurrentNoteId(newNoteRef.id)
    }

    async function updateNote(text) {
        const docRef=doc(db,"notes",currentNoteId);
        await setDoc(docRef,{
            body:text,
            updatedAt: Date.now()
        },{merge: true})
    }

    async function deleteNote(noteId) {        
        const docRef=doc(db,"notes",noteId);
        await deleteDoc(docRef);
    }

    return (
        <section className="notes--container">
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={sortedNotes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                      
                        <Editor                           
                            tempNoteText={tempNoteText}
                            setTempNoteText={setTempNoteText}
                        />
                    
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </section>
    )
}
