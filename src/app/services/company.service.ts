import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[] = [];
  private companiesSubject = new BehaviorSubject<Company[]>([]);
  private storageKey = 'companies';

  constructor() {
    this.loadFromLocalStorage();
  }

  // Load companies from localStorage
  private loadFromLocalStorage(): void {
    const storedCompanies = localStorage.getItem(this.storageKey);
    if (storedCompanies) {
      this.companies = JSON.parse(storedCompanies);
      this.companiesSubject.next([...this.companies]);
    }
  }

  // Save companies to localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.companies));
  }

  // Get all companies
  getCompanies(): Observable<Company[]> {
    return this.companiesSubject.asObservable();
  }

  // Get company by ID
  getCompanyById(id: string): Observable<Company | undefined> {
    const company = this.companies.find(c => c.id === id);
    return of(company);
  }

  // Add a new company
  addCompany(company: Company): Observable<Company> {
    // Generate a unique ID
    company.id = Date.now().toString();
    this.companies.push(company);
    this.companiesSubject.next([...this.companies]);
    this.saveToLocalStorage();
    return of(company);
  }

  // Update an existing company
  updateCompany(company: Company): Observable<Company> {
    const index = this.companies.findIndex(c => c.id === company.id);
    if (index !== -1) {
      this.companies[index] = { ...company };
      this.companiesSubject.next([...this.companies]);
      this.saveToLocalStorage();
    }
    return of(company);
  }

  // Delete a company
  deleteCompany(id: string): Observable<boolean> {
    const index = this.companies.findIndex(c => c.id === id);
    if (index !== -1) {
      this.companies.splice(index, 1);
      this.companiesSubject.next([...this.companies]);
      this.saveToLocalStorage();
      return of(true);
    }
    return of(false);
  }

  // Search companies by any field
  searchCompanies(term: string): Observable<Company[]> {
    if (!term.trim()) {
      return of([...this.companies]);
    }

    term = term.toLowerCase();
    const filteredCompanies = this.companies.filter(company => {
      return Object.values(company).some(value =>
        value && value.toString().toLowerCase().includes(term)
      );
    });

    return of(filteredCompanies);
  }
}
