import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  name: string;
  increment: number;
  constructor(private readonly _commonService: CommonService) {
    _commonService.name.subscribe((name: string): void => {
      //alert(name);
      this.name = name;
    });
    _commonService.increment.subscribe(i => { this.increment = i; }
    );
  }
}
