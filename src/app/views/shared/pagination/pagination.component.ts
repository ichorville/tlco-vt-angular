import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

	@Input()
    public totalRows: number;

	@Input()
    public pages: any[];

	@Input()
	public selectedPage: number;

	@Output()
	public onPageClick: EventEmitter<number>;

    head: number;
	tail: number;
    
    constructor() {
        this.onPageClick = new EventEmitter<number>();
		// head and tail to represents the pages before and after the current
        this.head = 0;
        this.tail = 5;
    }

    ngOnInit() {}

	/**
	 *	This method emits which data set to be displayed in the data-table module 
	 *	when the previous page button is clicked. Based on the current selected page, 
	 *	the method defines what the previous page should be.
	 */
    previousPage(selectedPage: number) {
		// if total pages length is greater than five
		if (this.pages.length > 5) {
			if (selectedPage > 1) {
				selectedPage--;
				this.selectedPage = selectedPage;

				// to check if selectedPage is inside the 5 element view
				if (selectedPage == (this.pages.length - 1) || selectedPage == (this.pages.length - 2)) {
					this.head = (this.pages.length - 5);
					this.tail = this.pages.length;
					this.onPageClick.emit(this.selectedPage);
				// if selectedPage is outside the 5 element view
				} else if (selectedPage > this.pages[2] && selectedPage < this.pages.length - 2) {
					this.head--; // deduct two values from head
					this.tail--; // deduct two values from the tail
					this.onPageClick.emit(selectedPage);
				// selectedPage is still inside 5 element view but not the first 
				} else if (selectedPage == 2 || 3) {
					this.head = 0;
					this.tail = 5;
					this.onPageClick.emit(selectedPage);
				}
			// selectedPage is still inside 5 element view and is the first 
			} else if (selectedPage == 1) {
				this.head = 0;
				this.tail = 5;
				this.onPageClick.emit(this.selectedPage);
			}
		} else {
			// total pages length is lesser than five
			if (selectedPage > 1) {
				selectedPage--;
				this.selectedPage = selectedPage;
				this.onPageClick.emit(this.selectedPage);
			// no significant changes to head and tail
			} else if (selectedPage == 1) {
				this.selectedPage = selectedPage;
				this.onPageClick.emit(this.selectedPage);
			}
		}
	}

	/**
	 * This method emits which data set to be displayed n the data-table module when 
	 * the next page button is clicked. Based on the current selected page, the method
	 * defines what the next page should be.
	 */
	nextPage(selectedPage: number) {
		// if total pages length is greater than five
		if (this.pages.length > 5) {
			// if selectedPage is within total page limit
			if (selectedPage < this.pages.length) {
				selectedPage++;
				this.selectedPage = selectedPage;

				// to check if selectedPage is inside the 5 element view
				if (selectedPage > this.pages[2] && selectedPage < (this.pages.length - 2)) {
					this.head++; // add two more values from current head
					this.tail++; // add two more values from current tail
					this.onPageClick.emit(this.selectedPage);
				// if selectedPage is in the range of the final set of pages
				} else if (selectedPage == this.pages.length || selectedPage == (this.pages.length - 1) || selectedPage == (this.pages.length - 2)) {
					this.head = (this.pages.length - 5);
					this.tail = this.pages.length;
					this.onPageClick.emit(this.selectedPage);
				// if the selectedPage is within the first set of pages range 
				} else if (selectedPage == 2 || 3) {
					this.head = 0;
					this.tail = 5;	
					this.onPageClick.emit(this.selectedPage);
				}
			// if selectedPage is the final page
			} else if (selectedPage == this.pages.length) {
				this.head = (this.pages.length - 5);
				this.tail = this.pages.length;
				this.onPageClick.emit(this.selectedPage);
			}
		} else {
			// total pages length is lesser than five
			if (selectedPage < this.pages.length) {
				selectedPage++;
				this.selectedPage = selectedPage;
				this.onPageClick.emit(this.selectedPage);

			} else if (selectedPage == this.pages.length) {
				this.selectedPage = selectedPage;
				this.onPageClick.emit(this.selectedPage);
			}
		}	
	}

	/**
	 * 	This method emits the current data set which is to be displayed 
	 * 	on the data-table module when the currentPage button is clicked. What ever the 
	 * 	current page may be, when a page is clicked, it is automatically baought into the 
	 * 	very middle of the page set and is highlighted to indicated it is the selectedPage.
	 */
	currentData(currentPage: number) {
		// if total pages length is greater than five
		if (this.pages.length > 5) {
			this.selectedPage = currentPage;

			// to check if selectedPage is inside the 5 element view
			if ((currentPage > this.pages[2]) && (currentPage < (this.pages.length - 2))) {
				this.head = currentPage - 3; // head allignes two values before current page
				this.tail = currentPage + 2; // tail allignes two values after current page
				this.onPageClick.emit(currentPage);
			// to check if the selectedPage is on the latter part of the pages count
			} else if ((currentPage == (this.pages.length)) || (currentPage == (this.pages.length - 1)) || (currentPage == (this.pages.length - 2))) {
				this.head = (this.pages.length - 5);
				this.tail = this.pages.length;
				this.onPageClick.emit(currentPage);
			// if the selectedPage is one of the starting few
			} else if (currentPage == 1 || 2 || 3) {
				this.head = 0;
				this.tail = 5;	
				this.onPageClick.emit(currentPage);
			}
		} else {
			// if the page count is lesser than five
			this.selectedPage = currentPage;
			this.onPageClick.emit(currentPage);
		}	
	}

	/**
	 *	This method is to get the data set which represents the first-most data set 
	 *	regardless of the whatever the current page is.
	 */
	getFirst() {
		if (this.pages.length > 5) {
			this.selectedPage = 1;
			this.head = 0;
			this.tail = 5;
			this.onPageClick.emit(1);
		} else {
			this.selectedPage = 1;
			this.onPageClick.emit(1);
		}
	}

	/**
	 *	This method is to get the data set which represents the final(last) data set 
	 *	regardless of the whatever the current page is.
	 */
	getLast() {
		if (this.pages.length > 5) {
			this.selectedPage = this.pages.length;
			this.head = (this.pages.length - 5);
			this.tail = this.pages.length;
			this.onPageClick.emit(this.pages.length);
		} else {
			this.selectedPage = this.pages.length;
			this.onPageClick.emit(this.pages.length);
		}
	}
}
