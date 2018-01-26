import { 
	Component, 
	OnInit,
	Input, 
	Output, 
	EventEmitter, 
	OnChanges 
} from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

	@Input()
	terms: any[];

	@Input()
	placeholder: string;

	@Output()
	onFilter: EventEmitter<any>;

	matches: any[];

	constructor () {
		this.matches = this.terms;
		this.onFilter = new EventEmitter<any>();
	}

	ngOnInit() { }

	ngOnChanges(changes) {
		this.matches = this.terms;
	}

	updateFilter(term: string) {
		if (!term.trim()) {
			// if no search term, return array
			this.matches = this.terms;
			this.onFilter.emit(this.matches);
		} else {
			let arr: any[] = [];
			// filter from object
			this.terms.filter((element: object) => {
				// filter from object key
				Object.getOwnPropertyNames(element).filter((match) => {
					if (element[match].toString().toLowerCase().indexOf(term.toLowerCase()) > -1) {
						// push to array if search condition passes
						arr.push(element);
					}			
				});
			});

			// remove duplicate records
			this.matches = arr.filter((elem, index, self) => {
				return index == self.indexOf(elem);
			});

			if (this.matches.length == 0) {
				this.onFilter.emit('NDF');
			} 
			if (this.matches.length > 0) {
				this.onFilter.emit(this.matches);
			} 
		}	
	}
}
