import { useEffect, useState } from "react"
import { Singer, baseUrl } from "../const";
import "./Singer.css"
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callSinger, callSingerPayload, doLoginAsync } from "./SingerAction";
import { RootState } from "../config";

const Home = ()=>{
    const [singerData,setSingerData] = useState<Singer[]>()
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const history = useHistory()
    const fetchData = async ()=>{
        setIsLoading(true)
        const res = await fetch(baseUrl+"singer")
        const data = await res.json()
        setSingerData(data)
        setIsLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const dispatch = useDispatch()

    const selector = useSelector((state:RootState) => state.singer)

    const renderCard = (item:Singer) => {
        return(
            <Card className="singer-card">
                <Card.Img src={baseUrl+item.img_path} className="img-singer"/>
                <Card.Body>
                    <Card.Text>
                        <div>
                            <p><b>id: </b><a href={"/singer/view/"+item.id}>{item.id}</a> </p>
                            <p><b>name: </b> <span style={{color:"red"}}>{item.name}</span> </p>
                            <p><b>Song List: </b></p>
                            <div>
                                <ul>
                                    {item.song.map(i2 => (<li>{i2}</li>) )}
                                </ul>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    console.log(selector)
    return(
        <div className="d-flex singer-container">
            
            {
                isLoading ? <div>Loading...</div> 
                :
                <>
                    {singerData?.map(renderCard)}
                    <Card className="singer-card" style={{width:"370px"}} onClick={()=>{history.push("/singer/add")}}>
                        <Card.Body>
                            <Card.Text>
                                Add Singer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="singer-card" style={{width:"370px"}} onClick={()=>dispatch(callSinger())}>
                        <Card.Body>
                            <Card.Text>
                                Call Singer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="singer-card" style={{width:"370px"}} onClick={()=>dispatch(callSingerPayload("ABC"))}>
                        <Card.Body>
                            <Card.Text>
                                Call Singer Payload
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="singer-card" style={{width:"370px"}} onClick={()=>dispatch(doLoginAsync("LOGIN"))}>
                        <Card.Body>
                            <Card.Text>
                                LOGIN
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            }
        </div>
    )
}

export default Home