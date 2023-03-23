
const base64 = {
  utf8_to_b64(str :string) {
    return window.btoa(encodeURIComponent(str));
  },
  
  b64_to_utf8(str :string) {
    return decodeURIComponent(window.atob(str));
  }
}
export default base64;