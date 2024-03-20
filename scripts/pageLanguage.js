// Enum like variable
const pageLanguage = Object.freeze({
	EN: "en",
	PL: "pl"
});

// Global variable of page language
let currentLanguageOfPage = pageLanguage.EN;

// Handling event of changing switch state
$(document).on('change', '.switch input:checked', function() {
	let newlyChecked = $(this).val();
	if(newlyChecked !== currentLanguageOfPage)
	{
		changeLanguageOfPage(currentLanguageOfPage, newlyChecked);
	}
});

// Changing language of page
function changeLanguageOfPage( fromLanguage, toLanguage ) {
	changeLinksInButtons(fromLanguage, toLanguage);
	changeCaptionsOnButtons(fromLanguage, toLanguage);
	currentLanguageOfPage = toLanguage;
};

function changeLinksInButtons(fromLanguage, toLanguage) {
    $('button').each(function() {
        let element = $(this);
        let filePath = element.data("file");
        let newFilePath = filePath.replace("/" + fromLanguage + "/", "/" + toLanguage + "/");
        element.data("file", newFilePath);
    });
};

function changeCaptionsOnButtons(fromLanguage, toLanguage)
{
};
