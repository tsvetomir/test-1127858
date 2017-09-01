import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private gridData: any[];
    public visible = true;

    public toggleVisibility() {
      this.visible = !this.visible;
    }
}
