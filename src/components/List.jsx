import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import Worker from './Worker'
import store from '../store/index.js'


const StyledList = styled.div`
	height: 100%;
	overflow-y: auto;
`

export const List = observer(class extends Component {
	render() {
		return (
			<StyledList>
				{
					store.data.map(el => <Worker info={el} key={el.id}/>)
				}
			</StyledList>
		)
	}
})

export default List