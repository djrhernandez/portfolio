import React, { Component } from 'react'
import { NavContainer } from './Navigation.style'

class Navigation extends Component {
	render() {
		return(
			<React.Fragment>
				<NavContainer>
					<div className='navbar navbar-expand-lg fixed-top' id='mainNav'>
						<div className='container'>
							<a className='navbar-brand js-scroll-trigger' href='#page-top'>Home</a>
							<button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive'>
								<ul>Menu</ul>
								<i className='material-icons'>menu</i>
							</button>
							<div className='collapse navbar-collapse' id='navbarResponsive'>
								<ul className='navbar-nav ml-auto'>
									<li className='nav-item mx-0 mx-lg-1'>
										<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#about'>About</a>
									</li>
									<li className='nav-item mx-0 mx-lg-1'>
										<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#project'>project</a>
									</li>
									<li className='nav-item mx-0 mx-lg-1'>
										<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#resume'>Resume</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</NavContainer>
			</React.Fragment>
		);
	}
}
export default Navigation;
