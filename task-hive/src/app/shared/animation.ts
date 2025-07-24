import { animate, state, style, transition, trigger } from "@angular/animations";



export const slideInOut = 
  trigger('slideInOut', [
    state('in', style({
    //   transform: 'translateY(0%)',
      opacity: 1,
      visibility: 'visible',
        height: '*',

    })),
    state('out', style({
    //   transform: 'translateY(-80%)',
      opacity: 0,
      visibility: 'hidden',
    height: '0px',

})),
    transition('in => out', [
      animate('400ms ease-in-out')
    ]),
    transition('out => in', [
      animate('400ms ease-in-out')
    ])
  ])
;
