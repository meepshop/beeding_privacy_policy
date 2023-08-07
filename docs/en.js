const generateENContent = (appName, email, contact, activeDate) =>
  `
# <img src='logo.svg' />  **Privacy Policy Statement**

Effective Date: ${activeDate}

Welcome to ${appName} APP (hereinafter referred to as "we," "our," "us"). We value the protection of your privacy and are committed to taking all necessary measures to safeguard your personal information. Please read the following Privacy Policy carefully to understand how we collect, use, process, and protect your information.

1. **Information Collection and Use**

When you use the ${appName} APP, we may collect the following types of information:

- **Device Information:** We may collect information related to your device, such as device model, operating system version, etc., to optimize our services and provide technical support.

- **Usage Logs and Behavioral Information:** We may record how you use the ${appName} APP, including interactions with other users, content of messages sent, etc., to optimize our services and improve user experience.

2. **Information Sharing and Disclosure**

We will not share your personal information with third parties without your consent, except:

- As required by applicable laws and regulations
- Within the scope permitted by law to protect our rights or property
- In anonymized or aggregated form, shared with partners for statistical analysis or other lawful purposes

3. **Information Protection and Security**

We are committed to protecting the security of your personal information. We will take reasonable security measures to prevent unauthorized access, use, or disclosure. However, please note that data transmission over the internet is not completely secure, and we cannot guarantee the absolute security of information.

4. **Children's Privacy Protection**

${appName} APP is not intended for children under the age of eighteen. If you are a minor, please ensure that you have obtained the consent of your legal guardian before using this APP.

5. **Changes and Notifications**

We may update this Privacy Policy periodically based on business needs. We will publish updated versions of the Privacy Policy on this APP and notify you before they take effect. Please check regularly for the latest information.

6. **Contact Us**

If you have any questions, comments, feedback regarding this Privacy Policy, or if you need access, correction, or deletion of your personal information, please contact us:

- Email: ${email}
- Contact Form: ${contact}

Thank you for using ${appName} APP. We will continue to strive to protect your privacy and provide high-quality services.

(Note: This is a sample translation. Please modify and add according to the specific circumstances of your APP to ensure compliance and completeness of the Privacy Policy. If needed, consult with legal professionals for guidance.)


`;
