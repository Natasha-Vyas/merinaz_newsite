import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://submit-form.com';
  private formCode = 'dzbC6LtIC';

  constructor(private http: HttpClient) { }

  submitForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/submit`, formData, { headers });
  }

  submitContactForm(contactData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/contact`, contactData, { headers });
  }

  contactUsSubmission(data: any): Observable<any> {
    const requestBody = {
      ...data,
      type: 'Contact Us'
    };

    return this.http.post(
      `https://submit-form.com/${this.formCode}`,
      requestBody
    );
  }

  submitNewsletterForm(email: string): Observable<any> {
    const requestBody = {
      email: email,
      type: 'Newsletter Subscription'
    };

    return this.http.post(
      `https://submit-form.com/${this.formCode}`,
      requestBody
    );
  }
}
