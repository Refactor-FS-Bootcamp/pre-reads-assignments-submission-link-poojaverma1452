function countFrequency(str) {
    
    let check = false;
    for(let i=0; i<str.length; i++) {
        let count = 1;
       for(let k=i-1; k>=0; k--) {
        if(str.charAt(i) == str.charAt(k)) {
            check = true;
            break;
        }

       }
       if(check) {
        check = false;
        continue;
       }
       for(let j=i+1; j<str.length; j++) {
            if(str.charAt(i) == str.charAt(j)) {
                count++;
            }
        }
        console.log(str.charAt(i) + `=` +count);
    }
}
countFrequency("Pooja");