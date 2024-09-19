import {Inject, Injectable} from "@angular/core";
import {ModeEnum} from "../enums/mode.enum";
import {BehaviorSubject, Observable} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {MODE_STORAGE_SERVICE, ModeStorage} from "./mode-storage.service";

@Injectable()
export class ModeToggleService {
  /**
   * contains the current active mode
   * avoid mutating it directly, instead use `updateCurrentMode`
   */
  private currentMode: ModeEnum = ModeEnum.LIGHT;

  /**
   * BehaviorSubject that detects the mode changes
   */
  private modeChangedSubject = new BehaviorSubject(this.currentMode);

  /**
   * Observable that emits the current mode when mode changes.
   * Exposed publicly so that other components can use this feature
   */
  modeChanged$: Observable<ModeEnum>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(MODE_STORAGE_SERVICE) private modeStorage: ModeStorage
  ) {
    this.modeChanged$ = this.modeChangedSubject.asObservable();
    this.init();
  }

  /**
   * Function to mutate the currentMode
   * @param mode Mode
   */
  private updateCurrentMode(mode: ModeEnum) {
    this.currentMode = mode;
    this.modeChangedSubject.next(this.currentMode);
    this.modeStorage.save(this.currentMode);
  }

  /**
   * Init function that update the application based on the initial mode value
   * Flow as below
   * 1 - If there is a saved mode in the browser - use this as the initial value
   * 2 - If there is no saved mode, Check for the preferred device theme
   * 3 - If device theme is dark, set the init value to `dark`
   * 4 - Else set the default value to `light`
   */
  private init() {
    const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
    let initMode = this.modeStorage.get();
    if (!initMode) {
      deviceMode.matches ? (initMode = ModeEnum.DARK) : (initMode = ModeEnum.LIGHT);
    }
    this.updateCurrentMode(initMode);
    this.document.body.classList.add(this.currentMode);
  }

  /**
   * Function that toggles the mode
   * Exposed publicly
   */
  toggleMode() {
    this.document.body.classList.toggle(ModeEnum.LIGHT);
    this.document.body.classList.toggle(ModeEnum.DARK);
    if (this.currentMode === ModeEnum.LIGHT) {
      this.updateCurrentMode(ModeEnum.DARK);
    } else {
      this.updateCurrentMode(ModeEnum.LIGHT);
    }
  }
}
