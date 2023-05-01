import { Card } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import { Singer, baseUrl } from "../const"
import { useEffect, useState } from "react"

const ViewSinger = ()=>{
    const param = useParams<{id:string}>()
    const [singer,setSinger] = useState<Singer>()
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const history = useHistory()
    const fetchData = async ()=>{
        setIsLoading(true)
        const res = await fetch(baseUrl+"singer/"+param.id)
        const data = await res.json()
        setSinger(data)
        setIsLoading(false)
    }

    useEffect(()=>{
        fetchData()
    },[])


    return(
        <div style={{width:"350px"}}>
            <a href="#" onClick={(e)=>{e.preventDefault();history.goBack()}}>Back</a>
            {(!isLoading && singer) ? 
                <Card className="singer-card">
                    <Card.Img src={baseUrl+singer.img_path} className="img-singer"/>
                    <Card.Body>
                        <Card.Text>
                            <div>
                                <p><b>id: </b><a href={"/singer/view/"+singer.id}>{singer.id}</a> </p>
                                <p><b>name: </b> <span style={{color:"red"}}>{singer.name}</span> </p>
                                <p><b>Song List: </b></p>
                                <div>
                                    <ul>
                                        {singer.song.map(i2 => (<li>{i2}</li>) )}
                                    </ul>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                :
                <div>Loading</div>
            }
        </div>
    )
}

export default ViewSinger