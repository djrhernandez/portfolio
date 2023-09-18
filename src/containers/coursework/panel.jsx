import React, { Component } from 'react'

class Panel extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='panel-group'>
					<div className='panel'>
						<div className='panel-heading'>
							<div className='panel-title'>
								<a data-toggle="collapse" href={`#${this.props.course}`}>
									{this.props.subject}
								</a>
							</div>
						</div>
						<div id={this.props.course} className="panel-collapse collapse">
							<div className="panel-body">{this.props.children}</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default Panel;
