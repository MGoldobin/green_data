import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import store from '../store'

const StyledFrom = styled.form`
	display: flex;
	flex-direction: column;
	text-align: left;
	color: #000;
	justify-content: space-between;
	height: max-content;
	gap: 15px;
`

const CenterInput = styled.div`
	margin: 0 auto;
`
const ConditionalState = /*store.worker.id < store.max ? {
	id: store.maxId,
	name: '',
	position: '',
	birth: '',
	gender: '',
	isFired: false
} : */{
	id: store.worker.id,
	name: store.worker.name,
	position: store.worker.position,
	birth: store.worker.birth,
	gender: store.worker.gender,
	isFired: store.worker.isFired
} //big troubles*/

const Form = observer(class extends Component {
	constructor(props) {
    super(props)
    this.state = ConditionalState
    this.handleChange = this.handleChange.bind(this)
  }

	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			if(e.key==="Escape" || e.key==="Esc") this.setState({
				id: store.maxId,
				name: '',
				position: '',
				birth: '',
				gender: '',
				isFired: false
			})
		})
	}

	componentWillUnmount() {
		document.removeEventListener('keydown')
	}

	handleChange(e) {
		if(e.target.name === 'isFired') this.setState(prev => {return {isFired: !prev.isFired}})
		else this.setState({[e.target.name]: e.target.value})
		store.changeWorker({
			id: store.maxId,
			name: this.state.name,
			position: this.state.position,
			birth: this.state.birth,
			gender: this.state.gender,
			isFired: this.state.isFired
		})
		console.log(this.state, store.worker)
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
          <option value="">Должность</option>
          <option value={'Junior Frontend'}>Junior Frontend</option>
					<option value={'Middle Frontend'}>Middle Frontend</option>
					<option value={'Senior Frontend'}>Senior Frontend</option>
					<option value={'Junior Backend'}>Junior Backend</option>
					<option value={'Middle Frontend'}>Middle Frontend</option>
					<option value={'Senior Frontend'}>Senior Frontend</option>
        </select>
				<input 
					name="birth"
        	label="Дата рождения"
        	type="date"
        	value={this.state.birth}
					onChange={e => this.handleChange(e)}
					max="2004-01-01"></input>
				<CenterInput>
					<label htmlFor="gender">
						М
						<input type="radio" name="gender" value="male" onChange={e => this.handleChange(e)} checked={this.state.gender === "male"}/>	
					</label>
					<label htmlFor="gender">
						Ж
						<input type="radio" name="gender" value="famale" onChange={e => this.handleChange(e)} checked={this.state.gender === "famale"}/>
					</label>
				</CenterInput>
				<CenterInput>
					Уволен
					<input type="checkbox" name="isFired" value={this.state.isFired} checked={this.state.isFired} onChange={e => this.handleChange(e)}/>
				</CenterInput>
				</StyledFrom>
		)
	}
})

export default Form