function openFormAuth() {
    document.getElementById("FormAuth").style.cssText= `
    display: flex;
    justify-content: center;
    align-items: center;`
      document.getElementById("BLurBackground").style.cssText= `
      filter: blur(5px);`
}
function closeFormAuth() {
       document.getElementById("FormAuth").style.display = "none";
       document.getElementById("BLurBackground").style.cssText= `
       filter: blur(0px);`
       }

  const q = decodeURIComponent(location.search.substr(1)).split('&');
  let login = "Login=123";
  let pass = "Password=123";
if ((q[0] == login) && (q[1] == pass)) {
 document.getElementById("MenuFormFlex").style.cssText= `
  display: flex;`;
} else {
  document.getElementById("MenuFormFlex").style.cssText= `
  display: none;`;
}
