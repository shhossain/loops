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


function get_loops() {

let initial_value = get_random();

function get_con_val(){
	let con_val = random.randint(-100,100)
	let diff = Math.abs(initial_value - con_val)

	if (diff<10){
		return get_con_val()
	}
	else{
		return con_val
	}
}

	let con_value = get_con_val()

	let update_value = Math.floor(Math.abs(initial_value - con_value)/10)
	let sign;
	let sign2;
	if (initial_value<con_value){
		sign = random.choice(smaller_than)
		sign2 = '+'
	}
	else{
		sign = random.choice(greater_than)
		sign2 = '-'
	}

	let condition = "i {}<text class='link-primary'>{}</text>".format(sign,con_value);


let initial = "<text class='link-info'>int</text> i = <text class='link-primary'>{}</text>".format(initial_value);
let update = "i = i {} <text class='link-primary'>{}</text>".format(sign2,update_value)

// console.log('con',condition);

for_loop = "\n<text class='link-danger'>for </text>({};{};{})<br>".format(initial,condition,update) + "{\n<br><text class='link-info'>printf</text>(\"<text class='link-primary'>%d\\t</text>\",i);\n<br>}";
while_loop = "\n{};<br>\n<text class='link-danger'>while </text>({})".format(initial,condition)+"<br>{\n\n<br><text class='link-info'>printf</text>(\"<text class='link-primary'>%d\\t</text>\",i);\n"+"<br>{};\n".format(update)+"<br>}";
do_while_loop = "\n{};<br>\n".format(initial)+"<text class='link-danger'>do </text>\n<br>{\n\n<br><text class='link-info'>printf</text>(\"<text class='link-primary'>%d\\t</text>\",i);<br>\n"+"\n{};\n<br>".format(update)+"}"+"<text class='link-danger'>while </text>({});".format(condition);

return ['<text link-secondary>//for loop</text><br>'+for_loop,'<text link-secondary>//while loop</text><br>'+while_loop,'<text link-secondary>//do while loop</text><br>'+do_while_loop];

}


const count = document.querySelector('#ct');
const btn = document.querySelector('#btn');
const content = document.querySelector('#content')

let all_loops = ""

// console.log(btn,count);
btn.addEventListener('click',create_loop);
$(count).on('keypress',e=>e.which==13?create_loop():null)

$('#new-file').click(create_file)

function create_file(){
	let top_code = `<text class="link-danger">#include</text> 
	<text class="link-warning">&lt;stdio.h&gt;</text><br>
	<br><text class="link-primary">int </text><text class="link-success">main</text>()<br>
	{ <br>{}<br>{}<br>  <text class="link-danger">return </text><text class="link-primary">0;</text><br>}`

	let init = "<text class='link-primary'>int</text> i;";
	top_code = top_code.format(init,all_loops);

	$('#content').html(top_code);
	$("body").animate({scrollTop: $(window).scrollTop(0)}, 500);



}


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
			let a = `<text link-secondary>//${i}</text><br><div>${item}</div><br>`;
			$('#content').append(a);
			all_loops+=a;
			// content.appendChild();

		});
	}
	// console.log('inline');
	// $(document).find('#new-file').css('display','inline');



}


