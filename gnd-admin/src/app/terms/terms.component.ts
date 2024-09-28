// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-terms',
//   standalone: true,
//   imports: [],
//   templateUrl: './terms.component.html',
//   styleUrl: './terms.component.css'
// })
// export class TermsComponent {
//   closeModal() {
//     const modal = document.getElementById('termsModal');
//     if (modal) {
//       modal.style.display = 'none';
//     }
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  closeModal() {
    const modal = document.getElementById('termsModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }
}
