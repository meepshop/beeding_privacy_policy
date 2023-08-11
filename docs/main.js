class Main {
  constructor() {}

  appName = "Beeding";
  email = "develop@meepshop.com";
  contact = "https://beeding-store.meepshoper.com/";
  activeDate = "2023/08/01";
  twContent = '';
  enContent = '';

  initial = () => {
    
    this.twContent = generateTWContent(
      this.appName,
      this.email,
      this.contact,
      this.activeDate
    );
    this.enContent = generateENContent(
      this.appName,
      this.email,
      this.contact,
      this.activeDate
    );
    this.applyContent();
  }

  applyContent = () => {
    let locale = this.getLocale();
    let content = locale === "tw" ? this.twContent : this.enContent;
    let localeContent = locale === "tw" ? "English" : "繁體中文"; 
    let localeLink = locale === "tw" ? "?en" : "?tw";
    let localeTitle = locale === "tw" ? "English" : "繁體中文";

    document.title = "Beeding Ltd. " + (locale === "tw" ? "隱私權政策聲明" : "Privacy Policy Statement");
    document.getElementById("content").innerHTML = marked.parse(content);
    document.getElementById(
      "locale"
    ).innerHTML = `<a href="${localeLink}">${localeContent}</a>`;
  }

  getLocale = () => {
    let locale = 'tw';

    if(/en/.test(window.location.search)){
        locale = 'en';
    }

    return locale;
  }
}

new Main().initial();
