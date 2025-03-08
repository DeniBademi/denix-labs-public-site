import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { CookiePolicyComponent } from './pages/legal/cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './pages/legal/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/legal/terms-of-use/terms-of-use.component';
import { AutomaticCustomerSupportComponent } from './pages/solutions/automatic-customer-support/automatic-customer-support.component';
import { DocumentAnalysisComponent } from './pages/solutions/document-analysis/document-analysis.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InventoryManagementComponent } from './pages/solutions/inventory-management/inventory-management.component';
import { PredictiveMaintenanceComponent } from './pages/solutions/predictive-maintenance/predictive-maintenance.component';
import { QaAndAnomaliesComponent } from './pages/solutions/qa-and-anomalies/qa-and-anomalies.component';
import { ReportWritingComponent } from './pages/solutions/report-writing/report-writing.component';
import { FaceRecognitionComponent } from './pages/solutions/face-recognition/face-recognition.component';
import { RiskAssessmentComponent } from './pages/solutions/risk-assessment/risk-assessment.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'solutions/automatic-customer-support', component: AutomaticCustomerSupportComponent},
    { path: 'solutions/document-analysis', component: DocumentAnalysisComponent},
    { path: 'solutions/report-writing', component: ReportWritingComponent },
    { path: 'solutions/qa-and-anomalies', component: QaAndAnomaliesComponent },
    { path: 'solutions/inventory-management', component: InventoryManagementComponent},
    { path: 'solutions/predictive-maintenance', component: PredictiveMaintenanceComponent },
    { path: 'solutions/face-recognition', component: FaceRecognitionComponent },
    { path: 'solutions/risk-assessment', component: RiskAssessmentComponent },

    { path: 'solutions', component: SolutionsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cookies', component: CookiePolicyComponent},
    { path: 'privacy', component: PrivacyPolicyComponent},
    { path: 'terms', component: TermsOfUseComponent},
    { path: 'not-found', component: NotFoundComponent },
    // { path: '**', redirectTo: 'not-found' }, // Redirect any unmatched route to login



];
