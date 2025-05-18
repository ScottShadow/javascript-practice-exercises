export function max(a,b){
  a = parseInt(a);
  b = parseInt(b);
  if (a>b) return a;
  return b;
}

console.log(max(6,"3"));
