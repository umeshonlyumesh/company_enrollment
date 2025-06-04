import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  filteredCompanies: Company[] = [];
  searchTerm: string = '';

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
      this.filteredCompanies = companies;
    });
  }

  search(): void {
    if (!this.searchTerm.trim()) {
      this.filteredCompanies = this.companies;
      return;
    }

    this.companyService.searchCompanies(this.searchTerm).subscribe(results => {
      this.filteredCompanies = results;
    });
  }

  deleteCompany(id: string): void {
    if (confirm('Are you sure you want to delete this company?')) {
      this.companyService.deleteCompany(id).subscribe(success => {
        if (success) {
          this.loadCompanies();
        }
      });
    }
  }
}
