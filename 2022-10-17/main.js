/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:*/

function domainName(url){
  return url.replace('http://',"").replace('https://','').replace('www.','').split('.')[0]
}