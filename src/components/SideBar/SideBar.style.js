import styled from "styled-components";

export const SidebarContainer = styled.div`
	justify-content:	flex-start;
	box-shadow:			0 4px 10px 0 rgba(0, 0, 0, 2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Profile = styled.div`
	padding: 	10px;
`;

export const Portrait = styled.div`
	display:		block;
	position:		relative;
	overflow:		hidden;
	max-width:		300px;
	width:			275px;
	height:			275px;
	border-radius:	50%;
	margin:			0 auto;

	img {
		width:			auto;
		height:			100%;
		margin-left:	-70px;
	}
`;

export const Title = styled.div`
	font-family: 	Spectral SC;
	font-size: 		2em;
	text-align:		center;
	margin:			20px 40px;
	box-shadow:		0 10px 70px 0 rgba(0, 0, 0, 0.25)
`;

export const SubTitle = styled.div`
	display:		flex;
	font-family: 	Spectral SC;
	font-size: 		1.75em;
	margin:			20px 15px;
	box-shadow:		0 8px 70px 0 rgba(0, 0, 0, 0.2);

	.material-icons {
		text-shadow:	2px 2px 10px grey;
		line-height:	1.75;
		margin:			5px;
	}
	li {
		padding: 			5px;
		line-height:		1.75;
		list-style-type: 	none;
	}
`;

export const Contact = styled.div`
	margin:		auto 10px;
`;

export const About = styled.ul`
	display: 		flex;
	font-family: 	Cutive Mono;
	font-size: 		1.3em;
	font-weight:	500;

	.material-icons {
		text-shadow:	2px 2px 10px grey;
		line-height:	inherit;
	}
	li {
		padding: 			5px;
		list-style-type: 	none;
	}
`;

export const Headline = styled.div`
	margin:		10px;
`;
/*
<Sidebar>
	<Profile>
		<Thumbnail/>
		<ContactInfo/>
	</Profile>

	<Skillbar></Skillbar>
</Sidebar>
*/
