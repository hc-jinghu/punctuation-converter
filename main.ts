import { Notice, Plugin } from 'obsidian';

interface Map {
	[key: string]:string
}

export default class Punconvert extends Plugin {

	async onload() {
		this.addCommand({
			id: "Convert",
			name: "Half to full width",
			editorCallback: (editor, view)=>{	

				// Matching puncuation
				const correction:Map = {
					",":"，",
					"?":"？",
					"!":"！",
					":":"：",
					";":"；",
					"(":"（",
					")":"）",
					"\"":"＂",
					"~":"～",
					".":"．",
					"...":"…",
				}
				let selectedText = editor.getSelection();

				// Regex search
				selectedText = selectedText.replace(/,|\?|!|:|;|\(|\)|"|~|((\.)\2{2,})|(?<=\D)(\.)/gm, match => correction[match]);
				
				editor.replaceSelection(selectedText); 

				new Notice("Balala Bao~");
			}
		});
	}

	onunload() {}
}