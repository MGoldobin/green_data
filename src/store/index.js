import { action, computed, makeObservable, observable, runInAction } from "mobx"

class Store {
	worker = {
		id: null,
		name: '',
		position: '',
		birth: '',
		gender: '',
		isFired: false
	}
	//data=[]

	data = [
		{
			id: 1,
			name: 'Игорь Петрович',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 2,
			name: 'Игорь Петрович',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 3,
			name: 'Игорь Петрович',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 4,
			name: 'Игорь Петрович',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 5,
			name: 'Игорь Петрович',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 6,
			name: 'Игорь Петрович',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 7,
			name: 'Игорь Петрович',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 8,
			name: 'Игорь Петрович',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 9,
			name: 'Игорь Петрович',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 10,
			name: 'Игорь Петрович',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 11,
			name: 'Игорь Петрович',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 12,
			name: 'Игорь Петрович',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'male',
			isFired: false
		},
	]

	constructor() {
		makeObservable(this, {
			worker: observable,
			data: observable,
			maxId: computed,
			changeWorker: action,
			addWorker: action,
			deleteWorker: action
		})
		this.changeWorker = this.changeWorker.bind(this)
		this.addWorker = this.addWorker.bind(this)
		this.deleteWorker = this.deleteWorker.bind(this)
	}

	get maxId() {
		return this.data.length ? this.data.reduce((acc, curr) => acc.id > curr.id ? acc.id : curr.id)+1 : 0
	} 

	zeroingWorker() {
		runInAction(() => this.worker = {
			id: this.maxId,
			name: '',
			position: '',
			birth: null,
			gender: null,
			isFired: false
		})
	}

	changeWorker(newWorker) {
		this.worker = {
			id: newWorker.id,
			name: newWorker.name,
			position: newWorker.position,
			birth: newWorker.birth,
			gender: newWorker.gender,
			isFired: newWorker.isFired
		}
		this.data[this.data.indexOf(el => el.id === this.worker.id)] = this.worker
	}

	addWorker() {
		this.data.push(this.worker)
		this.zeroingWorker()
		this.worker = this.data[this.data.length - 1]
	}

	deleteWorker() {
		this.data.splice(this.data.findIndex(el => el.id === this.worker.id),1)
	}
}

const store = new Store()

export default store
export { Store }