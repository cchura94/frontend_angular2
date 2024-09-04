import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'navegacion',
    imports: [RouterOutlet, RouterLink],
    standalone: true,
    templateUrl: './navegacion.component.html',
    styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent{
    
}