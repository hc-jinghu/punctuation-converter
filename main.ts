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
				selectedText = selectedText.replace(/,|\?|!|:|;|\(|\)|"|~|((\.)\2{2,})|(?<=\D)(\.)/gm, match => correction[match]);
				editor.replaceSelection(selectedText); 

				new Notice("Balala Bao~");
			}
		});
	}

	onunload() {}
}