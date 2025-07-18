import { Link, useRouteError } from "react-router-dom";
import "./error.scss"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
                Back to HomePage
            </Link>
        </div>
    );
}
