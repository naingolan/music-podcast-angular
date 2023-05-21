import { Directive, HostBinding,HostListener, Input } from "@angular/core";

@Directive({
    selector:'[isFavorite]'
})
export class FavoriteDirective{
    @HostBinding('class.is-favorite') isSetFavorite = true;
    @HostBinding('class.is-favorite-hovering')hovering = false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }
    @Input() set isFavorite(value: boolean){
        this.isSetFavorite = value;
    }
}