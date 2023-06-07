import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import LostImg from '../../assets/error.jpg'

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
    <div id="error-page" className="flex flex-col w-screen justify-center items-center">
        <h1>Oops!</h1>
        <p>(You look a little lost)</p>
        <img src={LostImg} />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{
            isRouteErrorResponse(error) ?
            (error.error?.message || error.statusText)
             :
             'Unknown Error Message' }
            </i>
            
        </p>
        <h2>Go <Link to="/">Home?</Link></h2>
    </div>
    );
}