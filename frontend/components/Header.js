import Router from 'next/router';
import NProgress from 'nprogress';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
	NProgress.start();
	console.log('onRouteChangeStart Triggered');
}
Router.onRouteChangeComplete = () => {
	NProgress.done();
	console.log('onRouteChangeComplete Triggered');
}
Router.onRouteChangeError = () => {
	NProgress.done();
	console.log('onRouteChangeError Triggered');
}

const Logo = styled.div`
	width: 20%;
	height: auto;
	margin: auto 0;
	img {
		width: 100%;
		height: auto;
	}
	@media(max-width: 1300px) {
		width: 20%;
		margin: auto;
	}
`;

const StyledHeader= styled.header`
	.topBar {
		border-bottom: 10px solid ${props => props.theme.black};
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		@media(max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
	.searchBar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid ${props => props.theme.lightgrey};
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="topBar">
			<Logo>
				<Link href="/">
					<a><img src="../static/logo.png" alt="Barkain" /></a>
				</Link>
			</Logo>
			<Nav />
		</div>
		<div className="searchBar">
			<p>Search</p>
		</div>
		<div>Cart</div>
	</StyledHeader>
);

export default Header;