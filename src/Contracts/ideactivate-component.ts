import { Observable } from "rxjs";

export interface IDeactivateComponent {
    canDeactivateGuard(): Observable<boolean>
}
