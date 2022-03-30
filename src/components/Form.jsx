import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import store from '../store'
import { runInAction } from 'mobx'

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

const NonNullInput = styled.input`
	border: 1px solid ${props => props.value.length ? 'black' : 'red'};
`

const NonNullSelect = styled.select`
	border: 1px solid ${props => props.value.length ? 'black' : 'red'};
	background-color: #fff;
`

const Form = observer(class extends Component {
	constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			if(e.key==="Escape" || e.key==="Esc") runInAction(() => 
				store.changeWorker({
					id: store.maxId,
					name: '',
					position: '',
					birth: '',
					gender: '',
					isFired: false
				})
			)
		})
	}

	componentWillUnmount() {
		document.removeEventListener('keydown')
	}

	handleChange(e) {
		runInAction(() => {
			if(e.target.name==='isFired') store.worker.isFired= !store.worker.isFired
			else store.worker[e.target.name]= e.target.value
		})
		if(store.worker.id < store.maxId) store.changeWorker(store.worker)
	}

	render() {
		return (
			<StyledFrom>
				<NonNullInput 
					type="text" 
					name="name"
					placeholder='ФИО'
					value={store.worker.name} 
					onChange={e => this.handleChange(e)}
					required
				/>
				<NonNullSelect
					name="position"
          value={store.worker.position}
					onChange={e => this.handleChange(e)}
					required
        >
          <option value="">Должность</option>
          <option value={'Junior Frontend'}>Junior Frontend</option>
					<option value={'Middle Frontend'}>Middle Frontend</option>
					<option value={'Senior Frontend'}>Senior Frontend</option>
					<option value={'Junior Backend'}>Junior Backend</option>
					<option value={'Middle Frontend'}>Middle Frontend</option>
					<option value={'Senior Frontend'}>Senior Frontend</option>
        </NonNullSelect>
				<input 
					name="birth"
        	label="Дата рождения"
        	type="date"
        	value={store.worker.birth}
					onChange={e => this.handleChange(e)}
					max="2004-01-01"></input>
				<CenterInput>
					<label htmlFor="gender">
						М
						<input type="radio" name="gender" value="male" onChange={e => this.handleChange(e)} checked={store.worker.gender === "male"}/>	
					</label>
					<label htmlFor="gender">
						Ж
						<input type="radio" name="gender" value="famale" onChange={e => this.handleChange(e)} checked={store.worker.gender === "famale"}/>
					</label>
				</CenterInput>
				<CenterInput>
					Уволен
					<input type="checkbox" name="isFired" value={store.worker.isFired} checked={store.worker.isFired} onChange={e => this.handleChange(e)}/>
				</CenterInput>
				</StyledFrom>
		)
	}
})

export default Form