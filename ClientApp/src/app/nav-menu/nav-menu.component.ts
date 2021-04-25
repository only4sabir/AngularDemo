import { Component } from '@angular/core';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  count = 0;
  name: string;
  constructor(private readonly _commonService: CommonService) {
    _commonService.name.subscribe((name: string): void => {
      //alert(name);
      this.name = name;
    })

  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  passData() {
    this.count = this.count + 1;
    const name = `sabir ${this.count}`;
    this._commonService.updateValue(name);
    //alert('Hi');
  }
}
