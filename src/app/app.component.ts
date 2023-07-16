import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currency = '$';
  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  productsData : any;

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit(){
    this.appService.getData().subscribe(data =>this.productsData = data)
  }

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({ behavior: 'smooth' });
    if (burger) {
      this.form.patchValue({
        order: burger.title + ' (' + burger.price + ' ' + this.currency + ')',
      });
    }
  }
  confirmOrder() {
    if (this.form.valid) {
      this.appService.sendOrder(this.form.value).subscribe({
        next: (response: any) => {
          alert(response.message);
          this.form.reset;
        },
        error: (response) => {
          alert(response.error.message);
        },
      });

    }
  }
  changeCurrency() {
    let newCurrency = '$';
    let coef = 1;

    switch (this.currency) {
      case '$': {
        newCurrency = '₽';
        coef = 80;
        break;
      }
      case '₽': {
        newCurrency = 'BYN';
        coef = 3;
        break;
      }
      case 'BYN': {
        newCurrency = '€';
        coef = 0.9;
        break;
      }
      case '€': {
        newCurrency = '¥';
        coef = 6.9;
        break;
      }
    }
    this.currency = newCurrency;

    this.productsData.forEach((el: any) => {
      el.price = (el.basePrice * coef).toFixed(1);
    });
  }
}
