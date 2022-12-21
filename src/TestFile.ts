export interface Ex {
    test: string;
    test1: string;
    test2: string;
    test3: string;
}

// canActivate
// canActivateChild
// canDeactivate
// canMatch
// resolve
//canLoad
// class UserToken {}
// class Permissions {
//   canActivate(user: UserToken, id: string): boolean {
//     return true;
//   }
// }

// @Injectable()
// class CanActivateTeam implements CanActivateChild {
//   constructor(private permissions: Permissions, private currentUser: UserToken) {}

//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
//     return this.permissions.canActivate(this.currentUser, route.params.id);
//   }
// }