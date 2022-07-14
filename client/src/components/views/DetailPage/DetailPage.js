import React,{useEffect,useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {Button} from 'antd'

function DetailPage() {
    const LocalURI = 'http://localhost:5000/'
    const BoardID = useParams();
    const [type, settype] = useState("")
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [splitcontent, setsplitcontent] = useState([])
    const [isready, setisready] = useState(false)
    const [img, setimg] = useState([])


    const renderContent = splitcontent.map((content,index)=>{
        var imgcount = 1
        if(index % 2 === 0){
            if(content.indexOf('&') === -1){
                return(
                    <pre key={index} style={{color:"#fff", fontSize:'20px',textAlign:"left",marginTop:"50px", marginLeft:'60px', marginRight:'40px'}}>
                        {content}
                    </pre>
                )
            }
            else{
                const imgcontent = content.split('&')
                const result = imgcontent.map((imgcontent,imgindex)=>{
                    if(imgindex !== 0){//&가 무조건 문단위에 있다는 가정하에 지정
                    //배열로 나뉘어있다는 것은 &가 무조건으로 있다는 의미이다 그러니 0번째를 제외한 모든 문단에는 이미지가 존재
                    //밑에 문단이 없고 사진만 있어도 에러가 뜨지 않고 빈 문단이 생김(눈에 크게 띄지 않으므로 상관없다)

                        if(isready){
                            var order = img.findIndex(i=>i.fileorder === imgcount)
                            imgcount += 1
                            return(
                                <>
                                <img key={'img'+ {imgindex}} src={LocalURI+img[order].filepath} style={{textAlign:"left",marginTop:"50px", marginLeft:'60px', marginRight:'40px'}}/>
                                    <pre key={imgindex} style={{color:"#fff", fontSize:'20px',textAlign:"left",marginTop:"50px", marginLeft:'60px', marginRight:'40px'}}>
                                        {imgcontent}
                                    </pre>
                                </>
                            )
                        }


                    }else{
                        return(
                            <pre key={imgindex} style={{color:"#fff", fontSize:'20px',textAlign:"left",marginTop:"50px", marginLeft:'60px', marginRight:'40px'}}>
                                {imgcontent}
                            </pre>
                        )
                    }

                })
                return result
            }

        }
        else{
            return(
                <pre key={index}>
                    <code style={{marginLeft:'60px'}}>
                        {content}
                    </code>
                </pre>

            )
        }

    })


    useEffect(()=>{
        axios.post('/api/board/getpost',BoardID)
        .then(response=>{
            if(response.data.success){
                settitle(response.data.board.title)
                setcontent(response.data.board.content)
                settype(response.data.board.type)
                setsplitcontent(response.data.board.content.split('^'))
                setimg(response.data.board.file)
                setisready(true)
                
                    
            }
            else
                alert("게시물을 가져오는데 문제가 발생했습니다")
        })
        
    },[])

    if(isready){     
        return (
            <div style={{position:"relative", display:"block", paddingBottom:"20px"}}>
                <div style={{position:"relative"}}>
                    <h1 style={{color:"#fff", fontSize:'30px', textAlign:"center",marginTop:"150px"}}>{title}</h1>
                    {renderContent}
                </div>
                <div>
                    <Button size="large" style={{marginLeft:'60px', marginBottom:'20px'}}>
                        <Link to={`/Modify/${BoardID.BoardID}`}
                        state={{
                            title: title,
                            content: content,
                            type: type,
                            id: BoardID.BoardID,
                            img: img
                    }}>Modify</Link></Button>
                </div>
               
                
            </div>
        )
    }
    else{
        return(
            <div>
                Loading
            </div>
        )
    }

}

export default DetailPage
