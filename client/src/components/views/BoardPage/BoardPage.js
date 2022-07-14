import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Pagination from './Pagination'
import Page from './Page'

function BoardPage() {
    const Category = useParams();
    const [File, setFile] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [postsPerPage, setpostPerPage] = useState(6);
    const body = {
        type: Category.CatID
    }

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
      };



    useEffect(()=>{
        //req내용이 있으면 무조건 post로 전달해야한다
        axios.post('/api/board/readboard',body)
        .then(response=>{
            if(response.data.success)
                setFile(response.data.board)
            else
                alert('컨텐트를 가져오는데 실패했습니다')
        })
 
    },[Category.CatID])

    return (
        <div className="BoardPage">
            <div className="Content">
                <h2 style={{color:'#fff', marginTop:"50px",fontSize:'70px', textAlign:'center'}}>{Category.CatID}</h2>
                <div style={{marginLeft:'80px'}}>
                    <Page posts={currentPosts(File)}/>

                </div>
                <div style={{marginTop:'50px', width:'90%', marginLeft:'28%'}}>
                    <Pagination
                        postsPerPage = {postsPerPage}
                        totalPost = {File.length}
                        paginate = {setcurrentPage}
                    />
                </div>


            </div>
        

        </div>
    )
}

export default BoardPage
