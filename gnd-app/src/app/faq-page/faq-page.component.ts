import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent {
  activeDropdown: string = '';


  leftFaqs = [
    { id: 'faq1', question: 'What is GND?', answer: 'GND is a GDPR violation detection application designed to help users identify potential GDPR compliance issues in their documents. By uploading files, GND scans and detects any violations, providing detailed results to help you ensure data protection compliance.' },
    { id: 'faq2', question: 'How do I report a violation?', answer: 'You can report a violation by contacting your manager.' },
    { id: 'faq4', question: 'How do I upload a file for scanning in GND?', answer: 'Open the GND app. Click the "Upload" button or drag and drop your file into the designated area. The app will automatically begin scanning the uploaded file for GDPR violations. Once the scan is complete, you will receive a detailed report of any detected violations.' },
    { id: 'faq5', question: 'What types of files can I upload to GND?', answer: 'GND supports the following file types: PDF, Excel, and Word.' },
    { id: 'faq6', question: 'How long does it take for GND to scan a file?', answer: 'The scan duration depends on the size and complexity of the file. Typically, most files are scanned within a few minutes. Larger files or those with complex content may take slightly longer.' },
    { id: 'faq7', question: 'How accurate is GND in detecting GDPR violations?', answer: 'GND utilizes advanced algorithms and up-to-date regulatory information to ensure high accuracy in detecting GDPR violations. However, we recommend reviewing the results and consulting with a GDPR expert for critical compliance decisions.' },
    { id: 'faq8', question: 'Is there a tutorial on how to use GND?', answer: 'Yes, GND includes a help button in the navigation bar that provides a comprehensive tutorial on how to use the app. The tutorial covers everything from uploading files to understanding the scan results.' },
    { id: 'faq9', question: 'Is my data secure with GND?', answer: 'Yes, we take data security very seriously. All uploaded files are processed in a secure environment, and we implement strict data protection measures to ensure your information remains confidential and secure.' },
    { id: 'faq10', question: 'How do I interpret the scanned results?', answer: 'The scan results will indicate any detected GDPR violations and provide details on the nature of each violation.' },
    { id: 'faq11', question: 'Can I download the scanned results?', answer: 'You are allowed to download the report generated by our system, but you cannot download the document.' },
    
  ];

  rightFaqs = [
    { id: 'faq12', question: 'What is GDPR?', answer: 'The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union and the European Economic Area. It also addresses the transfer of personal data outside the EU and EEA areas.' },
    { id: 'faq13', question: 'Why is GDPR important?', answer: 'GDPR is important because it enhances the protection of personal data and gives individuals greater control over how their data is used. Non-compliance can result in hefty fines and damage to a company’s reputation.' },
    { id: 'faq14', question: 'What constitutes a GDPR violation?', answer: 'A GDPR violation occurs when an organization fails to comply with any of the GDPR’s provisions, such as not obtaining proper consent for data collection, not protecting personal data adequately, or not providing individuals with their data rights.' },
    { id: 'faq15', question: 'How can I detect a GDPR violation?', answer: 'Detecting a GDPR violation involves monitoring data handling practices, ensuring proper consent is obtained, checking for data breaches, and verifying that data subject rights are respected.' },
    { id: 'faq16', question: 'What are common signs of a GDPR violation?', answer: 'Common signs include unauthorized access to personal data, failure to respond to data subject requests, lack of transparency about data processing activities, and insufficient data protection measures.' },
    { id: 'faq17', question: 'What should I do if I suspect a GDPR violation?', answer: "If you suspect a GDPR violation, you should immediately report it to your Data Protection Officer (DPO) or your organization's compliance team. They will conduct an investigation and take appropriate actions." },
    { id: 'faq18', question: 'How do I report a GDPR violation?', answer: 'A GDPR violation can be reported to the relevant Data Protection Authority (DPA) in your country. This usually involves submitting a detailed report outlining the suspected violation and any supporting evidence.' },
    { id: 'faq19', question: 'What are the consequences of a GDPR violation?', answer: 'Consequences can include substantial fines (up to €20 million or 4% of annual global turnover, whichever is higher), legal actions, and significant reputational damage.' },
    { id: 'faq22', question: 'What are my rights under GDPR?', answer: 'GDPR grants individuals rights including the right to access their data, the right to rectification, the right to erasure (right to be forgotten), the right to restrict processing, the right to data portability, and the right to object to data processing.' },    
    { id: 'faq23', question: 'How can my organization ensure GDPR compliance?', answer: 'To ensure GDPR compliance, organizations should conduct regular audits, implement robust data protection measures, provide GDPR training for employees, and appoint a Data Protection Officer if necessary.' },
    { id: 'faq24', question: 'What are some best practices for GDPR compliance?', answer: 'Best practices include obtaining clear and explicit consent, maintaining detailed records of data processing activities, conducting Data Protection Impact Assessments (DPIAs), and ensuring data is securely stored and transmitted.' },

  ];

  toggleDropdown(dropdownId: string) {
    this.activeDropdown = this.activeDropdown === dropdownId ? '' : dropdownId;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.activeDropdown = ''; // Close dropdown if clicked outside
    }
  }
}




