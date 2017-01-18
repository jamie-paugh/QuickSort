$(document).ready(function(){

document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	const w = $("#canvas").width();
	const h = $("#canvas").height();
	var mx, my;

	const bodyColor = "#292e37";;
  const trimColor = "#f5f5dc";;

  var numbers = [];

	var timer = 0;

	const amountOfValues = 1000000; //Number of values to push into
	const rangeOfValues = 1000000000;


    ctx.fillStyle = bodyColor;
    ctx.fillRect(0, 0, w, h);

		function timeTaker(){
			timer++;
		}

    //QuickSort Begins
    for (var g = 0; g < amountOfValues; g++){
        numbers[g] = Math.floor(Math.random() * rangeOfValues);
        ctx.fillStyle = trimColor;
        ctx.fillText(numbers[g], 20, 50 + g * 15)
    }

    function swap(numbers, firstIndex, secondIndex){ //Swaps two array indexes
        var temp = numbers[firstIndex]; //Stores firstIndex in a temporar array
        numbers[firstIndex] = numbers[secondIndex]; //Replaces firstIndex with secondIndex
        numbers[secondIndex] = temp; //Replaces secondIndex with temp; temp is the original firstIndex
    }

    function partition(numbers, left, right){
        var pivot = numbers[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        while (i <= j){
            while (numbers[i] < pivot)
            {
                i++;
            }
            while (numbers[j] > pivot)
            {
                j--;
            }
            if (i <= j)
            {
                swap(numbers, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    function quickSort(numbers, left, right){



        var index;
        if (numbers.length > 1){
            left = typeof left != "number" ? 0 : left;
            right = typeof right != "number" ? numbers.length - 1 : right;
            index = partition(numbers, left, right);
            if (left < index - 1)
            {
                quickSort(numbers, left, index - 1);
            }
            if (index < right)
            {
                quickSort(numbers, index, right);
            }
        }
        return numbers;
    }
		setInterval(function(){ timeTaker();}, 1);
		var result = quickSort(numbers);

    ctx.fillStyle = trimColor;
		ctx.fillText(timer, 100,100);
		alert(timer);
    ctx.fillText(result, 20, 20);
clearInterval();
})
