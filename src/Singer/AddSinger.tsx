import { type } from "os";
import { useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { baseUrl } from "../const";
import { useHistory } from "react-router-dom";


interface NewSinger{
    name:string;
    song:string[]
}
const initialSinger:NewSinger = {
    name:"",
    song:[]
}

const inputSingerReducer = (state:NewSinger,action:{type:string,payload?:any}) => {
    console.log(state.song)
    switch(action.type){
        case "INPUT_NAME":
            state.name = action.payload
            return {...state}
        case "ADD_SONG":
            // state.song = [...state.song,"X"]
            return {...state,song:[...state.song,""]}
        case "EDIT_SONG":
            state.song[action.payload.index] = action.payload.song
            return {...state}
        default:
            return state
    }
}

const AddSinger = ()=>{
    const [newSingerState, dispatchState] = useReducer(inputSingerReducer,initialSinger)
    const [singerFile,setSingerFile] = useState<FileList | null>()
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const history = useHistory()
    const handleSubmitSinger = async ()=>{
        setIsLoading(true)
        let form = new FormData()
        form.append("jsonData",JSON.stringify({...newSingerState,song:newSingerState.song.filter(i => i !== "")}))
        if (singerFile){
            form.append("singer_img",singerFile[0],singerFile[0].name)
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        await fetch(baseUrl+"singer/add",{
            method:"POST",
            body:form
        })
        setIsLoading(false)
    }
    const handleAddSong = ()=>{
        dispatchState({type:"ADD_SONG"})
    }
    return(
        <div>
            <a href="#" onClick={(e)=>{e.preventDefault();history.goBack()}}>Back</a>
             <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Singer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Singer Name" value={newSingerState.name} onChange={(e)=>{dispatchState({type:"INPUT_NAME",payload:e.target.value})}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Song List</Form.Label>
                    {
                        newSingerState.song.map((song,index)=>(
                            <>
                                <Form.Control type="text" placeholder="Enter Song" value={song} onChange={(e)=>{dispatchState({type:"EDIT_SONG",payload:{song:e.target.value,index:index}})}}/>
                            </>
                        ))
                    }
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Singer Image</Form.Label>
                    <Form.Control type="file" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSingerFile(e.target.files)}}/>
                </Form.Group>
                <Button variant="primary" type="button"
                    onClick={()=>{
                       handleAddSong()
                    }}
                >
                    Add Song
                </Button>
                <Button disabled={isLoading} variant={"primary"} type="button" onClick={()=>{handleSubmitSinger()}}>
                    Submit
                </Button>
                
            </Form>
        </div>
    )
}

export default AddSinger