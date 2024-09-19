import {Component} from '@angular/core';
import {ModeEnum} from "./core/enums/mode.enum";
import {ModeToggleService} from "./core/services/mode-toggle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentMode: ModeEnum = ModeEnum.LIGHT;
  constructor(private modeToggleService: ModeToggleService) {
    this.modeToggleService.modeChanged$.subscribe((mode: ModeEnum) => {
      this.currentMode = mode;
    });
  }
}
