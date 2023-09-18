import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/http/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private isAuthenticated = false;

  constructor(private authervice:AuthenticationService,private router: Router) {}

  ngOnInit() {
    
  }
  onCreatePost(postData: { email: string; password: string }) {
    // Send HTTP request
    console.log(postData);

    this.authervice.LoginProceed(postData).subscribe((result: any) => {
      if (result != null) {
        console.log(result);
        this.isAuthenticated = true;
        this.router.navigate(['/orders']);
      }
    });
  }
  
  logout() {
    // Perform logout logic, set isAuthenticated to false.
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }


}
