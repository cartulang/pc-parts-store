import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundStyle = styled.main`
	position: absolute;
	top: 30%;
	left: 40%;
	transform: translate(-5%, -50%);
`;

const NotFound = () => {
	return (
		<NotFoundStyle>
			<h1>Sorry,</h1>
			<p>That page cannot be found.</p>
			<Link to="/">Back to home page</Link>
		</NotFoundStyle>
	);
};

export default NotFound;
