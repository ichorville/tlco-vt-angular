import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    add(product: any) {
        this.messages.push(product);
    }

    get(id: any): Promise<any> {
		let product = this.messages.filter((element) => {
			return element.id == id;
		});
		return Promise.resolve(product[0]);
    }
    
    update(product: any): Promise<any> {
		return Promise.resolve(true).then(() => {
			let index = this.messages.findIndex((product) => {
				return product.id === product.id;
			});
			this.messages[index].name = product.name;
			return product;
		});
	}

    messages = [
        {   
            id: 1,
            name: 'Henrik Gevorg',
            photo: 'assets/images/face-1.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Egret',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
                Thanks<br>
                Jhone`
        },
        {
            id: 2,
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote><br>
                Thanks<br>
                Mark`

        },
        {
            id: 3,
            name: 'Petros Toros',
            photo: 'assets/images/face-3.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
                Thanks<br>
                Jhone`

        },
        {
            id: 4,
            name: 'Henrik Gevorg',
            photo: 'assets/images/face-1.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Egret',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
                Thanks<br>
                Jhone`
        },
        {
            id: 5,
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote><br>
                Thanks<br>
                Mark`

        },
        {
            id: 6,
            name: 'Petros Toros',
            photo: 'assets/images/face-4.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
                Thanks<br>
                Jhone`

        },
        {
            id: 7,
            name: 'Henrik Gevorg',
            photo: 'assets/images/face-1.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Egret',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
                Thanks<br>
                Jhone`
        },
        {
            id: 8,
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote><br>
                Thanks<br>
                Mark`

        },
        {
            id: 9,
            name: 'Petros Toros',
            photo: 'assets/images/face-4.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
                Thanks<br>
                Jhone`

        },
        {
            id: 10,
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote><br>
                Thanks<br>
                Mark`

        },
        {
            id: 11,
            name: 'Petros Toros',
            photo: 'assets/images/face-4.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>
                Thanks<br>
                Jhone`

        },
        {
            id: 12,
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: `<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote>
                <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, 
                inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, 
                consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>
                <blockquote>
                Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, 
                temporibus vero possimus error voluptates sequi.
                </blockquote><br>
                Thanks<br>
                Mark`

        }
    ];

    distributors = [
        {
            text: 'Cranjus McBasketball',
            status: false
        }, 
        {
            text: 'Minty Cherubandtug',
            status: false
        }, 
        {
            text: 'Mary Beth BethBeth',
            status: true
        }, 
        {
            text: 'Helena Bottom-Farter',
            status: true
        }, 
        {
            text: 'Beefy McWhatnow',
            status: true
        },
        {
            text: 'Tammy BundleBalls',
            status: false
        }, 
        {
            text: 'Captain Melvin Seashorse',
            status: false
        }, 
        {
            text: 'Dr. Shrimp Puerto Rico',
            status: true
        }, 
        {
            text: 'Simmy Cantstandyourbitz',
            status: true
        }, 
        {
            text: 'Wandamian Crucifixplate',
            status: true
        },
        {
            text: 'Denise Fat',
            status: false
        }, 
        {
            text: 'Jury Prosciutto',
            status: false
        }, 
        {
            text: 'Rickyticky Bobbywobbin',
            status: true
        }, 
        {
            text: 'Dungaresse Weatherspoons',
            status: true
        }, 
        {
            text: 'Eyna Mouthhole',
            status: true
        }
    ];  

    asms = [
        {
            text: 'Cranjus McBasketball',
            status: false
        }, 
        {
            text: 'Minty Cherubandtug',
            status: false
        }, 
        {
            text: 'Mary Beth BethBeth',
            status: true
        }, 
        {
            text: 'Helena Bottom-Farter',
            status: true
        }, 
        {
            text: 'Beefy McWhatnow',
            status: true
        },
        {
            text: 'Tammy BundleBalls',
            status: false
        }, 
        {
            text: 'Captain Melvin Seashorse',
            status: false
        }, 
        {
            text: 'Dr. Shrimp Puerto Rico',
            status: true
        }, 
        {
            text: 'Simmy Cantstandyourbitz',
            status: true
        }, 
        {
            text: 'Wandamian Crucifixplate',
            status: true
        },
        {
            text: 'Denise Fat',
            status: false
        }, 
        {
            text: 'Jury Prosciutto',
            status: false
        }, 
        {
            text: 'Rickyticky Bobbywobbin',
            status: true
        }, 
        {
            text: 'Dungaresse Weatherspoons',
            status: true
        }, 
        {
            text: 'Eyna Mouthhole',
            status: true
        }
    ]; 

    // asms: [
    //     {
    //         text: 'Mark-Pat-Bill-Joe-Dinosaur',
    //         status: false
    //     }, 
    //     {
    //         text: 'Fidelroyolanda Smackonmytiddyboosters III',
    //         status: false
    //     }, 
    //     {
    //         text: 'Real Hefty Trout',
    //         status: false
    //     }, 
    //     {
    //         text: 'Wasda Dealwifkramer',
    //         status: false
    //     }, 
    //     {
    //         text: 'Cumby O Boombox',
    //         status: false
    //     },
    //     {
    //         text: 'Mother Coconuts',
    //         status: false
    //     }, 
    //     {
    //         text: 'David Krappenschitz',
    //         status: false
    //     }, 
    //     {
    //         text: 'Chug-chug Pickles',
    //         status: false
    //     }
    // ]
}