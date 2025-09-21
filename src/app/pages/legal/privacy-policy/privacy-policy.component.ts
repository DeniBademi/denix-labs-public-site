import { Component } from '@angular/core';
import { MarkdownWrapperComponent } from '../../../markdown-wrapper/markdown-wrapper.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [MarkdownWrapperComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
markdown = `# Privacy Policy

### Who are we?

**Company name**: DENIX LABS Ltd.
**UIC**: 208227895
**Contact phone**: +359 878 426 545
**Email**: info@denixlabs.com

We know that when we collect and process information about an individual, we must do so responsibly, with due care for personal privacy, complying with data protection laws and privacy principles. This privacy policy ("Policy") describes the main types of personal information we collect within the company, how this information is processed and disclosed, as well as our obligations to the persons whose data we process. The Policy explains in principle how we strive to comply with privacy and data protection laws and regulations, including but not limited to Regulation (EU) 2016/679 (General Data Protection Regulation/GDPR).
The sole proprietorship company in its capacity as a personal data controller has introduced internal policies (instructions) and programs designed to ensure compliance with these laws.


### Personal data disclosure
Personal data of our customers may be disclosed by the sole proprietorship company:
to a company performing accounting activities
to the bank servicing the Company (for the purposes of successful payment of the service under the contract)
to investigating and other authorities, based on a legal text that obliges the Company to disclose information about the customer
Within the company, only authorized persons, properly prepared for working with personal data, have access to personal data. The sole proprietorship company does not trade or sell databases, including anonymized or pseudonymized data, for any reason and for any purposes, including statistical ones. Transfer of personal data (disclosure to persons outside the country) The sole proprietorship company does not transfer personal data outside the borders of the country.



### Notification and Consent
At the time of data collection, the sole proprietorship company notifies persons in a clear and consistent manner exactly how their information will be processed, disclosed, stored and deleted; what rights they have regarding personal data protection or according to this Policy, as well as what are the ways to exercise these rights. This notification is fully compliant with the requirements of the Regulation and aims to comply with it to the maximum extent, including but not limited to the principle of transparency and lawfulness in the processing of personal data of persons. Regarding their personal data, every user has the following rights:

right of access to them
right to request updating and/or correction
right to request deletion
right to request restriction of processing
right to data portability
right to object to processing in a certain way and for certain purposes, including automated processing (profiling)
With the exception of the last right, the others are exercised with a written request to the seat of my Company at ADDRESS. The sole proprietorship company guarantees that individuals can exercise all their rights regarding personal data processed by the sole proprietorship company, including but not limited to the right of access, updating and correction, right to data portability, right to temporary suspension of processing and data deletion and in general everything provided by law. The sole proprietorship company will make maximum efforts to consider and approve the person's request. Any refusal by the sole proprietorship company would be possible only on a legal basis (when a legal text prohibits this). In cases where required by law, as well as as an expression of good practice, the sole proprietorship company may request the consent of the individual to collect, use and disclose their data for specifically defined purposes.



### Data relevance and retention periods
Our privacy policy provides that every person whose data we have collected has full possibilities to request correction and updating of the data. The right to be forgotten is also among those provided in our privacy policy and every person can request deletion of their data. The Company deletes personal data immediately after the grounds for processing and storage cease, after consideration of special legal requirements.



### Data security and protection
DENIX LABS Ltd. maintains a comprehensive information security policy with maximum emphasis on technical and organizational security measures that protect personal information from unauthorized access or loss. In accordance with regulatory requirements, the sole proprietorship company also maintains a practice for dealing with security breaches related to the protection of personal data, including making all necessary notifications to persons or the supervisory authority.



### Inquiries, reports, complaints and requests for exercising rights
Any communication, inquiries, reports, complaints and requests for exercising rights regarding personal data should be addressed to the seat of DENIX LABS Ltd.



### Legal status of this Policy, mentions and effect
This Privacy Policy is not a contract and has no binding effect. DENIX LABS Ltd. reserves the right to update the Policy (for example - in case of a change in legislation regarding personal data).
`;
}
