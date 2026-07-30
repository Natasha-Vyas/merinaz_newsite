import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactPageComponent implements OnInit {

  merinazDetails: FormGroup;
  serviceTypes: string[] = [];
  brandName: string = 'Merinaz';
  address: string = '';
  locationTwo: string = '';
  contact: string = '';
  email: string = '';
  convertedTime: string = '';
  success: boolean = false;
  error: boolean = false;
  submitting: boolean = false;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private appService: ApiService
  ) {
    this.merinazDetails = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      requested_date: ['', Validators.required],
      event_time: ['', Validators.required],
      service_type: ['', Validators.required],
      comments: ['']
    });
  }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      this.brandName = data.brandName || 'Merinaz';
      this.address = data.address || '';
      this.locationTwo = data.locationTwo || '';
      this.contact = data.contact || '';
      this.email = data.email || '';
      this.serviceTypes = (data.hero?.servicesContact || []).map((service: any) => service.name);
    });
  }

  updateConvertedTime(): void {
    const value = this.merinazDetails.get('event_time')?.value;
    this.convertedTime = this.convertToAmPm(value);
  }

  submitmirnazForm(): void {
    this.submitted = true;
    this.success = false;
    this.error = false;
    this.updateConvertedTime();

    if (this.merinazDetails.invalid) {
      this.merinazDetails.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const body = {
      ...this.merinazDetails.value,
      event_time: this.convertedTime,
      requested_time_24h: this.merinazDetails.value.event_time
    };

    this.appService.contactUsSubmission(body).subscribe(
      () => {
        this.success = true;
        this.submitting = false;
        this.submitted = false;
        this.convertedTime = '';
        this.merinazDetails.reset();
      },
      () => {
        this.error = true;
        this.submitting = false;
      }
    );
  }

  isInvalid(controlName: string): boolean {
    const control = this.merinazDetails.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
  }

  private convertToAmPm(value: string): string {
    if (!value) {
      return '';
    }

    const parts = value.split(':');
    const hours = Number(parts[0]);
    const minutes = parts[1] || '00';
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;

    return `${hour12}:${minutes} ${suffix}`;
  }
}
