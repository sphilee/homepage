/* Privacy and Term Modal Controller */
(function() {
	var state = "";
	var elModal = document.querySelector("#myModal");
	var elModalBody = document.querySelector("#myModal .modal-body");
	var elModalLabel = document.querySelector("#myModalLabel");
	var elPrivacy = document.querySelector("#codesquad-privacy");
	var elTerm = document.querySelector("#codesquad-term");
	var modalCloseBtn = document.querySelector(".modal-footer button");
	var modalHeaderBtn = document.querySelector(".modal-header button");

	function reqListener() {
		elModalBody.innerHTML = this.responseText;
		elModal.className += " in";
		elModal.style.display = "block";
		document.body.className += " modal-open";
	}

	function runXHR(url) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", url);
		oReq.send();
	}

	//NAVIGATION
	var path = location.pathname;
	var q = "a[href^='"+ path + "']";
	document.querySelector(q).className = "selected-nav-menu";

	//PRIVACE AND TERM Handler on Footer.
	elPrivacy.addEventListener("click", function(e) {
		e.preventDefault();
		//if (state === "privacy") return;
		elModalLabel.innerText = this.textContent;
		runXHR("../../../data/privacy.htm");
		state = "privacy";
	});

	elTerm.addEventListener("click", function(e) {
		e.preventDefault();
		//if (state === "term") return;
		elModalLabel.innerText = this.textContent;
		runXHR("../data/term.htm");
		state = "term";
	});

	function closeModalHandler(e) {
		elModal.className = elModal.className.replace(/in/g, "");
		document.body.className = document.body.className.replace(/modal\-open/g, "");
		elModal.style.display="none";
	}

	modalCloseBtn.addEventListener("click", closeModalHandler);
	modalHeaderBtn.addEventListener("click", closeModalHandler);


})();
