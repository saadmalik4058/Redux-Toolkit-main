function reverse(a) {
  let b = a.toString();
  console.log(b.split("").reverse().join(""));
}
reverse(321);

function alphabet(b) {
  let a = b.split("");
  console.log(a.sort().join(""));
}
alphabet("webmaster");

function capitalize(cap) {
  let a = cap.split(" ");
  return a.map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");
}
console.log(capitalize("the quick brown fox"));

function longest(a) {
  let b = a.split(" ");
  let fixed = 0;
  let arr = [];
  b.forEach((item) => {
    if (item.length > fixed) {
      arr.push(item);
      fixed = item.length;
    }
  });
  console.log(arr[arr.length - 1]);
}
longest("Web Development Tutorial");

function vowels(vow) {
  let vowels = ["a", "e", "i", "o", "u"];
  let a = vow.split("");
  let count = 0;
  a.forEach((item) => {
    if (vowels.includes(item)) {
      count++;
    }
  });
  console.log(count);
}
vowels("The quick brown fox");

function unique(a) {
  let u = a.split("");
  let uniq = Array.from(new Set(u)).join("");
  console.log(uniq);
}
unique("thequickbrownfoxjumpsoverthelazydog");

function occurence(occ) {
  let a = occ.split("");
  let obj = {};
  for (let item of a) {
    obj[item] = (obj[item] || 0) + 1;
  }
  console.log(obj);
}
occurence("saaad");

function hassad() {
  console.log(occurence.name);
}
hassad();
