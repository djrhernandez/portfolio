import React, { Component } from 'react'
import { NavContainer } from './Navigation.style'

class Navigation extends Component {
	render() {
		return(
			<React.Fragment>
				<NavContainer>
					<div className='navbar navbar-expand-lg fixed-top py-3' id='mainNav'>
						<div className='container'>
							<a className='navbar-brand js-scroll-trigger' href='#page-top'>Home</a>
							<button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle Navigation'>
								<ul>Menu</ul>
								<i className='material-icons'>menu</i>
							</button>
							<div className='collapse navbar-collapse' id='navbarResponsive'>
								<ul className='navbar-nav ml-auto'>
									<li className='nav-item mx-0 mx-lg-1'>
										<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#about'>About</a>
									</li>
									<li className='nav-item mx-0 mx-lg-1'>
										<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#skills'>Skills</a>
									</li>
									<li className='nav-item mx-0 mx-lg-1'>
										<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#project'>project</a>
									</li>
									<li className='nav-item mx-0 mx-lg-1'>
										<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#education'>Resume</a>
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
/* Working on dropdown menu for resume divs:
	* Need to change dropdown tab on when active or focused
	* Need to change background color of dropdown menu to black
	* Might need to show active tab in dropdown menu when scrolling between divs

	<div className='dropdown'>
		<button className='dropdown-toggle py-3 px-0 px-lg-3' id='dropdownResume' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Resume</button>
		<div class='dropdown-menu js-scroll-trigger' aria-labelledby='dropdownResume'>
			<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#education'>Education</a>
			<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#coursework'>Coursework</a>
			<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#work'>Work Experience</a>
			<a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#interests'>Interests</a>
		</div>
	</div>
*/
