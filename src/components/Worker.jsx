import { observer } from 'mobx-react'
import React, { Component } from 'react'
import styled from 'styled-components'
import store from '../store/index.js'

const Element = styled.div`
	display: flex;
	flex-direction: row;
  box-sizing: border-box;
	width: 100%;
	padding: 0 10px;
  justify-content: space-around;
	align-items: center;
	border: solid ${props => props.workerId === props.id ? '2px red' : '1px rgba(0, 0, 0, .3)'};
	cursor: pointer;
	height: 50px;
	font-weight: 400;

	&:hover {
		font-weight: 900;
	}

	&:nth-child(n) {
		margin: 0 0 5px 0;
	}

	&:last-child {
		margin: 0;
	}
`

const Worker = observer(class extends Component {
	render() {
		return (
			<Element id={this.props.info.id} workerId={store.worker.id} onClick={() => /*console.log(this.props.info)*/ store.changeWorker(this.props.info)}>
				<p>{this.props.info.id}</p>
				<p>{this.props.info.name}</p>
				<p>{this.props.info.position}</p>
				<p>{this.props.info.birth}</p>
				<p>{this.props.info.gender}</p>
				<p>{this.props.info.isFired ? 'Уволен' : 'Не уволен'}</p>
			</Element>
		)
	}
})

export default Worker