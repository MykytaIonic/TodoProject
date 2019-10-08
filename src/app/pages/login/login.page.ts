import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe();
  }

  register() {
    this.authService.register(this.credentialsForm.value).subscribe(res => {
      //Call Login to automatically login the new AuthService
      this.authService.login(this.credentialsForm.value).subscribe();
    });
  }
  googleSignIn() {
    gapi.load('auth2', function() {
    const auth2 = gapi.auth2.init({
      client_id: '510101324382-mkdatuj82tjsd7eolnju0uptbh2ntr99.apps.googleusercontent.com',
      scope: 'profile'
    });

    // Sign the user in, and then retrieve their ID.
    auth2.signIn().then(function() {
      var profile = auth2.currentUser.get().getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      const res = profile.getEmail();
    });
  });
	}

}
