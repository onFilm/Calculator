import { Component } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Calc'
  expression: string = '';
  disable: boolean = false;
  selectedOperator: string = '';
  message: string = "";
  lightTheme: boolean = true;
  faSun = faSun;
  faMoon = faMoon;
  faGithub = faGithub;

  onOperandClick(event: any) {
    console.log(this.expression)
    this.expression = this.expression.concat(event);
  }

  onOperatorClick(event: any) {
    this.expression = this.expression.concat(event);
    this.selectedOperator = event;
    this.disable = true;
  }

  onEqualClick(event: any) {
    try {
      this.expression = String(this.parse(this.expression));
      this.disable = false;
    } catch (error) {
      this.message = "Missing Operand!!!";
        // Get the snackbar DIV
        const x:any  = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  }

  onACClick(event: any) {
    this.expression= '';
    this.disable = false;
  }

  parse(str: any): string {
    return Function(`'use strict'; return (${str})`)()
  }

  switchTheme() {
    this.lightTheme = !this.lightTheme;
  }
}
