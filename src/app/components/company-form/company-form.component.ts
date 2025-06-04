import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company, COMPANY_FORM_VALIDATION, ActionTypes } from '../../models/company.model';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  companyForm!: FormGroup;
  isEditMode = false;
  companyId: string | null = null;
  formValidation = COMPANY_FORM_VALIDATION;
  actionTypes = ActionTypes;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();

    // Check if we're in edit mode
    this.route.paramMap.subscribe(params => {
      this.companyId = params.get('id');
      if (this.companyId) {
        this.isEditMode = true;
        this.loadCompanyData(this.companyId);
      }
    });
  }

  initForm(): void {
    // Create form controls with validators for required fields
    const formControls: any = {};

    this.formValidation.forEach(field => {
      formControls[field.field] = [
        field.defaultValue || '',
        field.required ? Validators.required : null
      ];
    });

    this.companyForm = this.fb.group(formControls);
  }

  loadCompanyData(id: string): void {
    this.companyService.getCompanyById(id).subscribe(company => {
      if (company) {
        this.companyForm.patchValue(company);
      } else {
        this.router.navigate(['/companies']);
      }
    });
  }

  onSubmit(): void {
    if (this.companyForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.companyForm.controls).forEach(key => {
        const control = this.companyForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    const companyData: Company = this.companyForm.value;

    if (this.isEditMode && this.companyId) {
      companyData.id = this.companyId;
      this.companyService.updateCompany(companyData).subscribe(() => {
        this.router.navigate(['/companies']);
      });
    } else {
      this.companyService.addCompany(companyData).subscribe(() => {
        this.router.navigate(['/companies']);
      });
    }
  }

  // Helper method to check if a field is invalid and touched
  isFieldInvalid(fieldName: string): boolean {
    const control = this.companyForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  // Reset the form
  resetForm(): void {
    this.companyForm.reset();
    // Set default values after reset
    this.formValidation.forEach(field => {
      if (field.defaultValue) {
        this.companyForm.get(field.field)?.setValue(field.defaultValue);
      }
    });
  }
}
