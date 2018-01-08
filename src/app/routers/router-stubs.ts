 // export for convenience.
 export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

 import { Component, Directive, Injectable, Input } from '@angular/core';
 import { NavigationExtras } from '@angular/router';

 
 @Directive({
   selector: '[routerLink]',
   host: {
     '(click)': 'onClick()'
   }
 })
 export class RouterLinkStubDirective {
   @Input('routerLink') linkParams: any;
   navigatedTo: any = null;
 
   onClick() {
     this.navigatedTo = this.linkParams;
   }
 }
 
 @Component({selector: 'router-outlet', template: ''})
 export class RouterOutletStubComponent { }
 
 @Injectable()
 export class RouterStub {
   navigate(commands: any[], extras?: NavigationExtras) { }
 }


 import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 import { convertToParamMap, ParamMap } from '@angular/router';

 

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.paramMap is Observable
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  parent = this.testParent;
  //parent route
  private _testparent: ActivatedRouteStub;

  get testParent(){
    return this._testparent;
  }

  set testParent(parent: ActivatedRouteStub){
    this._testparent = parent;
    this.parent = parent;
  }
  // Test parameters
  private _testParamMap: ParamMap;

  get testParamMap() { return this._testParamMap; }

  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  // ActivatedRoute.snapshot.paramMap
  get snapshot() {
    return { paramMap: this.testParamMap };
  }
  
}