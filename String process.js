// A function that displays an array of names, emails and phone numbers from the variable text.
var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`
function nums(text){
var num = text.match(/\+.*\d/g);

console.log(num)
}
nums(text);

function names(text){
  var name = text.match(/\w.*</ig);
  var names = [];
  name.forEach(element =>{
    elem = element.replace(/</g, '').trim();
    names.push(elem);
  }
  )
  console.log(names);
}
names(text);

function emails(text){
  var mails = text.match(/<.*>/g);
  var emails = [];
  mails.forEach(element => {
    elem = element.replace(/<|>/g, '');
    emails.push(elem);
  }
  );
  console.log(emails)
}
emails(text);