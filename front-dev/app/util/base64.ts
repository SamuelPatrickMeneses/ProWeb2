
const base64 = {
  utf8_to_b64(str :string) {
    return window.btoa(str);
  },
  
  b64_to_utf8(str :string) {
    return window.atob(str);
  }
}
export default base64;