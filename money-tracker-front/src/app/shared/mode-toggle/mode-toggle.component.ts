import {Component, OnInit} from '@angular/core';
import {ModeToggleService} from "../../core/services/mode-toggle.service";
import {ModeEnum} from "../../core/enums/mode.enum";

@Component({
  selector: 'app-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss']
})
export class ModeToggleComponent implements OnInit {
  isDarkMode: boolean = false;
  constructor(private modeToggleService: ModeToggleService) {
  }

  ngOnInit(): void {
    this.modeToggleService.modeChanged$.subscribe((mode: ModeEnum) => {
      this.isDarkMode = mode === ModeEnum.DARK;
    });
  }
  onToggleDarkMode() {
    this.modeToggleService.toggleMode();
  }
}
