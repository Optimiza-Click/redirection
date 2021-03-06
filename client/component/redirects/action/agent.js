/**
 * External dependencies
 */

import React from 'react';
import { translate as __ } from 'lib/locale';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */

class ActionAgent extends React.Component {
	constructor( props ) {
		super( props );

		this.handleChangeFrom = this.onChangeFrom.bind( this );
		this.handleChangeNotFrom = this.onChangeNotFrom.bind( this );
	}

	onChangeFrom( ev ) {
		this.props.onChange( 'agent', 'url_from', ev.target.value );
	}

	onChangeNotFrom( ev ) {
		this.props.onChange( 'agent', 'url_notfrom', ev.target.value );
	}

	render() {
		return (
			<tr>
				<td colSpan="2" className="no-margin">
					<table>
						<tbody>
							<tr>
								<th>{ __( 'Matched Target' ) }</th>
								<td>
									<input type="text" name="url_from" value={ this.props.url_from } onChange={ this.handleChangeFrom } />
								</td>
							</tr>
							<tr>
								<th>{ __( 'Unmatched Target' ) }</th>
								<td>
									<input type="text" name="url_notfrom" value={ this.props.url_notfrom } onChange={ this.handleChangeNotFrom } />
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		);
	}
}

ActionAgent.propTypes = {
	url_from: PropTypes.string.isRequired,
	url_notfrom: PropTypes.string.isRequired,
};

export default ActionAgent;
