import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
    { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
    { path: 'solutions/automatic-customer-support', loadComponent: () => import('./pages/solutions/automatic-customer-support/automatic-customer-support.component').then(m => m.AutomaticCustomerSupportComponent) },
    { path: 'solutions/document-analysis', loadComponent: () => import('./pages/solutions/document-analysis/document-analysis.component').then(m => m.DocumentAnalysisComponent) },
    { path: 'solutions/report-writing', loadComponent: () => import('./pages/solutions/report-writing/report-writing.component').then(m => m.ReportWritingComponent) },
    { path: 'solutions/qa-and-anomalies', loadComponent: () => import('./pages/solutions/qa-and-anomalies/qa-and-anomalies.component').then(m => m.QaAndAnomaliesComponent) },
    { path: 'solutions/inventory-management', loadComponent: () => import('./pages/solutions/inventory-management/inventory-management.component').then(m => m.InventoryManagementComponent) },
    { path: 'solutions/predictive-maintenance', loadComponent: () => import('./pages/solutions/predictive-maintenance/predictive-maintenance.component').then(m => m.PredictiveMaintenanceComponent) },
    { path: 'solutions/face-recognition', loadComponent: () => import('./pages/solutions/face-recognition/face-recognition.component').then(m => m.FaceRecognitionComponent) },
    { path: 'solutions/risk-assessment', loadComponent: () => import('./pages/solutions/risk-assessment/risk-assessment.component').then(m => m.RiskAssessmentComponent) },
    { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
    { path: 'article/:id', loadComponent: () => import('./pages/article/article.component').then(m => m.ArticleComponent) },

    { path: 'solutions', loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent) },
    { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
    { path: 'cookies', loadComponent: () => import('./pages/legal/cookie-policy/cookie-policy.component').then(m => m.CookiePolicyComponent) },
    { path: 'privacy', loadComponent: () => import('./pages/legal/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
    { path: 'terms', loadComponent: () => import('./pages/legal/terms-of-use/terms-of-use.component').then(m => m.TermsOfUseComponent) },
    { path: 'not-found', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
    { path: '**', redirectTo: 'not-found' }, // Redirect any unmatched route to login
];
