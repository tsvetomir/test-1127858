import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <p>
      my Works!
    </p>
  `,
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
