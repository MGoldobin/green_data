import { action, computed, makeObservable, observable, runInAction } from "mobx"

class Store {
	data = [
		{
			id: 1,
			name: 'Куприянова Валерия Сергеевна',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'famale',
			isFired: false
		},
		{
			id: 2,
			name: 'Калмыкова Милана Семёновна',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'famale',
			isFired: false
		},
		{
			id: 3,
			name: 'Акимова Виктория Руслановна',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'famale',
			isFired: false
		},
		{
			id: 4,
			name: 'Черных Альберт Михайлович',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 5,
			name: 'Королева Ульяна Ильинична',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'famale',
			isFired: false
		},
		{
			id: 6,
			name: 'Савин Иван Павлович',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 7,
			name: 'Дмитриев Александр Макарович',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 8,
			name: 'Баженов Роман Александрович',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 9,
			name: 'Воробьева Екатерина Тимофеевна',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'famale',
			isFired: false
		},
		{
			id: 10,
			name: 'Воробьева Дарья Алиевна',
			position: 'Junior Frontend',
			birth: '1988-03-27',
			gender: 'famale',
			isFired: false
		},
		{
			id: 11,
			name: 'Ковалев Андрей Адамович',
			position: 'Junior Backend',
			birth: '2000-03-27',
			gender: 'male',
			isFired: false
		},
		{
			id: 12,
			name: 'Матвеев Роберт Михайлович',
			position: 'Senior Frontend',
			birth: '1993-03-27',
			gender: 'male',
			isFired: false
		},
	]

	worker = {
		id: this.maxId,
		name: '',
		position: '',
		birth: '',
		gender: '',
		isFired: false
	}

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
			birth: '',
			gender: '',
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
		this.data[this.data.findIndex(el => el.id === this.worker.id)] = this.worker
	}

	addWorker() {
		this.data.push(this.worker)
	}

	deleteWorker() {
		this.data.splice(this.data.findIndex(el => el.id === this.worker.id),1)
	}
}

const store = new Store()

export default store
export { Store }