import { takeWhile, map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-electron-test',
	templateUrl: './electron-test.component.html',
	styleUrls: ['./electron-test.component.scss']
})
export class ElectronTestComponent implements OnInit {

	max = 1;
	current = 0;

	start() {
		interval(100).pipe(
			takeWhile((_: any) => !this.isFinished),
			map((_: any) => {
				this.current += 0.1;
			})
		).subscribe();
	}

	finish() {
		this.current = this.max;
	}

	reset() {
		this.current = 0;
	}

	get maxVal() {
		return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
	}

	get currentVal() {
		return isNaN(this.current) || this.current < 0 ? 0 : this.current;
	}

	get isFinished() {
		return this.current >= this.max;
	}

	ngOnInit() {
		console.log("Bem vindo ao electron-practice!")
	}
}
