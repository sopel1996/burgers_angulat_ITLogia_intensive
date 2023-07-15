import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currency = "$"
  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  productsData = [
    {
      image: '1.png',
      title: 'Бургер чеддер & бекон',
      description:
        'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      weight: 360,
    },
    {
      image: '2.png',
      title: 'BBQ с беконом и курицей',
      description:
        'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
      price: 7,
      basePrice: 7,
      weight: 390,
    },
    {
      image: '3.png',
      title: 'Дабл биф бургер',
      description:
        'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук,соус бургер, горчица',
      price: 10,
      basePrice: 10,
      weight: 420,
    },
    {
      image: '4.png',
      title: 'Баварский бургер',
      description:
        'Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
      price: 7,
      basePrice: 7,
      weight: 220,
    },
    {
      image: '5.png',
      title: 'Бекон чизбургер',
      description:
        'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
      price: 8,
      basePrice: 8,
      weight: 220,
    },
    {
      image: '6.png',
      title: 'Индиана бургер',
      description:
        'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 9,
      basePrice: 9,
      weight: 320,
    },
    {
      image: '7.png',
      title: 'Вегги бургер',
      description:
        'Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг',
      price: 8,
      basePrice: 8,
      weight: 280,
    },
    {
      image: '8.png',
      title: 'Плаксивый Джо',
      description:
        'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень',
      price: 7,
      basePrice: 7,
      weight: 380,
    },
    {
      image: '9.png',
      title: 'Двойной чиз бургер',
      description:
        'Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 11,
      basePrice: 11,
      weight: 400,
    },
    {
      image: '10.png',
      title: 'Фрешбургер',
      description:
        'Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат',
      price: 9,
      basePrice: 9,
      weight: 300,
    },
    {
      image: '11.png',
      title: 'Цуккини бургер',
      description:
        'Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень',
      price: 8,
      basePrice: 8,
      weight: 320,
    },
    {
      image: '12.png',
      title: 'Двойной бургер чеддар',
      description:
        'Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень',
      price: 9,
      basePrice: 9,
      weight: 360,
    },
  ];

  constructor(private fb: FormBuilder) {}

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({ behavior: 'smooth' });
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }
  confirmOrder() {
    if (this.form.valid) {
      alert('Спасибо за заказ!');
      this.form.reset;
    }
  }
  changeCurrency(){
  let newCurrency = "$";
  let coef = 1;

  switch (this.currency) {
    case "$": {
      newCurrency = "₽";
      coef = 80;
      break;
    }
    case "₽": {
      newCurrency = "BYN";
      coef = 3;
      break;
    }
    case "BYN": {
      newCurrency = "€";
      coef = 0.9;
      break;
    }
    case "€": {
      newCurrency = "¥";
      coef = 6.9;
      break;
    }
  }
  this.currency = newCurrency

  this.productsData.forEach((el:any)=>{
    el.price = (el.basePrice * coef).toFixed(1)
  })

  }
}
