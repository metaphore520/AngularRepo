import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn : "root"
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return route.data && route.data?.['applyPreload'] ? fn() : of(null);
    }
}
