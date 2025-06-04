import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company, COMPANY_FORM_VALIDATION } from '../../models/company.model';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company | undefined;
  companyId: string | null = null;
  formValidation = COMPANY_FORM_VALIDATION;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.companyId = params.get('id');
      if (this.companyId) {
        this.loadCompanyData(this.companyId);
      } else {
        this.router.navigate(['/companies']);
      }
    });
  }

  loadCompanyData(id: string): void {
    this.companyService.getCompanyById(id).subscribe(company => {
      if (company) {
        this.company = company;
      } else {
        this.router.navigate(['/companies']);
      }
    });
  }

  deleteCompany(): void {
    if (this.companyId && confirm('Are you sure you want to delete this company?')) {
      this.companyService.deleteCompany(this.companyId).subscribe(success => {
        if (success) {
          this.router.navigate(['/companies']);
        }
      });
    }
  }

  // Helper method to get field description
  getFieldDescription(fieldName: string): string {
    const field = this.formValidation.find(f => f.field === fieldName);
    return field ? field.description : '';
  }

  // Helper method to get field header name
  getFieldHeaderName(fieldName: string): string {
    const field = this.formValidation.find(f => f.field === fieldName);
    return field ? field.headerName : '';
  }
}
