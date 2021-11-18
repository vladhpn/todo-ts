import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {

    let navigate = useNavigate();
    return(
        <>
        <h1> About</h1>
        <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est iste asperiores sed explicabo enim quos, fugiat, omnis incidunt eligendi dolor unde consequuntur porro accusamus soluta dignissimos et exercitationem, excepturi ea quas! Pariatur sunt quis architecto nobis non itaque quos aliquam nihil deleniti nostrum, autem illo aspernatur officia consequatur vero maxime?</p>
       
       <button className="btn" onClick={()=>navigate(-1)}>Back to the list ToDo</button>
        </>
    )
}

export default AboutPage