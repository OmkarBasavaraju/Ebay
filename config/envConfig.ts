class EnvConfig {
    private environmentUrl = "https://www.ebay.com.au/";
  
    get getEnvironmentUrl() {
      return this.environmentUrl;
    }
  }
  export default new EnvConfig();