export interface Company {
  clientApi: string;
  actionType: string;
  primaryClientId: string;
  primaryClientName: string;
  secondaryClientId: string;
  secondaryClientNameA: string;
  secondaryClientNameB?: string;
  additionalClientId?: string;
  additionalClientNameD?: string;
  userId: string;
  publiclyTradedA?: string;
  exchangeNameStockSymbolA?: string;
  annualRevenueA?: string;
  websiteAddressA?: string;
  physicalBusinessAddress: string;
  cityA: string;
  stateA: string;
  zipA: string;
  phoneNumberA?: string;
  productUtilizationA: string;
  translatedResponseA: string;
  primaryBusinessContactNameA?: string;
  primaryBusinessContactPhoneA?: string;
  primaryBusinessContactEmailA?: string;
  id?: string; // For database identification
}

export const ActionTypes = {
  ADD: 'A',
  CHANGE: 'C',
  DELETE: 'D'
};

export interface CompanyFormValidation {
  field: string;
  required: boolean;
  headerName: string;
  description: string;
  defaultValue?: string;
}

export const COMPANY_FORM_VALIDATION: CompanyFormValidation[] = [
  { field: 'clientApi', required: true, headerName: 'CLIENT_API', description: 'Client API Value', defaultValue: 'AOPN4S' },
  { field: 'actionType', required: true, headerName: 'RECORD_ACTION_TYPE', description: 'A=Add, C=Change, D=Delete', defaultValue: 'A' },
  { field: 'primaryClientId', required: true, headerName: 'PRIMARY_CLIENT_IDENTIFIER', description: 'PrimID for Prod Inquiries', defaultValue: 'TROM022505' },
  { field: 'primaryClientName', required: true, headerName: 'PRIMARY_CLIENT_NAME', description: 'Reseller Name', defaultValue: 'Verify Acct' },
  { field: 'secondaryClientId', required: true, headerName: 'SECONDARY_CLIENT_IDENTIFIER', description: 'Inquirer SecID, Assigned by Reseller', defaultValue: 'T000002878' },
  { field: 'secondaryClientNameA', required: true, headerName: 'SECONDARY_CLIENT_NAME_A', description: 'Inquirer Name', defaultValue: 'SHRI HARI ENTERPRISE CORPORATION' },
  { field: 'secondaryClientNameB', required: false, headerName: 'SECONDARY_CLIENT_NAME_B', description: 'Inquirer DBA name, if any' },
  { field: 'additionalClientId', required: false, headerName: 'ADDITIONAL_CLIENT_IDENTIFIER', description: 'Assigned by Reseller' },
  { field: 'additionalClientNameD', required: false, headerName: 'ADDITIONAL_CLIENT_NAME_D', description: 'Assigned by Reseller' },
  { field: 'userId', required: true, headerName: 'USER_IDENTIFIER', description: 'UserID, Assigned by EWS', defaultValue: 'TruistTTSAOAV4001' },
  { field: 'publiclyTradedA', required: false, headerName: 'INQUIRER_IS_PUBLIC_A', description: 'Y=Yes, N=No' },
  { field: 'exchangeNameStockSymbolA', required: false, headerName: 'INQUIRER_STOCK_SYMBOL_A', description: 'Exchange name or stock symbol' },
  { field: 'annualRevenueA', required: false, headerName: 'INQUIRER_ANNUAL_REVENUE_A', description: 'Annual revenue' },
  { field: 'websiteAddressA', required: false, headerName: 'INQUIRER_CONTACT_WEBSITE_A', description: 'Website address' },
  { field: 'physicalBusinessAddress', required: true, headerName: 'INQUIRER_ADDRESS_LINE_A', description: 'Inquirer Address', defaultValue: '200 INNOVATION AVE STE 14' },
  { field: 'cityA', required: true, headerName: 'INQUIRER_ADDRESS_CITY_A', description: 'Inquirer City', defaultValue: 'MORRISVILLE' },
  { field: 'stateA', required: true, headerName: 'INQUIRER_ADDRESS_STATE_A', description: 'Inquirer State', defaultValue: 'NC' },
  { field: 'zipA', required: true, headerName: 'INQUIRER_ADDRESS_ZIP_A', description: 'Inquirer Zip code', defaultValue: '27560' },
  { field: 'phoneNumberA', required: false, headerName: 'INQUIRER_CONTACT_PHONE_A', description: 'Main telephone number' },
  { field: 'productUtilizationA', required: true, headerName: 'INTENDED_USE_A', description: 'A=Payment Check, B=Payment Check with AOAB', defaultValue: 'A' },
  { field: 'translatedResponseA', required: true, headerName: 'TRANS_RESPONSE_A', description: 'Y=Yes, N=No', defaultValue: 'Y' },
  { field: 'primaryBusinessContactNameA', required: false, headerName: 'PRIMARY_CONTACT_NAME_A', description: 'Primary Contact Name' },
  { field: 'primaryBusinessContactPhoneA', required: false, headerName: 'PRIMARY_CONTACT_PHONE_A', description: 'Primary Contact Phone' },
  { field: 'primaryBusinessContactEmailA', required: false, headerName: 'PRIMARY_CONTACT_EMAIL_A', description: 'Primary Contact Email' }
];
