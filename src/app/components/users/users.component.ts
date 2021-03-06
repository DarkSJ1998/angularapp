import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
	users: User[];
	showExtended: boolean = true;
	loaded: boolean = false;

	constructor() {}

	ngOnInit(): void {
		this.users = [
			{
				firstName: 'John',
				lastName: 'Doe',
				age: 30,
				address: {
					street: '50 Main Street',
					city: 'Boston',
					state: 'MA',
				},
			},
			{
				firstName: 'Kevin',
				lastName: 'Johnson',
				age: 34,
				address: {
					street: '30 School Street',
					city: 'Lynn',
					state: 'MA',
				},
			},
			{
				firstName: 'Karen',
				lastName: 'Williams',
				age: 26,
				address: {
					street: '55 Mill Street',
					city: 'Miami',
					state: 'FL',
				},
			},
		];

		this.loaded = true;

		this.addUser({
			firstName: 'David',
			lastName: 'Jackson',
		});
	}

	addUser(user: User) {
		this.users.push(user);
	}
}
