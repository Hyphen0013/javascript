// merge two string with alternate index
let arr = ['hyphen', 'Rocky', 'call'];
let str1 = '';
let str2 = '';

str1 += arr[0];
str2 += arr[2];

function merge (str1, str2) {

 let i ,l = Math.min(str1.length, str2.length),
        temp = '';

    for(i = 0; i < l; i++) {
        temp += str1[i] + str2[i];
    }

    return temp + str1.slice(i) + str2.slice(i);

}
merge(str1, str2)
