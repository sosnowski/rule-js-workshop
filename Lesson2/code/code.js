(function () {
	var list = document.querySelector('ul');
	
	list.addEventListener('click', function (e) {
		var target = e.target, contentId, content, lastActive;
		
		if (target.tagName.toLowerCase() === 'li') {
			contentId = target.getAttribute('data-target');
			
			document.querySelector('div.active').classList.remove('active');
			document.querySelector('#' + contentId).classList.add('active');
			
			lastActive = document.querySelector('li.active');
			if (lastActive !== null) {
				someVar = 2;
				lastActive.classList.remove('active');
			}
			target.classList.add('active');
		}
	});
}());