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
	changeCaptionsOnButtons(toLanguage);
	currentLanguageOfPage = toLanguage;
};

function changeLinksInButtons(fromLanguage, toLanguage) {
    $('button').each(function() {
        let filePath = $(this).data("file");
        let newFilePath = filePath.replace("/" + fromLanguage + "/", "/" + toLanguage + "/");
		$(this).data("file", newFilePath);
    });
};

async function changeCaptionsOnButtons(toLanguage) {
	let json = await readJsonFile("lang/" + toLanguage + ".json");
	changeCaptions(json);
};

async function readJsonFile(pathToFile) {
	try {
		let jsonFile = await fetch(pathToFile);
		let json = await jsonFile.json();
		return json;
	} catch (error) {
		console.log("Fail to read  or parse json file from path:" + pathToFile, error);
		throw error;
	}
};

function changeCaptions(json)
{
	$('button').each(function() {
		let id = $(this).attr('id');
		if(json.hasOwnProperty(id)) {
			$(this).text(json[id]);
		}
	})
};
