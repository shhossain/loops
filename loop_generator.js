class random{
	static randint(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	static choice(arr){
		let len = arr.length;
		let c = this.randint(0,len-1);
		return arr[c];
	}
}

// let random = new random()


String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

let smaller_than = ["<","<="];
let greater_than = [">",">="];


function get_random(){
	return random.randint(-100,100);
}

function get_update_val(){
	u = random.randint(-5,5)
	if (u == 0) {return get_update_val()}
	else {return u}
}


function get_loops() {

let initial_value = get_random();
let update_value = get_update_val();

let c = 10*update_value;
let condition;
if (update_value>0){
	let n = initial_value + random.randint(c,c+10);
	let a = random.choice(smaller_than);
	// console.log(n,a);
	condition = "i {} {}".format(a,n);
}
else{
	let n = initial_value - random.randint(c,c+10);
	let a = random.choice(greater_than);
	// console.log(n,a);
	condition = "i {} <text class='link-primary'>{}</text>".format(a,n);
}

let initial = "<text class='link-info'>int</text> i = <text class='link-primary'>{}</text>".format(initial_value);
let update = "i = i {} <text class='link-primary'>{}</text>";

if (update_value>0){
	update = update.format('+',update_value);
}
else if (update_value<0){
	update = update.format('',update_value);
}

// console.log('con',condition);

for_loop = "\n<text class='link-danger'>for </text>({};{};{})<br>".format(initial,condition,update) + "{\n<br><text class='link-info'>printf</text>(\"<text class='link-primary'>%d\\t</text>\",i);\n<br>}";
while_loop = "\n{};<br>\n<text class='link-danger'>while </text>({})".format(initial,condition)+"<br>{\n\n<br><text class='link-info'>printf</text>(\"<text class='link-primary'>%d\\t</text>\",i);\n"+"<br>{};\n".format(update)+"<br>}";
do_while_loop = "\n{};<br>\n".format(initial)+"<text class='link-danger'>do </text>\n<br>{\n\n<br><text class='link-info'>printf</text>(\"<text class='link-primary'>%d\\t</text>\",i);<br>\n"+"\n{};\n<br>".format(update)+"}"+"<text class='link-danger'>while </text>({});".format(condition);

return ['<text link-secondary>//for loop</text><br>'+for_loop,'<text link-secondary>//while loop</text><br>'+while_loop,'<text link-secondary>//do while loop</text><br>'+do_while_loop];

}


const count = document.querySelector('#ct');
const btn = document.querySelector('#btn');
const content = document.querySelector('#content')

// console.log(btn,count);
btn.addEventListener('click',create_loop);

function create_loop() {

	$('footer').remove();
	// console.log(position);

	let many = parseInt(count.value);
	count.value = null;
	$(content).empty();

	for (let i=1;i<=many;i++){
		let loops = get_loops(); 
		// console.log('loops',loops);
		loops.forEach((item,index)=>{
			// content.append('\n',item);

			$('#content').append(`<text link-secondary>//${i}</text><br><div>${item}</div><br>`);
			// content.appendChild();

		});
	}



}


