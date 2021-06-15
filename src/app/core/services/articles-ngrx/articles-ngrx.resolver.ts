import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, tap } from "rxjs/operators";
import { ArticleNgRxEntityService } from "./article-ngrx-entity.service";

@Injectable()
export class ArticlesNgRxResolver implements Resolve<boolean> {

    constructor(
        private articleNgRxEntityService: ArticleNgRxEntityService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.articleNgRxEntityService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.articleNgRxEntityService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );

    }

}