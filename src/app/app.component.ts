import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public x = 'Recipes';
  public OnMenuItemClicked(itemName: string) {
    this.x = itemName;
  }
}
