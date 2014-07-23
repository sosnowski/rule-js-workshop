(function(){
	var form = document.getElementById('myForm'),
		list = form.getElementById('myList');

	form.addEventListener('submit', function(e){
		addElement(e.target.elements);
		e.preventDefault();
	}, false);

	function addElement (data) {
		var el = document.createElement('li'),
			nameEl = document.createElement('p'),
			emailEl = document.createElement('p'),
			descEl = document.createElement('p'),
			btnEl = document.createElement('button');

		nameEl.textContent = data.name.value;
		emailEl.textContent = data.email.value;
		descEl.innerHTML = data.description.value;
		btnEl.textContent = 'remove me';

		el.appendChild(nameEl);
		el.appendChild(emailEl);
		el.appendChild(descEl);
		el.appendChild(btnEl);

		list.appendChild(el);
	};

	list.addEventListener('click', function(e){
		e.target.parentElement.remove();
	}, false);

})();