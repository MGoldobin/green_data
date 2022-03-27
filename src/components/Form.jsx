import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import store from '../store'

const StyledFrom = styled.form`
	display: grid;
	gap: 20px;

`

const Form = observer(class extends Component {
	constructor(props) {
    super(props)
    this.state = {
			id: store.maxId,
			name: '',
			position: '',
			birth: null,
			gender: null,
			isFired: false
		}
    this.handleChange = this.handleChange.bind(this)
  }

	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			if(e.key==="Escape" || e.key==="Esc") this.setState({
				id: store.maxId+1,
				name: '',
				position: '',
				birth: null,
				gender: null,
				isFired: false
			})
		})
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
		console.log(this.state)
	}

	render() {
		return (
			<StyledFrom>
				<input 
					type="text" 
					name="name" 
					placeholder='ФИО'
					value={this.state.name} 
					onChange={e => this.handleChange(e)}
				/>
				<select 
					name="position"
					value={this.state.position}
					onChange={e => this.handleChange(e)}
				>
					<option value="" disabled>Должность</option>
					<option value="Junior Frontend">Junior Frontend</option>
					<option value="Middle Frontend">Middle Frontend</option>
					<option value="Senior Frontend">Senior Frontend</option>
					<option value="Junior Backend">Junior Backend</option>
					<option value="Middle Backend">Middle Backend</option>
					<option value="Senior Backend">Senior Backend</option>
				</select>
				
			</StyledFrom>
		)
	}
})

export default Form