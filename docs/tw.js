const generateTWContent = (appName, email, contact, activeDate) =>
  `
# <img src='logo.svg' /> **隱私權政策聲明**

生效日期：${activeDate}

歡迎使用 ${appName} APP（以下簡稱「我們」、「本APP」）。我們非常重視您的隱私權保護，並承諾採取一切必要措施來保護您的個人資訊。
請仔細閱讀以下隱私權政策，以瞭解我們如何收集、使用、處理及保護您的資訊。

1. **資訊收集與使用**

當您使用 ${appName} APP，我們可能會收集以下類型的資訊：

- **裝置資訊：** 我們可能會收集與您的設備相關的資訊，如設備型號、作業系統版本等，以優化我們的服務並提供技術支援。

- **使用紀錄與行為資訊：** 我們可能會記錄您使用 ${appName} APP 的方式，包括您與其他用戶之間的互動、發送的訊息內容等，以優化我們的服務並改善用戶體驗。

2. **資訊分享與披露**

我們不會未經您的同意，將您的個人資訊分享給第三方，除非：

- 根據適用的法律法規要求
- 在法律許可的範圍內，為保護我們的權益或財產
- 在匿名化或彙總形式下，與合作夥伴分享用於統計分析或其他合法目的

3. **資訊保護與安全**

我們致力於保護您的個人資訊安全。我們會採取合理的安全措施來防止未經授權的訪問、使用或洩露。然而，請注意，網際網路上的資料傳輸並非完全安全，我們無法保證資訊的絕對安全性。

4. **兒童隱私保護**

${appName} APP 不適用於未滿十八歲的兒童。如果您是未成年人，在使用本APP之前，請確保已獲得法定監護人的同意。

5. **變更與通知**

我們可能會根據業務需要不定期地更新本隱私權政策。我們將在本APP上發佈更新版本的隱私權政策，並在生效前通知您。請定期查閱以獲取最新資訊。

6. **聯繫我們**

如果您對本隱私權政策有任何疑問、意見或反饋，或需要訪問、更正、刪除您的個人資訊，請聯繫我們：

- 電子郵件：${email}
- 聯絡表單：${contact}

謝謝您使用 ${appName} APP。我們將持續努力保護您的隱私權並提供優質的服務。
`;