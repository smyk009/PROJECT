import { Component, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() itemClicked = new EventEmitter<string>();

    onClicked(itemType: string) {
        this.itemClicked.emit(itemType);
    }
}
